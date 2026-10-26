---
status: draft            # draft | reviewed | approved (approved is set by the owner)
languages: [en, sk]          # master languages in this file; EN text is final
planned_languages: [cs, de, es]   # adapted by separate agents from this file, same keys
native_review: {sk: required, cs: required, de: required, es: required}
claims_checked_against:
  - owner brief (2026-10-22): brand, tagline, process, founder story, services, hosting, analytics
  - repository state 2026-10-22: empty repo, no product code, no existing brand docs
source_of_truth: this file holds all page copy; design.md holds layout and visual direction
---

# Moonbloom Labs: website copy and SEO metadata

## 0. How to use this file

- EN is the master and its text is final. CS, DE and ES will be adapted from it with the **same keys** (see section 11.1 for their keyword starting points and section 8 for legal adaptation notes).
- Every page has an `EN` block and an `SK` block with **identical keys**. Developers can copy each block into a typed i18n dictionary (`en.ts` / `sk.ts`). Keys are stable; do not rename them without updating both languages.
- `seo.title` is the **complete** `<title>` and already contains the brand. Render it verbatim: do **not** apply the `{page} · Moonbloom Labs` suffix from architecture.md §6, or the brand appears twice. If the architect prefers the suffix, cut everything from " | " onwards and keep the ≤ 60 total.
- `seo.title` ≤ 60 characters, `seo.description` ≤ 155 characters (checked by script, see section 13).
- `og.title` / `og.description` are for social cards. `h1` is the single H1 on the page.
- Text in `[TODO: ...]` is a **visible placeholder**. Do not remove it silently. Either replace it with confirmed content or hide the whole element that depends on it (see section 12).
- `keywords.*` are targeting notes for content and internal links. They are **not** a `<meta name="keywords">` tag. No SEO tool was connected, so search demand is an estimate (see section 11).
- Typography: EN uses sentence case for headings. SK should use a non-breaking space (U+00A0) after one-letter prepositions and conjunctions (a, i, k, o, s, u, v, z) when rendered.
- Slugs:

| Page | EN | SK | Note |
|---|---|---|---|
| Home | `/` | `/sk/` | |
| How it works (anchor) | `/#how-it-works` | `/sk/#ako-to-funguje` | as in design.md |
| Services | `/services/` | `/sk/sluzby/` | |
| RAG & AI search | `/services/rag-ai-search/` | `/sk/sluzby/rag-a-ai-vyhladavanie/` | as in design + architecture |
| Knowledge management | `/services/knowledge-management/` | `/sk/sluzby/sprava-znalosti/` | |
| Chatbots & AI assistants | `/services/chatbots-ai-assistants/` | `/sk/sluzby/chatboty-a-ai-asistenti/` | as in design.md |
| Gamification | `/services/gamification/` | `/sk/sluzby/gamifikacia/` | |
| AI integration | `/services/ai-integration/` | `/sk/sluzby/ai-integracia/` | **differs from design** (`integracia-ai`): marketing recommends `ai-integracia` to match the H1 and the target keyword "AI integrácia"; architect decides |
| DevOps & cloud | `/services/devops-cloud/` | `/sk/sluzby/devops-a-cloud/` | as in design.md |
| About | `/about/` | `/sk/o-nas/` | |
| Contact | `/contact/` | `/sk/kontakt/` | |
| Thank you | `/thanks/` | `/sk/dakujeme/` | architecture.md §4.1 (design.md says `/contact/sent/`) |
| Privacy | `/privacy-policy/` | `/sk/ochrana-sukromia/` | architecture.md §4.1 (design.md says `/privacy/`, `/sk/ochrana-osobnych-udajov/`) |
| Imprint | `/imprint/` | `/sk/prevadzkovatel/` | **conflict**: architecture says `/sk/impressum/`; marketing and design recommend `/sk/prevadzkovatel/` ("Impressum" reads German in SK) |
| 404 | `/404.html` | one bilingual 404 | architecture.md §6 |

Internal links inside copy (privacy note, 404, thank-you) use the paths above. If the architect changes a route, update the two `privacy_note` links.

Recommended: add `hreflang` en / sk / x-default (→ EN) on every page pair. Thank-you and 404 pages get `noindex`.

## 0.1 Context and assumptions

```yaml
context:
  project_docs_read: ["no CLAUDE.md/README/brand docs in repo", "docs/plan/design.md (designer, aligned at end)", "docs/plan/architecture.md (routes §4.1, content model §5, SEO §6, contact form §7)"]
  brand_voice_source: "owner brief (calm, warm, confident, technically precise, a little playful)"
  product_truth_verified_via: ["owner brief only"]
  assumptions:
    - "Founder name 'Michal Maxian' is used (owner provided it as their identity)."
    - "The offer is a prototype by the next morning, not production software; scope is agreed in an evening intake (call or written brief)."
    - "A senior architect plans and reviews each build; the copy does not claim a human watches the build all night."
    - "'Tests' means automated tests delivered with the prototype."
    - "NDA: copy says 'we can sign an NDA'; owner must confirm this is offered."
    - "Typical tech stack wording in FAQ is a description of usual choices, not a commitment; owner must confirm."
    - "Contact email is unknown; placeholder [TODO: contact email]."
    - "Form submissions are delivered to a mailbox (no CRM, no database)."
    - "STU lab name is not given; copy says 'an AI lab at STU' without naming it."
```

## 0.2 Voice and terminology

- Use: plant, bloom, overnight, morning, ready, done, prototype, decide, approve, refine.
- Never use: grind, hustle, 24/7, nonstop, night shift, revolutionary, guarantee or guaranteed. SK equivalents are also banned: drina, makať, nonstop, 24/7, nočná zmena, revolučný, garancia, garantujeme.
- "Done" in the subline is always followed nearby by what "done" means: a working **prototype**, its tests, a demo and open decisions.
- Fixed terms (EN → SK): prototype → prototyp; AI agents → AI agenti; open decisions → otvorené rozhodnutia; evening intake → večerný úvodný hovor; refine → doladiť; approve → schváliť; path to production → cesta do produkcie.
- SK addresses the reader formally (vykanie): "vy", "váš", second-person plural verbs, with lowercase "vy" on the web.

---

## 1. Global: header, footer, language switcher, skip link

### EN

```yaml
common:
  skip_link: "Skip to content"
  brand_name: "Moonbloom Labs"
  logo_alt: "Moonbloom Labs home"
  nav:
    aria_label: "Main navigation"
    services: "Services"
    how_it_works: "How it works"
    about: "About"
    contact: "Contact"
    cta: "Plant your idea"
    menu_open: "Open menu"
    menu_close: "Close menu"
  lang_switcher:
    aria_label: "Language"
    current_label: "EN"
    en_label: "English"
    sk_label: "Slovenčina"
    switch_to_other: "Prečítajte si po slovensky"
  footer:
    tagline: "Ideas bloom overnight."
    blurb: "An AI studio that turns an idea into a working prototype by the next morning. A human decides; agents build."
    nav_heading: "Studio"
    services_heading: "Services"
    legal_heading: "Legal"
    privacy: "Privacy policy"
    imprint: "Imprint"
    contact_line: "Write to us: [TODO: contact email]"
    copyright: "© 2026 Moonbloom Labs"
    principle_line: "A human approves every release."
  breadcrumbs:
    home: "Home"
    services: "Services"
  common_cta:
    plant_idea: "Plant your idea"
    learn_more: "Learn more"
    back_home: "Back to home"
```

### SK

```yaml
common:
  skip_link: "Preskočiť na obsah"
  brand_name: "Moonbloom Labs"
  logo_alt: "Moonbloom Labs – úvod"
  nav:
    aria_label: "Hlavná navigácia"
    services: "Služby"
    how_it_works: "Ako to funguje"
    about: "O nás"
    contact: "Kontakt"
    cta: "Zasaďte svoj nápad"
    menu_open: "Otvoriť menu"
    menu_close: "Zavrieť menu"
  lang_switcher:
    aria_label: "Jazyk"
    current_label: "SK"
    en_label: "English"
    sk_label: "Slovenčina"
    switch_to_other: "Read in English"
  footer:
    tagline: "Nápady rozkvitnú cez noc."
    blurb: "AI štúdio, ktoré z nápadu do rána urobí funkčný prototyp. Rozhoduje človek, stavajú agenti."
    nav_heading: "Štúdio"
    services_heading: "Služby"
    legal_heading: "Právne informácie"
    privacy: "Ochrana osobných údajov"
    imprint: "Údaje o prevádzkovateľovi"
    contact_line: "Napíšte nám: [TODO: contact email]"
    copyright: "© 2026 Moonbloom Labs"
    principle_line: "Každé vydanie schvaľuje človek."
  breadcrumbs:
    home: "Úvod"
    services: "Služby"
  common_cta:
    plant_idea: "Zasaďte svoj nápad"
    learn_more: "Viac o službe"
    back_home: "Späť na úvod"
```

---

## 2. Home (`/`, `/sk/`)

Hero H1 is the tagline as briefed. The tagline does not name the category, so the first sentence of `hero.body` carries "AI studio" and "working prototype" for search and clarity. design.md bans eyebrows above headings, so `hero.eyebrow` is **optional**. Leave it unrendered, or use it only as the `pages.hero.eyebrow` field the content model expects. The page reads complete without it.

Headline alternatives (EN), if the owner wants the category inside the H1 later:
1. "Ideas bloom overnight." (chosen, per brief)
2. "Your idea, a working prototype by morning."
3. "Plant an idea tonight. Review a working prototype tomorrow."

### EN

```yaml
home:
  seo:
    title: "Moonbloom Labs: AI prototypes, built overnight"
    description: "Describe your idea in the evening. AI agents build overnight; in the morning you review a working prototype, its tests and open decisions."
  og:
    title: "Ideas bloom overnight | Moonbloom Labs"
    description: "Plant an idea at night. Wake up to a working prototype, its tests, a short demo and the decisions that are yours to make."
  h1: "Ideas bloom overnight."
  hero:
    eyebrow: "AI studio for working prototypes"
    title: "Ideas bloom overnight."
    subtitle: "Plant an idea at night. Wake up to done."
    body: "Moonbloom Labs is an AI studio for working prototypes. Tell us your idea in a short evening call; AI agents build it overnight, following a plan a senior architect has reviewed. In the morning you review a working prototype, its tests and a short list of decisions only you can make."
    note: "A prototype, not a production system. We agree the scope in the evening so it fits one night."
    cta_primary: "Plant your idea"
    cta_secondary: "See how it works"
    image_alt: "[TODO: hero illustration alt text, set when the designer picks the image]"
  how:
    anchor_id: "how-it-works"
    title: "From evening idea to morning prototype"
    intro: "One evening, one night, one morning. Then you decide."
    steps:
      - key: "evening"
        label: "Evening"
        title: "You describe the idea"
        body: "In a short call or a written brief you tell us what you want to see working. Together we cut it to a scope that fits one night."
      - key: "night"
        label: "Night"
        title: "Agents build and test"
        body: "AI agents write the code and its tests, following the plan a senior architect reviewed before the build started."
      - key: "morning"
        label: "Morning"
        title: "Prototype, tests, demo, questions"
        body: "You receive a working prototype, its tests, a short demo and a list of open questions and decisions."
      - key: "decision"
        label: "Decision"
        title: "Approve or refine"
        body: "You decide what happens next: approve it, refine it in another night, or plan the path to production."
  services:
    title: "What we build"
    intro: "Six areas where an overnight prototype answers the question that matters first: does this idea work?"
    cards:
      - key: "rag_ai_search"
        title: "RAG & AI search"
        blurb: "Ask your company documents questions and get answers with citations to the source."
      - key: "knowledge_management"
        title: "Knowledge management"
        blurb: "Turn scattered docs, wikis and chats into one searchable, maintained knowledge base."
      - key: "chatbots_ai_assistants"
        title: "Chatbots & AI assistants"
        blurb: "Assistants for customer support, an internal helpdesk or onboarding new colleagues."
      - key: "gamification"
        title: "Gamification"
        blurb: "Game mechanics for learning, onboarding, engagement and financial literacy."
      - key: "ai_integration"
        title: "AI integration"
        blurb: "Language models and agents connected to your existing systems, APIs and workflows."
      - key: "devops_cloud"
        title: "DevOps & cloud"
        blurb: "CI/CD, Kubernetes, AWS, infrastructure as code and observability, so prototypes can become production systems."
    link_label: "Learn more"
    all_link: "All services"
  why:
    title: "Why Moonbloom"
    pillars:
      - key: "human_decides"
        title: "A human decides, agents build"
        body: "AI agents do the building. People set the goal, review the result and approve every step. Nothing ships without human approval."
      - key: "senior_architect"
        title: "A senior architect behind every build"
        body: "Every build is planned and reviewed by an AI and cloud architect with more than 20 years in cloud, DevOps and AI/ML."
      - key: "production_path"
        title: "A path to production"
        body: "Prototypes come with tests and a clear structure. When you approve one, our DevOps and cloud work can take it to production."
  morning:
    title: "What you get in the morning"
    intro: "Everything you need to make a decision over your first coffee."
    items:
      - key: "prototype"
        title: "A working prototype"
        body: "Something you can click through, call or try, not a slide deck."
      - key: "tests"
        title: "Tests"
        body: "Automated tests that show what works and what was checked."
      - key: "demo"
        title: "A short demo"
        body: "A walkthrough of what was built and how to try it yourself."
      - key: "decisions"
        title: "Open decisions and questions"
        body: "A short list of choices the agents should not make for you, ready for your answers."
  proof:
    # Render ONLY when a real, approved case study exists. Hide the whole section until then.
    title: "Ideas that have bloomed"
    body: "[TODO: case study]"
  faq:
    title: "Questions before you plant"
    items:
      - key: "scope"
        q: "What fits into one night?"
        a: "One clear idea with a core flow you can try. For example: a chat over a sample of your documents, an assistant for one support topic, or a connection between two systems. If your idea is bigger, we build the part that answers your most important question first and plan the rest as further nights."
      - key: "not_good_enough"
        q: "What if the prototype isn't good enough?"
        a: "Tell us what is missing and we refine it, usually in another night. The morning list of open decisions is there so you can steer before more gets built. A prototype is a fast way to learn whether an idea works; it is not a promise that every idea will."
      - key: "confidentiality"
        q: "Is my idea and my data kept confidential?"
        a: "Yes. We treat what you share as confidential and can sign an NDA before you go into detail. Where possible we build with sample or anonymised data, and we agree with you up front which AI services may process it."
      - key: "tech"
        q: "Which technologies do you use?"
        a: "Whatever fits your environment. Typical choices are Python or TypeScript, language models from established providers or open-weight models, and container-based deployment on AWS or Kubernetes. If your team has a standard stack, we build on it."
      - key: "ownership"
        q: "Who owns the code?"
        a: "You do. The prototype code and its documentation are yours. [TODO: confirm IP terms]"
      - key: "pricing"
        q: "How much does it cost?"
        a: "[TODO: pricing]"
      - key: "languages"
        q: "Do you work in English and Slovak?"
        a: "Yes. The intake call, the brief, the prototype's interface and the documentation can be in English or Slovak."
      - key: "after"
        q: "What happens after the prototype?"
        a: "You decide. Keep it as a demo, refine it over further nights, or turn it into a production system with our DevOps and cloud work: CI/CD, infrastructure as code, monitoring and hardening."
  final_cta:
    title: "Have an idea for tonight?"
    body: "Tell us about it. We'll reply to agree the scope and an evening to start."
    button: "Plant your idea"
    secondary_link: "Book a call"
  keywords:
    primary: "AI prototype overnight"
    secondary: ["AI prototyping studio", "rapid AI prototype", "AI agents build prototype", "AI proof of concept"]
```

### SK

```yaml
home:
  seo:
    title: "Moonbloom Labs: AI prototyp cez noc"
    description: "Večer nám opíšete nápad, cez noc ho AI agenti postavia a ráno si pozriete funkčný prototyp, testy a zoznam otvorených rozhodnutí."
  og:
    title: "Nápady rozkvitnú cez noc | Moonbloom Labs"
    description: "Večer zasaďte nápad. Ráno vás čaká funkčný prototyp, testy, krátke demo a rozhodnutia, ktoré patria vám."
  h1: "Nápady rozkvitnú cez noc."
  hero:
    eyebrow: "AI štúdio pre funkčné prototypy"
    title: "Nápady rozkvitnú cez noc."
    subtitle: "Večer zasaďte nápad. Ráno je hotovo."
    body: "Moonbloom Labs je AI štúdio pre funkčné prototypy. Večer nám v krátkom hovore predstavíte svoj nápad, cez noc ho AI agenti postavia podľa plánu, ktorý skontroloval skúsený architekt, a ráno si pozriete funkčný prototyp, jeho testy a krátky zoznam rozhodnutí, ktoré môžete urobiť iba vy."
    note: "Ide o prototyp, nie o produkčný systém. Rozsah dohodneme večer tak, aby sa zmestil do jednej noci."
    cta_primary: "Zasaďte svoj nápad"
    cta_secondary: "Pozrite sa, ako to funguje"
    image_alt: "[TODO: hero illustration alt text, set when the designer picks the image]"
  how:
    anchor_id: "ako-to-funguje"
    title: "Od večerného nápadu k rannému prototypu"
    intro: "Jeden večer, jedna noc, jedno ráno. Potom rozhodnete vy."
    steps:
      - key: "evening"
        label: "Večer"
        title: "Opíšete nápad"
        body: "V krátkom hovore alebo písomnom zadaní nám poviete, čo chcete vidieť fungovať. Spolu ho zúžime na rozsah, ktorý sa stihne za jednu noc."
      - key: "night"
        label: "Noc"
        title: "Agenti stavajú a testujú"
        body: "AI agenti napíšu kód aj testy podľa plánu, ktorý pred začatím skontroloval skúsený architekt."
      - key: "morning"
        label: "Ráno"
        title: "Prototyp, testy, demo, otázky"
        body: "Dostanete funkčný prototyp, jeho testy, krátke demo a zoznam otvorených otázok a rozhodnutí."
      - key: "decision"
        label: "Rozhodnutie"
        title: "Schváliť alebo doladiť"
        body: "O ďalšom kroku rozhodujete vy: prototyp schválite, necháte ho doladiť ďalšiu noc alebo naplánujeme cestu do produkcie."
  services:
    title: "Čo staviame"
    intro: "Šesť oblastí, v ktorých prototyp cez noc rýchlo odpovie na prvú dôležitú otázku: funguje tento nápad?"
    cards:
      - key: "rag_ai_search"
        title: "RAG a AI vyhľadávanie"
        blurb: "Pýtajte sa firemných dokumentov a dostávajte odpovede s odkazom na zdroj."
      - key: "knowledge_management"
        title: "Správa znalostí"
        blurb: "Roztrúsené dokumenty, wiki a chaty spojíme do jednej prehľadávateľnej a udržiavanej znalostnej bázy."
      - key: "chatbots_ai_assistants"
        title: "Chatboty a AI asistenti"
        blurb: "Asistenti pre zákaznícku podporu, interný helpdesk či zaškolenie nových kolegov."
      - key: "gamification"
        title: "Gamifikácia"
        blurb: "Herné mechaniky pre vzdelávanie, onboarding, zapojenie ľudí a finančnú gramotnosť."
      - key: "ai_integration"
        title: "AI integrácia"
        blurb: "Jazykové modely a agenti prepojení s vašimi systémami, API a pracovnými postupmi."
      - key: "devops_cloud"
        title: "DevOps a cloud"
        blurb: "CI/CD, Kubernetes, AWS, infraštruktúra ako kód a monitoring, aby sa z prototypu mohol stať produkčný systém."
    link_label: "Viac o službe"
    all_link: "Všetky služby"
  why:
    title: "Prečo Moonbloom"
    pillars:
      - key: "human_decides"
        title: "Rozhoduje človek, stavajú agenti"
        body: "Stavbu robia AI agenti. Ľudia určujú cieľ, kontrolujú výsledok a schvaľujú každý krok. Bez schválenia človekom sa nič nenasadí."
      - key: "senior_architect"
        title: "Za každou stavbou skúsený architekt"
        body: "Každú stavbu plánuje a kontroluje AI a cloudový architekt s viac ako 20 rokmi praxe v cloude, DevOps a AI/ML."
      - key: "production_path"
        title: "Cesta do produkcie"
        body: "Prototypy majú testy a prehľadnú štruktúru. Keď niektorý schválite, s naším DevOps a cloudom ho môžeme dostať do produkcie."
  morning:
    title: "Čo dostanete ráno"
    intro: "Všetko, čo potrebujete na rozhodnutie pri prvej rannej káve."
    items:
      - key: "prototype"
        title: "Funkčný prototyp"
        body: "Niečo, čo si viete preklikať, zavolať alebo vyskúšať. Nie prezentáciu."
      - key: "tests"
        title: "Testy"
        body: "Automatizované testy, ktoré ukazujú, čo funguje a čo sa overilo."
      - key: "demo"
        title: "Krátke demo"
        body: "Prehliadka toho, čo vzniklo, a návod, ako si to vyskúšať sami."
      - key: "decisions"
        title: "Otvorené rozhodnutia a otázky"
        body: "Krátky zoznam volieb, ktoré by agenti nemali robiť za vás, pripravený na vaše odpovede."
  proof:
    # Render ONLY when a real, approved case study exists. Hide the whole section until then.
    title: "Nápady, ktoré už rozkvitli"
    body: "[TODO: case study]"
  faq:
    title: "Skôr než zasadíte: časté otázky"
    items:
      - key: "scope"
        q: "Čo sa zmestí do jednej noci?"
        a: "Jeden jasný nápad so základným postupom, ktorý si viete vyskúšať. Napríklad chat nad vzorkou vašich dokumentov, asistent pre jednu tému podpory alebo prepojenie dvoch systémov. Ak je nápad väčší, najprv postavíme časť, ktorá odpovie na vašu najdôležitejšiu otázku, a zvyšok naplánujeme na ďalšie noci."
      - key: "not_good_enough"
        q: "Čo ak prototyp nebude dosť dobrý?"
        a: "Povedzte nám, čo chýba, a doladíme ho, zvyčajne počas ďalšej noci. Ranný zoznam otvorených rozhodnutí je práve na to, aby ste mohli smer upraviť skôr, než sa postaví viac. Prototyp je rýchly spôsob, ako zistiť, či nápad funguje. Nie je to sľub, že bude fungovať každý nápad."
      - key: "confidentiality"
        q: "Zostane môj nápad a moje dáta dôverné?"
        a: "Áno. So všetkým, čo nám poskytnete, zaobchádzame ako s dôverným a pred podrobnejšou debatou môžeme podpísať NDA. Ak sa dá, staviame na vzorových alebo anonymizovaných dátach a vopred sa s vami dohodneme, ktoré AI služby ich smú spracúvať."
      - key: "tech"
        q: "Aké technológie používate?"
        a: "Tie, ktoré sedia do vášho prostredia. Zvyčajne Python alebo TypeScript, jazykové modely od zavedených poskytovateľov alebo modely s otvorenými váhami a nasadenie v kontajneroch na AWS či Kubernetes. Ak má váš tím štandardný stack, staviame naň."
      - key: "ownership"
        q: "Komu patrí kód?"
        a: "Vám. Kód prototypu aj jeho dokumentácia sú vaše. [TODO: confirm IP terms]"
      - key: "pricing"
        q: "Koľko to stojí?"
        a: "[TODO: pricing]"
      - key: "languages"
        q: "Pracujete po anglicky aj po slovensky?"
        a: "Áno. Úvodný hovor, zadanie, rozhranie prototypu aj dokumentácia môžu byť v angličtine alebo slovenčine."
      - key: "after"
        q: "Čo nasleduje po prototype?"
        a: "Rozhodnete sa vy. Prototyp si môžete nechať ako demo, doladiť ho počas ďalších nocí alebo z neho s naším DevOps a cloudom urobiť produkčný systém: CI/CD, infraštruktúra ako kód, monitoring a zabezpečenie."
  final_cta:
    title: "Máte nápad na dnešný večer?"
    body: "Povedzte nám o ňom. Ozveme sa vám a dohodneme rozsah aj večer, kedy začneme."
    button: "Zasaďte svoj nápad"
    secondary_link: "Dohodnite si hovor"
  keywords:
    primary: "AI prototyp"
    secondary: ["AI štúdio Slovensko", "rýchly prototyp aplikácie", "AI agenti vývoj", "proof of concept AI"]
```

---

## 3. Services index (`/services/`, `/sk/sluzby/`)

### EN

```yaml
services_index:
  seo:
    title: "AI services: RAG, chatbots, integration | Moonbloom Labs"
    description: "RAG search, knowledge bases, AI assistants, gamification, AI integration and DevOps. Each starts as a working prototype built overnight."
  og:
    title: "What we build overnight | Moonbloom Labs"
    description: "Six services, one way of working: you describe the idea in the evening and review a working prototype in the morning."
  h1: "What we build overnight"
  intro: "Every service starts the same way: you describe the idea in the evening, AI agents build it overnight, and in the morning you decide what happens next. When a prototype earns its place, we help take it to production."
  list_title: "Services"
  cta:
    title: "Not sure which one fits?"
    body: "Describe the problem in your own words. We'll suggest what to build first."
    button: "Plant your idea"
  keywords:
    primary: "AI development services"
    secondary: ["RAG development", "AI chatbot development", "AI integration services", "AI prototype studio"]
```

### SK

```yaml
services_index:
  seo:
    title: "AI služby: RAG, chatboty, integrácie | Moonbloom Labs"
    description: "RAG vyhľadávanie, znalostné bázy, AI asistenti, gamifikácia, AI integrácia a DevOps. Každá služba začína funkčným prototypom cez noc."
  og:
    title: "Čo staviame cez noc | Moonbloom Labs"
    description: "Šesť služieb, jeden spôsob práce: večer opíšete nápad, ráno si pozriete funkčný prototyp."
  h1: "Čo staviame cez noc"
  intro: "Každá služba začína rovnako: večer opíšete nápad, cez noc ho AI agenti postavia a ráno rozhodnete, čo ďalej. Keď sa prototyp osvedčí, pomôžeme ho dostať do produkcie."
  list_title: "Služby"
  cta:
    title: "Neviete, čo sa k vám hodí?"
    body: "Opíšte problém vlastnými slovami. Navrhneme, čím začať."
    button: "Zasaďte svoj nápad"
  keywords:
    primary: "vývoj AI riešení"
    secondary: ["RAG chatbot", "AI chatbot na mieru", "AI integrácia", "AI štúdio Slovensko"]
```

---

## 4. Service detail pages

Shared structure: `h1`, `intro`, `problem.title/body`, `overnight.title/items[]`, `after.title/body`, `fit.title/items[]`, `cta.title/button`, `jsonld_description`.

design.md adds two shared blocks to every service page: "What we need from you that evening" and the paths after the prototype. They are written once here, not per service.

#### EN

```yaml
service_common:
  needs:
    title: "What we need from you that evening"
    items:
      - "A short description of the idea and who will use it"
      - "Sample data or documents to build with, anonymised where possible"
      - "Access to a test system or API, if the prototype needs one"
  paths:
    title: "Where it can go next"
    refine: "Refine: another night on the parts you want changed"
    pilot: "Pilot: put it in front of real users with real data"
    production: "Production: deploy it properly with our DevOps & cloud work"
  overnight_note: "Typical examples. We agree the exact scope with you in the evening so it fits one night."
  breadcrumb_label: "Services"
```

#### SK

```yaml
service_common:
  needs:
    title: "Čo od vás potrebujeme v ten večer"
    items:
      - "Krátky opis nápadu a toho, kto ho bude používať"
      - "Vzorové dáta alebo dokumenty, ideálne anonymizované"
      - "Prístup k testovaciemu systému alebo API, ak ho prototyp potrebuje"
  paths:
    title: "Kam sa dá pokračovať"
    refine: "Doladenie: ďalšia noc na častiach, ktoré chcete zmeniť"
    pilot: "Pilot: nasadenie pre skutočných používateľov so skutočnými dátami"
    production: "Produkcia: poriadne nasadenie s naším DevOps a cloudom"
  overnight_note: "Ide o typické príklady. Presný rozsah s vami dohodneme večer, aby sa zmestil do jednej noci."
  breadcrumb_label: "Služby"
```

### 4.1 RAG & AI search

#### EN

```yaml
service_rag_ai_search:
  seo:
    title: "RAG chatbot over your documents | Moonbloom Labs"
    description: "A chat over your company documents that answers with citations, on private data. Working RAG prototype by the next morning."
  og:
    title: "RAG & AI search, prototyped overnight"
    description: "Ask your documents questions and get answers that point to the source. See it working on your own data in the morning."
  h1: "RAG & AI search"
  intro: "Ask your company's documents a question in plain language and get an answer that cites where it came from. Retrieval-augmented generation (RAG) lets a language model answer from your own sources instead of guessing."
  problem:
    title: "The problem"
    body: "The answer exists somewhere: in a contract, a manual, a policy or a shared drive. Finding it means keyword search, opening ten files and asking a colleague. General-purpose chatbots cannot see your documents, and answers without sources are hard to trust."
  overnight:
    title: "What we deliver overnight"
    items:
      - "A working chat over a representative sample of your documents"
      - "Answers that cite the source document and passage"
      - "Document ingestion for the formats in your sample (for example PDF, Word, web pages)"
      - "A small test set of real questions with the prototype's answers, so you can judge quality"
      - "A list of open decisions: model choice, hosting, access rights, which sources to add next"
  after:
    title: "After the prototype"
    body: "Once you approve the approach, we connect the full document set, add access control so people only see what they are allowed to, set up updates when documents change, and deploy it in your cloud or ours with monitoring."
  fit:
    title: "Good fit if…"
    items:
      - "Your team keeps asking the same questions about internal documents"
      - "Answers need a source someone can check"
      - "Your documents are private and must stay under your control"
      - "You want to see results on your own content before committing to a platform"
  cta:
    title: "Have documents that should answer questions?"
    button: "Plant your idea"
  jsonld_description: "Prototype of a retrieval-augmented generation (RAG) chat over a client's private documents, with answers that cite their sources, built overnight."
  keywords:
    primary: "RAG chatbot"
    secondary: ["chat with company documents", "AI document search", "RAG prototype", "private data AI search"]
```

#### SK

```yaml
service_rag_ai_search:
  seo:
    title: "RAG chatbot nad vašimi dokumentmi | Moonbloom Labs"
    description: "Chat nad firemnými dokumentmi, ktorý odpovedá s citáciou zdroja a pracuje so súkromnými dátami. Funkčný RAG prototyp do rána."
  og:
    title: "RAG a AI vyhľadávanie: prototyp cez noc"
    description: "Pýtajte sa svojich dokumentov a dostávajte odpovede s odkazom na zdroj. Ráno to uvidíte fungovať na vlastných dátach."
  h1: "RAG a AI vyhľadávanie"
  intro: "Opýtajte sa firemných dokumentov bežnou rečou a dostanete odpoveď s odkazom na to, odkiaľ pochádza. Technika RAG (retrieval-augmented generation) umožňuje jazykovému modelu odpovedať z vašich zdrojov namiesto hádania."
  problem:
    title: "Problém"
    body: "Odpoveď niekde existuje: v zmluve, príručke, smernici alebo na zdieľanom disku. Nájsť ju znamená hľadať podľa kľúčových slov, otvoriť desať súborov a spýtať sa kolegu. Bežné chatboty vaše dokumenty nevidia a odpovediam bez zdroja sa ťažko verí."
  overnight:
    title: "Čo dodáme cez noc"
    items:
      - "Funkčný chat nad reprezentatívnou vzorkou vašich dokumentov"
      - "Odpovede s citáciou zdrojového dokumentu a pasáže"
      - "Načítanie dokumentov vo formátoch z vašej vzorky (napríklad PDF, Word, webové stránky)"
      - "Malú sadu skutočných otázok s odpoveďami prototypu, aby ste vedeli posúdiť kvalitu"
      - "Zoznam otvorených rozhodnutí: výber modelu, hosting, prístupové práva, ktoré zdroje pridať ďalej"
  after:
    title: "Po prototype"
    body: "Keď prístup schválite, pripojíme celú sadu dokumentov, doplníme riadenie prístupu, aby každý videl len to, čo smie, nastavíme aktualizácie pri zmene dokumentov a nasadíme riešenie s monitoringom vo vašom alebo našom cloude."
  fit:
    title: "Hodí sa, ak…"
    items:
      - "sa váš tím stále pýta tie isté otázky k interným dokumentom,"
      - "odpovede potrebujú zdroj, ktorý si niekto vie overiť,"
      - "sú vaše dokumenty súkromné a musia zostať pod vašou kontrolou,"
      - "chcete vidieť výsledky na vlastnom obsahu skôr, než sa zaviažete k platforme."
  cta:
    title: "Máte dokumenty, ktoré by mali odpovedať na otázky?"
    button: "Zasaďte svoj nápad"
  jsonld_description: "Prototyp RAG chatu nad súkromnými dokumentmi klienta s odpoveďami, ktoré citujú zdroje, postavený cez noc."
  keywords:
    primary: "RAG chatbot"
    secondary: ["AI vyhľadávanie v dokumentoch", "chatbot nad firemnými dokumentmi", "RAG prototyp", "AI nad internými dátami"]
```

### 4.2 Knowledge management

#### EN

```yaml
service_knowledge_management:
  seo:
    title: "AI knowledge management and knowledge base | Moonbloom Labs"
    description: "Scattered docs, wikis and chats turned into one searchable, maintained knowledge base. See a working prototype the next morning."
  og:
    title: "Knowledge management, prototyped overnight"
    description: "Bring docs, wikis and chat threads into one knowledge base your team can search and keep up to date."
  h1: "Knowledge management"
  intro: "Your team's knowledge lives in documents, wikis, tickets and chat threads. We bring it together into one knowledge base that people can search, and that stays maintained instead of slowly going stale."
  problem:
    title: "The problem"
    body: "The same answer is written in three places, two of them out of date. New colleagues don't know where to look, and experienced ones become the search engine. Wikis start well and then nobody maintains them."
  overnight:
    title: "What we deliver overnight"
    items:
      - "A prototype knowledge base built from a sample of your sources (for example a wiki space, a shared folder and an exported chat channel)"
      - "Search across all of them in one place, with links back to the original"
      - "Automatic grouping by topic, with a flag on duplicates and possibly outdated pages"
      - "A suggested structure for keeping it maintained: owners, review dates, what gets archived"
      - "A list of open decisions: which sources to connect, who owns which topic, where it runs"
  after:
    title: "After the prototype"
    body: "We connect the real sources with scheduled sync, set up permissions that match your existing ones, add the maintenance workflow your team agreed on, and run it in production with monitoring and backups."
  fit:
    title: "Good fit if…"
    items:
      - "Knowledge is spread across several tools and nobody trusts any one of them"
      - "Onboarding depends on who happens to be available to answer questions"
      - "You have tried a wiki before and it went stale"
      - "You want search and maintenance, not just another place to write things down"
  cta:
    title: "Where does your team's knowledge live today?"
    button: "Plant your idea"
  jsonld_description: "Prototype of a searchable, maintained knowledge base that unifies a client's documents, wikis and chat threads, built overnight."
  keywords:
    primary: "AI knowledge management"
    secondary: ["internal knowledge base", "AI knowledge base", "searchable company wiki", "knowledge management software prototype"]
```

#### SK

```yaml
service_knowledge_management:
  seo:
    title: "Správa znalostí a znalostná báza s AI | Moonbloom Labs"
    description: "Roztrúsené dokumenty, wiki a chaty spojené do jednej prehľadávateľnej a udržiavanej znalostnej bázy. Funkčný prototyp do rána."
  og:
    title: "Správa znalostí: prototyp cez noc"
    description: "Dokumenty, wiki a chaty v jednej znalostnej báze, v ktorej váš tím ľahko hľadá a ktorú vie udržiavať aktuálnu."
  h1: "Správa znalostí"
  intro: "Znalosti vášho tímu sú v dokumentoch, wiki, tiketoch a chatoch. Spojíme ich do jednej znalostnej bázy, v ktorej sa dá hľadať a ktorá sa udržiava, namiesto toho, aby pomaly zastarávala."
  problem:
    title: "Problém"
    body: "Tá istá odpoveď je napísaná na troch miestach a dve z nich sú zastarané. Noví kolegovia nevedia, kde hľadať, a tí skúsení sa stávajú vyhľadávačom. Wiki začne dobre a potom ju nikto neudržiava."
  overnight:
    title: "Čo dodáme cez noc"
    items:
      - "Prototyp znalostnej bázy zo vzorky vašich zdrojov (napríklad časť wiki, zdieľaný priečinok a export chatového kanála)"
      - "Vyhľadávanie vo všetkých zdrojoch na jednom mieste s odkazom na originál"
      - "Automatické zoskupenie podľa tém a označenie duplicít a pravdepodobne zastaraných stránok"
      - "Návrh, ako bázu udržiavať: vlastníci tém, termíny revízií, čo sa archivuje"
      - "Zoznam otvorených rozhodnutí: ktoré zdroje pripojiť, kto vlastní ktorú tému, kde bude báza bežať"
  after:
    title: "Po prototype"
    body: "Pripojíme skutočné zdroje s pravidelnou synchronizáciou, nastavíme oprávnenia podľa tých, ktoré už máte, doplníme dohodnutý postup údržby a riešenie prevádzkujeme v produkcii s monitoringom a zálohami."
  fit:
    title: "Hodí sa, ak…"
    items:
      - "sú znalosti rozdelené v niekoľkých nástrojoch a žiadnemu z nich nikto naplno neverí,"
      - "zaškolenie nových ľudí závisí od toho, kto má práve čas odpovedať,"
      - "ste už wiki skúšali a zastarala,"
      - "nechcete len ďalšie miesto na poznámky, ale vyhľadávanie a údržbu."
  cta:
    title: "Kde dnes žijú znalosti vášho tímu?"
    button: "Zasaďte svoj nápad"
  jsonld_description: "Prototyp prehľadávateľnej a udržiavanej znalostnej bázy, ktorá spája dokumenty, wiki a chaty klienta, postavený cez noc."
  keywords:
    primary: "znalostná báza"
    secondary: ["správa znalostí vo firme", "interná wiki s AI", "AI znalostná báza", "knowledge management"]
```

### 4.3 Chatbots & AI assistants

#### EN

```yaml
service_chatbots_ai_assistants:
  seo:
    title: "AI chatbots and assistants for support | Moonbloom Labs"
    description: "AI assistants for customer support, internal helpdesk and onboarding, grounded in your content. A working prototype by the next morning."
  og:
    title: "Chatbots & AI assistants, prototyped overnight"
    description: "An assistant that answers from your own content and hands over to a person when it should. Try it in the morning."
  h1: "Chatbots & AI assistants"
  intro: "An assistant that answers questions from your own content, in your tone, and knows when to hand over to a person. For customers, for your internal helpdesk, or for new colleagues finding their way."
  problem:
    title: "The problem"
    body: "Most questions are repeats, yet each one still takes someone's time. Scripted chatbots break as soon as a question is phrased differently, and an assistant that invents answers is worse than none."
  overnight:
    title: "What we deliver overnight"
    items:
      - "A working assistant for one clearly defined use case (for example customer support for one product, or IT helpdesk basics)"
      - "Answers grounded in the content you provide, with a fallback when it doesn't know"
      - "A handover path to a person (for example an email or ticket draft)"
      - "A test conversation set covering typical and tricky questions, with the results"
      - "A list of open decisions: tone, channels, what it must never answer, where it runs"
  after:
    title: "After the prototype"
    body: "We connect it to your channels (website, Slack, Microsoft Teams or your helpdesk tool), add logging and review of conversations, set limits and guardrails you approve, and run it in production with monitoring."
  fit:
    title: "Good fit if…"
    items:
      - "Your support or helpdesk answers the same questions every week"
      - "New colleagues need a patient guide through tools and processes"
      - "You want the assistant to hand over to a human, not pretend to know"
      - "You'd rather test with real questions than read a vendor demo"
  cta:
    title: "Which questions should an assistant take off your team?"
    button: "Plant your idea"
  jsonld_description: "Prototype of an AI assistant or chatbot for customer support, internal helpdesk or onboarding, grounded in the client's own content, built overnight."
  keywords:
    primary: "AI chatbot for customer support"
    secondary: ["AI assistant development", "internal helpdesk chatbot", "onboarding assistant", "custom AI chatbot"]
```

#### SK

```yaml
service_chatbots_ai_assistants:
  seo:
    title: "AI chatboty a asistenti pre podporu | Moonbloom Labs"
    description: "AI asistenti pre zákaznícku podporu, interný helpdesk a zaškolenie, ktorí vychádzajú z vášho obsahu. Funkčný prototyp do rána."
  og:
    title: "Chatboty a AI asistenti: prototyp cez noc"
    description: "Asistent, ktorý odpovedá z vášho obsahu a vie, kedy odovzdať otázku človeku. Ráno si ho vyskúšate."
  h1: "Chatboty a AI asistenti"
  intro: "Asistent, ktorý odpovedá z vášho vlastného obsahu, vaším tónom a vie, kedy otázku odovzdať človeku. Pre zákazníkov, pre interný helpdesk alebo pre nových kolegov, ktorí sa ešte zorientúvajú."
  problem:
    title: "Problém"
    body: "Väčšina otázok sa opakuje, no každá aj tak niekomu zaberie čas. Chatboty podľa scenára zlyhajú, len čo sa niekto spýta inak, a asistent, ktorý si odpovede vymýšľa, je horší ako žiadny."
  overnight:
    title: "Čo dodáme cez noc"
    items:
      - "Funkčného asistenta pre jeden jasne vymedzený prípad použitia (napríklad podporu k jednému produktu alebo základy IT helpdesku)"
      - "Odpovede založené na obsahu, ktorý nám poskytnete, a náhradnú odpoveď, keď si asistent nie je istý"
      - "Odovzdanie človeku (napríklad koncept e-mailu alebo tiketu)"
      - "Sadu testovacích rozhovorov s typickými aj zákernými otázkami a ich výsledky"
      - "Zoznam otvorených rozhodnutí: tón, kanály, na čo nesmie nikdy odpovedať, kde bude bežať"
  after:
    title: "Po prototype"
    body: "Pripojíme ho k vašim kanálom (web, Slack, Microsoft Teams alebo váš helpdeskový nástroj), doplníme záznam a kontrolu rozhovorov, nastavíme vami schválené limity a ochranné pravidlá a prevádzkujeme ho v produkcii s monitoringom."
  fit:
    title: "Hodí sa, ak…"
    items:
      - "vaša podpora alebo helpdesk odpovedá každý týždeň na tie isté otázky,"
      - "noví kolegovia potrebujú trpezlivého sprievodcu nástrojmi a procesmi,"
      - "chcete, aby asistent odovzdal otázku človeku, a nie predstieral, že vie,"
      - "radšej testujete na skutočných otázkach, než by ste pozerali demo dodávateľa."
  cta:
    title: "Ktoré otázky by mal asistent zobrať vášmu tímu?"
    button: "Zasaďte svoj nápad"
  jsonld_description: "Prototyp AI asistenta alebo chatbota pre zákaznícku podporu, interný helpdesk či zaškolenie, založený na obsahu klienta, postavený cez noc."
  keywords:
    primary: "AI chatbot pre zákaznícku podporu"
    secondary: ["AI asistent na mieru", "chatbot pre helpdesk", "chatbot na zaškolenie zamestnancov", "vývoj chatbota"]
```

### 4.4 Gamification

#### EN

```yaml
service_gamification:
  seo:
    title: "Gamification for learning and onboarding | Moonbloom Labs"
    description: "Game mechanics for learning, onboarding, engagement and financial literacy. A playable prototype by the next morning."
  og:
    title: "Gamification, prototyped overnight"
    description: "Turn a lesson, an onboarding path or a money skill into something people want to finish. Play the prototype in the morning."
  h1: "Gamification"
  intro: "Game mechanics such as goals, progress, feedback and friendly challenge can make learning stick and onboarding feel less like paperwork. We prototype them overnight so you can play the idea before you invest in it."
  problem:
    title: "The problem"
    body: "Training gets clicked through, onboarding checklists get abandoned, and topics like personal finance feel abstract. Adding points and badges on top rarely helps; the mechanic has to fit what people are actually meant to learn or do."
  overnight:
    title: "What we deliver overnight"
    items:
      - "A playable prototype of one core mechanic (for example a learning path with levels, a scenario-based quiz or a budgeting challenge)"
      - "The rules written down: goals, scoring, progression and feedback"
      - "Tests for the rules, so scoring and progression behave as designed"
      - "A short demo of a first session from a player's point of view"
      - "A list of open decisions: audience, rewards, difficulty, what success looks like"
  after:
    title: "After the prototype"
    body: "We refine the mechanic based on how people actually play it, add content and accounts, connect it to your learning platform or app where needed, and deploy it with analytics that respect your privacy rules."
  fit:
    title: "Good fit if…"
    items:
      - "You run training or onboarding that people finish only because they must"
      - "You teach a skill, such as financial literacy, that needs practice, not just reading"
      - "You want to test a game idea with real people before commissioning a full build"
      - "You care about learning outcomes more than points and badges"
  cta:
    title: "What should people want to finish?"
    button: "Plant your idea"
  jsonld_description: "Playable prototype of game mechanics for learning, onboarding, engagement or financial literacy, with documented rules, built overnight."
  keywords:
    primary: "gamification for learning"
    secondary: ["gamified onboarding", "financial literacy game", "gamification prototype", "learning game development"]
```

#### SK

```yaml
service_gamification:
  seo:
    title: "Gamifikácia vzdelávania a onboardingu | Moonbloom Labs"
    description: "Herné mechaniky pre vzdelávanie, onboarding, zapojenie ľudí a finančnú gramotnosť. Hrateľný prototyp do rána."
  og:
    title: "Gamifikácia: prototyp cez noc"
    description: "Z lekcie, zaškolenia alebo práce s peniazmi urobíme niečo, čo chcú ľudia dokončiť. Ráno si prototyp zahráte."
  h1: "Gamifikácia"
  intro: "Herné mechaniky, ako sú ciele, postup, spätná väzba a priateľská výzva, pomáhajú, aby si ľudia učivo zapamätali a zaškolenie nepôsobilo ako papierovanie. Prototyp postavíme cez noc, aby ste si nápad zahrali skôr, než doň investujete."
  problem:
    title: "Problém"
    body: "Školenia sa preklikajú, kontrolné zoznamy pri zaškolení zostanú nedokončené a témy ako osobné financie pôsobia abstraktne. Body a odznaky navrch zriedka pomôžu. Mechanika musí sedieť na to, čo sa ľudia majú naučiť alebo urobiť."
  overnight:
    title: "Čo dodáme cez noc"
    items:
      - "Hrateľný prototyp jednej hlavnej mechaniky (napríklad vzdelávacia cesta s úrovňami, kvíz so scenármi alebo rozpočtová výzva)"
      - "Spísané pravidlá: ciele, bodovanie, postup a spätná väzba"
      - "Testy pravidiel, aby bodovanie a postup fungovali tak, ako sú navrhnuté"
      - "Krátke demo prvého hrania z pohľadu hráča"
      - "Zoznam otvorených rozhodnutí: cieľová skupina, odmeny, obtiažnosť, čo znamená úspech"
  after:
    title: "Po prototype"
    body: "Mechaniku doladíme podľa toho, ako ju ľudia skutočne hrajú, doplníme obsah a používateľské účty, podľa potreby ju prepojíme s vašou vzdelávacou platformou či aplikáciou a nasadíme s analytikou, ktorá rešpektuje vaše pravidlá ochrany súkromia."
  fit:
    title: "Hodí sa, ak…"
    items:
      - "máte školenie alebo zaškolenie, ktoré ľudia dokončia len preto, že musia,"
      - "učíte zručnosť, napríklad finančnú gramotnosť, ktorá potrebuje prax, nie iba čítanie,"
      - "chcete herný nápad otestovať so skutočnými ľuďmi skôr, než objednáte celý vývoj,"
      - "vám ide viac o výsledky učenia než o body a odznaky."
  cta:
    title: "Čo by ľudia mali chcieť dokončiť?"
    button: "Zasaďte svoj nápad"
  jsonld_description: "Hrateľný prototyp herných mechaník pre vzdelávanie, zaškolenie, zapojenie ľudí alebo finančnú gramotnosť so spísanými pravidlami, postavený cez noc."
  keywords:
    primary: "gamifikácia vzdelávania"
    secondary: ["gamifikácia onboardingu", "hra na finančnú gramotnosť", "gamifikácia vo firme", "vzdelávacia hra na mieru"]
```

### 4.5 AI integration

#### EN

```yaml
service_ai_integration:
  seo:
    title: "AI integration into your systems and APIs | Moonbloom Labs"
    description: "Language models and AI agents connected to your existing systems, APIs and workflows. A working integration prototype by morning."
  og:
    title: "AI integration, prototyped overnight"
    description: "Put a language model or an agent to work inside the systems you already use, with a person approving what matters."
  h1: "AI integration"
  intro: "The value of AI shows up when it works inside the tools you already use. We connect language models and agents to your systems, APIs and workflows, with a person approving the steps that matter."
  problem:
    title: "The problem"
    body: "People copy text between a chat window and the systems they work in. Pilots stay in a sandbox because nobody connected them to real data. And it is unclear which steps AI should do on its own and which need a human sign-off."
  overnight:
    title: "What we deliver overnight"
    items:
      - "A working integration for one workflow (for example classifying incoming emails, extracting data from documents into your system, or drafting replies for approval)"
      - "Connections to your APIs or a test copy of them"
      - "A human approval step wherever the workflow changes data or contacts someone"
      - "Tests that cover the expected inputs and the awkward ones"
      - "A list of open decisions: model and provider, cost limits, error handling, who approves what"
  after:
    title: "After the prototype"
    body: "We harden the integration: authentication, rate and cost limits, logging, retries, and monitoring. Then we deploy it into your environment through a CI/CD pipeline, so changes are reviewed and repeatable."
  fit:
    title: "Good fit if…"
    items:
      - "Your team moves information between systems by hand"
      - "You have APIs or data that a language model could put to work"
      - "You want clear human approval points, not a black box"
      - "An AI pilot is stuck and needs to touch real systems to prove itself"
  cta:
    title: "Which workflow should AI help with first?"
    button: "Plant your idea"
  jsonld_description: "Prototype integration of language models and AI agents into a client's existing systems, APIs and workflows, with human approval steps, built overnight."
  keywords:
    primary: "AI integration services"
    secondary: ["LLM integration", "AI agents for business workflows", "integrate ChatGPT-style models with API", "AI workflow automation"]
```

#### SK

```yaml
service_ai_integration:
  seo:
    title: "AI integrácia do vašich systémov a API | Moonbloom Labs"
    description: "Jazykové modely a AI agenti prepojení s vašimi systémami, API a pracovnými postupmi. Funkčný prototyp integrácie do rána."
  og:
    title: "AI integrácia: prototyp cez noc"
    description: "Jazykový model alebo agent priamo v systémoch, ktoré už používate, a dôležité kroky schvaľuje človek."
  h1: "AI integrácia"
  intro: "Hodnota AI sa ukáže, keď funguje priamo v nástrojoch, ktoré už používate. Jazykové modely a agentov prepojíme s vašimi systémami, API a pracovnými postupmi a kroky, na ktorých záleží, bude schvaľovať človek."
  problem:
    title: "Problém"
    body: "Ľudia kopírujú text medzi oknom chatu a systémami, v ktorých pracujú. Pilotné projekty zostávajú v testovacom prostredí, lebo ich nikto neprepojil so skutočnými dátami. A nie je jasné, čo má AI robiť sama a čo musí schváliť človek."
  overnight:
    title: "Čo dodáme cez noc"
    items:
      - "Funkčnú integráciu pre jeden pracovný postup (napríklad triedenie prichádzajúcich e-mailov, prenos údajov z dokumentov do vášho systému alebo návrhy odpovedí na schválenie)"
      - "Prepojenie s vašimi API alebo s ich testovacou kópiou"
      - "Schválenie človekom všade, kde postup mení dáta alebo niekoho kontaktuje"
      - "Testy pre očakávané aj nepríjemné vstupy"
      - "Zoznam otvorených rozhodnutí: model a poskytovateľ, limity nákladov, spracovanie chýb, kto čo schvaľuje"
  after:
    title: "Po prototype"
    body: "Integráciu spevníme: autentifikácia, limity volaní a nákladov, logovanie, opakované pokusy a monitoring. Potom ju nasadíme do vášho prostredia cez CI/CD pipeline, aby boli zmeny skontrolované a opakovateľné."
  fit:
    title: "Hodí sa, ak…"
    items:
      - "váš tím prenáša informácie medzi systémami ručne,"
      - "máte API alebo dáta, ktoré by jazykový model vedel využiť,"
      - "chcete jasné body schválenia človekom, nie čiernu skrinku,"
      - "AI pilot uviazol a potrebuje sa dotknúť skutočných systémov, aby sa osvedčil."
  cta:
    title: "S ktorým postupom by vám mala AI pomôcť najskôr?"
    button: "Zasaďte svoj nápad"
  jsonld_description: "Prototyp integrácie jazykových modelov a AI agentov do existujúcich systémov, API a pracovných postupov klienta so schvaľovaním človekom, postavený cez noc."
  keywords:
    primary: "AI integrácia"
    secondary: ["integrácia jazykových modelov", "AI agenti pre firmy", "automatizácia procesov s AI", "napojenie AI na API"]
```

### 4.6 DevOps & cloud

#### EN

```yaml
service_devops_cloud:
  seo:
    title: "DevOps and cloud: CI/CD, Kubernetes, AWS | Moonbloom Labs"
    description: "CI/CD, Kubernetes, AWS, infrastructure as code and observability, so a prototype can become a production system you can run."
  og:
    title: "DevOps & cloud: from prototype to production"
    description: "Pipelines, infrastructure as code and monitoring that take an approved prototype to production, step by approved step."
  h1: "DevOps & cloud"
  intro: "A prototype proves an idea; production needs more. We set up CI/CD, Kubernetes or managed cloud services on AWS, infrastructure as code and observability, so the things you approve can run reliably."
  problem:
    title: "The problem"
    body: "Prototypes often live on one laptop or one manually configured server. Nobody is sure how to deploy them safely, how to roll back, or how to tell that something is broken before a user does."
  overnight:
    title: "What we deliver overnight"
    items:
      - "A CI/CD pipeline that builds, tests and deploys one service to a test environment you provide"
      - "Infrastructure as code for that environment (for example Terraform), reviewed and repeatable"
      - "Basic observability: logs, health checks and a first dashboard"
      - "A written runbook: how to deploy, roll back and check health"
      - "A list of open decisions: environments, access, cost limits, what needs alerts"
  after:
    title: "After the prototype"
    body: "We extend the setup to staging and production, add secrets management, backups, alerting and security hardening, and hand over documentation your team can operate. Every production change goes through review and your approval."
  fit:
    title: "Good fit if…"
    items:
      - "You have a prototype or product that is deployed by hand"
      - "You run on AWS or Kubernetes, or plan to"
      - "You want infrastructure you can read, review and recreate"
      - "You need to know something broke before your users tell you"
  cta:
    title: "Ready to take a prototype further?"
    button: "Plant your idea"
  jsonld_description: "DevOps and cloud engineering (CI/CD, Kubernetes, AWS, infrastructure as code, observability) that takes approved prototypes to production."
  keywords:
    primary: "DevOps and cloud services"
    secondary: ["CI/CD setup", "Kubernetes consulting", "AWS infrastructure as code", "prototype to production"]
```

#### SK

```yaml
service_devops_cloud:
  seo:
    title: "DevOps a cloud: CI/CD, Kubernetes, AWS | Moonbloom Labs"
    description: "CI/CD, Kubernetes, AWS, infraštruktúra ako kód a monitoring, aby sa z prototypu mohol stať produkčný systém, ktorý viete prevádzkovať."
  og:
    title: "DevOps a cloud: z prototypu do produkcie"
    description: "Pipeline, infraštruktúra ako kód a monitoring, ktoré schválený prototyp dostanú do produkcie, krok za schváleným krokom."
  h1: "DevOps a cloud"
  intro: "Prototyp overí nápad, produkcia však potrebuje viac. Nastavíme CI/CD, Kubernetes alebo spravované cloudové služby na AWS, infraštruktúru ako kód a monitoring, aby to, čo schválite, bežalo spoľahlivo."
  problem:
    title: "Problém"
    body: "Prototypy často bežia na jednom notebooku alebo ručne nastavenom serveri. Nikto presne nevie, ako ich bezpečne nasadiť, ako sa vrátiť k predchádzajúcej verzii ani ako zistiť, že sa niečo pokazilo, skôr než to zistí používateľ."
  overnight:
    title: "Čo dodáme cez noc"
    items:
      - "CI/CD pipeline, ktorá zostaví, otestuje a nasadí jednu službu do testovacieho prostredia, ktoré nám poskytnete"
      - "Infraštruktúru ako kód pre toto prostredie (napríklad Terraform), skontrolovanú a opakovateľnú"
      - "Základný monitoring: logy, kontroly dostupnosti a prvý dashboard"
      - "Písaný postup (runbook): ako nasadiť, vrátiť zmenu a overiť stav"
      - "Zoznam otvorených rozhodnutí: prostredia, prístupy, limity nákladov, čo má posielať upozornenia"
  after:
    title: "Po prototype"
    body: "Nastavenie rozšírime na staging a produkciu, doplníme správu tajomstiev, zálohy, upozornenia a bezpečnostné spevnenie a odovzdáme dokumentáciu, podľa ktorej to váš tím zvládne prevádzkovať. Každá zmena v produkcii prechádza kontrolou a vaším schválením."
  fit:
    title: "Hodí sa, ak…"
    items:
      - "máte prototyp alebo produkt, ktorý sa nasadzuje ručne,"
      - "bežíte na AWS alebo Kubernetes, alebo to plánujete,"
      - "chcete infraštruktúru, ktorú si viete prečítať, skontrolovať a znova vytvoriť,"
      - "potrebujete vedieť, že sa niečo pokazilo, skôr než vám to povedia používatelia."
  cta:
    title: "Chcete posunúť prototyp ďalej?"
    button: "Zasaďte svoj nápad"
  jsonld_description: "DevOps a cloudové inžinierstvo (CI/CD, Kubernetes, AWS, infraštruktúra ako kód, monitoring), ktoré schválené prototypy dostane do produkcie."
  keywords:
    primary: "DevOps služby"
    secondary: ["CI/CD nasadenie", "Kubernetes konzultácie", "AWS infraštruktúra ako kód", "z prototypu do produkcie"]
```

---

## 5. About (`/about/`, `/sk/o-nas/`)

### EN

```yaml
about:
  seo:
    title: "About Moonbloom Labs: a human decides, agents build"
    description: "Moonbloom Labs was founded by an AI and cloud architect with 20+ years in cloud, DevOps and AI/ML, co-founder of an AI lab at STU."
  og:
    title: "About Moonbloom Labs"
    description: "Why we build prototypes overnight, who stands behind every build, and the principles we work by."
  h1: "A human decides. Agents build."
  intro: "Moonbloom Labs is an AI studio that turns an idea into a working prototype by the next morning. AI agents do the building; a person sets the direction and approves every step."
  founder:
    title: "Who is behind it"
    name: "Michal Maxian"
    role: "Founder, AI & cloud architect"
    body:
      - "Moonbloom Labs was founded by Michal Maxian, an AI and cloud architect with more than 20 years of experience in cloud, DevOps and AI/ML. He is a co-founder of an AI lab at the Slovak University of Technology in Bratislava (STU)."
      - "Waiting weeks to find out whether an idea works is often the slowest part of a project. AI agents can now write and test a lot of code in one night. Moonbloom puts that to work with an architect's judgement around it: the scope is agreed with you, the build is planned and reviewed, and every decision that matters stays with people."
    photo_alt: "Portrait of Michal Maxian, founder of Moonbloom Labs"
    photo: "[TODO: founder photo]"
  principles:
    title: "How we work"
    items:
      - key: "human_decides"
        title: "A human decides"
        body: "Agents build; people decide. You approve the scope in the evening and the result in the morning, and nothing ships without human approval."
      - key: "transparent"
        title: "Transparent"
        body: "You see what was built, how it was tested and what is still open. The morning list of decisions shows exactly where your judgement is needed."
      - key: "secure_by_default"
        title: "Secure by default"
        body: "We treat your ideas and data as confidential, use sample or anonymised data where we can, and agree up front which services may process them."
      - key: "honest_scope"
        title: "Honest scope"
        body: "One night builds a prototype, not a finished product. We tell you in the evening what fits, and in the morning what is still missing."
  cta:
    title: "Let's see what your idea looks like by morning."
    button: "Plant your idea"
  keywords:
    primary: "AI studio Slovakia"
    secondary: ["AI architect Slovakia", "AI prototyping studio Bratislava", "human in the loop AI development"]
```

### SK

```yaml
about:
  seo:
    title: "O nás: rozhoduje človek, stavajú agenti | Moonbloom Labs"
    description: "Moonbloom Labs založil AI a cloudový architekt s 20+ rokmi praxe v cloude, DevOps a AI/ML, spoluzakladateľ AI laboratória na STU."
  og:
    title: "O Moonbloom Labs"
    description: "Prečo staviame prototypy cez noc, kto stojí za každou stavbou a podľa akých zásad pracujeme."
  h1: "Rozhoduje človek. Stavajú agenti."
  intro: "Moonbloom Labs je AI štúdio, ktoré z nápadu do rána urobí funkčný prototyp. Stavbu robia AI agenti, smer určuje a každý krok schvaľuje človek."
  founder:
    title: "Kto za tým stojí"
    name: "Michal Maxian"
    role: "Zakladateľ, AI a cloudový architekt"
    body:
      - "Moonbloom Labs založil Michal Maxian, AI a cloudový architekt s viac ako 20 rokmi skúseností v oblasti cloudu, DevOps a AI/ML. Je spoluzakladateľom AI laboratória na Slovenskej technickej univerzite v Bratislave (STU)."
      - "Čakať týždne na to, či nápad funguje, býva často najpomalšou časťou projektu. AI agenti dnes dokážu za jednu noc napísať a otestovať veľa kódu. Moonbloom to využíva a dopĺňa úsudkom architekta: rozsah dohodneme s vami, stavba je naplánovaná a skontrolovaná a každé dôležité rozhodnutie zostáva na ľuďoch."
    photo_alt: "Portrét Michala Maxiana, zakladateľa Moonbloom Labs"
    photo: "[TODO: founder photo]"
  principles:
    title: "Ako pracujeme"
    items:
      - key: "human_decides"
        title: "Rozhoduje človek"
        body: "Agenti stavajú, ľudia rozhodujú. Večer schválite rozsah, ráno výsledok a bez schválenia človekom sa nič nenasadí."
      - key: "transparent"
        title: "Transparentne"
        body: "Vidíte, čo vzniklo, ako sa to testovalo a čo je ešte otvorené. Ranný zoznam rozhodnutí presne ukazuje, kde je potrebný váš úsudok."
      - key: "secure_by_default"
        title: "Bezpečne od začiatku"
        body: "S vašimi nápadmi a dátami zaobchádzame ako s dôvernými, kde sa dá, používame vzorové alebo anonymizované dáta a vopred sa dohodneme, ktoré služby ich smú spracúvať."
      - key: "honest_scope"
        title: "Poctivý rozsah"
        body: "Za jednu noc vznikne prototyp, nie hotový produkt. Večer vám povieme, čo sa zmestí, a ráno, čo ešte chýba."
  cta:
    title: "Pozrime sa, ako bude váš nápad vyzerať ráno."
    button: "Zasaďte svoj nápad"
  keywords:
    primary: "AI štúdio Slovensko"
    secondary: ["AI architekt", "vývoj AI Bratislava", "AI prototypy na mieru"]
```

---

## 6. Contact (`/contact/`, `/sk/kontakt/`)

Form fields follow architecture.md §7: `name` (required, ≤100), `email` (required), `company` (optional, ≤100), `message` (required, 20–4000; copy keys say `idea`), `language` (`en|sk`, default = page locale), honeypot `website` (visually hidden, `tabindex=-1`, `autocomplete=off`), optional Turnstile. Server errors arrive as `?error=invalid|captcha|delivery|method|rate`; map them to `status.error_*` (`rate` → `status.rate_limited`). Success redirects to the thank-you page, so `status.success_*` is used only if a JS submit is added later.

### EN

```yaml
contact:
  seo:
    title: "Plant your idea | Contact Moonbloom Labs"
    description: "Describe your idea and we'll reply to agree the scope and an evening to start. In English or Slovak."
  og:
    title: "Plant your idea with Moonbloom Labs"
    description: "Tell us what you'd like to see working. We'll reply to agree the scope that fits one night."
  h1: "Plant your idea"
  intro: "Tell us what you'd like to see working. A few sentences are enough. We'll reply to agree the scope and an evening for a short intake call; then the agents get to work."
  what_next:
    title: "What happens next"
    items:
      - "We read your idea and reply by email."
      - "We agree the scope and an evening for a short call or written brief."
      - "Agents build overnight; you review the prototype in the morning."
  form:
    aria_label: "Contact form"
    required_hint: "Fields marked * are required."
    name:
      label: "Your name *"
      placeholder: "Jane Novak"
    email:
      label: "Email *"
      placeholder: "jane@company.com"
      help: "We'll only use it to reply to you."
    company:
      label: "Company (optional)"
      placeholder: "Company name"
    idea:
      label: "Your idea *"
      placeholder: "For example: a chat that answers questions from our internal manuals, with links to the source."
      help: "What should work in the morning, and who will use it? Please don't include passwords or confidential data here."
    language:
      label: "Preferred language *"
      option_en: "English"
      option_sk: "Slovak"
    honeypot:
      label: "Leave this field empty"
    submit: "Plant your idea"
    submitting: "Sending…"
    privacy_note: "We use your details only to reply to your message. See our [privacy policy](/privacy-policy/)."
  validation:
    name_required: "Please tell us your name."
    email_required: "Please enter your email so we can reply."
    email_invalid: "That email address doesn't look right. Please check it."
    idea_required: "Please describe your idea in a sentence or two."
    idea_too_short: "Could you add a little more detail? At least {min} characters; a sentence or two is enough."
    idea_too_long: "That's more than we can take in one message. Please shorten it to {max} characters."
    name_too_long: "Please shorten your name to {max} characters."
    language_required: "Please choose a language."
    form_errors_summary: "Please check the highlighted fields."
  status:
    success_title: "Your idea is planted."
    success_body: "Thank you. We'll reply by email to agree the scope and an evening to start."
    failure_title: "Your message wasn't sent."
    failure_body: "Something went wrong on our side. Please try again, or write to us at [TODO: contact email]."
    rate_limited: "You've sent several messages in a short time. Please wait a few minutes and try again."
    error_invalid: "Some fields need another look. Please check them and send again."
    error_captcha: "We couldn't confirm the security check. Please try again."
    error_delivery: "Your message wasn't delivered. Please try again, or write to us at [TODO: contact email]."
    error_method: "Something went wrong with the form. Please reload the page and try again."
    error_noscript_generic: "Your message wasn't sent. Please check the fields and try again, or write to us at [TODO: contact email]."
  turnstile_note: "This form uses Cloudflare Turnstile to keep out spam."
  talk:
    line: "Prefer to talk? [Book a call](mailto:[TODO: contact email]?subject=Book%20a%20call%20%E2%80%93%20Moonbloom%20Labs) and tell us when suits you."
    mailto_subject: "Book a call – Moonbloom Labs"
    mailto_body: "Hello, I'd like to talk about an idea. Times that suit me: "
  keywords:
    primary: "AI prototype contact"
    secondary: ["start AI prototype", "AI studio contact"]
```

### SK

```yaml
contact:
  seo:
    title: "Zasaďte svoj nápad | Kontakt Moonbloom Labs"
    description: "Opíšte nám svoj nápad. Ozveme sa, dohodneme rozsah a večer, kedy začneme. Po slovensky alebo po anglicky."
  og:
    title: "Zasaďte svoj nápad v Moonbloom Labs"
    description: "Napíšte nám, čo chcete vidieť fungovať. Ozveme sa a dohodneme rozsah, ktorý sa zmestí do jednej noci."
  h1: "Zasaďte svoj nápad"
  intro: "Napíšte nám, čo chcete vidieť fungovať. Stačí pár viet. Ozveme sa, dohodneme rozsah a večer na krátky úvodný hovor a potom sa do práce pustia agenti."
  what_next:
    title: "Čo bude nasledovať"
    items:
      - "Prečítame si váš nápad a odpovieme e-mailom."
      - "Dohodneme rozsah a večer na krátky hovor alebo písomné zadanie."
      - "Agenti cez noc stavajú, ráno si prototyp pozriete."
  form:
    aria_label: "Kontaktný formulár"
    required_hint: "Polia označené * sú povinné."
    name:
      label: "Vaše meno *"
      placeholder: "Jana Nováková"
    email:
      label: "E-mail *"
      placeholder: "jana@firma.sk"
      help: "Použijeme ho iba na odpoveď."
    company:
      label: "Firma (nepovinné)"
      placeholder: "Názov firmy"
    idea:
      label: "Váš nápad *"
      placeholder: "Napríklad: chat, ktorý odpovedá na otázky z našich interných príručiek a odkazuje na zdroj."
      help: "Čo má ráno fungovať a kto to bude používať? Prosím, neuvádzajte sem heslá ani dôverné údaje."
    language:
      label: "Preferovaný jazyk *"
      option_en: "Angličtina"
      option_sk: "Slovenčina"
    honeypot:
      label: "Toto pole nevypĺňajte"
    submit: "Zasaďte svoj nápad"
    submitting: "Odosiela sa…"
    privacy_note: "Vaše údaje použijeme iba na odpoveď na vašu správu. Viac v [zásadách ochrany osobných údajov](/sk/ochrana-sukromia/)."
  validation:
    name_required: "Napíšte nám, prosím, svoje meno."
    email_required: "Zadajte, prosím, e-mail, aby sme vám mohli odpovedať."
    email_invalid: "Táto e-mailová adresa nevyzerá správne. Skontrolujte ju, prosím."
    idea_required: "Opíšte, prosím, svoj nápad jednou-dvoma vetami."
    idea_too_short: "Pridáte ešte trochu podrobností? Aspoň {min} znakov, stačí jedna-dve vety."
    idea_too_long: "To je viac, než sa zmestí do jednej správy. Skráťte ju, prosím, na {max} znakov."
    name_too_long: "Skráťte, prosím, meno na {max} znakov."
    language_required: "Vyberte, prosím, jazyk."
    form_errors_summary: "Skontrolujte, prosím, zvýraznené polia."
  status:
    success_title: "Váš nápad je zasadený."
    success_body: "Ďakujeme. Ozveme sa e-mailom a dohodneme rozsah aj večer, kedy začneme."
    failure_title: "Správa sa neodoslala."
    failure_body: "Niečo sa pokazilo na našej strane. Skúste to, prosím, znova alebo nám napíšte na [TODO: contact email]."
    rate_limited: "V krátkom čase ste poslali niekoľko správ. Počkajte, prosím, pár minút a skúste to znova."
    error_invalid: "Niektoré polia treba skontrolovať. Opravte ich, prosím, a odošlite znova."
    error_captcha: "Bezpečnostnú kontrolu sa nepodarilo overiť. Skúste to, prosím, znova."
    error_delivery: "Správa sa nedoručila. Skúste to, prosím, znova alebo nám napíšte na [TODO: contact email]."
    error_method: "Pri formulári sa niečo pokazilo. Obnovte, prosím, stránku a skúste to znova."
    error_noscript_generic: "Správa sa neodoslala. Skontrolujte, prosím, polia a skúste to znova alebo nám napíšte na [TODO: contact email]."
  turnstile_note: "Formulár používa Cloudflare Turnstile na ochranu pred spamom."
  talk:
    line: "Radšej sa porozprávate? [Dohodnite si hovor](mailto:[TODO: contact email]?subject=Dohodnutie%20hovoru%20%E2%80%93%20Moonbloom%20Labs) a napíšte nám, kedy sa vám to hodí."
    mailto_subject: "Dohodnutie hovoru – Moonbloom Labs"
    mailto_body: "Dobrý deň, chcem sa porozprávať o nápade. Hodí sa mi: "
  keywords:
    primary: "AI prototyp kontakt"
    secondary: ["objednať AI prototyp", "AI štúdio kontakt"]
```

---

## 7. Thank-you page (`/thanks/`, `/sk/dakujeme/`, `noindex`)

### EN

```yaml
thank_you:
  seo:
    title: "Thank you | Moonbloom Labs"
    description: "Your idea is planted. We'll reply by email to agree the scope and an evening to start."
  og:
    title: "Your idea is planted"
    description: "We'll reply by email to agree the scope and an evening to start."
  h1: "Your idea is planted."
  body: "Thank you for writing to us. We'll read your idea and reply by email to agree the scope and an evening for a short intake call."
  next_title: "While you wait"
  next_items:
    - "Think about who will try the prototype in the morning."
    - "Gather a few sample documents, questions or data we could build with. Anonymised is best."
    - "Note the one question the prototype must answer for you."
  links:
    how: "See how it works"
    services: "Browse services"
    home: "Back to home"
```

### SK

```yaml
thank_you:
  seo:
    title: "Ďakujeme | Moonbloom Labs"
    description: "Váš nápad je zasadený. Ozveme sa e-mailom a dohodneme rozsah aj večer, kedy začneme."
  og:
    title: "Váš nápad je zasadený"
    description: "Ozveme sa e-mailom a dohodneme rozsah aj večer, kedy začneme."
  h1: "Váš nápad je zasadený."
  body: "Ďakujeme, že ste nám napísali. Prečítame si váš nápad a ozveme sa e-mailom, aby sme dohodli rozsah a večer na krátky úvodný hovor."
  next_title: "Kým čakáte"
  next_items:
    - "Premyslite si, kto si prototyp ráno vyskúša."
    - "Pripravte niekoľko vzorových dokumentov, otázok alebo dát, s ktorými môžeme stavať. Najlepšie anonymizovaných."
    - "Zapíšte si jednu otázku, na ktorú vám prototyp musí odpovedať."
  links:
    how: "Pozrite sa, ako to funguje"
    services: "Prehľad služieb"
    home: "Späť na úvod"
```

---

## 8. Privacy policy (`/privacy-policy/`, `/sk/ochrana-sukromia/`)

**[TODO: legal review]**: this is a plain-language draft, not legal advice. It must be reviewed before launch, or immediately after if the owner accepts the risk. Facts marked TODO must be confirmed.

Adaptation notes for CS / DE / ES (keep keys and section order):
- The controller is the same Slovak entity in every language. Translate the field names, not the jurisdiction.
- `rights`: name the reader's local supervisory authority as an example only if the adapting agent is sure of it, and keep the Slovak authority as the lead authority. Examples to verify: CZ ÚOOÚ (uoou.gov.cz); DE the competent Landesdatenschutzbehörde; ES AEPD (aepd.es).
- Cite GDPR articles in the local format (DE "Art. 6 Abs. 1 lit. b DSGVO", ES "art. 6.1.b) RGPD", CS "čl. 6 odst. 1 písm. b) GDPR").
- DE readers expect the heading "Datenschutzerklärung"; ES "Política de privacidad"; CS "Zásady ochrany osobních údajů".

### EN

```yaml
privacy:
  seo:
    title: "Privacy policy | Moonbloom Labs"
    description: "How Moonbloom Labs handles personal data: what we collect through the contact form, why, how long we keep it and your GDPR rights."
  og:
    title: "Privacy policy | Moonbloom Labs"
    description: "Plain-language privacy policy: contact form data used only to reply, cookieless analytics, your GDPR rights."
  h1: "Privacy policy"
  review_flag: "[TODO: legal review]"
  updated: "Last updated: [TODO: date of publication]"
  intro: "We keep this short and plain. We collect as little personal data as we can and use it only for the purposes described here."
  sections:
    - key: "controller"
      title: "Who is responsible for your data"
      body: "The controller of your personal data is [TODO: company legal name], ID (IČO): [TODO: IČO], registered at [TODO: registered address], Slovakia. You can contact us about privacy at [TODO: contact email]."
    - key: "contact_form"
      title: "What we collect through the contact form"
      body: "When you send the contact form, we receive your name, email address, company (if you give it), your description of the idea and your preferred language. We use this information only to reply to you and to discuss the work you asked about. We do not use it for newsletters or marketing, and we do not sell it."
    - key: "legal_basis"
      title: "Why we are allowed to process it"
      body: "We process this data to take steps at your request before a possible contract (Article 6(1)(b) GDPR) and, for keeping our correspondence, on the basis of our legitimate interest in being able to follow up on the conversation (Article 6(1)(f) GDPR)."
    - key: "storage"
      title: "Where it is stored and for how long"
      body: "Form messages are delivered to our business email mailbox and stored there. [TODO: confirm email provider and where the mailbox is hosted] We keep the messages for as long as we are talking to you and then for [TODO: retention period], unless the law requires us to keep them longer or you ask us to delete them sooner."
    - key: "hosting"
      title: "Website hosting"
      body: "This website is hosted by Websupport s.r.o. in Slovakia. When you visit it, the server processes technical data such as your IP address and browser type in order to deliver the pages and keep them secure. [TODO: confirm server log retention with Websupport]"
    - key: "analytics"
      title: "Analytics without cookies"
      body: "We use Cloudflare Web Analytics to count visits and see which pages are read. It does not set cookies and does not use your browser's local storage. The data is processed by Cloudflare, Inc. as our processor and is reported to us only in aggregate. [TODO: confirm Cloudflare data processing terms and any transfer outside the EU]"
    - key: "spam_protection"
      title: "Spam protection on the form"
      body: "The contact form may use Cloudflare Turnstile to tell people from bots. When you interact with the form, Turnstile processes technical signals such as your IP address and browser characteristics; it is provided by Cloudflare, Inc. as our processor. We use it on the basis of our legitimate interest in keeping the form free of spam (Article 6(1)(f) GDPR). [TODO: confirm Turnstile is enabled at launch, its data processing terms and that it sets no cookies]"
    - key: "cookies"
      title: "Cookies"
      body: "This website does not use cookies for analytics or advertising. [TODO: confirm no other cookies are set, e.g. by the form or the language switcher]"
    - key: "recipients"
      title: "Who else sees your data"
      body: "Only the providers named above, acting on our behalf: our hosting provider, our email provider and Cloudflare for analytics and spam protection. We do not share your data with anyone else unless the law requires it."
    - key: "rights"
      title: "Your rights"
      body: "You have the right to access your data, have it corrected or deleted, restrict or object to its processing, and receive it in a portable format. Write to [TODO: contact email] and we will respond within one month. You also have the right to lodge a complaint with a data protection supervisory authority, in particular in the EU country where you live or work. Our lead authority is the Office for Personal Data Protection of the Slovak Republic (Úrad na ochranu osobných údajov SR, dataprotection.gov.sk)."
    - key: "changes"
      title: "Changes to this policy"
      body: "If we change how we handle personal data, we will update this page and the date at the top."
```

### SK

```yaml
privacy:
  seo:
    title: "Ochrana osobných údajov | Moonbloom Labs"
    description: "Ako Moonbloom Labs spracúva osobné údaje: čo zbierame cez kontaktný formulár, prečo, ako dlho ich uchovávame a aké máte práva podľa GDPR."
  og:
    title: "Ochrana osobných údajov | Moonbloom Labs"
    description: "Zrozumiteľne o ochrane údajov: údaje z formulára iba na odpoveď, analytika bez cookies, vaše práva podľa GDPR."
  h1: "Ochrana osobných údajov"
  review_flag: "[TODO: legal review]"
  updated: "Posledná aktualizácia: [TODO: date of publication]"
  intro: "Píšeme stručne a zrozumiteľne. Zbierame čo najmenej osobných údajov a používame ich iba na účely opísané nižšie."
  sections:
    - key: "controller"
      title: "Kto zodpovedá za vaše údaje"
      body: "Prevádzkovateľom vašich osobných údajov je [TODO: company legal name], IČO: [TODO: IČO], so sídlom [TODO: registered address], Slovensko. V otázkach ochrany údajov nás kontaktujte na [TODO: contact email]."
    - key: "contact_form"
      title: "Čo zbierame cez kontaktný formulár"
      body: "Keď odošlete kontaktný formulár, dostaneme vaše meno, e-mailovú adresu, názov firmy (ak ho uvediete), opis nápadu a preferovaný jazyk. Tieto údaje použijeme iba na to, aby sme vám odpovedali a prebrali s vami prácu, o ktorú máte záujem. Nepoužívame ich na newslettre ani marketing a nepredávame ich."
    - key: "legal_basis"
      title: "Na akom základe ich spracúvame"
      body: "Údaje spracúvame, aby sme na vašu žiadosť vykonali opatrenia pred prípadným uzavretím zmluvy (čl. 6 ods. 1 písm. b) GDPR), a uchovávanie korešpondencie na základe nášho oprávneného záujmu nadviazať na rozhovor (čl. 6 ods. 1 písm. f) GDPR)."
    - key: "storage"
      title: "Kde ich uchovávame a ako dlho"
      body: "Správy z formulára sa doručujú do našej firemnej e-mailovej schránky a uchovávame ich tam. [TODO: confirm email provider and where the mailbox is hosted] Správy uchovávame počas komunikácie s vami a potom [TODO: retention period], ak zákon nevyžaduje dlhšiu lehotu alebo ak nás nepožiadate o skoršie vymazanie."
    - key: "hosting"
      title: "Hosting webu"
      body: "Tento web hostí spoločnosť Websupport s.r.o. na Slovensku. Pri návšteve server spracúva technické údaje, napríklad IP adresu a typ prehliadača, aby mohol stránky doručiť a chrániť. [TODO: confirm server log retention with Websupport]"
    - key: "analytics"
      title: "Analytika bez cookies"
      body: "Na počítanie návštev a zistenie, ktoré stránky sa čítajú, používame Cloudflare Web Analytics. Nenastavuje cookies a nepoužíva lokálne úložisko vášho prehliadača. Údaje spracúva spoločnosť Cloudflare, Inc. ako náš sprostredkovateľ a nám ich poskytuje iba v súhrnnej podobe. [TODO: confirm Cloudflare data processing terms and any transfer outside the EU]"
    - key: "spam_protection"
      title: "Ochrana formulára pred spamom"
      body: "Kontaktný formulár môže používať Cloudflare Turnstile, ktorý rozlišuje ľudí od robotov. Pri práci s formulárom Turnstile spracúva technické signály, napríklad IP adresu a vlastnosti prehliadača. Poskytuje ho spoločnosť Cloudflare, Inc. ako náš sprostredkovateľ. Používame ho na základe oprávneného záujmu chrániť formulár pred spamom (čl. 6 ods. 1 písm. f) GDPR). [TODO: confirm Turnstile is enabled at launch, its data processing terms and that it sets no cookies]"
    - key: "cookies"
      title: "Cookies"
      body: "Tento web nepoužíva cookies na analytiku ani reklamu. [TODO: confirm no other cookies are set, e.g. by the form or the language switcher]"
    - key: "recipients"
      title: "Kto ďalší vidí vaše údaje"
      body: "Iba uvedení poskytovatelia, ktorí konajú v našom mene: poskytovateľ hostingu, poskytovateľ e-mailu a Cloudflare pre analytiku a ochranu pred spamom. Nikomu inému vaše údaje neposkytujeme, ak to nevyžaduje zákon."
    - key: "rights"
      title: "Vaše práva"
      body: "Máte právo na prístup k svojim údajom, na ich opravu alebo vymazanie, na obmedzenie spracúvania, právo namietať a právo na prenosnosť údajov. Napíšte nám na [TODO: contact email] a odpovieme do jedného mesiaca. Máte tiež právo podať sťažnosť dozornému orgánu na ochranu údajov, najmä v krajine EÚ, kde žijete alebo pracujete. Na Slovensku je to Úrad na ochranu osobných údajov Slovenskej republiky (dataprotection.gov.sk)."
    - key: "changes"
      title: "Zmeny týchto zásad"
      body: "Ak zmeníme spôsob, akým spracúvame osobné údaje, aktualizujeme túto stránku aj dátum v jej úvode."
```

---

## 9. Imprint (`/imprint/`, `/sk/prevadzkovatel/`)

**[TODO: legal review]**: confirm which register applies (Obchodný register vs. Živnostenský register) and whether the company is a VAT payer.

Adaptation notes for CS / DE / ES (same keys; the operator is the same Slovak entity):
- **DE: [TODO: legal review: DE imprint = "Impressum" per § 5 DDG (Digitale-Dienste-Gesetz, replaced § 5 TMG in May 2024)].** Because the site targets German-speaking business customers, the Impressum must be easy to reach from every page. It needs: full legal name and legal form, address, a fast electronic contact (email, plus a phone number or contact form, to be confirmed), the register court and number, the VAT ID, and the person authorised to represent the company. Add keys `representative_label/value` and `phone_label/value` to **all** languages if the lawyer requires them, to keep key parity. Heading and nav label: "Impressum". Slug suggestion: `/de/impressum/`.
- CS: heading "Údaje o provozovateli" or "Provozovatel webu"; slug `/cs/provozovatel/`.
- ES: heading "Aviso legal" (LSSI-CE, art. 10); slug `/es/aviso-legal/`. [TODO: legal review]
- EN `imprint` labels are intentionally generic ("Company ID", "Tax ID", "VAT ID") so they map to IČO/DIČ/IČ DPH, IČO/DIČ (CS), USt-IdNr. (DE) and NIF/CIF-IVA (ES) without changing keys.

### EN

```yaml
imprint:
  seo:
    title: "Imprint | Moonbloom Labs"
    description: "Company details of the operator of moonbloomlabs.com: legal name, company ID, registered address and contact."
  og:
    title: "Imprint | Moonbloom Labs"
    description: "Company details of the operator of moonbloomlabs.com."
  h1: "Imprint"
  review_flag: "[TODO: legal review]"
  fields:
    operator_label: "Operator"
    operator_value: "[TODO: company legal name]"
    ico_label: "Company ID (IČO)"
    ico_value: "[TODO: IČO]"
    dic_label: "Tax ID (DIČ)"
    dic_value: "[TODO: DIČ]"
    vat_label: "VAT ID (IČ DPH)"
    vat_value: "[TODO: IČ DPH or 'not a VAT payer']"
    address_label: "Registered address"
    address_value: "[TODO: registered address]"
    register_label: "Registration"
    register_value: "[TODO: register entry, e.g. Business Register of the District Court ..., Section ..., Insert No. ...]"
    contact_label: "Contact"
    contact_value: "[TODO: contact email]"
    hosting_label: "Hosting"
    hosting_value: "Websupport s.r.o., Slovakia"
  trade_name_note: "Moonbloom Labs is the trade name used by [TODO: company legal name]."
```

### SK

```yaml
imprint:
  seo:
    title: "Údaje o prevádzkovateľovi | Moonbloom Labs"
    description: "Údaje o prevádzkovateľovi webu moonbloomlabs.com: obchodné meno, IČO, sídlo a kontakt."
  og:
    title: "Údaje o prevádzkovateľovi | Moonbloom Labs"
    description: "Údaje o prevádzkovateľovi webu moonbloomlabs.com."
  h1: "Údaje o prevádzkovateľovi"
  review_flag: "[TODO: legal review]"
  fields:
    operator_label: "Prevádzkovateľ"
    operator_value: "[TODO: company legal name]"
    ico_label: "IČO"
    ico_value: "[TODO: IČO]"
    dic_label: "DIČ"
    dic_value: "[TODO: DIČ]"
    vat_label: "IČ DPH"
    vat_value: "[TODO: IČ DPH or 'not a VAT payer']"
    address_label: "Sídlo"
    address_value: "[TODO: registered address]"
    register_label: "Zápis"
    register_value: "[TODO: register entry, e.g. Obchodný register Okresného súdu ..., oddiel ..., vložka č. ...]"
    contact_label: "Kontakt"
    contact_value: "[TODO: contact email]"
    hosting_label: "Hosting"
    hosting_value: "Websupport s.r.o., Slovensko"
  trade_name_note: "Moonbloom Labs je označenie, pod ktorým vystupuje [TODO: company legal name]."
```

---

## 10. 404 page (`noindex`)

### EN

```yaml
not_found:
  seo:
    title: "Page not found | Moonbloom Labs"
    description: "This page hasn't bloomed yet. Head back to the home page or plant your idea."
  og:
    title: "Page not found | Moonbloom Labs"
    description: "This page hasn't bloomed yet."
  h1: "This idea hasn't bloomed yet."
  body: "The page you're looking for isn't here. Maybe it was moved, or maybe it's still a seed. Either way, these paths are in full bloom:"
  links:
    home: "Back to home"
    services: "Our services"
    contact: "Plant your idea"
  code_label: "Error 404"
```

### SK

```yaml
not_found:
  seo:
    title: "Stránka sa nenašla | Moonbloom Labs"
    description: "Táto stránka ešte nerozkvitla. Vráťte sa na úvod alebo nám zasaďte svoj nápad."
  og:
    title: "Stránka sa nenašla | Moonbloom Labs"
    description: "Táto stránka ešte nerozkvitla."
  h1: "Tento nápad ešte nerozkvitol."
  body: "Stránka, ktorú hľadáte, tu nie je. Možno sa presunula, alebo je to zatiaľ len semienko. Tieto cesty však kvitnú naplno:"
  links:
    home: "Späť na úvod"
    services: "Naše služby"
    contact: "Zasaďte svoj nápad"
  code_label: "Chyba 404"
```

---

## 11. Structured data (JSON-LD text) and keyword notes

Only description texts are given here; frontend-dev builds the JSON-LD. Do **not** add `offers`/price, `aggregateRating`, `review`, `award` or `founder.sameAs` links until they are confirmed. FAQPage markup is optional: Google shows FAQ rich results only for government and health sites since 2023, so it gives little benefit here.

### EN

```yaml
jsonld:
  organization:
    name: "Moonbloom Labs"
    url: "https://moonbloomlabs.com/"
    slogan: "Ideas bloom overnight."
    description: "Moonbloom Labs is an AI studio that turns an idea into a working prototype by the next morning. The client describes the idea in the evening, AI agents build and test it overnight, and in the morning the client reviews a working prototype, its tests and a list of open decisions. A human decides; agents build."
    founder_name: "Michal Maxian"
    area_served: "[TODO: confirm area served, e.g. Slovakia, European Union]"
    email: "[TODO: contact email]"
    legal_name: "[TODO: company legal name]"
  services:
    rag_ai_search: "Prototype of a retrieval-augmented generation (RAG) chat over a client's private documents, with answers that cite their sources, built overnight."
    knowledge_management: "Prototype of a searchable, maintained knowledge base that unifies a client's documents, wikis and chat threads, built overnight."
    chatbots_ai_assistants: "Prototype of an AI assistant or chatbot for customer support, internal helpdesk or onboarding, grounded in the client's own content, built overnight."
    gamification: "Playable prototype of game mechanics for learning, onboarding, engagement or financial literacy, with documented rules, built overnight."
    ai_integration: "Prototype integration of language models and AI agents into a client's existing systems, APIs and workflows, with human approval steps, built overnight."
    devops_cloud: "DevOps and cloud engineering (CI/CD, Kubernetes, AWS, infrastructure as code, observability) that takes approved prototypes to production."
```

### SK

```yaml
jsonld:
  organization:
    name: "Moonbloom Labs"
    url: "https://moonbloomlabs.com/sk/"
    slogan: "Nápady rozkvitnú cez noc."
    description: "Moonbloom Labs je AI štúdio, ktoré z nápadu do rána urobí funkčný prototyp. Klient večer opíše nápad, AI agenti ho cez noc postavia a otestujú a ráno si klient pozrie funkčný prototyp, jeho testy a zoznam otvorených rozhodnutí. Rozhoduje človek, stavajú agenti."
    founder_name: "Michal Maxian"
    area_served: "[TODO: confirm area served, e.g. Slovakia, European Union]"
    email: "[TODO: contact email]"
    legal_name: "[TODO: company legal name]"
  services:
    rag_ai_search: "Prototyp RAG chatu nad súkromnými dokumentmi klienta s odpoveďami, ktoré citujú zdroje, postavený cez noc."
    knowledge_management: "Prototyp prehľadávateľnej a udržiavanej znalostnej bázy, ktorá spája dokumenty, wiki a chaty klienta, postavený cez noc."
    chatbots_ai_assistants: "Prototyp AI asistenta alebo chatbota pre zákaznícku podporu, interný helpdesk či zaškolenie, založený na obsahu klienta, postavený cez noc."
    gamification: "Hrateľný prototyp herných mechaník pre vzdelávanie, zaškolenie, zapojenie ľudí alebo finančnú gramotnosť so spísanými pravidlami, postavený cez noc."
    ai_integration: "Prototyp integrácie jazykových modelov a AI agentov do existujúcich systémov, API a pracovných postupov klienta so schvaľovaním človekom, postavený cez noc."
    devops_cloud: "DevOps a cloudové inžinierstvo (CI/CD, Kubernetes, AWS, infraštruktúra ako kód, monitoring), ktoré schválené prototypy dostane do produkcie."
```

### 11.1 Keyword starting points for CS, DE, ES (for the adapting agents)

These are unvalidated estimates to start from (no SEO tool connected). The adapting agents should localise them and decide by local search usage, not translate them word for word. Brand/hook term in brackets.

```yaml
keywords_other_languages:
  cs:   # hook: "přes noc"; native_review: required
    home: ["AI prototyp", "AI studio", "prototyp aplikace přes noc", "AI agenti vývoj"]
    services_index: ["vývoj AI řešení", "AI služby pro firmy"]
    rag_ai_search: ["RAG chatbot", "AI vyhledávání v dokumentech", "chatbot nad firemními dokumenty"]
    knowledge_management: ["znalostní báze", "správa znalostí ve firmě", "interní wiki s AI"]
    chatbots_ai_assistants: ["AI chatbot pro zákaznickou podporu", "AI asistent na míru", "chatbot pro helpdesk"]
    gamification: ["gamifikace vzdělávání", "gamifikace onboardingu", "hra na finanční gramotnost"]
    ai_integration: ["AI integrace", "integrace jazykových modelů", "automatizace procesů s AI"]
    devops_cloud: ["DevOps služby", "CI/CD", "Kubernetes konzultace", "AWS infrastruktura jako kód"]
    about: ["AI studio Česko a Slovensko", "AI architekt"]
  de:   # hook: "über Nacht"; native_review: required
    home: ["KI-Prototyp", "KI-Prototyp über Nacht", "KI-Studio", "Proof of Concept KI"]
    services_index: ["KI-Entwicklung für Unternehmen", "KI-Dienstleistungen"]
    rag_ai_search: ["RAG Chatbot", "KI-Suche in Unternehmensdokumenten", "Chat mit eigenen Dokumenten"]
    knowledge_management: ["Wissensmanagement KI", "interne Wissensdatenbank", "KI-Wissensdatenbank"]
    chatbots_ai_assistants: ["KI-Chatbot Kundenservice", "KI-Assistent für Unternehmen", "Helpdesk Chatbot"]
    gamification: ["Gamification Lernen", "Gamification Onboarding", "Lernspiel Finanzbildung"]
    ai_integration: ["KI-Integration", "LLM Integration", "KI-Agenten Unternehmen", "Prozessautomatisierung mit KI"]
    devops_cloud: ["DevOps Beratung", "CI/CD Einrichtung", "Kubernetes Beratung", "AWS Infrastructure as Code"]
    about: ["KI-Studio Slowakei", "KI-Architekt"]
  es:   # hook: "en una noche"; native_review: required
    home: ["prototipo con IA", "prototipo en una noche", "estudio de IA", "prueba de concepto IA"]
    services_index: ["desarrollo de soluciones de IA", "servicios de IA para empresas"]
    rag_ai_search: ["chatbot RAG", "búsqueda con IA en documentos", "chat con documentos de empresa"]
    knowledge_management: ["gestión del conocimiento con IA", "base de conocimiento interna"]
    chatbots_ai_assistants: ["chatbot de atención al cliente con IA", "asistente virtual con IA", "chatbot para helpdesk"]
    gamification: ["gamificación del aprendizaje", "gamificación onboarding", "juego de educación financiera"]
    ai_integration: ["integración de IA", "integración de LLM", "agentes de IA para empresas", "automatización de procesos con IA"]
    devops_cloud: ["servicios DevOps", "CI/CD", "consultoría Kubernetes", "infraestructura como código AWS"]
    about: ["estudio de IA Eslovaquia", "arquitecto de IA"]
```

Notes for the adapting agents:
- DE: use "KI" in copy and metadata (German searchers use "KI" more than "AI"); formal "Sie". Watch title length: German compounds run long against the 60-character limit.
- ES: use "IA"; choose one register (usted vs. tú) for the whole site and flag it for owner approval; default to neutral European Spanish (Spain) unless the owner targets LATAM.
- CS: formal "vy" (vykání), as in SK; do not reuse SK strings, because many words differ (e.g. SK "zaškolenie" vs CS "zaškolení", SK "hotovo" works in both).
- All: the same banned list applies in every language (no equivalents of grind, hustle, 24/7, nonstop, night shift, revolutionary, guarantee).

### Keyword notes

- Per-page primary and secondary keywords are in each page's `keywords` block.
- Volume and difficulty are **estimates**: no SEO tool was connected and no Search Console data exists for a new domain. After four to six weeks live, export Search Console queries and re-rank.
- SK reality check: many Slovak B2B buyers search in English for technical terms ("RAG", "DevOps", "Kubernetes"). The SK pages therefore keep these terms as they are, rather than inventing Slovak equivalents.
- Brand term "overnight" / "cez noc" appears in every title and description, and gives a consistent hook in search results.

---

## 12. Placeholders (all visible `[TODO: ...]`)

```yaml
placeholders:
  - id: contact_email
    text: "[TODO: contact email]"
    where: [common.footer.contact_line, contact.status.failure_body, contact.status.error_delivery, contact.status.error_noscript_generic, contact.talk.line (mailto), privacy.controller, privacy.rights, imprint.contact_value, jsonld.organization.email]
    blocks_launch: true   # the "Book a call" mailto and the failure message do not work without it
  - id: company_legal_name
    text: "[TODO: company legal name]"
    where: [privacy.controller, imprint.operator_value, imprint.trade_name_note, jsonld.organization.legal_name]
  - id: ico
    text: "[TODO: IČO]"
    where: [privacy.controller, imprint.ico_value]
  - id: dic
    text: "[TODO: DIČ]"
    where: [imprint.dic_value]
  - id: vat
    text: "[TODO: IČ DPH or 'not a VAT payer']"
    where: [imprint.vat_value]
  - id: registered_address
    text: "[TODO: registered address]"
    where: [privacy.controller, imprint.address_value]
  - id: register_entry
    text: "[TODO: register entry ...]"
    where: [imprint.register_value]
  - id: legal_review
    text: "[TODO: legal review]"
    where: [privacy.review_flag, imprint.review_flag]
  - id: privacy_date
    text: "[TODO: date of publication]"
    where: [privacy.updated]
  - id: email_provider
    text: "[TODO: confirm email provider and where the mailbox is hosted]"
    where: [privacy.storage]
  - id: retention
    text: "[TODO: retention period]"
    where: [privacy.storage]
  - id: server_logs
    text: "[TODO: confirm server log retention with Websupport]"
    where: [privacy.hosting]
  - id: cloudflare_dpa
    text: "[TODO: confirm Cloudflare data processing terms and any transfer outside the EU]"
    where: [privacy.analytics]
  - id: turnstile
    text: "[TODO: confirm Turnstile is enabled at launch, its data processing terms and that it sets no cookies]"
    where: [privacy.spam_protection]
  - id: cookies
    text: "[TODO: confirm no other cookies are set ...]"
    where: [privacy.cookies]
  - id: ip_terms
    text: "[TODO: confirm IP terms]"
    where: [home.faq.ownership]
  - id: pricing
    text: "[TODO: pricing]"
    where: [home.faq.pricing]
    launch_option: "Until pricing exists, replace the answer with: 'It depends on scope. Describe your idea and we'll send you a quote before any work starts.' Owner must approve this wording, because it promises a quote up front."
  - id: case_study
    text: "[TODO: case study]"
    where: [home.proof]
    launch_option: "Hide the whole home.proof section until a real, approved case study exists."
  - id: founder_photo
    text: "[TODO: founder photo]"
    where: [about.founder.photo]
  - id: hero_image_alt
    text: "[TODO: hero illustration alt text ...]"
    where: [home.hero.image_alt]
  - id: de_impressum
    text: "[TODO: legal review: DE imprint = Impressum per § 5 DDG]"
    where: [section 9 adaptation notes; applies to the future /de/impressum/ page]
  - id: area_served
    text: "[TODO: confirm area served ...]"
    where: [jsonld.organization.area_served]
```

---

## 13. Claims review (stage 6) and native review

### Claims review

```yaml
claims_review:
  passed:
    - claim: "Working prototype by the next morning"
      evidence: owner brief; always scoped as prototype, with the hero note "A prototype, not a production system"
    - claim: "Founder has 20+ years in cloud, DevOps and AI/ML; co-founder of an AI lab at STU"
      evidence: owner brief; lab name deliberately not stated
    - claim: "Nothing ships without human approval"
      evidence: owner brief (brand principle)
    - claim: "Hosting by Websupport s.r.o.; cookieless analytics via Cloudflare Web Analytics"
      evidence: owner brief; Cloudflare states that Web Analytics sets no cookies and uses no local storage (to be confirmed in the DPA TODO)
    - claim: "Complaint to Úrad na ochranu osobných údajov SR"
      evidence: GDPR Art. 77; Slovak supervisory authority
  fixed_during_review:
    - "Night step said agents build 'under a senior architect's eye' (implied overnight supervision) -> 'following a plan a senior architect reviewed before the build started'"
    - "Removed 'guarantee' wording from the FAQ 'not good enough' answer -> 'not a promise that every idea will'"
    - "Removed 'security review' from the post-prototype list (not specified as a service) -> 'hardening', covered by DevOps & cloud"
    - "Removed any reply-time promise from the contact page and the final CTA"
    - "Ownership answer: dropped 'once the work is paid for' (an invented term) -> plain 'You do.' + [TODO: confirm IP terms]"
  needs_owner_confirmation:
    - "FAQ confidentiality: 'can sign an NDA before you go into detail' (is NDA offered by default?)"
    - "FAQ tech: typical stack wording (Python/TypeScript, providers or open-weight models, AWS/Kubernetes)"
    - "Overnight deliverables per service are described as typical examples; confirm each is realistic for one night, in particular devops_cloud (it needs client-provided test environment access before the night starts)"
    - "Chatbot channels named in 'after' (Slack, Microsoft Teams): integration capability claimed, confirm"
    - "About story paragraph 2 is brand framing, not a founder quote; founder to approve the wording"
    - "'refine it, usually in another night': confirm refine rounds are offered this way"
  banned_word_scan: "grind, hustle, 24/7, nonstop, night shift, revolutionary, guarantee (EN); drina, makať, nočná zmena, revolučn, garanc, garantuj (SK): checked by script, 0 hits outside section 0.2 (the banned-word list itself)"
  length_check: "All seo.title ≤ 60 and seo.description ≤ 155 characters: checked by script"
  parity_check: "EN and SK blocks have identical key paths for every page: checked by script"
```

### SK items for native review (`native_review: required`)

All SK copy needs native review. Check these lines first:

1. `home.hero.subtitle`, "Večer zasaďte nápad. Ráno je hotovo.": does "Ráno je hotovo" keep the playful "Wake up to done"? Alternative: "Ráno sa zobudíte k hotovému."
2. `home.hero.title` / tagline, "Nápady rozkvitnú cez noc.": alternatives "Nápady kvitnú cez noc." or "Nápady rozkvitajú cez noc." (habitual aspect).
3. CTA "Zasaďte svoj nápad": natural in a button? Alternative: "Zasaďte nápad".
4. `home.morning.intro`, "pri prvej rannej káve": idiom check.
5. `contact.talk.mailto_body` uses the gender-neutral "chcem sa porozprávať" instead of "rád/rada by som". Check that it is polite enough.
6. `service_*.fit.items`: list items written as a continuation of "Hodí sa, ak…" (lower case, commas, final full stop). Confirm this style, or switch to standalone sentences.
7. Technical register: "spevníme" (harden), "bezpečnostné spevnenie", "správa tajomstiev" (secrets management). Would "hardening" / "správa secrets" read more naturally to Slovak engineers?
8. "Transparentne" as a principle title (adverb) next to the other noun or verb-phrase titles. Alternative: "Transparentnosť".
9. Legal terminology in the privacy policy (čl. 6 ods. 1 písm. b) GDPR, "sprostredkovateľ", "prenosnosť údajov"): legal reviewer.
10. Slug `/sk/prevadzkovatel/` vs. `/sk/udaje-o-prevadzkovatelovi/`.

### Handoffs

```yaml
handoffs:
  frontend_dev:
    - "Transfer EN/SK blocks into typed i18n dictionaries; keys are identical per page."
    - "hreflang en/sk/x-default on all page pairs; noindex on thank-you and 404."
    - "Hide home.proof until a case study exists; render [TODO] placeholders visibly in staging only if the owner decides not to launch with them."
    - "Contact form per architecture.md §7: {min}=20, {max}=4000 for message, {max}=100 for name; map ?error= codes to contact.status.error_*."
    - "Render seo.title verbatim (no automatic ' · Moonbloom Labs' suffix)."
    - "JSON-LD Organization + Service per service page using section 11; no offers/ratings/reviews."
  architect:
    - "Resolve route conflicts in the section 0 slug table: thank-you, privacy and SK imprint differ between design.md and architecture.md; SK AI integration slug."
    - "Title suffix rule vs. complete seo.title strings."
    - "Plan CS/DE/ES routes and locales (owner scope change); DE imprint at /de/impressum/."
  designer:
    - "SK service H1 'AI integrácia' (copy) vs. 'Integrácia AI' (design.md): copy.md wins for the keyword; update the design.md table."
    - "hero.eyebrow is optional, per the no-eyebrow rule; the category sits in hero.body."
    - "If design.md drafts hero/steps copy, this file's strings win; align any visual labels (Evening/Night/Morning/Decision) to these keys."
    - "Hero note (prototype, not production) must stay visible near the CTA, not in fine print."
  owner_approvals:
    - "Replace every blocking placeholder (contact email, legal entity details) or approve hiding the dependent elements."
    - "Approve or replace the pricing launch option."
    - "Confirm NDA, IP terms, tech wording, refine rounds and the per-service overnight deliverables."
    - "Legal review of privacy policy and imprint."
    - "Publishing the site (not done by marketer)."
  other_language_agents:
    - "CS, DE, ES adapt from the EN master with identical keys; use section 11.1 keywords and the section 8/9 adaptation notes; DE Impressum per § 5 DDG needs legal review."
```
