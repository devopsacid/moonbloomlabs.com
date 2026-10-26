---
name: deploying-moonbloomlabs
description: Use when deploying, redeploying, verifying or rolling back moonbloomlabs.com on Websupport.sk hosting, or when the live site shows the Websupport placeholder, a 404, stale content, a certificate error or a missing contact endpoint after a deploy. Triggers on "deploy moonbloomlabs", "push the site live", "roll back the site", "why is moonbloomlabs.com still showing the old page".
---

# Deploying moonbloomlabs.com (Websupport.sk)

## Overview

The site is an Astro static build (`dist/`) plus one PHP handler (`/api/contact.php`), uploaded over SFTP to Websupport hosting (Apache behind openresty, PHP-FPM, `.htaccess` honoured). **Success means the public URL serves our `<title>` over valid HTTPS. A finished upload does not prove it.** The general Websupport rules live in the global skill `deploying-websupport-site`; this file holds the project specifics.

## Quick reference

| Item                     | Value                                                                                        |
| ------------------------ | -------------------------------------------------------------------------------------------- |
| Upload host              | `ftp.moonbloomlabs.com`, SFTP port 22 (mod_sftp)                                             |
| Host key                 | ED25519 `SHA256:TOrowKXddlznHLJ/cqXuGxcK8azFsE7dilCbrrvwZDs`, pinned in `~/.ssh/known_hosts` |
| SFTP login               | `web.moonbloomlabs.com` (not the pass entry name)                                            |
| Password                 | `pass show www.moonbloomlabs.com`, line 1                                                    |
| Docroot                  | `moonbloomlabs.com/web/` (chrooted home: `/` = `~`)                                          |
| Config (outside docroot) | `moonbloomlabs.com/config.php`, from `server/config.example.php`, never committed            |
| Placeholder              | Websupport `web/index.php` beats `index.html`; remove it on first deploy                     |
| DNS                      | apex, `www`, `ftp` → `37.9.175.196`                                                          |
| Deploy script            | `scripts/deploy-websupport.sh [--dry-run] [--config] [--delete-placeholder] [dist]`          |

Run `scripts/deploy-websupport.sh --help` for the current flags. The script may have changed since this file was written.

## When to use

- First deploy, or any redeploy after changes to pages, assets, `.htaccess` or `server/`.
- Verifying the live site, or rolling back.
- **Not** for DNS, domain attachment, certificates or Websupport admin changes. Those belong to the site owner.

## Pre-flight (all must pass before upload)

- [ ] On `main`; `git status --short` shows nothing unreviewed. Stage explicit paths only, never `git add -A`.
- [ ] `npm ci && npm run lint && npm run check && npm run build` all green.
- [ ] `npm run placeholders` reviewed. No invented clients, testimonials, metrics or prices remain unmarked.
- [ ] `tests/php/run.sh` green if `server/` or `public/api/` changed (verify the command against `package.json`).
- [ ] `scripts/deploy-websupport.sh --dry-run dist` lists the expected files, `.htaccess` present, `api/contact.php` present.
- [ ] Backup the previous state (see Rollback) into `backup/<timestamp>/`. Confirm `backup/` is gitignored.
- [ ] Owner has said yes in chat for any production upload.

## Deploy steps

1. **Recon.** Record what each host serves now: `curl -s https://moonbloomlabs.com/ | grep -o '<title>[^<]*'`, same for `www.`.
2. **Pin the host key once.** `ssh-keygen -F ftp.moonbloomlabs.com >/dev/null` must succeed. Confirm the fingerprint matches the one above. Do not use `curl -k`.
3. **Config (first deploy or changed secrets only).** `CONFIG_PHP=server/config.php scripts/deploy-websupport.sh --config dist`. The file is uploaded with mode 600. Never print its contents.
4. **Placeholder (first deploy only).** Add `--delete-placeholder`. The script backs up `web/index.php` into `backup/websupport-<ts>/` before deleting it. If the backup fails, nothing is deleted.
5. **Upload.** `scripts/deploy-websupport.sh dist` (or with the flags above). One SFTP session; `.htaccess` goes last.
6. **Verify.** Follow the Verify section. Do not report success before it passes.

## Verify (every item)

- [ ] Homes return 200 with our `<title>`: `/`, `/cs/`, `/sk/`, `/de/`, `/es/`.
- [ ] Each thank-you page returns 200: `/thanks/`, `/cs/dekujeme/`, `/sk/dakujeme/`, `/de/danke/`, `/es/gracias/`.
- [ ] A missing path returns 404 with our 404 page, not the Websupport placeholder: `/does-not-exist/`.
- [ ] `https://www.moonbloomlabs.com/` redirects to the apex with a 301 or 308.
- [ ] `http://moonbloomlabs.com/` redirects to `https://`. Never add an `%{HTTPS}` rule; TLS ends at openresty, so such a rule loops.
- [ ] Certificate: `curl -sS -o /dev/null -w '%{http_code} %{ssl_verify_result}\n' https://moonbloomlabs.com/` gives `200 0`. A non-zero result means the Let's Encrypt cert is not yet enabled for the apex and `www`. The owner must enable it in the Websupport admin.
- [ ] Headers: `curl -sI https://moonbloomlabs.com/` includes `Content-Security-Policy`, `Strict-Transport-Security` and `X-Content-Type-Options`. Confirm the exact list against `dist/.htaccess`.
- [ ] Contact form smoke test: **only with the owner's explicit OK**, because it sends real email. Use a test message and confirm receipt.
- [ ] Any title that matches neither our page nor the placeholder means another site is served. Stop and ask.

## Rollback

- **Before every deploy**, keep the previous build: copy the last `dist/` to `backup/<timestamp>/`. Rebuild it from git if it was never saved.
- **Roll back:** `scripts/deploy-websupport.sh backup/<timestamp>/`, then run Verify again.
- **Stale files.** The script overwrites files and never deletes remote ones. A rollback restores the old files but leaves files the new build added. Remove them by hand after confirming the list, or tell the owner.
- **On a 5xx after upload:** remove `web/.htaccess` first, then re-run Verify. Delete it with an SFTP `rm /moonbloomlabs.com/web/.htaccess` quote using the same netrc method as the script. Never `echo` the password. If the 5xx persists, the PHP or config side is the cause: check `config.php` and `api/contact.php` next.

## Credentials (never on a command line)

- Read the password from `pass` only inside the script or with the netrc pattern: `printf 'machine %s login %s password %s\n' "$HOST" "$USER" "$(pass show www.moonbloomlabs.com | head -n1)" > "$NETRC"` with `NETRC` from `mktemp`, `chmod 600` first.
- Never `echo`, `cat`, `set -x` or pass the password as an argument. Remove the netrc when done.
- Never commit `server/config.php`, `backup/` or any `.netrc`.
- If the login fails, stop and ask the owner to confirm the username and password. Do not try variations. At most 6 login attempts per session.

## Common mistakes

- Reporting "deployed" after the upload finished while the URL still serves the placeholder.
- Using `pass show web.moonbloomlabs.com`. The entry is `www.moonbloomlabs.com`.
- Uploading to `web/` without `--delete-placeholder` on a first deploy. `index.php` hides `index.html`.
- Forgetting `--config` on the first deploy, so the form has no recipient and returns an error.
- Adding a `%{HTTPS}` redirect to `.htaccess`. It loops behind openresty.
- Treating `wrangler`-style or Cloudflare Pages steps as applicable here. This host is not Cloudflare Pages.

## Future: Cloudflare Pages migration

The PHP handler (`public/api/contact.php`, PHP mail) is the only server-side piece. A move to Cloudflare Pages would replace it with a Pages Function and a mail provider, which needs a new secret and a new deploy path. Until that is decided, this skill is authoritative. The Cloudflare Pages skill does not apply here.

## Learned on the first production deploy (2026-10-22)

- Command used: `CONFIG_PHP=server/config.php scripts/deploy-websupport.sh --delete-placeholder --config` (dist defaults to `./dist`). It took 2 SFTP logins (placeholder backup, then one upload session) and about 15 s for 144 files + `config.php` + `.htaccess`. The script ends with its own smoke check (home, http redirect, `GET /api/contact.php` = 405).
- Placeholder backup landed in `backup/websupport-<ts>/index.php`; the `dist/` rollback copy is `backup/dist-<ts>/`. `backup/` is gitignored.
- The certificate was already valid on the apex and `www` (`ssl_verify_result` 0), so no owner action was needed for TLS. Still check it each time.
- Verified live: all five homes, `/contact/`, a service page and thank-you pages return 200 with their own titles; a missing path and `/config.php` return 404 with our 404 page (config is outside the docroot); `http://`, `http://www.` and `https://www.` all 301 to `https://moonbloomlabs.com/`.
- Headers present: CSP, HSTS, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Frame-Options. `/_astro/*` gets `public, max-age=31536000, immutable`; HTML gets `no-cache`. gzip is on. `.htaccess` caused no 5xx.
- Sitemap is `/sitemap-index.xml` (no `/sitemap.xml`). OG images live at `/og/<lang>-<page>.png`.
- The contact form was not submitted (it sends real email); only the 405 on GET was checked.
