# Moonbloom Labs brand guidelines

Version 1.0 · November 2026 · Status: draft for owner approval

This document covers how Moonbloom Labs looks and sounds everywhere outside the website: decks, social profiles, documents, email and print. The website's design system (`docs/plan/design.md`) is the source of truth for every value here. If the two ever disagree, design.md wins and this file gets fixed.

Related: [voice and tone](voice-and-tone.md) · [messaging house](messaging-house.md) · [logo files](logo/) · [colour tokens](colors.json)

---

## 1. The brand in one minute

**Moonbloom Labs is an AI studio that turns an idea into a working prototype by the next morning.** You describe the idea in the evening, AI agents build it overnight following a plan a senior architect has reviewed, and in the morning you review a working prototype, its tests, a short demo and the decisions that are yours to make.

|                |                                                                                                                                                 |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Name           | Moonbloom Labs (two words, both capitalised). Short form in running text: Moonbloom. Never "MoonBloom", "Moon Bloom", "MBL" or "Moonbloom Lab". |
| Tagline        | **Ideas bloom overnight.** (SK: _Nápady rozkvitnú cez noc._)                                                                                    |
| Subline        | **Plant an idea at night. Wake up to done.** (SK: _Večer zasaďte nápad. Ráno je hotovo._)                                                       |
| Category line  | AI studio for working prototypes (SK: _AI štúdio pre funkčné prototypy_)                                                                        |
| Principle      | A human decides; agents build. (SK: _Rozhoduje človek, stavajú agenti._)                                                                        |
| Primary action | Plant your idea (SK: _Zasaďte svoj nápad_)                                                                                                      |

"Done" in the subline is always followed nearby by what done means: a working prototype, its tests, a demo and open decisions. A prototype is not a production system, and we say so.

## 2. Brand idea: one night that turns into one morning

The name comes from the moonflower (_Ipomoea alba_), a flower that opens after dusk and is fully open by night. It is the most precise image we have for "ideas bloom overnight".

Everything in the brand follows the arc of a single night:

| Moment   | Meaning                                | Visual                                            |
| -------- | -------------------------------------- | ------------------------------------------------- |
| Evening  | You plant the idea; we agree the scope | Deep indigo night, a closed bud on the horizon    |
| Night    | Agents build and test                  | Crescent moon, a few still stars, the bud opening |
| Morning  | You review the prototype               | Rosy dawn surfaces, warm reading colours          |
| Decision | You approve or refine                  | The open flower; the "sunrise" surface            |

Italic Newsreader is reserved for time-of-day labels (_Evening, Night, Morning, Decision_), so italic always means "time".

## 3. Logo

### 3.1 The mark

A crescent moon cradling a closed bud. The crescent is the night and the studio; the bud is your idea, about to open. Geometry is fixed (`src/components/art/Mark.astro`); never redraw it.

### 3.2 Lockups

| Lockup                       | Use                                                                      | Files                                 |
| ---------------------------- | ------------------------------------------------------------------------ | ------------------------------------- |
| Horizontal (mark + wordmark) | Default. Website header, documents, decks, email signature               | `logo/moonbloom-horizontal-*.svg/png` |
| Stacked                      | Square or tall spaces: posters, title slides, merch                      | `logo/moonbloom-stacked-*.svg/png`    |
| Mark only                    | Favicons, avatars, app icons, small spaces where the name appears nearby | `logo/moonbloom-mark-*.svg/png`       |
| Wordmark only                | Where the mark already appears nearby, or very wide, short spaces        | `logo/moonbloom-wordmark-*.svg/png`   |

Each lockup comes in four colour variants:

| Variant      | Background                                            | Mark                                                                                                       | Wordmark            |
| ------------ | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------- |
| `on-night`   | `night-950` #0F1433 (or other night surface)          | moon-100 crescent, apricot/petal bud                                                                       | `moon-100` #EEF0FA  |
| `on-dawn`    | `dawn-50` #FDF3EC (or other dawn surface, white)      | night-950 crescent, apricot centre petal with bloom-700 side petals (the night petal colours fade on dawn) | `night-950` #0F1433 |
| `mono-dark`  | Any light background, single-colour print             | all `night-950`                                                                                            | `night-950`         |
| `mono-light` | Any dark background, single-colour print, photography | all `moon-100` / white                                                                                     | `moon-100` / white  |

Use SVG wherever possible. PNG files are provided at 512, 1024 and 2048 px wide for tools that need raster images.

### 3.3 Clear space and minimum size

- **Clear space:** keep a margin equal to the height of the bud on all sides. Nothing else (text, edges, other logos) enters that area.
- **Minimum size:** mark 16 px (favicon) / 6 mm in print; horizontal lockup 120 px / 30 mm wide; stacked lockup 72 px / 20 mm wide. Below that, use the mark alone.
- See `logo/clearspace-and-misuse.png`.

### 3.4 Misuse

Do not:

1. Recolour the mark outside the four variants, or apply gradients, glows or shadows.
2. Stretch, skew, rotate or outline the logo.
3. Rearrange mark and wordmark, or change the wordmark typeface.
4. Place the logo on busy photography or on the horizon gradient. Put it on a solid surface.
5. Add sparkles, stars around the mark or "AI" badges.
6. Use the on-night variant on a light background or the on-dawn variant on a dark one.

## 4. Colour

Colours come in two families, night and dawn, plus a few decorative tones for illustration only. Full list with RGB and approximate CMYK in [colors.json](colors.json) / [colors.css](colors.css); swatches and approved pairs in `color-swatches.png`.

### 4.1 Core palette

| Token         | Hex     | Role                                              |
| ------------- | ------- | ------------------------------------------------- |
| `night-950`   | #0F1433 | Base night. Text on dawn. Primary button on dawn. |
| `night-900`   | #171D47 | Raised night surface                              |
| `night-800`   | #222A5C | Deep-night section                                |
| `night-500`   | #7A84C0 | UI borders on night                               |
| `moon-100`    | #EEF0FA | Primary text on night                             |
| `mist-300`    | #B9C0E4 | Secondary text on night, stars                    |
| `apricot-300` | #F5B98A | "First light": primary button and links on night  |
| `apricot-200` | #F9CFAB | Hover on night                                    |
| `dawn-50`     | #FDF3EC | Main reading surface                              |
| `dawn-100`    | #FAE6D8 | Alternate dawn surface                            |
| `dawn-200`    | #F6D5C2 | Sunrise surface (final call to action)            |
| `dusk-600`    | #4B4A6E | Secondary text on dawn                            |
| `bloom-700`   | #8C2E55 | Links and accents on dawn                         |
| `line-500`    | #7D7290 | Dividers and input borders on dawn                |

Decorative only (never behind or as text): `petal-100` #FBE9EF, `petal-300` #F2BFD0, `leaf-500` #5F8A72, horizon gradient #222A5C → #5B4A86 → #C98BA0 → #F6D5C2 → #FDF3EC.

### 4.2 Colour rules

- **Text only sits on solid token colours.** The horizon gradient is a decorative band and never carries text.
- **Approved text pairs** (all WCAG AA or better): moon-100, mist-300 or apricot-300 on any night surface; night-950, dusk-600 or bloom-700 on any dawn surface. The full contrast table is in design.md §4.
- **The primary action is always "the other time of day":** an apricot button on night, a night-indigo button on dawn.
- Proportion guide for a layout: roughly 60 % night or dawn surface, 30 % the opposite family, under 10 % apricot or bloom accent.
- No purple-to-pink gradients, no neon, no glow.

## 5. Typography

| Role                 | Typeface                                  | Licence     | Notes                                                                                               |
| -------------------- | ----------------------------------------- | ----------- | --------------------------------------------------------------------------------------------------- |
| Display and headings | **Newsreader** (variable, roman + italic) | SIL OFL 1.1 | Light weights (380–420) at large sizes, 500 for small headings. Italic only for time-of-day labels. |
| Body and UI          | **Atkinson Hyperlegible Next** (variable) | SIL OFL 1.1 | 400 for text, 600 for labels and buttons.                                                           |

Fallbacks when the brand fonts are not available (Office documents, email): **Georgia** for headings and **Segoe UI / Arial** for text.

Rules: sentence case everywhere, no all-caps, no letter-spaced labels, nothing below 15 px on screen or 9 pt in print, body lines 60–68 characters long, left-aligned. Both fonts include Latin Extended, so Slovak, Czech and German diacritics render correctly. See `type-specimen.png`.

Both fonts are free (OFL). Download: Newsreader and Atkinson Hyperlegible Next from Google Fonts, or use the WOFF2 files in `src/assets/fonts/`.

## 6. Imagery and illustration

**Allowed:** the crescent moon, a few small still stars, the moonflower (bud, half-open, open), leaves, stems, roots, a trellis, the horizon line. Flat shapes in token colours, no outlines heavier than 2 px, no shadows.

**Banned:** brains, robots, robot hands, circuit boards, neural-network node graphs, glowing orbs, purple-pink gradient blobs, sparkle emoji, stock photos of people at laptops, screenshots of code used as decoration.

**Photography:** only real photos of the founder and of real work. No stock photography. [TODO: founder photo]

**Product visuals:** when showing a prototype, use a real screenshot on a solid night or dawn surface with generous margin; no device mock-ups with reflections.

## 7. Layout

- Left-aligned and asymmetric. A 12-column grid; text usually spans 7 columns, illustration the other 5.
- Generous whitespace; depth comes from surface colour, never from shadows.
- Corner radius encodes the kind of object: pills for buttons, near-square (6 px) for inputs, a **leaf corner** (large radius top-left and bottom-right, small on the others) only on service cards.
- No eyebrow labels above headings, no "01 / 02 / 03" numbering except for a real sequence, no arrows appended to links, no middle-dot meta strings in body text.
- A page or slide moves from night (top or start) to dawn (content, decision).

## 8. Motion

One memorable movement: the moonflower opening petal by petal. Everything else is still. Always provide a reduced-motion version that shows the final, open state. No looping, flashing or bouncing elements.

## 9. Applying the brand

| Touchpoint      | Guidance                                                                                | Asset                            |
| --------------- | --------------------------------------------------------------------------------------- | -------------------------------- |
| Social avatar   | Mark tile on night-950; safe for circular crop                                          | `../social/avatars/`             |
| Social banners  | Night sky, crescent, bud on the horizon, tagline; keep text clear of the avatar overlap | `../social/banners/`             |
| Social posts    | Use the templates; one idea per post                                                    | `../social/post-templates/`      |
| Email signature | HTML signature, no extra images or quotes                                               | `../social/email-signature.html` |
| Link previews   | Default OG image                                                                        | `../social/og-default.png`       |
| Sales           | One-pager and deck                                                                      | `../sales/`                      |
| Press           | Boilerplate, fact sheet, founder bio                                                    | `../launch/press-kit/`           |

## 10. Checklist before anything goes out

- [ ] Logo is one of the provided files, with clear space respected.
- [ ] Text sits on a solid token colour and uses an approved pair.
- [ ] Headline is in sentence case; tagline and subline are quoted exactly.
- [ ] No banned words (see [voice-and-tone.md](voice-and-tone.md)) and no banned imagery.
- [ ] No invented clients, logos, testimonials, metrics or prices. Unknowns stay as visible `[TODO: ...]` until the owner fills them.
- [ ] "Done" is explained as a prototype, tests, a demo and open decisions.
- [ ] Slovak text has been reviewed by a native speaker.
- [ ] The owner has approved it. Nothing is published or sent without that approval.
