# Moonbloom Labs website

Static marketing site for https://moonbloomlabs.com. Astro 5 (static output) + Tailwind CSS 4 + TypeScript.
Five languages: English (`/`, default), Czech (`/cs/`), Slovak (`/sk/`), German (`/de/`), Spanish (`/es/`).
Hosted as plain files on Websupport.sk (Apache). The contact form posts to `public/api/contact.php`.

## Run and build

```sh
npm install
npm run dev          # http://localhost:4321 (form POST will not work without PHP)
npm run build        # astro build + scripts/postbuild.mjs (OG images) -> dist/
npm run preview      # serve dist/
npm run check        # astro check (TypeScript strict, all templates)
npm run lint         # eslint + prettier --check
npm run format       # prettier --write
npm run placeholders # list every visible [TODO: ...] (alias: npm run todos; TODO_STRICT=1 fails if any remain)
```

`dist/` is the whole site: upload its contents to the docroot (see `scripts/deploy-websupport.sh`
and `server/README.md`). `public/.htaccess` and `public/api/contact.php` are copied into `dist/` by the build.

Build rules the CSP depends on: there is no inline `<script>` in any page (only `type="application/ld+json"`
data blocks). Hoisted scripts are always emitted as external files (`vite.build.assetsInlineLimit: 0`).
Total first-party JS is about 3 kB (site menu script + contact form script, the latter only on contact pages).

## Where things live

| What                                                                   | Where                                                                                                                                                       |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Copy for every language (typed dictionaries, one file per locale)      | `src/i18n/en.ts`, `cs.ts`, `sk.ts`, `de.ts`, `es.ts`                                                                                                        |
| Dictionary type (a missing or extra key in any locale is a type error) | `src/i18n/dictionary.ts` (derived from `en.ts`)                                                                                                             |
| Routes and localized slugs (typed route map)                           | `src/i18n/routes.ts`                                                                                                                                        |
| Locales that are built                                                 | `src/i18n/active.ts`, `src/i18n/ready.ts`                                                                                                                   |
| Page templates                                                         | `src/views/*.astro`, routed by `src/pages/[...path].astro` and `src/pages/404.astro`                                                                        |
| Layout, header, footer, language switcher, SEO head                    | `src/layouts/Base.astro`, `src/components/nav/*`, `src/components/seo/Head.astro`                                                                           |
| JSON-LD builders                                                       | `src/lib/schema-org.ts`                                                                                                                                     |
| Illustrations (inline SVG)                                             | `src/components/art/*`                                                                                                                                      |
| Design tokens (colours, type, spacing)                                 | `src/styles/global.css` (`@theme`), component CSS in `src/styles/*.css`                                                                                     |
| Fonts (self-hosted woff2, latin + latin-ext)                           | `src/assets/fonts/`, `src/styles/fonts.css`                                                                                                                 |
| Client scripts                                                         | `src/scripts/site.ts`, `src/scripts/contact-form.ts`                                                                                                        |
| OG images, icons                                                       | `scripts/postbuild.mjs` (OG, per page and language), `scripts/generate-icons.mjs` (favicon.ico, apple-touch-icon, manifest icons from `public/favicon.svg`) |

### Editing content

Edit the strings in `src/i18n/<locale>.ts` directly. Strings support `[text](url)` links (internal
EN paths such as `/privacy/` are mapped to the page's own language), plain email addresses become `mailto:` links,
and `[TODO: ...]` renders as a dashed placeholder chip. The "Book a call" link is built from
`contact.talk.mailto_subject` and `BOOKING_EMAIL` in `src/config/site.ts`.

The dictionaries were imported from `docs/plan/copy.md` (EN, SK) and `docs/plan/copy-{cs,de,es}.md` by
`npm run import-copy`. Re-running it overwrites the `src/i18n/*.ts` files from the copy decks; after the first
import you can also edit the TypeScript files directly (then do not re-run it). A locale is only built when its
copy deck exists (`src/i18n/ready.ts`); `PUBLIC_ENABLE_ALL_LOCALES=1` builds all five for review.

Adding a page: add its key to `PAGE_KEYS` and `PAGE_PATHS` in `routes.ts`, its strings to every dictionary, and a view.

### Section colours

Night sections use `surface-night` / `surface-night-deep`, dawn sections `surface-dawn` / `surface-dawn-alt` /
`surface-sunrise` (defined in `src/styles/base.css`). Components read `--fg`, `--link`, `--focus`, `--btn-bg` from
the surface, so text always sits on a solid token colour. Contrast ratios are in `docs/plan/design.md`.

## Environment variables (build time, both optional)

| Variable                    | Effect                                                                                                                                                                                                                           |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `PUBLIC_TURNSTILE_SITEKEY`  | If set, the contact page renders the Cloudflare Turnstile widget and loads `challenges.cloudflare.com/turnstile/v0/api.js`. Unset: no widget, no script. The matching secret goes into `server/config.php` (`turnstile_secret`). |
| `PUBLIC_CF_ANALYTICS_TOKEN` | If set, every page loads the Cloudflare Web Analytics beacon (`static.cloudflareinsights.com`). Unset: no beacon.                                                                                                                |
| `PUBLIC_ENABLE_ALL_LOCALES` | Build locales even if their copy deck is missing (review builds).                                                                                                                                                                |

Set them in the shell (`PUBLIC_TURNSTILE_SITEKEY=... npm run build`) or in a git-ignored `.env`. See `.env.example`.

## Contact form

`<form id="form" method="post" action="/api/contact.php">` with `name`, `email`, `company`, `idea` (10-5000 chars),
`lang` (en|cs|sk|de|es, default = page language), honeypot `website`, hidden `ts` (seconds, filled by JS).
It works without JavaScript (server answers with a 303 to `/thanks/` or `/contact/?error=<code>#form`, and the
localized equivalents). With JavaScript the script validates inline, shows an error summary (also from
`?error=` / `&fields=`), and submits with `fetch` and `Accept: application/json`. Error codes handled:
`validation`, `captcha`, `rate`, `toofast`, `send`, `config`; unknown codes show the generic failure message.
Thank-you pages are `noindex`. Backend: `public/api/contact.php`, notes in `server/README.md`.

## Placeholders still to fill

Run `npm run placeholders` for the live list with file locations. Content owner decisions needed:

| Placeholder                                                                                                                                                                                                                                       | Where                                                                                                                                             |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[TODO: company legal name]`, `[TODO: IČO]`, `[TODO: DIČ]`, `[TODO: IČ DPH ...]`, `[TODO: registered address]`, `[TODO: register entry ...]`                                                                                                      | Imprint (all languages), Privacy, footer copy where the entity is named                                                                           |
| `[TODO: legal review]`                                                                                                                                                                                                                            | Privacy and Imprint (flag shown under the H1)                                                                                                     |
| `[TODO: date of publication]`                                                                                                                                                                                                                     | Privacy ("Last updated")                                                                                                                          |
| `[TODO: retention period]`, `[TODO: confirm email provider ...]`, `[TODO: confirm server log retention with Websupport]`, `[TODO: confirm Cloudflare data processing terms ...]`, `[TODO: confirm no other cookies ...]` (and the Turnstile note) | Privacy                                                                                                                                           |
| `[TODO: founder photo]`                                                                                                                                                                                                                           | About (portrait frame shows an illustration plus the placeholder)                                                                                 |
| `[TODO: pricing]`                                                                                                                                                                                                                                 | Home FAQ "How much does it cost?"                                                                                                                 |
| `[TODO: confirm IP terms]`                                                                                                                                                                                                                        | Home FAQ "Who owns the code?"                                                                                                                     |
| `[TODO: case study]`                                                                                                                                                                                                                              | Home "Ideas that have bloomed" section: hidden until a real case study replaces the text (the section renders as soon as the placeholder is gone) |
| `[TODO: confirm area served ...]`                                                                                                                                                                                                                 | JSON-LD Organization (`areaServed` is omitted while it is a placeholder)                                                                          |
| `[TODO: confirm whether Czech is offered ...]`                                                                                                                                                                                                    | Czech FAQ answer about languages                                                                                                                  |
| German imprint: "Vertretungsberechtigt" and "Verantwortlich i.S.d. § 18 Abs. 2 MStV"                                                                                                                                                              | `imprint.fields.representative_*` and `responsible_*` (rendered only when non-empty; DE has them)                                                 |

Contact email is `michal@maxian.sk` everywhere (owner decision, replaces `[TODO: contact email]`).
Not placeholders but still open: native review of SK/CS/DE/ES copy, a real logo (a wordmark plus crescent-and-bud
mark is used: `src/components/art/Mark.astro`, `public/favicon.svg`), and the founder photo.

## Deploy

`scripts/deploy-websupport.sh` uploads `dist/` to the Websupport docroot (see `server/README.md` for the
config file the PHP handler needs). Never commit `server/config.php`, `.env*` or `backup/`.
