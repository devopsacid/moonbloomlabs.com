# Server-side pieces

Static site on Websupport.sk (Apache behind openresty, PHP-FPM). Only two things run server-side.

| File | Deployed to | Purpose |
|------|-------------|---------|
| `public/api/contact.php` | `~/moonbloomlabs.com/web/api/contact.php` | Contact form handler (POST only) |
| `public/.htaccess` | `~/moonbloomlabs.com/web/.htaccess` | HTTPS/www redirects, security headers, caching |
| `server/config.php` (untracked) | `~/moonbloomlabs.com/config.php` | Recipient, sender, Turnstile secret |

`contact.php` finds the config with `dirname(__DIR__, 2) . '/config.php'`:
`web/api/contact.php` -> `web/` -> `moonbloomlabs.com/`. The config is outside the docroot and is never served.

## Config

```sh
cp server/config.example.php server/config.php   # git-ignored; edit `to`
CONFIG_PHP=server/config.php scripts/deploy-websupport.sh --config dist
```

Keys: `to`, `from`, `turnstile_secret` (empty = off), `rate_limit_per_hour`; optional `rate_dir`, `min_seconds`, `paths`.
If the file is missing or invalid the endpoint answers `500` / `error=config` and logs an ERROR.

## Form contract (frontend)

POST `application/x-www-form-urlencoded` to `/api/contact.php`:

| Field | Rule |
|-------|------|
| `name` | 1-100 chars |
| `email` | valid address |
| `company` | optional, <= 150 chars |
| `idea` | 10-5000 chars |
| `lang` | `en`, `cs`, `sk`, `de` or `es` (anything else falls back to `en`) |
| `website` | honeypot, must stay empty (hidden from users) |
| `ts` | optional; page-load time (epoch s or ms). Rejected if submit is < 3 s later |
| `cf-turnstile-response` | required only when `turnstile_secret` is set |

Responses: with `Accept: application/json` -> `{"ok":true}` or `{"ok":false,"error":"<code>","fields":[...]}`.
Otherwise `303` to the thank-you page, errors to `<form page>?error=<code>#form`:

| lang | thanks | form |
|------|--------|------|
| en | `/thanks/` | `/contact/` |
| cs | `/cs/dekujeme/` | `/cs/kontakt/` |
| sk | `/sk/dakujeme/` | `/sk/kontakt/` |
| de | `/de/danke/` | `/de/kontakt/` |
| es | `/es/gracias/` | `/es/contacto/` |

Codes: `validation` (422, with `fields`), `captcha` (403), `rate` (429), `toofast` (400), `send` (500), `config` (500). Non-POST -> 405.

## Notes

- Rate limit: per IP (first `X-Forwarded-For` hop, else `X-Real-IP`, else `REMOTE_ADDR`), state in small files under `sys_get_temp_dir()/moonbloom-rate`. Best effort: the forwarded header is only as trustworthy as openresty makes it.
- Logs (`error_log`) are prefixed `[moonbloom-contact] INFO|WARNING|ERROR`; they never contain the message body or a full email address.
- `.htaccess` never uses `%{HTTPS}` (TLS ends at openresty, it would loop); it keys off `X-Forwarded-Proto`.
- CSP forbids inline scripts: keep all JS as bundled external files.

## Tests

`tests/php/run.sh` runs `tests/php/contact_test.php` in a `php:8.2-cli` container (no local PHP needed).
