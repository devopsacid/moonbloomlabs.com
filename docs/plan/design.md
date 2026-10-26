# Moonbloom Labs: design plan (phase 1)

Owner: designer. Scope: sitemap, wireframes, visual direction, tokens, typography, motion, iconography, OG image, copy direction and draft copy.
The architect owns the tech plan (Astro + Tailwind, static, minimal JS, CSS-only animation). Anything here that needs a technical decision is marked **→ architect**.

Status: proposal for owner review. Slovak copy is a draft and **needs native review** before launch.

---

## 0. Recommendation in one paragraph

Build the site as one night that turns into one morning. Every page starts in deep indigo night (header, intro) and ends in a warm, rosy dawn (content, forms, final call to action), with the footer returning to night ("the next evening"). The one memorable element is a single inline-SVG moonflower that opens, petal by petal, as the visitor scrolls through *How it works*, driven by CSS scroll-driven animations and fully static when motion is reduced or unsupported. Everything else stays quiet: a literary serif (Newsreader) for headings, a legibility-first sans (Atkinson Hyperlegible Next) for reading, left-aligned layouts, generous whitespace, no glow, no gradients behind text.

Rejected alternatives, briefly:
- **Whole-page background colour animating with scroll.** Pretty, but text would sit on a moving colour and contrast becomes unprovable. Rejected; the transition happens in a decorative horizon band with no text on it.
- **Purple-to-pink gradient hero.** It is the AI-studio cliché the brief excludes.
- **Cream background + terracotta accent.** Generic default for "warm and premium". The dawn tone here is rosier (#FDF3EC) and the accent is a deep plum-rose, not clay.
- **Numbered 01/02/03 markers everywhere.** Only *How it works* is a real sequence, and it is labelled by time of day (Evening, Night, Morning, Decision), not by numbers.

---

## 1. Sitemap and URLs

EN is the default at the root; SK lives under `/sk/`. Every page has a 1:1 counterpart; the language switcher links to the counterpart, never to the other home page. Trailing slashes on all URLs **→ architect** to confirm with the hosting setup.

| Page | EN URL | SK URL | SK page title |
|---|---|---|---|
| Home | `/` | `/sk/` | Domov |
| How it works (anchor) | `/#how-it-works` | `/sk/#ako-to-funguje` | Ako to funguje |
| Services index | `/services/` | `/sk/sluzby/` | Služby |
| RAG & AI search | `/services/rag-ai-search/` | `/sk/sluzby/rag-a-ai-vyhladavanie/` | RAG a AI vyhľadávanie |
| Knowledge management | `/services/knowledge-management/` | `/sk/sluzby/sprava-znalosti/` | Správa znalostí |
| Chatbots & AI assistants | `/services/chatbots-ai-assistants/` | `/sk/sluzby/chatboty-a-ai-asistenti/` | Chatboty a AI asistenti |
| Gamification | `/services/gamification/` | `/sk/sluzby/gamifikacia/` | Gamifikácia |
| AI integration | `/services/ai-integration/` | `/sk/sluzby/integracia-ai/` | Integrácia AI |
| DevOps & cloud | `/services/devops-cloud/` | `/sk/sluzby/devops-a-cloud/` | DevOps a cloud |
| About | `/about/` | `/sk/o-nas/` | O nás |
| Contact | `/contact/` | `/sk/kontakt/` | Kontakt |
| Contact: sent (no-JS fallback) | `/contact/sent/` | `/sk/kontakt/odoslane/` | Odoslané |
| Privacy policy | `/privacy/` | `/sk/ochrana-osobnych-udajov/` | Ochrana osobných údajov |
| Imprint | `/imprint/` | `/sk/prevadzkovatel/` | Prevádzkovateľ |
| Not found | `/404.html` | `/sk/404.html` (if host supports per-path 404, else bilingual) | Stránka sa nenašla |

Notes:
- Slovak legal sites usually title the imprint "Prevádzkovateľ" or "Údaje o prevádzkovateľovi"; "Impressum" reads German. Proposed slug `/sk/prevadzkovatel/`.
- Slugs are ASCII (no diacritics) for clean sharing; titles keep diacritics.
- `<link rel="alternate" hreflang="en|sk|x-default">` on every page; `x-default` → EN. **→ architect**

### Navigation structure

```
Header:  [Mark] Moonbloom Labs    How it works   Services   About   Contact     EN | SK    [Plant your idea]
Footer:  Services (6 links) · Studio (About, Contact, How it works) · Legal (Privacy, Imprint) · Language
```

---

## 2. Night → dawn mapping

The rule: **text only ever sits on a solid token colour.** The gradient lives in a decorative `horizon` band (aria-hidden, no text, 64–160 px tall) placed where night becomes morning.

| Page | Night (dark) sections | Horizon band | Dawn (light) sections | Back to night |
|---|---|---|---|---|
| Home | Header, Hero (`night-950`), How it works (`night-800`; steps 3–4 are dawn tiles inside it) | After How it works | Services (`dawn-50`), Why Moonbloom (`dawn-100`), FAQ (`dawn-50`), Final CTA (`dawn-200`, "sunrise") | Footer (`night-950`) |
| Services index | Header, Intro | After intro (thin, 64 px) | Grid (`dawn-50`), CTA (`dawn-200`) | Footer |
| Service detail | Header, Intro, The problem (`night-800`) | After problem | What we deliver overnight (`dawn-50`), What follows (`dawn-100`), Related + CTA (`dawn-200`) | Footer |
| About | Header, Intro with portrait slot | After intro | Story (`dawn-50`), Principles (`dawn-100`), CTA (`dawn-200`) | Footer |
| Contact | Header, short intro | After intro (thin) | Form + aside (`dawn-50`) | Footer |
| Legal | Header, title | none (hard edge) | Body (`dawn-50`) | Footer |
| 404 | Header, whole body (`night-950`) | none | none | Footer |

Why forms and long reading are on dawn: dark-mode long-form reading and form fields have lower legibility for many people (halation for astigmatism). The narrative also fits: you plant at night, you read and decide in the morning.

**Site colour scheme:** the site has its own fixed night/dawn sections; it does not switch with `prefers-color-scheme`. Both section types pass AA, so system dark-mode users get a mostly-dark top and a light reading area. Open question Q7 offers a dark-mode variant of dawn sections for a later phase.

---

## 3. Visual direction

### Design plan (compact)

| Axis | Choice |
|---|---|
| Subject | A studio whose product is *time*: an evening idea, a night's build, a morning review. The moonflower (*Ipomoea alba*) unfurls in a spiral after dusk, the most specific botanical image for "blooms overnight". |
| Colour | Deep indigo night, moonlight text, one warm "first light" apricot on night, a rosy dawn for reading, a plum-rose ink for links on dawn. |
| Type | Newsreader (serif, optical sizes) for display and headings; Atkinson Hyperlegible Next for body and UI. |
| Layout | Left-aligned, asymmetric. A 12-column grid with content usually spanning 7 columns and illustration in the remaining 5. Big vertical breathing room between sections. |
| Principle | One memorable thing (the flower). Structure means something (time-of-day labels, real sequence). Nothing decorates without a reason. |

### What makes it not a template
- The hero is not a centred headline over a blob. It is a horizon: headline top-left, crescent moon high on the right, a closed bud sitting on the horizon line at the bottom of the hero.
- The primary button is always "the other time of day": an apricot (first light) button on night sections, a night-indigo button on dawn sections. That is a rule, not a variation.
- Service cards use a **leaf corner**: large radius on top-left and bottom-right, small on the other two corners. Only service cards get it; buttons are pills, inputs are near-square. Radius encodes the kind of object.
- No eyebrows above headings, no all-caps labels, no arrows appended to links, no middle-dot meta strings.

### Imagery rules
- Allowed: moon (crescent), a few small static stars, moonflower (bud, half, open), leaves, stems, roots, trellis, horizon line.
- Banned: brains, robots, circuit boards, neural-net node graphs, glowing orbs, purple-pink gradient blobs, stock photos of people at laptops, sparkle emoji.
- Photography: only a real founder portrait on About ([TODO: founder portrait]); no stock.

---

## 4. Colour tokens and contrast

### Palette

| Token | Hex | Role |
|---|---|---|
| `night-950` | `#0F1433` | Base night: header, hero, footer; text colour on dawn; primary button fill on dawn |
| `night-900` | `#171D47` | Raised night surface: mobile nav panel |
| `night-800` | `#222A5C` | Deep-night section (How it works, The problem); primary button hover on dawn |
| `night-500` | `#7A84C0` | UI borders on night (inputs if ever on night, nav panel divider) |
| `moon-100` | `#EEF0FA` | Primary text on night; moon illustration |
| `mist-300` | `#B9C0E4` | Secondary text on night; stars |
| `apricot-300` | `#F5B98A` | First light: primary button fill on night, links on night, focus ring on night |
| `apricot-200` | `#F9CFAB` | Primary button hover on night |
| `dawn-50` | `#FDF3EC` | Main dawn surface (reading, forms) |
| `dawn-100` | `#FAE6D8` | Alternate dawn surface, morning step tiles |
| `dawn-200` | `#F6D5C2` | Sunrise surface (final CTA) |
| `dusk-600` | `#4B4A6E` | Secondary text on dawn, helper text |
| `bloom-700` | `#8C2E55` | Links on dawn, focus ring on dawn, petal outline ink |
| `line-500` | `#7D7290` | Input borders and dividers that carry meaning on dawn |
| `white` | `#FFFFFF` | Input field fill |
| `error-700` | `#A1262B` | Error text and error border on dawn |
| `error-300` | `#FF9C8F` | Error text on night (reserved; no forms on night at launch) |
| `success-700` | `#2D6A4F` | Success text and icon on dawn |

Decorative-only (graphics, aria-hidden, no text): `petal-100 #FBE9EF`, `petal-300 #F2BFD0`, `leaf-500 #5F8A72`, horizon gradient stops `#222A5C → #5B4A86 → #C98BA0 → #F6D5C2 → #FDF3EC`.

### Text contrast (WCAG 1.4.3, AA: 4.5:1 normal text, 3:1 large text)
Computed with the WCAG 2.x relative-luminance formula.

| Text | On | Ratio | Use | AA |
|---|---|---|---|---|
| `moon-100` | `night-950` | 15.82 | Body and headings on night | Pass (AAA) |
| `moon-100` | `night-900` | 14.18 | Nav panel | Pass (AAA) |
| `moon-100` | `night-800` | 11.89 | How it works, The problem | Pass (AAA) |
| `mist-300` | `night-950` | 10.04 | Secondary text | Pass (AAA) |
| `mist-300` | `night-900` | 9.00 | Secondary text | Pass (AAA) |
| `mist-300` | `night-800` | 7.55 | Secondary text | Pass (AAA) |
| `apricot-300` | `night-950` | 10.43 | Links on night | Pass (AAA) |
| `apricot-300` | `night-900` | 9.35 | Links in nav panel | Pass (AAA) |
| `apricot-300` | `night-800` | 7.84 | Links in deep-night sections | Pass (AAA) |
| `night-950` | `apricot-300` | 10.43 | Primary button label on night | Pass (AAA) |
| `night-950` | `apricot-200` | 12.45 | Primary button hover label | Pass (AAA) |
| `error-300` | `night-950` | 8.91 | Reserved error on night | Pass (AAA) |
| `night-950` | `dawn-50` | 16.44 | Body and headings on dawn | Pass (AAA) |
| `night-950` | `dawn-100` | 14.87 | Body on alt dawn, morning tiles | Pass (AAA) |
| `night-950` | `dawn-200` | 13.02 | Final CTA text | Pass (AAA) |
| `night-950` | `white` | 17.98 | Input value text | Pass (AAA) |
| `dusk-600` | `dawn-50` | 7.67 | Secondary/helper text | Pass (AAA) |
| `dusk-600` | `dawn-100` | 6.94 | Secondary text | Pass |
| `dusk-600` | `dawn-200` | 6.08 | Secondary text | Pass |
| `dusk-600` | `white` | 8.39 | Hint text inside fields (not placeholders) | Pass (AAA) |
| `bloom-700` | `dawn-50` | 7.28 | Links on dawn | Pass (AAA) |
| `bloom-700` | `dawn-100` | 6.59 | Links on alt dawn | Pass |
| `bloom-700` | `dawn-200` | 5.77 | Links on sunrise | Pass |
| `dawn-50` | `night-950` | 16.44 | Primary button label on dawn | Pass (AAA) |
| `dawn-50` | `night-800` | 12.36 | Primary button hover label on dawn | Pass (AAA) |
| `error-700` | `dawn-50` | 6.79 | Error messages | Pass |
| `error-700` | `dawn-100` | 6.14 | Error messages | Pass |
| `error-700` | `white` | 7.43 | Error inside field context | Pass (AAA) |
| `success-700` | `dawn-50` | 5.85 | Success message | Pass |

### Non-text contrast (WCAG 1.4.11, 3:1) and focus

| Element | Colour | Against | Ratio | Pass |
|---|---|---|---|---|
| Focus ring on night | `apricot-300` | `night-950` / `night-900` / `night-800` | 10.43 / 9.35 / 7.84 | Pass |
| Focus ring on dawn | `bloom-700` | `dawn-50` / `dawn-100` / `dawn-200` | 7.28 / 6.59 / 5.77 | Pass |
| Focus ring on input (dawn page) | `bloom-700` | `white` | 7.96 | Pass |
| Primary button fill on night | `apricot-300` | `night-950` / `night-800` | 10.43 / 7.84 | Pass |
| Primary button fill on dawn | `night-950` | `dawn-50` / `dawn-200` | 16.44 / 13.02 | Pass |
| Input border | `line-500` | `white` field / `dawn-50` page | 4.49 / 4.10 | Pass |
| Divider / FAQ border on dawn | `line-500` | `dawn-100` / `dawn-200` | 3.71 / 3.25 | Pass |
| UI border on night | `night-500` | `night-950` / `night-900` / `night-800` | 5.04 / 4.52 / 3.79 | Pass |
| Error border | `error-700` | `white` | 7.43 | Pass |
| Secondary button outline on night | `moon-100` 1.5 px | `night-950` | 15.82 | Pass |
| Secondary button outline on dawn | `night-950` 1.5 px | `dawn-50` | 16.44 | Pass |

Rejected during the check: `night-600 #5A64A0` as a border on night (2.42:1 on `night-800`, fail) was replaced by `night-500`.

Focus indicator spec: `outline: 2px solid var(--focus); outline-offset: 3px;` where `--focus` is `apricot-300` inside night sections and `bloom-700` inside dawn sections (set by the section's surface class). Never `outline: none` without this replacement. The ring sits outside the element, so it is measured against the section surface, which the table covers.

---

## 5. Typography

| Role | Family | Licence | Why |
|---|---|---|---|
| Display + headings | **Newsreader** (variable: weight 200–800, optical size 6–72, roman + italic) | SIL OFL 1.1 | Literary, calm, slightly warm serif with an optical-size axis: at display sizes it becomes fine and elegant, at heading sizes it stays sturdy. It is not the default "luxury serif" (Playfair, Cormorant) and handles Slovak diacritics (č ď ľ ĺ ň ŕ š ť ž ô ä) in its Latin Extended subset. |
| Body + UI | **Atkinson Hyperlegible Next** (variable: weight 200–800) | SIL OFL 1.1 | Designed for low-vision readers by the Braille Institute; distinct letterforms (Il1, O0) help a technical audience reading model names and code terms. It has a friendly, slightly humanist voice that suits "calm and warm" without being a generic grotesque (Inter, DM Sans). Latin Extended included. |

Self-hosting: WOFF2, `latin` + `latin-ext` subsets, `font-display: swap`, preload only Newsreader roman (display) and Atkinson regular. **→ architect** (subsetting, fallback metric overrides with `size-adjust` to limit layout shift). Fallback stacks: `Newsreader, "Iowan Old Style", Georgia, serif` and `"Atkinson Hyperlegible Next", "Segoe UI", system-ui, sans-serif`.
Owner check: render a Slovak specimen ("Ľúbivé ťahy, ďakujeme, kôň, päť") in both fonts before sign-off.

### Type scale (rem, fluid between 320 px and 1440 px)

| Token | Value | Family / weight / line-height | Use |
|---|---|---|---|
| `text-hero` | `clamp(3rem, 1.8rem + 6vw, 7rem)` | Newsreader 380, opsz auto, lh 1.02, tracking -0.015em | Home H1 only |
| `text-display` | `clamp(2.5rem, 1.9rem + 3vw, 4.5rem)` | Newsreader 400, lh 1.05, tracking -0.01em | Page H1 (other pages) |
| `text-h2` | `clamp(1.875rem, 1.5rem + 1.9vw, 3rem)` | Newsreader 420, lh 1.12 | Section headings |
| `text-h3` | `clamp(1.375rem, 1.25rem + 0.6vw, 1.75rem)` | Newsreader 500, lh 1.2 | Card titles, step titles |
| `text-lead` | `clamp(1.1875rem, 1.1rem + 0.45vw, 1.4375rem)` | Atkinson 400, lh 1.5 | Sublines, intro paragraphs |
| `text-body` | `clamp(1.0625rem, 1.03rem + 0.15vw, 1.125rem)` | Atkinson 400, lh 1.65 | Running text (17–18 px) |
| `text-small` | `0.9375rem` | Atkinson 400, lh 1.55 | Helper text, footer, captions |
| `text-label` | `1rem` | Atkinson 600, lh 1.4 | Form labels, buttons, nav |
| `text-step` | `1.0625rem` | Newsreader italic 450 | Time-of-day labels (Evening, Night…) |

Rules: sentence case everywhere; no all-caps; nothing below 15 px; measure 60–68ch for body (`max-width: 40rem`), 32ch for the hero headline; headings `text-wrap: balance`, paragraphs `text-wrap: pretty`. Italic Newsreader is used only for the time-of-day labels, so italic means "time" across the site.

---

## 6. Spacing, radius, layout tokens

| Token | Value | Use |
|---|---|---|
| `space-1` … `space-12` | 0.25, 0.5, 0.75, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 8 rem | 4 px based scale |
| `space-section` | `clamp(4rem, 2.5rem + 7vw, 9rem)` | Vertical padding of each section |
| `space-gutter` | `clamp(1rem, 0.5rem + 2.5vw, 2.5rem)` | Page side padding (16 px at 320 px) |
| `content-max` | `76rem` | Grid container |
| `reading-max` | `40rem` | Long-form text |
| `radius-xs` | `0.375rem` (6 px) | Inputs, textarea |
| `radius-leaf` | `1.75rem 0.375rem 1.75rem 0.375rem` | Service cards only (leaf corner) |
| `radius-tile` | `1rem` | Step tiles |
| `radius-pill` | `999px` | Buttons, language switcher |
| `border-thin` | `1px` | Dividers |
| `border-ui` | `1.5px` | Inputs, secondary buttons |
| `border-error` | `2px` | Invalid inputs (thicker so it is not colour alone) |
| Shadows | none | Depth comes from surface colour, not shadow |

Breakpoints: `sm 40rem (640)`, `md 48rem (768)`, `lg 64rem (1024)`, `xl 80rem (1280)`. Grid: 4 columns < md, 8 columns md–lg, 12 columns ≥ lg.
Touch targets: every interactive element ≥ 44×44 CSS px (buttons 48 px tall, nav links padded to 44 px, language switcher items 44 px).

---

## 7. Components (inventory)

All new (greenfield). Variants and states the frontend must build:

| Component | Variants | States | Notes |
|---|---|---|---|
| `Button` | primary-on-night, primary-on-dawn, secondary-on-night, secondary-on-dawn | default, hover, focus-visible, active, submitting (aria-disabled + label change) | Pill, 48 px tall, label `text-label`. No arrow glyphs. |
| `TextLink` | on-night, on-dawn | default (underlined, 1px, offset 0.2em), hover (2px underline), focus-visible, visited (same colour) | Underline always on in body text so links never rely on colour alone. |
| `SiteHeader` | desktop, mobile | — | Always on `night-950`; not sticky. |
| `MobileNav` | — | closed, open | `<details>`/`<summary>` disclosure, no JS needed. |
| `LangSwitch` | header, footer | current, other | Two links; current has `aria-current="true"`. |
| `Horizon` | full (160 px), thin (64 px) | — | Decorative gradient band, aria-hidden. |
| `Moon` | hero, small | — | Inline SVG, aria-hidden. |
| `Bloom` | hero-bud (static), how-it-works (animated), cta-open (static), stage glyph ×4 | closed, opening, open | See §9. |
| `StepTile` | night (Evening, Night), dawn (Morning, Decision) | — | Ordered list item. |
| `ServiceCard` | — | default, hover (border to `night-950`, title underline), focus-visible on the whole-card link | Leaf corner. Whole card is one link (title is the link text; card uses stretched-link pattern). |
| `FeatureTrio` | — | — | Why Moonbloom, three items. |
| `FaqItem` | — | closed, open | `<details>`; summary is an `h3`-styled button area ≥ 44 px. |
| `CtaBand` | sunrise | — | Final CTA. |
| `Field` | text, email, textarea, radio group | idle, focus, filled, invalid, disabled while submitting | Label above, hint below label, error below field. |
| `FormStatus` | info (submitting), success, error | — | Live region. |
| `ErrorSummary` | — | hidden, shown | Appears on submit with links to fields; receives focus. |
| `Placeholder` | inline, block | — | Visible dashed `line-500` box with `[TODO: …]` text in `dusk-600`. Build must fail if any `[TODO` reaches production **→ architect**. |
| `SiteFooter` | — | — | `night-950`. |

---

## 8. Wireframes

Legend: `▓` night surface, `░` dawn surface, `≈` horizon band (decorative, no text), `[ ]` button, `__` link.

### 8.1 Header, mobile nav, footer

Desktop (≥ lg):
```
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓ [skip link, visible on focus: "Skip to content"]                              ▓
▓ (☾✿) Moonbloom Labs     How it works  Services  About  Contact   EN | SK  [Plant your idea] ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
```
- Current page link: underline 2px apricot + `aria-current="page"`.
- Header CTA hidden on `/contact/` (you are already there).

Mobile (< lg), closed and open:
```
▓ (☾✿) Moonbloom Labs            [Menu ▾] ▓      ▓ (☾✿) Moonbloom Labs           [Close ▴] ▓
                                                 ▓▓ night-900 panel, full width ▓▓▓▓▓▓▓▓▓▓▓
                                                 ▓  How it works                (44px row) ▓
                                                 ▓  Services                               ▓
                                                 ▓  About                                  ▓
                                                 ▓  Contact                                ▓
                                                 ▓  ─────── night-500 divider ───────      ▓
                                                 ▓  Language:  English | Slovenčina        ▓
                                                 ▓  [ Plant your idea ]  (full width)      ▓
```
- `<details class="nav">` with `<summary>` text "Menu" / "Close" (swapped by `[open]` CSS, both in DOM, the hidden one `aria-hidden`), panel pushes content down (no overlay, so no focus trap needed).
- Optional 10-line enhancement script: close on Escape and on link click **→ architect** (acceptable without it).

Footer (all pages):
```
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓ (☾✿) Moonbloom Labs                 Services            Studio         Legal  ▓
▓ Ideas bloom overnight.              RAG & AI search     How it works   Privacy▓
▓                                     Knowledge mgmt      About          Imprint▓
▓ [TODO: contact email]               Chatbots & AI …     Contact               ▓
▓                                     Gamification                              ▓
▓  ☾ small moon, mist stars           AI integration      Language: EN | SK     ▓
▓                                     DevOps & cloud                            ▓
▓ ────────────────────────────────────────────────────────────────────────────  ▓
▓ © 2026 [TODO: legal company name]. A human approves every release.           ▓
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
```
Mobile: columns stack; Services list first.

### 8.2 Home

Desktop (≥ lg):
```
▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓ HEADER                                                                         ▓
▓                                                              ·      ☾          ▓  moon high right,
▓  Ideas bloom                                          ·             (crescent) ▓  3–5 static stars
▓  overnight.                    (H1, text-hero, cols 1–8)       ·               ▓
▓                                                                                ▓
▓  Plant an idea at night. Wake up to done.        (text-lead, moon-100)         ▓
▓  Describe your idea in the evening. By morning you have a working              ▓
▓  prototype, its tests and a short list of decisions only you can make.        ▓
▓                                                  (text-body, mist-300, 40rem)  ▓
▓  [ Plant your idea ]   [ See how it works ]                                    ▓
▓   apricot pill           secondary outline                                     ▓
▓  A person reviews every build. Nothing ships without your approval.            ▓
▓                                                          (text-small, mist)    ▓
▓                                                                   ✿ bud        ▓
▓ ───────────────────────────────── horizon line (mist-300, 1px, 40% opacity) ── ▓
▓▓ HOW IT WORKS  id="how-it-works"   night-800 ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
▓  How it works  (H2)                                                            ▓
▓  One evening, one night, one morning. Then you decide.  (lead)                 ▓
▓                                                                                ▓
▓  ┌─ sticky (cols 1–5) ─────┐   ┌─ <ol> cols 7–12 ───────────────────────────┐  ▓
▓  │                         │   │ ▓ tile night-950                           │  ▓
▓  │        BLOOM SVG        │   │ ▓ (seed glyph) Evening  (italic label)     │  ▓
▓  │   closed bud → open     │   │ ▓ You describe the idea   (H3)             │  ▓
▓  │   flower as the list    │   │ ▓ body…                                    │  ▓
▓  │   scrolls past          │   │ ▓ tile night-950                           │  ▓
▓  │   (max 26rem square)    │   │ ▓ (bud glyph) Night                        │  ▓
▓  │                         │   │ ▓ Agents build and test                    │  ▓
▓  │                         │   │ ░ tile dawn-100                            │  ▓
▓  │                         │   │ ░ (half-open glyph) Morning                │  ▓
▓  │                         │   │ ░ Prototype, tests, demo, questions        │  ▓
▓  │                         │   │ ░ tile dawn-200                            │  ▓
▓  │                         │   │ ░ (open glyph) Decision                    │  ▓
▓  └─────────────────────────┘   │ ░ Approve or refine                        │  ▓
▓                                └────────────────────────────────────────────┘  ▓
≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈ HORIZON (160px, decorative) ≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈≈
░ SERVICES  dawn-50                                                              ░
░  What we build overnight (H2)                    __All services__ (link, right)░
░  ┌leaf card──────────┐ ┌leaf card──────────┐ ┌leaf card──────────┐            ░
░  │ (icon) RAG & AI   │ │ (icon) Knowledge  │ │ (icon) Chatbots & │            ░
░  │ search      (H3)  │ │ management        │ │ AI assistants     │            ░
░  │ blurb (1–2 lines) │ │ blurb             │ │ blurb             │            ░
░  └───────────────────┘ └───────────────────┘ └───────────────────┘            ░
░  ┌───────────────────┐ ┌───────────────────┐ ┌───────────────────┐            ░
░  │ Gamification      │ │ AI integration    │ │ DevOps & cloud    │            ░
░  └───────────────────┘ └───────────────────┘ └───────────────────┘            ░
░ WHY MOONBLOOM  dawn-100                                                        ░
░  Why Moonbloom (H2)                                                            ░
░  A person decides,       A senior architect       A path to                    ░
░  agents build.           behind every build.      production.                  ░
░  body                    body + __About__         body + __DevOps & cloud__    ░
░ FAQ  dawn-50                                                                   ░
░  Questions before you plant (H2)                                               ░
░  ▸ What exactly do I get in the morning?                                       ░
░  ▸ Is it really ready by the next morning?                                     ░
░  ▸ Does a person check the work?                    (cols 1–8, 40rem)          ░
░  ▸ … (8 items, see §12)                                                        ░
░ FINAL CTA  dawn-200 "sunrise"                                                  ░
░  Have an idea for tonight? (H2)                              ✿ fully open      ░
░  Tell us about it this evening. Tomorrow morning you'll       flower (static)  ░
░  have something to try.                                                        ░
░  [ Plant your idea ]  (night-950 pill)   __Book a call__                       ░
▓ FOOTER                                                                         ▓
```

Mobile (320–639 px), order and changes:
```
▓ header (Menu)
▓ H1 "Ideas bloom / overnight." (3rem at 320)   moon top-right 72px, behind nothing
▓ subline, supporting text
▓ [ Plant your idea ]      full width
▓ [ See how it works ]     full width
▓ reassurance line
▓ ── horizon line with small bud right
▓ How it works (H2) + lead
▓ tile Evening / tile Night
▓      BLOOM (min(18rem, 80vw)), inline between Night and Morning, opens on its own view()
░ tile Morning / tile Decision
≈ horizon 96px
░ services: 1 column, cards full width
░ why: stacked
░ FAQ
░ final CTA: flower above heading, 9rem; buttons full width
▓ footer
```
Tablet (md–lg): services 2 columns; How it works keeps mobile order but bloom 20rem centred between Night and Morning.

### 8.3 Services index
```
▓ HEADER
▓ Services (H1, text-display)                                  ☾ small moon
▓ Six kinds of prototype we plant most often. Each one can grow into a
▓ production system when you are ready.   (lead, mist-300, 40rem)
≈ thin horizon (64px)
░ dawn-50
░  ┌leaf card────────────────────────────┐ ┌leaf card──────────────────────────┐
░  │ (icon 40px)                         │ │ (icon)                            │
░  │ RAG & AI search (H2 styled as h3)   │ │ Knowledge management              │
░  │ blurb (same as home)                │ │ blurb                             │
░  │ Overnight you get: 2–3 bullet nouns │ │ Overnight you get: …              │
░  │ (dusk-600, text-small)              │ │                                   │
░  └─────────────────────────────────────┘ └───────────────────────────────────┘
░  … 3 rows × 2 columns (lg), 1 column (< md)
░ CTA dawn-200: Not sure which fits? Describe the idea and we'll tell you.
░  [ Plant your idea ]
▓ FOOTER
```
2 columns, not 3, on the index: each card carries more text here than on Home.

### 8.4 Service detail (template, same for all six)
```
▓ HEADER
▓ __Services__ / RAG & AI search          (breadcrumb nav, aria-label "Breadcrumb")
▓ (service icon 56px, moon-100 line)
▓ RAG & AI search  (H1)
▓ One-sentence promise (lead)
▓ [ Plant your idea ]  __See how it works__ (→ /#how-it-works)
▓▓ THE PROBLEM  night-800
▓  The problem (H2)
▓  2 short paragraphs in the client's language: what hurts today.
≈ horizon 160px
░ WHAT WE DELIVER OVERNIGHT  dawn-50
░  What you have in the morning (H2)
░  ┌ list, 4–5 items, each: botanical bullet (small leaf) + bold noun + 1 line ┐
░  │ A working prototype …  │ Tests …  │ A short demo …  │ Open decisions …    │
░  └────────────────────────────────────────────────────────────────────────────┘
░  What we need from you that evening: 3 bullets (inputs, sample data, access)
░ WHAT FOLLOWS  dawn-100
░  After the prototype (H2)
░  Paths: Refine (another night) · Pilot · Production (DevOps & cloud link)
░  presented as 3 short paragraphs in a row (lg) / stacked (< lg), not cards
░  [TODO: case study]  (Placeholder block, visible, dashed)
░ RELATED + CTA  dawn-200
░  Related: 2 other service links (text links with icons)
░  Have an idea like this? (H2)  [ Plant your idea ]
▓ FOOTER
```

### 8.5 About
```
▓ HEADER
▓ About (H1)                                         ┌ portrait slot 4:5 ┐
▓ A studio built by an architect who has spent more  │ [TODO: founder    │
▓ than twenty years making systems work in           │  portrait]        │
▓ production. (lead)                                 └───────────────────┘
≈ horizon
░ STORY dawn-50  (single column, 40rem, long-form)
░  Founder story (H2): [TODO: founder name]
░  3–5 paragraphs: cloud, DevOps, AI/ML career; co-founded an AI lab at the
░  Slovak University of Technology ([TODO: exact lab name and year]);
░  why overnight prototypes; why a human always decides.
░  __LinkedIn__ [TODO: profile URL]
░ PRINCIPLES dawn-100
░  How we work (H2)
░  A person decides, agents build. │ Nothing ships without your approval. │
░  Prototypes are honest about what they are not.
░ CTA dawn-200   [ Plant your idea ]
▓ FOOTER
```

### 8.6 Contact (with all form states)
```
▓ HEADER (no header CTA on this page)
▓ Plant your idea (H1)
▓ Tell us what you want to exist. We read every idea ourselves. (lead)
≈ thin horizon
░ dawn-50
░  ┌ FORM cols 1–7 ─────────────────────────────┐  ┌ ASIDE cols 9–12 ─────────────┐
░  │ [error summary slot]                       │  │ Prefer to talk? (H2 small)   │
░  │ Name (label)                               │  │ Book a call to talk the idea │
░  │ [__________________________]               │  │ through first.               │
░  │ Email                                      │  │ __Book a call__ [TODO: URL]  │
░  │ We reply to this address.  (hint)          │  │                              │
░  │ [__________________________]               │  │ What happens next (H2 small) │
░  │ Company (optional)                         │  │ <ol> 1 We read your idea and │
░  │ [__________________________]               │  │ reply by email within        │
░  │ Your idea                                  │  │ [TODO: response time].       │
░  │ What should exist, who it is for, and what │  │ 2 We agree the scope on a    │
░  │ "working" means to you. A few sentences    │  │ short call.                  │
░  │ are enough. (hint)                         │  │ 3 We build overnight; you    │
░  │ [__________________________]  textarea,    │  │ review the next morning.     │
░  │ [__________________________]  8 rows,      │  │                              │
░  │ [__________________________]  resizable    │  │                              │
░  │ Preferred language  (fieldset legend)      │  │                              │
░  │ (•) English   ( ) Slovenčina   (radios)    │  │                              │
░  │ We'll use your details only to reply.      │  │                              │
░  │ __Privacy policy__  (text-small)           │  │                              │
░  │ [ Plant your idea ]  (night-950 pill)      │  │                              │
░  │ [status live region]                       │  │                              │
░  └────────────────────────────────────────────┘  └──────────────────────────────┘
▓ FOOTER
```
Mobile: form full width, aside below form. Language radio default = page language.

Form states:

| State | What the user sees | Behaviour |
|---|---|---|
| Idle | Form as above, no messages. | Required fields have `required`; labels say nothing extra; Company label says "(optional)". |
| Validation error (on submit) | Error summary box at top: heading "Check 2 fields" (count real), list of links "Enter your name", "Enter an email address like name@company.com". Each invalid field: 2px `error-700` border, error text below with a small warning glyph (shape, not colour alone), `aria-invalid="true"`, `aria-describedby` → hint + error ids. | Focus moves to summary heading (`tabindex="-1"`). Errors are revalidated on blur after the first submit, never while typing the first time. Native browser validation bubbles are suppressed (`novalidate`) when JS is available; without JS, native validation runs. |
| Submitting | Button label "Planting your idea…", `aria-disabled="true"`, a small static bud icon (no spinner rotation under reduced motion; a 1.2 s opacity pulse otherwise). Fields `readonly`. Live region (polite): "Sending your idea." | Double submit blocked. |
| Success | Form replaced by success panel on `dawn-100`: open flower glyph, H2 "Your idea is planted.", body "We sent a copy to {email}. We'll reply within [TODO: response time] to agree the scope." Link "Back to the home page". | Focus moves to the H2 (`tabindex="-1"`). No-JS: POST then redirect to `/contact/sent/` with the same content (no email echo). **→ architect** for endpoint and whether a copy email is sent; if not, drop that sentence. |
| Failure (network or server) | Error banner above the button, `role="alert"`: "Your idea wasn't sent. Check your connection and try again. If it keeps failing, email us at [TODO: contact email]. Your text is still in the form." | All field values kept. Button returns to "Plant your idea". |
| Spam protection | Invisible honeypot field (labelled "Leave this field empty", hidden from AT with `aria-hidden` on wrapper and `tabindex="-1"`). **→ architect** (honeypot vs Turnstile; if Turnstile, design needs a slot above the button). |

Field rules: Name 1–100 chars; Email `type=email autocomplete=email`; Company `autocomplete=organization`, optional; Idea 20–5000 chars with a character counter only after 4500 ("500 characters left", polite, updated on pause); Preferred language radio, required, defaulted.

### 8.7 Legal (Privacy, Imprint)
```
▓ HEADER
▓ Privacy policy (H1)   Last updated: [TODO: date]  (text-small, mist-300)
░ dawn-50, single column 40rem
░  On this page (nav list of H2 anchors)
░  H2 sections, plain paragraphs, tables for data categories
░  [TODO: legal text, reviewed by counsel]
▓ FOOTER
```
Imprint content slots: company name, legal form, registered office, IČO, DIČ / IČ DPH, registry court and insert number, contact email, responsible person, all `[TODO]`.

### 8.8 404
```
▓ HEADER
▓   ☾                            (moon, no flower: nothing has grown here)
▓   This page hasn't bloomed. (H1)
▓   The address may be mistyped, or the page has moved.
▓   [ Go to the home page ]   __See our services__
▓ FOOTER
```

---

## 9. Illustration and motion

### 9.1 Moon (inline SVG, aria-hidden)
- `viewBox="0 0 120 120"`. Crescent = circle `r=40` at (60,60), masked by a circle `r=36` at (76,50). Fill `moon-100`.
- Halo: one circle `r=54`, fill `moon-100`, opacity 0.06. No blur filter, no glow.
- Hero only: 3–5 stars, circles `r=1.2–1.8`, `mist-300`, opacity 0.5–0.8, fixed positions. Not animated (no twinkle).
- Sizes: hero `clamp(4.5rem, 3rem + 6vw, 9rem)`; small 3rem.

### 9.2 Moonflower bloom (inline SVG, aria-hidden)
Structure, `viewBox="0 0 200 200"`, flower centre at (100, 100):
```
<svg class="bloom">
  <g class="bloom__stem">   stem path + 2 leaves (leaf-500), static, below centre
  <g class="bloom__head">   rotates as a whole (the spiral unfurl)
    <g class="petals petals--outer">  5 petals, --i: 0..4, final angle --a = i × 72°
    <g class="petals petals--inner">  5 smaller petals, final angle --a = 36° + i × 72°
    <g class="bloom__heart">          circle r=9 + 5 stamen dots r=2, apricot-300 / bloom-700
```
- Petal shape: one path (teardrop with a slightly pointed tip, like the 5-point star of a moonflower), length 78 units outer / 52 inner, drawn pointing up from the centre. Fill `petal-100` on night tiles/sections with 1.5 px stroke `bloom-700` at 60% opacity; a centre vein line `petal-300`.
- Every petal uses `transform-box: view-box; transform-origin: 100px 100px;`.
- **Closed (bud):** every petal `transform: rotate(0deg) scale(0.42, 0.62)`, so all ten overlap into a narrow upright bud; `.bloom__head` `rotate(-40deg)` (the furl); heart `opacity: 0; scale(0.4)`.
- **Open:** petal `rotate(var(--a)) scale(1)`; head `rotate(0)`; heart `opacity: 1; scale(1)`.
- Keyframes use the custom property, e.g. `@keyframes petal-open { from { transform: rotate(0deg) scale(.42,.62) } to { transform: rotate(var(--a)) scale(1) } }`, with `animation-fill-mode: both` and `animation-timing-function: linear` (scroll position is the easing). Each petal gets a small offset in its range so they open one after another clockwise.

Timeline ranges:

| Part | Desktop (≥ lg): flower is `position: sticky; top: 15vh` inside How it works; `.how-it-works { view-timeline: --how block; }`, `animation-timeline: --how` | Mobile/tablet: flower inline between steps 2 and 3, `animation-timeline: view()` |
|---|---|---|
| Head unfurl | `cover 20%` → `cover 55%` | `entry 0%` → `cover 50%` |
| Outer petals (staggered 4% each) | `cover 20%` → `cover 60%` | `entry 20%` → `cover 50%` |
| Inner petals (staggered 4% each) | `cover 40%` → `cover 75%` | `entry 50%` → `cover 60%` |
| Heart | `cover 65%` → `cover 80%` | `cover 45%` → `cover 60%` |

Result: the flower is a bud while Evening and Night are read, and fully open by the time Morning and Decision tiles are on screen.

Guards (the CSS shape; implementation **→ architect / frontend-dev**):
```
/* Default for everyone: static, fully open flower. */
.bloom petal { transform: rotate(var(--a)); }
@supports (animation-timeline: view()) {
  @media (prefers-reduced-motion: no-preference) {
    /* closed state + scroll-driven keyframes live only here */
  }
}
```
So: unsupported browsers and reduced-motion users see the open flower, static, with the same layout. No JS, no IntersectionObserver fallback.

Static variants (no animation anywhere): hero bud (closed state, 4.5–7rem, sitting on the horizon line), final-CTA flower (open), success-panel flower (open, 3rem), and four 32 px **stage glyphs** for the steps: seed (Evening), bud (Night), half-open (Morning), open (Decision). The glyphs carry the sequence for anyone who never sees the big animation.

### 9.3 Other motion

| Element | Trigger | Animation | Duration | Easing | Reduced motion |
|---|---|---|---|---|---|
| Button, link, card | Hover / focus | Background / underline / border colour | 150 ms | `cubic-bezier(.2,.7,.2,1)` (`ease-bloom`) | Instant |
| FAQ chevron (a small leaf glyph) | Open/close | Rotate 90° | 180 ms | `ease-bloom` | Instant |
| In-page anchor ("See how it works") | Click | `scroll-behavior: smooth` | browser | — | `auto` |
| Submitting bud glyph | Submit | Opacity 1 → 0.5 → 1 | 1200 ms loop | ease-in-out | Static |
| Section entrances | — | **None.** No fade-up on scroll. | — | — | — |

Motion tokens: `duration-fast 150ms`, `duration-base 180ms`, `duration-slow 1200ms`, `ease-bloom cubic-bezier(.2,.7,.2,1)`.

---

## 10. Iconography

Line icons, 24×24 grid, 1.5 px stroke, round caps and joins, `currentColor`, no fills except one optional `petal-300` accent. Displayed at 40 px (cards) and 56 px (service intro). Botanical and celestial only. Always decorative (`aria-hidden`), next to a visible text title.

| Service | Icon | Why it fits |
|---|---|---|
| RAG & AI search | A page with a folded corner and a small four-point star resting on one line | The found answer, marked at its source |
| Knowledge management | A seedling with a visible, branching root system below a ground line | Knowledge that is connected under the surface |
| Chatbots & AI assistants | Two overlapping leaf-shaped speech bubbles | A conversation, grown from your own content |
| Gamification | One stem with three leaves at rising heights, the top one a bud | Growth in stages, progress you can see |
| AI integration | A graft: a new shoot joined to an existing branch with a small binding | Adding to what you already have, not replacing it |
| DevOps & cloud | A vine climbing a simple trellis | The structure that lets a prototype grow into production |

Step stage glyphs: seed, bud, half-open, open (see §9.2). Utility icons (menu, close, chevron, warning, success check, external link): same stroke rules; warning = triangle, success = circle with check, so status is never colour alone.

Logo concept (for the owner to commission or approve): wordmark "Moonbloom Labs" in Newsreader 450; mark = crescent moon cradling a closed 5-petal bud. [TODO: final logo].

---

## 11. OG image concept

- 1200×630 PNG, generated at build per page **→ architect**.
- Background `night-950` across the top two-thirds, the horizon gradient across the bottom third, ending in `dawn-200` at the bottom edge.
- Crescent moon top-right (160 px). Half-open moonflower standing on the horizon at right, ~260 px tall.
- Left, 80 px safe margin: "Ideas bloom overnight." in Newsreader 400, 76 px, `moon-100`; below it "Moonbloom Labs" in Atkinson 600, 28 px, `mist-300`.
- Per-page variant: the page title replaces the tagline (e.g. "RAG & AI search"); tagline drops to the small line. SK pages use SK text.
- No stars smaller than 4 px (they turn into noise when compressed). Text contrast ≥ 10:1 as on site.

---

## 12. Copy

### Voice
Calm, warm, confident, precise, a little playful. Short sentences. Concrete nouns (prototype, tests, demo, decisions).
- Use: plant, bloom, overnight, morning, ready, done, decide, approve, refine.
- Never: grind, hustle, 24/7, nonstop, night shift, revolutionary, "cutting-edge", "unleash", "supercharge", "magic".
- One metaphor per sentence at most. The botanical words are seasoning; every heading must still make sense to someone who skips the metaphor.
- Name the AI plainly: "AI agents". Always pair with the human role.
- Second person, active voice. CTAs say what happens: "Plant your idea" opens the contact form; the confirmation says "Your idea is planted." (same verb through the flow).
- SK uses formal *vy* (vykanie), capitalised *Vy/Váš* not used (modern web style: lower case). **Flag for native review.**
- Honesty rule: "done" in the subline refers to the morning deliverable. Body copy always says "working prototype", never "finished product".

### Hero

| | EN | SK (draft, native review) |
|---|---|---|
| H1 | Ideas bloom overnight. | Nápady rozkvitnú cez noc. |
| Subline | Plant an idea at night. Wake up to done. | Večer zasaďte nápad. Ráno je hotovo. |
| Supporting | Describe your idea in the evening. By morning you have a working prototype, its tests and a short list of decisions only you can make. | Večer nám opíšete svoj nápad. Ráno máte funkčný prototyp, testy k nemu a krátky zoznam rozhodnutí, ktoré môžete urobiť len vy. |
| Primary CTA | Plant your idea | Zasaďte svoj nápad |
| Secondary CTA | See how it works | Ako to funguje |
| Reassurance | A person reviews every build. Nothing ships without your approval. | Každý výsledok kontroluje človek. Bez vášho súhlasu sa nič nenasadí. |

### How it works

Section: EN "How it works" / "One evening, one night, one morning. Then you decide." SK "Ako to funguje" / "Jeden večer, jedna noc, jedno ráno. Potom rozhodnete vy."

| Time | EN title | EN body | SK title | SK body |
|---|---|---|---|---|
| Evening / Večer | You describe the idea | Tell us what should exist, in your own words. A paragraph is enough; a sketch or a document helps. | Opíšete nápad | Napíšte vlastnými slovami, čo má vzniknúť. Stačí odsek, náčrt alebo dokument pomôžu. |
| Night / Noc | Agents build and test | AI agents write the code and the tests, following a plan our architect sets with you. | Agenti stavajú a testujú | AI agenti píšu kód aj testy podľa plánu, ktorý s vami pripraví náš architekt. |
| Morning / Ráno | Prototype, tests, demo, questions | You open a working prototype, its test results, a short demo and the questions only you can answer. | Prototyp, testy, ukážka, otázky | Otvoríte funkčný prototyp, výsledky testov, krátku ukážku a otázky, na ktoré viete odpovedať len vy. |
| Decision / Rozhodnutie | Approve or refine | Approve it and we plan the path to production. Or refine it, and we plant again that evening. | Schváliť alebo doladiť | Schválite ho a naplánujeme cestu do produkcie. Alebo ho doladíme a večer zasadíme znova. |

### Service card blurbs

| Service (EN / SK) | EN blurb | SK blurb (draft) |
|---|---|---|
| RAG & AI search / RAG a AI vyhľadávanie | Ask your own documents a question and get an answer that shows its sources. | Opýtajte sa vlastných dokumentov a dostanete odpoveď aj s odkazom na zdroj. |
| Knowledge management / Správa znalostí | Turn scattered wikis, files and chats into knowledge your team can actually find. | Roztrúsené wiki, súbory a chaty premeníme na znalosti, ktoré tím naozaj nájde. |
| Chatbots & AI assistants / Chatboty a AI asistenti | Assistants that answer from your content and hand over to a person when they should. | Asistenti, ktorí odpovedajú z vášho obsahu a vo vhodnej chvíli prenechajú slovo človeku. |
| Gamification / Gamifikácia | Points, progress and challenges that make learning or routine work worth coming back to. | Body, pokrok a výzvy, vďaka ktorým sa k učeniu aj bežnej práci oplatí vracať. |
| AI integration / Integrácia AI | Add AI to the tools and workflows you already use, without replacing them. | AI priamo v nástrojoch a procesoch, ktoré už používate, bez toho, aby ste ich menili. |
| DevOps & cloud / DevOps a cloud | Take a prototype to production: CI/CD, infrastructure and monitoring that hold up. | Prototyp dostaneme do produkcie: CI/CD, infraštruktúra a monitoring, na ktoré sa dá spoľahnúť. |

### Why Moonbloom (EN)
1. **A person decides, agents build.** You and our architect make every call about scope, data and release. Agents do the building. Nothing ships without your approval.
2. **A senior architect behind every build.** More than 20 years in cloud, DevOps and AI/ML, and co-founder of an AI lab at the Slovak University of Technology. __About the founder__
3. **A real path to production.** When a prototype earns its place, we take it further: pipelines, infrastructure and monitoring, built by the same team. __DevOps & cloud__

### FAQ (questions; answers needing facts are placeholders)
1. What exactly do I get in the morning? (A link to the running prototype, the code, test results, a short demo and a list of open decisions.) [TODO: confirm delivery format: repo access? hosted preview?]
2. Is it really ready by the next morning? [TODO: owner to confirm the honest scope rule, e.g. "If an idea is bigger than one night, we tell you before we start and split it into nights."]
3. Does a person check the work? (Yes. Our architect reviews the plan before the night and the result before you see it.) [TODO: confirm the review step exists as described]
4. Who owns the code? [TODO: IP terms]
5. How do you handle confidential data? [TODO: NDA, data handling, which AI providers are used and where data is processed]
6. What happens after the prototype? (Refine, pilot, or production via DevOps & cloud.)
7. What does it cost? [TODO: pricing or engagement model; no numbers until the owner provides them]
8. Do you work in Slovak? (Yes, in Slovak and English.)

### Form and system strings (EN; SK equivalents in brackets, draft)
- Labels: Name [Meno], Email [E-mail], Company (optional) [Firma (nepovinné)], Your idea [Váš nápad], Preferred language [Preferovaný jazyk], English [English], Slovenčina [Slovenčina].
- Errors: "Enter your name." [Zadajte svoje meno.] · "Enter an email address like name@company.com." [Zadajte e-mail v tvare meno@firma.sk.] · "Describe your idea in at least 20 characters." [Opíšte nápad aspoň 20 znakmi.] · "Your idea is too long. Shorten it to 5,000 characters or send the rest by email." [Nápad je príliš dlhý. Skráťte ho na 5 000 znakov alebo zvyšok pošlite e-mailom.]
- Summary heading: "Check {n} fields" with ICU plural [Skontrolujte {n} pole/polia/polí]: SK needs one/few/other forms. **→ architect** (i18n plural rules).
- Submitting: "Planting your idea…" [Zasádzame váš nápad…]
- Success: "Your idea is planted." [Váš nápad je zasadený.]
- Failure: "Your idea wasn't sent. Check your connection and try again. If it keeps failing, email us at [TODO: contact email]. Your text is still in the form." [Nápad sa neodoslal. Skontrolujte pripojenie a skúste to znova. Ak to nepomôže, napíšte nám na [TODO: e-mail]. Váš text zostal vo formulári.]
- Skip link: "Skip to content" [Preskočiť na obsah]. Menu: "Menu" / "Close" [Menu / Zavrieť]. Language switcher accessible names: "English", "Slovenčina", each with matching `lang`.

---

## 13. Accessibility review (stage 6, WCAG 2.2 AA)

| # | Check | Result / rule |
|---|---|---|
| 1 | Text contrast (1.4.3) | All pairings in §4 pass AA; most pass AAA. |
| 2 | Non-text contrast (1.4.11) | Focus rings, inputs, button fills, dividers ≥ 3:1 (§4). |
| 3 | Text on gradients | Banned. Horizon band carries no text. |
| 4 | Colour alone (1.4.1) | Links underlined; errors have icon + text + 2 px border; current nav item underlined + `aria-current`. |
| 5 | Focus visible (2.4.7) / not obscured (2.4.11) | 2 px ring + 3 px offset, colour per surface. Header is not sticky, so nothing covers focused elements. |
| 6 | Keyboard (2.1.1) | All controls native (`a`, `button`, `details/summary`, inputs). No custom widgets. |
| 7 | Focus order (2.4.3) | Skip link → logo → nav → language → header CTA → main. On contact: form before aside. |
| 8 | Landmarks (1.3.1) | `header`, `nav` (labelled "Main" / "Footer" / "Breadcrumb"), `main#content`, `footer`. One H1 per page; H2 per section; no skipped levels. |
| 9 | Language (3.1.1, 3.1.2) | `<html lang="en|sk">`; the other-language switcher link carries `lang` and `hreflang`. |
| 10 | Motion (2.3.3 AAA, best practice) / pause (2.2.2) | Only scroll-linked motion, user-driven, fully static under `prefers-reduced-motion: reduce`. No autoplay, no loops except the 1.2 s submitting pulse (ends with the request, static under reduced motion). |
| 11 | Forms (3.3.1, 3.3.2, 3.3.3, 4.1.2) | Visible labels, hints linked via `aria-describedby`, error summary with links, specific fix-it messages, `autocomplete` tokens (1.3.5). |
| 12 | Status messages (4.1.3) | Submitting = `role="status"`; failure = `role="alert"`; success moves focus to heading. |
| 13 | Target size (2.5.8 AA = 24 px; project rule 44 px) | All targets ≥ 44×44. Inline body links exempt but keep line-height 1.65. |
| 14 | Reflow (1.4.10) / text spacing (1.4.12) / resize 200% (1.4.4) | Single column at 320 px, no horizontal scroll; fluid type uses rem + vw so browser zoom still scales (min values are rem). |
| 15 | Images (1.1.1) | Moon, flower, stars, icons, horizon: `aria-hidden="true"`, `focusable="false"`. Founder portrait: real alt text with name. |
| 16 | Redundant entry / consistent help (3.2.6, 3.3.7) | Contact email and "Book a call" in the same place on contact page and footer. |
| 17 | Placeholders | `[TODO]` blocks are visible text, not hidden; build-time check prevents shipping them. |

No open accessibility blockers in this plan. To verify in build: axe + keyboard pass + VoiceOver/NVDA on the form; a real Slovak-language screen-reader check of the `lang` switching.

---

## 14. Self-critique log (stage 7)

| Found | Fix applied |
|---|---|
| First draft used apricot as the primary button on dawn too; it vanished into the warm background and weakened hierarchy. | Primary button is night on dawn, apricot on night ("the other time of day"). |
| First draft animated the whole page background from night to dawn. Contrast could not be guaranteed at every scroll position. | Solid section surfaces; transition only in a text-free horizon band. |
| `night-600` border failed 3:1 on `night-800` (2.42). | Replaced with `night-500` (≥ 3.79 on all night surfaces). |
| How it works had all four steps on night, but Morning and Decision happen in daylight. | Steps 3–4 are dawn tiles inside the night section, matching the flower's opening. |
| Mobile: a sticky flower above a long list would scroll away before opening. | Mobile places the flower between Night and Morning with its own `view()` timeline. |
| Hero risked looking like the generic centred-headline template. | Left-aligned horizon composition with moon and bud as fixed points. |
| "Wake up to done" could over-promise. | Supporting line and FAQ say "working prototype"; FAQ 2 left for the owner to word honestly. |
| Contact "what happens next" originally implied an overnight build right after submitting. | Steps now: reply, agree scope on a call, then the night build. |
| Card hover lift + shadow is a template tell. | Cards have no shadow; hover changes border colour and underlines the title only. |

---

## 15. Placeholders to fill (never invent)

| Placeholder | Where |
|---|---|
| `[TODO: founder name]`, `[TODO: founder portrait]`, `[TODO: LinkedIn URL]` | About, footer if used |
| `[TODO: exact AI lab name and year]` at the Slovak University of Technology | About, Why Moonbloom |
| `[TODO: contact email]` | Footer, contact failure message, imprint |
| `[TODO: booking URL]` and call length | Contact aside, final CTA |
| `[TODO: response time]` | Contact aside, success message |
| `[TODO: case study]` | Each service detail page ("What follows" section) |
| `[TODO: testimonial]` | Not placed at launch; reserved slot after Why Moonbloom on Home if the owner gets one |
| `[TODO: pricing / engagement model]` | FAQ 7 |
| `[TODO: IP / code ownership terms]` | FAQ 4 |
| `[TODO: confidentiality, NDA, AI providers, data location]` | FAQ 5, Privacy |
| `[TODO: delivery format]` (repo, hosted preview) | FAQ 1, service detail "What you have in the morning" |
| `[TODO: one-night scope rule]` | FAQ 2 |
| `[TODO: legal company name, legal form, address, IČO, DIČ/IČ DPH, registry entry]` | Imprint, footer © |
| `[TODO: privacy policy text, reviewed by counsel]`, `[TODO: last updated date]` | Privacy |
| `[TODO: final logo]` | Header, footer, OG |
| Service detail body copy (problem, deliverables, after) for all six services | Service pages: draft in phase 2, owner confirms what is truly deliverable overnight per service |

---

## 16. Open questions for the owner

1. **Scope honesty.** What is the rule when an idea does not fit one night? (Changes FAQ 2, hero support line, contact "what happens next".)
2. **Review step.** Does the architect review the plan before the night and the result before the client sees it? The "A person decides" message depends on this being literally true.
3. **Founder visibility.** Name and photo on About, or a studio voice ("we") only? Changes the About wireframe and Why Moonbloom item 2.
4. **Booking tool.** External link (e.g. a calendar service) or no call option at launch?
5. **Copy email.** Should the form send the client a copy? If not, the success message drops "We sent a copy to {email}".
6. **SK formality.** Formal *vy* proposed for B2B. Confirm, and name a native reviewer.
7. **Dark-mode dawn sections.** Keep the fixed night/dawn design (recommended for launch), or add a dark variant of dawn sections later for `prefers-color-scheme: dark`?
8. **Logo.** Commission the crescent-and-bud mark, or use a wordmark only at launch?
9. **Legal entity.** Which company publishes the site (needed for imprint and privacy)?

---

## 17. Notes for the architect and frontend-dev (handoff preview)

- Tokens map 1:1 to CSS custom properties and the Tailwind theme (`--color-night-950`, `--text-h2`, `--space-section`, `--radius-leaf`, `--ease-bloom`). Surface classes `.surface-night`, `.surface-night-deep`, `.surface-dawn`, `.surface-dawn-alt`, `.surface-sunrise` set `--fg`, `--fg-muted`, `--link`, `--focus`, `--btn-bg`, `--btn-fg`, so components never pick colours themselves.
- JS budget: zero required. Optional: form enhancement (inline states, error summary), nav Escape close. Everything works without JS (native validation, POST + redirect).
- Suggested test ids: `site-header`, `nav-toggle`, `lang-switch`, `hero-cta-primary`, `hero-cta-secondary`, `how-steps`, `bloom`, `service-card-{slug}`, `faq-item-{n}`, `contact-form`, `field-{name}`, `error-summary`, `form-status`, `form-success`, `form-failure`.
- Full handoff spec (per-component props, per-breakpoint tables, acceptance criteria) follows in phase 2 once the owner answers §16 and the architect's plan fixes the form endpoint and i18n approach.
