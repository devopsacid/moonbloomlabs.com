# Moonbloom Labs LinkedIn launch bundle

Everything needed to set up the company page and the founder profile and to run the LinkedIn launch, from two weeks before launch to 30 days after. English and Slovak.

**Status: draft for owner approval.** Nothing has been posted. Slovak files are drafts that **need native-speaker review**. Unknown facts are visible `[TODO: ...]` placeholders. The brand rules in [../brand/brand-guidelines.md](../brand/brand-guidelines.md) and [../brand/voice-and-tone.md](../brand/voice-and-tone.md) apply.

## How to use it

1. **Setup (one evening, before L-14):** fill in the company page from [company-page.en.md](company-page.en.md) and [company-page.sk.md](company-page.sk.md), and update the founder profile from [founder-profile.en.md](founder-profile.en.md) and [founder-profile.sk.md](founder-profile.sk.md).
2. **Run the calendar:** [launch-calendar.md](launch-calendar.md) lists every post by day, account, format, asset and copy ID.
3. **Post:** copy from [posts/posts.en.md](posts/posts.en.md) and [posts/posts.sk.md](posts/posts.sk.md) (P01–P18, each with its first comment and alt text).
4. **Engage:** use [engagement-kit.en.md](engagement-kit.en.md) and [engagement-kit.sk.md](engagement-kit.sk.md) for connection notes, DM replies, comment replies, reshare copy for friends, and hashtags.
5. **Measure:** fill in [measurement.csv](measurement.csv) every Monday.

## Files

| File                         | What it is                                                                  |
| ---------------------------- | --------------------------------------------------------------------------- |
| `company-page.{en,sk}.md`    | Page fields: tagline, About, specialties, services, button, setup checklist |
| `founder-profile.{en,sk}.md` | Headline options, About, Experience entry, Featured section, settings       |
| `launch-calendar.md`         | Day-by-day plan, L-14 to L+30, EN and SK                                    |
| `posts/posts.{en,sk}.md`     | All post copy with first comments and alt text                              |
| `posts/video-script.en.md`   | 60–90 s "What bloomed overnight" demo video script                          |
| `article.{en,sk}.md`         | Long-form article / newsletter issue 1: "Why ideas should bloom overnight"  |
| `engagement-kit.{en,sk}.md`  | Messages, replies, advocacy copy, hashtags, etiquette                       |
| `measurement.csv`            | Weekly analytics tracker (blank, no invented targets)                       |

### Assets (`assets/`)

| Asset                                        | Size               | Used in                                                     |
| -------------------------------------------- | ------------------ | ----------------------------------------------------------- |
| `carousel-how-it-works.{en,sk}.pdf`          | 6 pages, 1080×1350 | P08, founder Featured section                               |
| `carousel-what-you-get.{en,sk}.pdf`          | 6 pages, 1080×1350 | P10                                                         |
| `carousel-services.{en,sk}.pdf`              | 8 pages, 1080×1350 | P12                                                         |
| `launch-square-1200x1200.png` (+ `.sk.png`)  | 1200×1200          | P06 launch announcement                                     |
| `founder-launch-1200x1500.png` (+ `.sk.png`) | 1200×1500          | P07 launch story. Needs the founder photo.                  |
| `article-cover-1920x1080.png` (+ `.sk.png`)  | 1920×1080          | P15 article. Key content sits in the centre 1200×628.       |
| `poll-image-1200x627.png`                    | 1200×627           | P16 poll results                                            |
| `company-page-preview.png`                   | 1200×655           | Approximate check that the banner text clears the page logo |

Reused from the main bundle (not copied): page logo `../social/avatars/`, banners `../social/banners/linkedin-company-1128x191.png` and `linkedin-personal-1584x396.png`, quote card and service spotlights in `../social/post-templates/`.

Upload the PDFs as **documents**, so LinkedIn shows them as swipeable carousels, and give each one the document title listed in the post. Edit the HTML sources next to each asset and re-render with `marketing/tools/render.mjs` (see [../README.md](../README.md#editing-and-re-rendering)).

## Open placeholders (LinkedIn-specific)

| Placeholder                                                                                            | Where                                 |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------- |
| launch date (pick Tue–Thu)                                                                             | launch-calendar                       |
| demo idea, demo video, real test count, real open decisions                                            | P04, P05, video script                |
| founder photo                                                                                          | founder-launch image, founder profile |
| company vanity URL availability, organisation size and type, founded year, location, second page admin | company-page                          |
| start month, employment type, career highlights, founding year, custom profile URL                     | founder-profile                       |
| IP terms, pricing and interim pricing wording                                                          | P11, engagement kit                   |
| real poll result and any offer                                                                         | P16                                   |
| first-month recap from real results                                                                    | P18                                   |

Also see the general placeholders in [../README.md](../README.md#open-placeholders).

## Platform notes

- LinkedIn limits used (November 2026): company tagline 120, company About 2,000, personal About 2,600, headline 220, post 3,000 (about 210 characters show before "…see more"), poll question 140 with 4 options of ≤30 characters, connection note 200. Every field in this bundle was checked against these limits.
- Polls cannot carry images; P16 uses the poll image for the results post.
- Links go in the first comment. Native video and documents are uploaded directly, not linked.
- `company-page-preview.png` is an approximation. Check the real logo overlap on the live page on both desktop and phone.
