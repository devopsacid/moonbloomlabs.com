#!/usr/bin/env bash
# Deploy a built static site (dist/) to Websupport.sk over SFTP.
#
# Usage: scripts/deploy-websupport.sh [--dry-run] [--config] [--delete-placeholder] [DIST_DIR]
#
#   DIST_DIR              built site, default: ./dist
#   --dry-run             list what would be uploaded; no login, no password read
#   --config              also upload $CONFIG_PHP (untracked local file, e.g. server/config.php)
#                         to ~/moonbloomlabs.com/config.php (outside the docroot), mode 600
#   --delete-placeholder  back up remote web/index.php into ./backup/ and delete it
#
# Credentials: `pass show www.moonbloomlabs.com` (line 1) -> mode-0600 temp netrc
# referenced from a mode-0600 curl config. The password is never echoed, never on
# a command line, and the temp files are removed on exit.
#
# All uploads run in ONE curl invocation (one SFTP login): site files, then
# config.php, then the optional placeholder delete, and .htaccess LAST.
#
# Path notes (SFTP account is chrooted to its home):
#   * curl URLs use  sftp://HOST/~/moonbloomlabs.com/web/...   ("/~/" = home dir)
#   * curl -Q / quote commands (rm, chmod) take paths as the SFTP server sees them,
#     i.e. relative to the chroot root:  /moonbloomlabs.com/web/index.php
set -euo pipefail

SFTP_HOST="ftp.moonbloomlabs.com"
SFTP_USER="web.moonbloomlabs.com"
PASS_ENTRY="www.moonbloomlabs.com"
REMOTE_BASE="moonbloomlabs.com"                 # relative to home
SITE_URL="moonbloomlabs.com"
URL_BASE="sftp://${SFTP_HOST}/~/${REMOTE_BASE}"
CHROOT_BASE="/${REMOTE_BASE}"                   # as seen by quote commands
CONFIG_MODE="${CONFIG_MODE:-600}"

log() { printf '%s %-7s %s\n' "$(date +%H:%M:%S)" "$1" "$2" >&2; }
info() { log INFO "$1"; }
warn() { log WARNING "$1"; }
err() { log ERROR "$1"; }
die() { err "$1"; exit 1; }

dry_run=0
with_config=0
delete_placeholder=0
dist="dist"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --dry-run) dry_run=1 ;;
    --config) with_config=1 ;;
    --delete-placeholder) delete_placeholder=1 ;;
    -h|--help) sed -n '2,20p' "$0" >&2; exit 0 ;;
    -*) die "unknown option: $1" ;;
    *) dist="$1" ;;
  esac
  shift
done

[[ -d "$dist" ]] || die "dist directory not found: $dist (build first)"
dist="${dist%/}"
[[ -f "$dist/index.html" ]] || die "$dist/index.html missing - is this a built site?"
[[ -f "$dist/.htaccess" ]] || warn "$dist/.htaccess missing - redirects and security headers will not be deployed"
[[ -f "$dist/api/contact.php" ]] || warn "$dist/api/contact.php missing - contact form endpoint will not be deployed"

if (( with_config )); then
  [[ -n "${CONFIG_PHP:-}" ]] || die "--config needs CONFIG_PHP=/path/to/config.php"
  [[ -f "$CONFIG_PHP" ]] || die "CONFIG_PHP not found: $CONFIG_PHP"
fi

# Percent-encode a relative path for use in a URL (keeps '/').
urlencode() {
  local s="$1" out="" c i
  for (( i = 0; i < ${#s}; i++ )); do
    c="${s:i:1}"
    case "$c" in
      [a-zA-Z0-9._~/-]) out+="$c" ;;
      *) out+="$(printf '%%%02X' "'$c")" ;;
    esac
  done
  printf '%s' "$out"
}

# Escape a value for a double-quoted curl config / netrc string.
cfgq() {
  local s="$1"
  s="${s//\\/\\\\}"
  s="${s//\"/\\\"}"
  printf '"%s"' "$s"
}

# Collect files (NUL-safe), .htaccess excluded, sorted; it is appended last.
files=()
while IFS= read -r -d '' f; do
  rel="${f#"$dist"/}"
  case "$rel" in
    .htaccess|.DS_Store|*/.DS_Store) continue ;;
  esac
  [[ "$rel" == *$'\n'* ]] && die "refusing file name with newline: $rel"
  files+=("$rel")
done < <(find "$dist" -type f -print0 | LC_ALL=C sort -z)

has_htaccess=0
[[ -f "$dist/.htaccess" ]] && has_htaccess=1

info "dist=$dist files=${#files[@]} htaccess=$has_htaccess config=$with_config delete_placeholder=$delete_placeholder"

if (( dry_run )); then
  info "DRY RUN - nothing will be uploaded"
  for rel in "${files[@]}"; do
    printf 'upload  %s -> %s/web/%s\n' "$dist/$rel" "$URL_BASE" "$rel"
  done
  (( with_config )) && printf 'upload  %s -> %s/config.php (chmod %s)\n' "$CONFIG_PHP" "$URL_BASE" "$CONFIG_MODE"
  (( delete_placeholder )) && printf 'backup+delete  %s/web/index.php (remote rm %s/web/index.php)\n' "$URL_BASE" "$CHROOT_BASE"
  (( has_htaccess )) && printf 'upload  %s -> %s/web/.htaccess (last)\n' "$dist/.htaccess" "$URL_BASE"
  exit 0
fi

command -v curl >/dev/null || die "curl not found"
command -v pass >/dev/null || die "pass not found"

# --- credentials -> temp files, removed on exit -----------------------------
umask 077
tmpdir="$(mktemp -d)"
cleanup() { rm -rf "$tmpdir"; }
trap cleanup EXIT
trap 'exit 130' INT TERM

netrc="$tmpdir/netrc"
curlcfg="$tmpdir/curl.cfg"

password=""
IFS= read -r password < <(pass show "$PASS_ENTRY" 2>/dev/null) || true
[[ -n "$password" ]] || die "could not read password from 'pass show $PASS_ENTRY'"
printf 'machine %s login %s password %s\n' "$SFTP_HOST" "$SFTP_USER" "$(cfgq "$password")" > "$netrc"
unset password

# Common options emitted for every curl config group.
common_opts() {
  printf 'netrc-file = %s\n' "$(cfgq "$netrc")"
  printf 'ftp-create-dirs\nshow-error\nsilent\nfail\nconnect-timeout = 20\nretry = 2\n'
}

group=0
next_group() {
  (( group > 0 )) && printf 'next\n'
  group=$((group + 1))
  common_opts
}

# --- optional: back up and plan removal of the placeholder -------------------
if (( delete_placeholder )); then
  backup_dir="backup/websupport-$(date +%Y%m%d-%H%M%S)"
  mkdir -p "$backup_dir"
  backup_cfg="$tmpdir/backup.cfg"
  {
    common_opts
    printf 'url = %s\noutput = %s\n' "$(cfgq "$URL_BASE/web/index.php")" "$(cfgq "$backup_dir/index.php")"
  } > "$backup_cfg"
  rc=0
  curl -K "$backup_cfg" || rc=$?
  if (( rc == 0 )); then
    info "backed up remote web/index.php to $backup_dir/index.php"
  elif (( rc == 78 )); then
    warn "remote web/index.php does not exist - nothing to delete"
    delete_placeholder=0
  else
    die "backup of remote index.php failed (curl exit $rc); not deleting anything"
  fi
fi

# --- build the single curl config ------------------------------------------
{
  next_group
  for rel in "${files[@]}"; do
    printf 'upload-file = %s\nurl = %s\n' "$(cfgq "$dist/$rel")" "$(cfgq "$URL_BASE/web/$(urlencode "$rel")")"
  done

  if (( with_config )); then
    next_group
    printf 'upload-file = %s\nurl = %s\n' "$(cfgq "$CONFIG_PHP")" "$(cfgq "$URL_BASE/config.php")"
    # chmod via a listing transfer whose pre-transfer quote runs after the upload above.
    next_group
    printf 'list-only\noutput = /dev/null\nurl = %s\n' "$(cfgq "$URL_BASE/web/")"
    printf 'quote = %s\n' "$(cfgq "chmod $CONFIG_MODE $CHROOT_BASE/config.php")"
  fi

  if (( delete_placeholder )); then
    next_group
    printf 'list-only\noutput = /dev/null\nurl = %s\n' "$(cfgq "$URL_BASE/web/")"
    printf 'quote = %s\n' "$(cfgq "rm $CHROOT_BASE/web/index.php")"
  fi

  if (( has_htaccess )); then
    next_group
    printf 'upload-file = %s\nurl = %s\n' "$(cfgq "$dist/.htaccess")" "$(cfgq "$URL_BASE/web/.htaccess")"
  fi
} > "$curlcfg"

info "uploading to ${SFTP_HOST} (single SFTP session)"
rc=0
curl -K "$curlcfg" || rc=$?
(( rc == 0 )) || die "upload failed (curl exit $rc)"
info "upload finished: ${#files[@]} site files$( (( with_config )) && echo ' + config.php')$( (( has_htaccess )) && echo ' + .htaccess')"

# --- verification -----------------------------------------------------------
verify() {
  local url="$1" body code title location
  body="$tmpdir/body"
  code="$(curl -sS -o "$body" -w '%{http_code}' --max-time 20 "$url" 2>/dev/null || echo 000)"
  title="$(grep -o -i -m1 '<title>[^<]*</title>' "$body" 2>/dev/null | sed -E 's/<[^>]*>//g' | head -n1 || true)"
  location="$(curl -sS -o /dev/null -w '%{redirect_url}' --max-time 20 "$url" 2>/dev/null || true)"
  info "GET $url -> $code title='${title:-}' ${location:+redirect=$location}"
  [[ "$code" == "000" ]] && warn "no response from $url"
  printf '%s' "$code" > "$tmpdir/last_code"
}

verify "https://${SITE_URL}/"
[[ "$(cat "$tmpdir/last_code")" == "200" ]] || warn "https://${SITE_URL}/ did not return 200"
if grep -qi 'Websupport' "$tmpdir/body" 2>/dev/null && ! grep -qi 'moonbloom' "$tmpdir/body"; then
  warn "page looks like the Websupport placeholder - use --delete-placeholder"
fi
verify "http://${SITE_URL}/"

code="$(curl -sS -o /dev/null -w '%{http_code}' --max-time 20 "https://${SITE_URL}/api/contact.php" 2>/dev/null || echo 000)"
if [[ "$code" == "405" ]]; then
  info "GET https://${SITE_URL}/api/contact.php -> 405 (expected, POST only)"
else
  warn "GET https://${SITE_URL}/api/contact.php -> $code (expected 405)"
fi
info "done"
