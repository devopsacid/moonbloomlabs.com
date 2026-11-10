# Moonbloom Labs marketing bundle

Brand and market-debut assets for Moonbloom Labs: brand guidelines, logos, colours and type, launch plan, press kit, social profiles and posts, and sales collateral, in English and Slovak.

**Status: draft for owner approval.** Nothing in this folder is published or sent until the owner approves it. Slovak files are drafts that **need native-speaker review**. Unknown facts are visible `[TODO: ...]` placeholders, never invented (see [Open placeholders](#open-placeholders)).

This folder is outside the Astro build, so it does not change the website. The website's `docs/plan/design.md` and `docs/plan/copy.md` are the source of truth. If this bundle disagrees with them, fix the bundle.

## Start here

1. [brand/brand-guidelines.md](brand/brand-guidelines.md): logo, colour, type, imagery, layout and a pre-flight checklist.
2. [brand/voice-and-tone.md](brand/voice-and-tone.md): how we write, banned words, and the EN→SK glossary.
3. [brand/messaging-house.md](brand/messaging-house.md): positioning, pillars, audiences, elevator pitches, headlines and calls to action.
4. [launch/launch-plan.md](launch/launch-plan.md): goals, channels, timeline from L-21 to L+30, and measurement.

## Contents

### Brand (`brand/`)

| Asset                                                                                                     | Files                                                                                        |
| --------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Guidelines, voice, messaging                                                                              | `brand-guidelines.md`, `voice-and-tone.md`, `messaging-house.md`                             |
| Logo: mark, wordmark, horizontal and stacked lockups, each in on-night, on-dawn, mono-dark and mono-light | `logo/moonbloom-{mark,wordmark,horizontal,stacked}-{variant}.svg` and `-512/-1024/-2048.png` |
| App-icon tile                                                                                             | `logo/moonbloom-mark-tile-{variant}.svg` and `.png` (512/1024/2048)                          |
| Clear space, minimum size, misuse                                                                         | `logo/clearspace-and-misuse.png` (source `.html`)                                            |
| Colour tokens (hex, RGB, approximate CMYK, roles, approved text pairs)                                    | `colors.json`, `colors.css`, `color-swatches.png`                                            |
| Type specimen (Newsreader, Atkinson Hyperlegible Next, Slovak diacritics)                                 | `type-specimen.png` (source `.html`)                                                         |
| Illustration kit: moon, seed, bud, flower stages, hills, horizon, service scenes and icons                | `art/*.svg`                                                                                  |

### Launch (`launch/`)

| Asset                                                                         | Files                                        |
| ----------------------------------------------------------------------------- | -------------------------------------------- |
| Launch plan and 30-day content calendar                                       | `launch-plan.md`, `content-calendar.csv`     |
| Press release                                                                 | `press-release.en.md`, `press-release.sk.md` |
| Press kit: boilerplate (25/50/100 words), fact sheet, founder bio and quotes  | `press-kit/`                                 |
| Launch email (plain text + HTML)                                              | `launch-email.en.md`, `launch-email.sk.md`   |
| Social posts: LinkedIn (company and founder), X/Bluesky, Product Hunt listing | `social-posts.en.md`, `social-posts.sk.md`   |

### Social (`social/`)

| Asset                                                   | Size                | Files                                                    |
| ------------------------------------------------------- | ------------------- | -------------------------------------------------------- |
| Avatar (safe for circular crop)                         | 400, 800            | `avatars/moonbloom-avatar-*.png`, `.svg`                 |
| LinkedIn company banner                                 | 1128×191            | `banners/linkedin-company-1128x191.png` (+ `.sk.png`)    |
| LinkedIn personal banner                                | 1584×396            | `banners/linkedin-personal-1584x396.png`                 |
| X header                                                | 1500×500            | `banners/x-header-1500x500.png` (+ `.sk.png`)            |
| GitHub social preview                                   | 1280×640            | `banners/github-social-preview-1280x640.png`             |
| YouTube banner (text inside the 1546×423 safe area)     | 2560×1440           | `banners/youtube-banner-2560x1440.png`                   |
| Default link preview (OG)                               | 1200×630            | `og-default.png`                                         |
| Quote card                                              | 1080×1080           | `post-templates/quote-card.png`                          |
| "How it works" carousel, 4 slides                       | 1080×1350           | `post-templates/how-it-works-{1..4}.png` (+ `.sk.png`)   |
| Service spotlights ×6                                   | 1080×1080           | `post-templates/service-{key}.png`                       |
| Launch announcement                                     | 1080×1080, 1200×627 | `post-templates/launch-announcement-*.png` (+ `.sk.png`) |
| Email signature (HTML, plain-text version in a comment) |                     | `email-signature.html`                                   |

To make a new post, copy the closest HTML source in `post-templates/`, change the text and render it (see below).

### Sales (`sales/`)

| Asset                                                                                                  | Files                                                      |
| ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| One-pager, A4                                                                                          | `one-pager.en.pdf`, `one-pager.sk.pdf` (sources `.html`)   |
| Pitch deck, 10 slides, 16:9                                                                            | `pitch-deck.en.pdf`, `pitch-deck.sk.pdf` (sources `.html`) |
| Outreach emails: warm intro, referral, considered cold note, follow-up, intake recap, morning delivery | `outreach-emails.en.md`, `outreach-emails.sk.md`           |
| FAQ and objection handling, intake questions                                                           | `faq-objections.md`                                        |

## Editing and re-rendering

Every PNG and PDF is generated from the SVG/HTML sources next to it. Edit the source, then run this from the repo root:

```sh
npm ci                                    # sharp and @resvg/resvg-js come from the site's devDependencies
# playwright-core is not a repo dependency: install it once outside the repo
mkdir -p ~/.tmp/mb-render && cd ~/.tmp/mb-render && npm init -y && npm i playwright-core && cd -
MB_RENDER_DEPS=~/.tmp/mb-render node marketing/tools/render.mjs           # everything
MB_RENDER_DEPS=~/.tmp/mb-render node marketing/tools/render.mjs boards    # PNG boards only
MB_RENDER_DEPS=~/.tmp/mb-render node marketing/tools/render.mjs pdf       # sales PDFs only
MB_RENDER_DEPS=~/.tmp/mb-render node marketing/tools/render.mjs logos     # logo SVG/PNG and avatars
```

Chromium comes from `~/.cache/ms-playwright` (or set `MB_CHROMIUM`). Fonts load from `src/assets/fonts/`, so renders work offline. The script stops if a font fails to load or text overflows an artboard. Full usage is at the top of `tools/render.mjs`.

## Notes for the owner

- **Sparkles in the site art.** design.md bans sparkles, but the website's RAG and Gamification illustrations and the RAG icon (`src/components/art/ServiceArt.astro`, `Icon.astro`) have small 4-point sparkles. The copies in `brand/art/` use small dots instead. Decide whether to change the site art to match.
- **On-dawn logo.** On light backgrounds the bud's side petals are `bloom-700` instead of `petal-300`, because the night petal colour fades on dawn. The site header only appears on night, so the site is not affected.
- **Contact.** All assets use michal@maxian.sk, as the repo README records.
- **Email signature** and **launch email HTML** have only been checked in Chromium. Test them in Gmail and Outlook before you use them.

## Open placeholders

Fill these before launch. The list is grouped by decision; run `grep -rn "\[TODO" marketing` for exact locations. `npm run placeholders` does not scan this folder.

| Decision         | Placeholders                                                                                                             | Blocks                                                 |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------ |
| Legal entity     | company legal name, IČO, registered address (SK: obchodné meno, sídlo)                                                   | Press release, fact sheet, launch email footer         |
| Commercial terms | pricing, pricing and terms, IP terms, response time, wording of the interim pricing answer                               | FAQ and objections, outreach recap, press release      |
| Founder          | founder photo, job title for the signature, exact STU lab name and year, career highlights, LinkedIn URL                 | Deck slide 8, email signature, bio                     |
| Launch           | launch date, release date, founding date, social handles, press-kit URL, area served, confirmation of Bratislava as base | Launch plan, press release, fact sheet                 |
| Demo             | demo idea, demo video and screenshot, its real test count and open decisions                                             | Launch-week posts, Product Hunt gallery                |
| Proof            | case study (only real and approved)                                                                                      | Messaging pillars, objection "Do you have references?" |
| Goals            | targets set by the owner                                                                                                 | Launch plan goals table                                |
