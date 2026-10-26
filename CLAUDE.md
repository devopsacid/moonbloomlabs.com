# CLAUDE.md

Project instructions for Claude sessions in this repo. Keep this file current when conventions change.

## Project

moonbloomlabs.com: the marketing site for Moonbloom Labs. Static, multilingual, calm. Planning docs live in `docs/plan/`:

- `docs/plan/architecture.md`: stack, routing, build and deploy design
- `docs/plan/design.md`: tokens, layout, section mapping
- `docs/plan/copy*.md`: source copy per locale

Read the relevant plan doc before changing a page, a token or copy.

## Brand guardrails

- Tagline: "Ideas bloom overnight."
- Subline: "Plant an idea at night. Wake up to done."
- Tone: calm, warm, precise, playful. Never loud, never salesy.
- Forbidden words (any locale, any casing): grind, hustle, 24/7, nonstop, night shift, "revolutionary".
- Never invent clients, testimonials, logos, case studies, metrics or prices. Use a visible `[TODO: ...]` placeholder instead, and keep the list current with `npm run placeholders`.
- Never publish or send anything. Copy is drafted for the owner's approval.

## Stack

- Astro (static output) + Tailwind CSS v4 + TypeScript.
- Minimal client JS. Scroll-driven CSS animation, with a `prefers-reduced-motion` fallback that shows the final state.
- Build output: `dist/`. Node 20+.

## Internationalization

- Five locales: EN (`/`), CS (`/cs/`), SK (`/sk/`), DE (`/de/`), ES (`/es/`).
- Typed dictionaries. Every key must exist in every locale.
- Localized slugs come from one route map. Do not hardcode localized paths in components.
- Every page emits `hreflang` alternates for all five locales.
- CS, SK, DE and ES text needs native-speaker review. Do not machine-translate silently. Mark unreviewed strings in the dictionaries with a visible note.

## Design rules

- Colors, type and spacing come from the tokens in `docs/plan/design.md`. Do not add ad hoc values.
- WCAG AA contrast minimum for all text and interactive states.
- Sections move from night to dawn (dark to light) as the page scrolls, following the mapping in `docs/plan/design.md`.
- No AI clichés in imagery: no glowing brains, neural nets, robot hands or generic gradient blobs.
- Layouts must work from 360px wide, with no horizontal scroll.

## Hard constraints

- CSP: no inline scripts or inline event handlers. All JS is external.
- Total JS shipped: under 50 kB.
- Lighthouse score 95 or higher in every category.
- Zero axe errors on every page.
- Directory-style URLs with trailing slashes.

## Contact form

- Handler: `public/api/contact.php` (PHP `mail()`), with server code in `server/` and PHP tests in `tests/php/`.
- Config lives in `server/config.php` locally, copied to the server outside the docroot. It holds the recipient, from address and Turnstile secret. Never commit it. `server/config.example.php` is the committed template.
- Cloudflare Turnstile is enabled only when `PUBLIC_TURNSTILE_SITEKEY` is set at build time. The secret stays server-side.

## Build-time environment

- `PUBLIC_TURNSTILE_SITEKEY`: optional, enables the Turnstile widget.
- `PUBLIC_CF_ANALYTICS_TOKEN`: optional, Cloudflare Web Analytics beacon.

## Commands

Verify these against `package.json` before relying on them.

- `npm ci`: install
- `npm run dev`: local dev server
- `npm run build`: build `dist/` (runs `scripts/postbuild.mjs`)
- `npm run lint`: ESLint and Prettier check
- `npm run check`: `astro check`
- `npm run placeholders`: list all `[TODO: ...]` markers
- `npm run icons`: regenerate icons
- `tests/php/run.sh`: PHP handler tests (check the script exists before use)

## Deploy

Deploy with the `deploying-moonbloomlabs` skill (`.claude/skills/deploying-moonbloomlabs/SKILL.md`). Do not improvise SFTP commands. Production uploads need the owner's explicit yes in chat.

## Git rules

- Stage explicit paths. Never `git add -A` or `git add .`.
- Never commit `server/config.php`, `backup/`, `node_modules/` or `dist/`.
- No `Co-Authored-By:` lines and no AI attribution in commit messages or PR descriptions.

## Ownership of paths

- Owned by the PHP handler work: `public/api/contact.php`, `server/`, `tests/php/`.
- Site pages, components and styles: `src/` (Astro), `public/` (static assets).
- Deploy tooling: `scripts/deploy-websupport.sh`.
- When a task spans these areas, say which area each change belongs to.
