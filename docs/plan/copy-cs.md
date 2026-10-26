---
native_review: required
status: draft            # draft | reviewed | approved (approved is set by the owner)
languages: [cs]
adapted_from: docs/plan/copy.md (EN master; SK used as a sibling reference only)
claims_checked_against:
  - docs/plan/copy.md (EN master, claims review in section 13)
  - public/api/contact.php (idea length 10-5000 characters)
  - src/i18n/routes.ts (CS routes and service slugs)
---

# Moonbloom Labs: copy a SEO metadata (čeština)

- Same keys as the EN blocks in `docs/plan/copy.md`. Every `### CS` / `#### CS` block below is read by `scripts/import-copy.mjs`.
- Address: vykání, lowercase "vy" / "váš".
- Placeholders stay in English, exactly as in the EN master. The contact email is filled in as michal@maxian.sk.
- When rendered, put a non-breaking space (U+00A0) after the one-letter prepositions and conjunctions k, s, v, z, o, u, a, i.
- Numbers in `{max}` use Czech formatting when rendered (5 000, with a space).

---

## 1. Global: header, footer, language switcher, skip link

### CS

```yaml
common:
  skip_link: "Přeskočit na obsah"
  brand_name: "Moonbloom Labs"
  logo_alt: "Moonbloom Labs – úvodní stránka"
  nav:
    aria_label: "Hlavní navigace"
    services: "Služby"
    how_it_works: "Jak to funguje"
    about: "O nás"
    contact: "Kontakt"
    cta: "Zasaďte svůj nápad"
    menu_open: "Otevřít menu"
    menu_close: "Zavřít menu"
  lang_switcher:
    aria_label: "Jazyk"
    current_label: "CS"
    en_label: "English"
    sk_label: "Slovenčina"
    switch_to_other: "Read in English"
  footer:
    tagline: "Nápady rozkvetou přes noc."
    blurb: "AI studio, které z nápadu do rána udělá funkční prototyp. Rozhoduje člověk, stavějí agenti."
    nav_heading: "Studio"
    services_heading: "Služby"
    legal_heading: "Právní informace"
    privacy: "Ochrana osobních údajů"
    imprint: "Údaje o provozovateli"
    contact_line: "Napište nám: michal@maxian.sk"
    copyright: "© 2026 Moonbloom Labs"
    principle_line: "Každé vydání schvaluje člověk."
  breadcrumbs:
    home: "Úvod"
    services: "Služby"
  common_cta:
    plant_idea: "Zasaďte svůj nápad"
    learn_more: "Více o službě"
    back_home: "Zpět na úvod"
```

---

## 2. Home (`/cs/`)

### CS

```yaml
home:
  seo:
    title: "Moonbloom Labs: AI prototyp aplikace přes noc"
    description: "Večer nám popíšete nápad, přes noc ho AI agenti postaví a ráno si prohlédnete funkční prototyp, jeho testy a otevřená rozhodnutí."
  og:
    title: "Nápady rozkvetou přes noc | Moonbloom Labs"
    description: "Večer zasaďte nápad. Ráno na vás čeká funkční prototyp, jeho testy, krátké demo a rozhodnutí, která patří vám."
  h1: "Nápady rozkvetou přes noc."
  hero:
    eyebrow: "AI studio pro funkční prototypy"
    title: "Nápady rozkvetou přes noc."
    subtitle: "Večer zasaďte nápad. Ráno je hotovo."
    body: "Moonbloom Labs je AI studio pro funkční prototypy. Večer nám v krátkém hovoru představíte svůj nápad, přes noc ho AI agenti postaví podle plánu, který prověřil zkušený architekt, a ráno si prohlédnete funkční prototyp, jeho testy a krátký seznam rozhodnutí, která můžete udělat jen vy."
    note: "Jde o prototyp, ne o produkční systém. Rozsah domluvíme večer tak, aby se vešel do jedné noci."
    cta_primary: "Zasaďte svůj nápad"
    cta_secondary: "Podívejte se, jak to funguje"
    image_alt: "[TODO: hero illustration alt text, set when the designer picks the image]"
  how:
    anchor_id: "jak-to-funguje"
    title: "Od večerního nápadu k rannímu prototypu"
    intro: "Jeden večer, jedna noc, jedno ráno. Pak rozhodnete vy."
    steps:
      - key: "evening"
        label: "Večer"
        title: "Popíšete nápad"
        body: "V krátkém hovoru nebo v písemném zadání nám řeknete, co chcete vidět fungovat. Společně ho zúžíme na rozsah, který se stihne za jednu noc."
      - key: "night"
        label: "Noc"
        title: "Agenti stavějí a testují"
        body: "AI agenti napíšou kód i testy podle plánu, který zkušený architekt prověřil ještě před začátkem stavby."
      - key: "morning"
        label: "Ráno"
        title: "Prototyp, testy, demo, otázky"
        body: "Dostanete funkční prototyp, jeho testy, krátké demo a seznam otevřených otázek a rozhodnutí."
      - key: "decision"
        label: "Rozhodnutí"
        title: "Schválit, nebo doladit"
        body: "O dalším kroku rozhodujete vy: prototyp schválíte, necháte ho doladit další noc, nebo naplánujeme cestu do produkce."
  services:
    title: "Co stavíme"
    intro: "Šest oblastí, ve kterých prototyp přes noc rychle odpoví na první důležitou otázku: funguje tenhle nápad?"
    cards:
      - key: "rag_ai_search"
        title: "RAG a AI vyhledávání"
        blurb: "Ptejte se firemních dokumentů a dostávejte odpovědi s odkazem na zdroj."
      - key: "knowledge_management"
        title: "Správa znalostí"
        blurb: "Roztroušené dokumenty, wiki a chaty spojíme do jedné prohledávatelné a udržované znalostní báze."
      - key: "chatbots_ai_assistants"
        title: "Chatboti a AI asistenti"
        blurb: "Asistenti pro zákaznickou podporu, interní helpdesk nebo zaškolení nových kolegů."
      - key: "gamification"
        title: "Gamifikace"
        blurb: "Herní mechaniky pro vzdělávání, onboarding, zapojení lidí a finanční gramotnost."
      - key: "ai_integration"
        title: "AI integrace"
        blurb: "Jazykové modely a agenti propojení s vašimi systémy, API a pracovními postupy."
      - key: "devops_cloud"
        title: "DevOps a cloud"
        blurb: "CI/CD, Kubernetes, AWS, infrastruktura jako kód a monitoring, aby se z prototypu mohl stát produkční systém."
    link_label: "Více o službě"
    all_link: "Všechny služby"
  why:
    title: "Proč Moonbloom"
    pillars:
      - key: "human_decides"
        title: "Rozhoduje člověk, stavějí agenti"
        body: "Stavbu dělají AI agenti. Lidé určují cíl, kontrolují výsledek a schvalují každý krok. Bez schválení člověkem se nic nenasadí."
      - key: "senior_architect"
        title: "Za každou stavbou zkušený architekt"
        body: "Každou stavbu plánuje a kontroluje AI a cloudový architekt s více než 20 lety praxe v cloudu, DevOps a AI/ML."
      - key: "production_path"
        title: "Cesta do produkce"
        body: "Prototypy mají testy a přehlednou strukturu. Když některý schválíte, převedeme ho do produkce v rámci našich služeb DevOps a cloud."
  morning:
    title: "Co dostanete ráno"
    intro: "Všechno, co potřebujete k rozhodnutí u první ranní kávy."
    items:
      - key: "prototype"
        title: "Funkční prototyp"
        body: "Něco, čím se můžete proklikat, co můžete zavolat nebo vyzkoušet. Žádná prezentace."
      - key: "tests"
        title: "Testy"
        body: "Automatizované testy, které ukazují, co funguje a co se ověřilo."
      - key: "demo"
        title: "Krátké demo"
        body: "Provedení tím, co vzniklo, a návod, jak si to vyzkoušet sami."
      - key: "decisions"
        title: "Otevřená rozhodnutí a otázky"
        body: "Krátký seznam voleb, které by agenti neměli dělat za vás, připravený na vaše odpovědi."
  proof:
    # Render ONLY when a real, approved case study exists. Hide the whole section until then.
    title: "Nápady, které už rozkvetly"
    body: "[TODO: case study]"
  faq:
    title: "Než zasadíte: časté otázky"
    items:
      - key: "scope"
        q: "Co se vejde do jedné noci?"
        a: "Jeden jasný nápad se základním postupem, který si můžete vyzkoušet. Například chat nad vzorkem vašich dokumentů, asistent pro jedno téma podpory nebo propojení dvou systémů. Pokud je nápad větší, nejdřív postavíme část, která odpoví na vaši nejdůležitější otázku, a zbytek naplánujeme na další noci."
      - key: "not_good_enough"
        q: "Co když prototyp nebude dost dobrý?"
        a: "Řekněte nám, co chybí, a doladíme ho, obvykle během další noci. Ranní seznam otevřených rozhodnutí je tu právě proto, abyste mohli směr upravit dřív, než se postaví víc. Prototyp je rychlý způsob, jak zjistit, jestli nápad funguje. Není to slib, že bude fungovat každý nápad."
      - key: "confidentiality"
        q: "Zachováte můj nápad a moje data v důvěrnosti?"
        a: "Ano. Se vším, co nám svěříte, zacházíme jako s důvěrným a před podrobnějším rozhovorem můžeme podepsat NDA. Kde to jde, stavíme na vzorových nebo anonymizovaných datech a předem se s vámi domluvíme, které AI služby je smějí zpracovávat."
      - key: "tech"
        q: "Jaké technologie používáte?"
        a: "Ty, které sedí do vašeho prostředí. Obvykle Python nebo TypeScript, jazykové modely od zavedených poskytovatelů nebo modely s otevřenými vahami a nasazení v kontejnerech na AWS či Kubernetes. Pokud má váš tým standardní stack, stavíme na něm."
      - key: "ownership"
        q: "Komu patří kód?"
        a: "Vám. Kód prototypu i jeho dokumentace jsou vaše. [TODO: confirm IP terms]"
      - key: "pricing"
        q: "Kolik to stojí?"
        a: "[TODO: pricing]"
      - key: "languages"
        q: "V jakém jazyce spolu budeme komunikovat?"
        a: "Úvodní hovor, zadání, rozhraní prototypu i dokumentace můžou být v angličtině nebo ve slovenštině. [TODO: confirm whether Czech is offered for the intake, prototype UI and documentation]"
      - key: "after"
        q: "Co následuje po prototypu?"
        a: "Rozhodnete vy. Prototyp si můžete nechat jako demo, doladit ho během dalších nocí, nebo z něj s naší pomocí v oblasti DevOps a cloudu udělat produkční systém: CI/CD, infrastruktura jako kód, monitoring a zabezpečení."
  final_cta:
    title: "Máte nápad na dnešní večer?"
    body: "Povězte nám o něm. Ozveme se vám a domluvíme rozsah i večer, kdy začneme."
    button: "Zasaďte svůj nápad"
    secondary_link: "Domluvte si hovor"
  keywords:
    primary: "AI prototyp"
    secondary: ["AI studio", "prototyp aplikace přes noc", "AI agenti vývoj", "proof of concept AI"]
```

---

## 3. Services index (`/cs/sluzby/`)

### CS

```yaml
services_index:
  seo:
    title: "AI služby: RAG, chatboti, integrace | Moonbloom Labs"
    description: "RAG vyhledávání, znalostní báze, AI asistenti, gamifikace, AI integrace a DevOps. Každá služba začíná funkčním prototypem přes noc."
  og:
    title: "Co stavíme přes noc | Moonbloom Labs"
    description: "Šest služeb, jeden způsob práce: večer popíšete nápad, ráno si prohlédnete funkční prototyp."
  h1: "Co stavíme přes noc"
  intro: "Každá služba začíná stejně: večer popíšete nápad, přes noc ho AI agenti postaví a ráno rozhodnete, co dál. Když se prototyp osvědčí, pomůžeme ho dostat do produkce."
  list_title: "Služby"
  cta:
    title: "Nevíte, co se k vám hodí?"
    body: "Popište problém vlastními slovy. Navrhneme, čím začít."
    button: "Zasaďte svůj nápad"
  keywords:
    primary: "vývoj AI řešení"
    secondary: ["AI služby pro firmy", "RAG chatbot", "AI integrace", "vývoj chatbota na míru"]
```

---

## 4. Service detail pages

Shared blocks for every service page.

#### CS

```yaml
service_common:
  needs:
    title: "Co od vás ten večer potřebujeme"
    items:
      - "Krátký popis nápadu a toho, kdo ho bude používat"
      - "Vzorová data nebo dokumenty, ideálně anonymizované"
      - "Přístup k testovacímu systému nebo API, pokud ho prototyp potřebuje"
  paths:
    title: "Kam se dá pokračovat"
    refine: "Doladění: další noc pro části, které chcete změnit"
    pilot: "Pilot: nasazení pro skutečné uživatele se skutečnými daty"
    production: "Produkce: pořádné nasazení s našimi službami DevOps a cloud"
  overnight_note: "Jde o typické příklady. Přesný rozsah s vámi domluvíme večer, aby se vešel do jedné noci."
  breadcrumb_label: "Služby"
```

### 4.1 RAG & AI search (`/cs/sluzby/rag-ai-vyhledavani/`)

#### CS

```yaml
service_rag_ai_search:
  seo:
    title: "RAG chatbot nad vašimi dokumenty | Moonbloom Labs"
    description: "Chat nad firemními dokumenty, který odpovídá s odkazem na zdroj a pracuje se soukromými daty. Funkční RAG prototyp do rána."
  og:
    title: "RAG a AI vyhledávání: prototyp přes noc"
    description: "Ptejte se svých dokumentů a dostávejte odpovědi s odkazem na zdroj. Ráno to uvidíte fungovat na vlastních datech."
  h1: "RAG a AI vyhledávání"
  intro: "Zeptejte se firemních dokumentů běžnou řečí a dostanete odpověď s odkazem na to, odkud pochází. Technika RAG (retrieval-augmented generation) umožňuje jazykovému modelu odpovídat z vašich zdrojů, místo aby hádal."
  problem:
    title: "Problém"
    body: "Odpověď někde existuje: ve smlouvě, v příručce, ve směrnici nebo na sdíleném disku. Najít ji znamená hledat podle klíčových slov, otevřít deset souborů a zeptat se kolegy. Běžní chatboti vaše dokumenty nevidí a odpovědím bez zdroje se těžko věří."
  overnight:
    title: "Co dodáme přes noc"
    items:
      - "Funkční chat nad reprezentativním vzorkem vašich dokumentů"
      - "Odpovědi s odkazem na zdrojový dokument a konkrétní pasáž"
      - "Načítání dokumentů ve formátech z vašeho vzorku (například PDF, Word, webové stránky)"
      - "Malou sadu skutečných otázek s odpověďmi prototypu, abyste mohli posoudit kvalitu"
      - "Seznam otevřených rozhodnutí: výběr modelu, hosting, přístupová práva, které zdroje přidat dál"
  after:
    title: "Po prototypu"
    body: "Když přístup schválíte, připojíme celou sadu dokumentů, doplníme řízení přístupu, aby každý viděl jen to, co smí, nastavíme aktualizace při změně dokumentů a nasadíme řešení s monitoringem ve vašem nebo našem cloudu."
  fit:
    title: "Hodí se, pokud…"
    items:
      - "se váš tým pořád ptá na tytéž věci k interním dokumentům,"
      - "odpovědi potřebují zdroj, který si někdo může ověřit,"
      - "jsou vaše dokumenty soukromé a musí zůstat pod vaší kontrolou,"
      - "chcete vidět výsledky na vlastním obsahu dřív, než se zavážete k platformě."
  cta:
    title: "Máte dokumenty, které by měly odpovídat na otázky?"
    button: "Zasaďte svůj nápad"
  jsonld_description: "Prototyp RAG chatu nad soukromými dokumenty klienta s odpověďmi, které citují zdroje, postavený přes noc."
  keywords:
    primary: "RAG chatbot"
    secondary: ["AI vyhledávání v dokumentech", "chatbot nad firemními dokumenty", "RAG prototyp", "AI nad interními daty"]
```

### 4.2 Knowledge management (`/cs/sluzby/sprava-znalosti/`)

#### CS

```yaml
service_knowledge_management:
  seo:
    title: "Správa znalostí a znalostní báze s AI | Moonbloom Labs"
    description: "Roztroušené dokumenty, wiki a chaty spojené do jedné prohledávatelné a udržované znalostní báze. Funkční prototyp do rána."
  og:
    title: "Správa znalostí: prototyp přes noc"
    description: "Dokumenty, wiki a chaty v jedné znalostní bázi, ve které váš tým snadno hledá a kterou dokáže udržovat aktuální."
  h1: "Správa znalostí"
  intro: "Znalosti vašeho týmu jsou v dokumentech, wiki, tiketech a chatech. Spojíme je do jedné znalostní báze, ve které se dá hledat a která se udržuje, místo aby pomalu zastarávala."
  problem:
    title: "Problém"
    body: "Stejná odpověď je napsaná na třech místech a dvě z nich jsou zastaralá. Noví kolegové nevědí, kde hledat, a ze zkušených se stává vyhledávač. Wiki začne dobře a pak ji nikdo neudržuje."
  overnight:
    title: "Co dodáme přes noc"
    items:
      - "Prototyp znalostní báze ze vzorku vašich zdrojů (například části wiki, sdílené složky a exportu chatovacího kanálu)"
      - "Vyhledávání ve všech zdrojích na jednom místě s odkazem na originál"
      - "Automatické seskupení podle témat a označení duplicit a pravděpodobně zastaralých stránek"
      - "Návrh, jak bázi udržovat: vlastníci témat, termíny revizí, co se archivuje"
      - "Seznam otevřených rozhodnutí: které zdroje připojit, kdo vlastní které téma, kde bude báze běžet"
  after:
    title: "Po prototypu"
    body: "Připojíme skutečné zdroje s pravidelnou synchronizací, nastavíme oprávnění podle těch, která už máte, doplníme domluvený postup údržby a řešení provozujeme v produkci s monitoringem a zálohami."
  fit:
    title: "Hodí se, pokud…"
    items:
      - "jsou znalosti rozdělené mezi několik nástrojů a žádnému z nich nikdo plně nevěří,"
      - "zaškolení nových lidí závisí na tom, kdo má zrovna čas odpovídat,"
      - "jste už wiki zkoušeli a zastarala,"
      - "nechcete jen další místo na poznámky, ale vyhledávání a údržbu."
  cta:
    title: "Kde dnes žijí znalosti vašeho týmu?"
    button: "Zasaďte svůj nápad"
  jsonld_description: "Prototyp prohledávatelné a udržované znalostní báze, která spojuje dokumenty, wiki a chaty klienta, postavený přes noc."
  keywords:
    primary: "znalostní báze"
    secondary: ["správa znalostí ve firmě", "interní wiki s AI", "AI znalostní báze", "knowledge management"]
```

### 4.3 Chatbots & AI assistants (`/cs/sluzby/chatboty-ai-asistenti/`)

#### CS

```yaml
service_chatbots_ai_assistants:
  seo:
    title: "AI chatboti a asistenti pro podporu | Moonbloom Labs"
    description: "AI asistenti pro zákaznickou podporu, interní helpdesk a zaškolení, kteří vycházejí z vašeho obsahu. Funkční prototyp do rána."
  og:
    title: "Chatboti a AI asistenti: prototyp přes noc"
    description: "Asistent, který odpovídá z vašeho obsahu a ví, kdy předat otázku člověku. Ráno si ho vyzkoušíte."
  h1: "Chatboti a AI asistenti"
  intro: "Asistent, který odpovídá z vašeho vlastního obsahu, vaším tónem a ví, kdy otázku předat člověku. Pro zákazníky, pro interní helpdesk nebo pro nové kolegy, kteří se teprve rozkoukávají."
  problem:
    title: "Problém"
    body: "Většina otázek se opakuje, a přesto každá někomu zabere čas. Chatboti podle scénáře selžou, jakmile se někdo zeptá jinak, a asistent, který si odpovědi vymýšlí, je horší než žádný."
  overnight:
    title: "Co dodáme přes noc"
    items:
      - "Funkčního asistenta pro jeden jasně vymezený případ použití (například podporu k jednomu produktu nebo základy IT helpdesku)"
      - "Odpovědi založené na obsahu, který nám poskytnete, a náhradní odpověď, když si asistent není jistý"
      - "Předání člověku (například koncept e-mailu nebo tiketu)"
      - "Sadu testovacích konverzací s typickými i záludnými otázkami a jejich výsledky"
      - "Seznam otevřených rozhodnutí: tón, kanály, na co nesmí nikdy odpovídat, kde bude běžet"
  after:
    title: "Po prototypu"
    body: "Připojíme ho k vašim kanálům (web, Slack, Microsoft Teams nebo váš helpdeskový nástroj), doplníme záznam a kontrolu konverzací, nastavíme vámi schválené limity a ochranná pravidla a provozujeme ho v produkci s monitoringem."
  fit:
    title: "Hodí se, pokud…"
    items:
      - "vaše zákaznická podpora nebo helpdesk odpovídá každý týden na tytéž otázky,"
      - "noví kolegové potřebují trpělivého průvodce nástroji a procesy,"
      - "chcete, aby asistent předal otázku člověku, a ne předstíral, že ví,"
      - "raději testujete na skutečných otázkách, než abyste sledovali demo dodavatele."
  cta:
    title: "Které otázky by měl asistent převzít od vašeho týmu?"
    button: "Zasaďte svůj nápad"
  jsonld_description: "Prototyp AI asistenta nebo chatbota pro zákaznickou podporu, interní helpdesk či zaškolení, založený na obsahu klienta, postavený přes noc."
  keywords:
    primary: "AI chatbot pro zákaznickou podporu"
    secondary: ["AI asistent na míru", "chatbot pro helpdesk", "chatbot pro zaškolení zaměstnanců", "vývoj chatbota"]
```

### 4.4 Gamification (`/cs/sluzby/gamifikace/`)

#### CS

```yaml
service_gamification:
  seo:
    title: "Gamifikace vzdělávání a onboardingu | Moonbloom Labs"
    description: "Herní mechaniky pro vzdělávání, onboarding, zapojení lidí a finanční gramotnost. Hratelný prototyp do rána."
  og:
    title: "Gamifikace: prototyp přes noc"
    description: "Z lekce, zaškolení nebo práce s penězi uděláme něco, co lidé chtějí dokončit. Ráno si prototyp zahrajete."
  h1: "Gamifikace"
  intro: "Herní mechaniky jako cíle, postup, zpětná vazba a přátelská výzva pomáhají, aby si lidé učivo zapamatovali a zaškolení nepůsobilo jako papírování. Prototyp postavíme přes noc, abyste si nápad zahráli dřív, než do něj investujete."
  problem:
    title: "Problém"
    body: "Školení se proklikají, kontrolní seznamy při zaškolení zůstanou nedokončené a témata jako osobní finance působí abstraktně. Body a odznaky navrch málokdy pomůžou. Mechanika musí sedět na to, co se lidé mají naučit nebo udělat."
  overnight:
    title: "Co dodáme přes noc"
    items:
      - "Hratelný prototyp jedné hlavní mechaniky (například vzdělávací cesta s úrovněmi, kvíz se scénáři nebo rozpočtová výzva)"
      - "Sepsaná pravidla: cíle, bodování, postup a zpětná vazba"
      - "Testy pravidel, aby bodování a postup fungovaly tak, jak jsou navržené"
      - "Krátké demo prvního hraní z pohledu hráče"
      - "Seznam otevřených rozhodnutí: cílová skupina, odměny, obtížnost, co znamená úspěch"
  after:
    title: "Po prototypu"
    body: "Mechaniku doladíme podle toho, jak ji lidé skutečně hrají, doplníme obsah a uživatelské účty, podle potřeby ji propojíme s vaší vzdělávací platformou či aplikací a nasadíme s analytikou, která respektuje vaše pravidla ochrany soukromí."
  fit:
    title: "Hodí se, pokud…"
    items:
      - "máte školení nebo zaškolení, které lidé dokončí jen proto, že musí,"
      - "učíte dovednost, třeba finanční gramotnost, která potřebuje praxi, ne jen čtení,"
      - "chcete herní nápad otestovat se skutečnými lidmi dřív, než objednáte celý vývoj,"
      - "vám jde víc o výsledky učení než o body a odznaky."
  cta:
    title: "Co by lidé měli chtít dokončit?"
    button: "Zasaďte svůj nápad"
  jsonld_description: "Hratelný prototyp herních mechanik pro vzdělávání, zaškolení, zapojení lidí nebo finanční gramotnost se sepsanými pravidly, postavený přes noc."
  keywords:
    primary: "gamifikace vzdělávání"
    secondary: ["gamifikace onboardingu", "hra na finanční gramotnost", "gamifikace ve firmě", "vzdělávací hra na míru"]
```

### 4.5 AI integration (`/cs/sluzby/integrace-ai/`)

#### CS

```yaml
service_ai_integration:
  seo:
    title: "AI integrace do vašich systémů a API | Moonbloom Labs"
    description: "Jazykové modely a AI agenti propojení s vašimi systémy, API a pracovními postupy. Funkční prototyp integrace do rána."
  og:
    title: "AI integrace: prototyp přes noc"
    description: "Jazykový model nebo agent přímo v systémech, které už používáte, a důležité kroky schvaluje člověk."
  h1: "AI integrace"
  intro: "Hodnota AI se ukáže, když funguje přímo v nástrojích, které už používáte. Jazykové modely a agenty propojíme s vašimi systémy, API a pracovními postupy a kroky, na kterých záleží, bude schvalovat člověk."
  problem:
    title: "Problém"
    body: "Lidé kopírují text mezi oknem chatu a systémy, ve kterých pracují. Pilotní projekty zůstávají v testovacím prostředí, protože je nikdo nepropojil se skutečnými daty. A není jasné, co má AI dělat sama a co musí schválit člověk."
  overnight:
    title: "Co dodáme přes noc"
    items:
      - "Funkční integraci pro jeden pracovní postup (například třídění příchozích e-mailů, přenos údajů z dokumentů do vašeho systému nebo návrhy odpovědí ke schválení)"
      - "Propojení s vašimi API nebo s jejich testovací kopií"
      - "Schválení člověkem všude, kde postup mění data nebo někoho kontaktuje"
      - "Testy pro očekávané i nepříjemné vstupy"
      - "Seznam otevřených rozhodnutí: model a poskytovatel, limity nákladů, zpracování chyb, kdo co schvaluje"
  after:
    title: "Po prototypu"
    body: "Integraci připravíme na ostrý provoz: autentizace, limity volání a nákladů, logování, opakované pokusy a monitoring. Pak ji nasadíme do vašeho prostředí přes CI/CD pipeline, aby byly změny zkontrolované a opakovatelné."
  fit:
    title: "Hodí se, pokud…"
    items:
      - "váš tým přenáší informace mezi systémy ručně,"
      - "máte API nebo data, která by jazykový model dokázal využít,"
      - "chcete jasné body schválení člověkem, ne černou skříňku,"
      - "AI pilot uvízl a potřebuje se dotknout skutečných systémů, aby se osvědčil."
  cta:
    title: "S kterým postupem by vám AI měla pomoct nejdřív?"
    button: "Zasaďte svůj nápad"
  jsonld_description: "Prototyp integrace jazykových modelů a AI agentů do stávajících systémů, API a pracovních postupů klienta se schvalováním člověkem, postavený přes noc."
  keywords:
    primary: "AI integrace"
    secondary: ["integrace jazykových modelů", "automatizace procesů s AI", "AI agenti pro firmy", "napojení AI na API"]
```

### 4.6 DevOps & cloud (`/cs/sluzby/devops-cloud/`)

#### CS

```yaml
service_devops_cloud:
  seo:
    title: "DevOps a cloud: CI/CD, Kubernetes, AWS | Moonbloom Labs"
    description: "CI/CD, Kubernetes, AWS, infrastruktura jako kód a monitoring, aby se z prototypu mohl stát produkční systém, který zvládnete provozovat."
  og:
    title: "DevOps a cloud: z prototypu do produkce"
    description: "Pipeline, infrastruktura jako kód a monitoring, které schválený prototyp dostanou do produkce, krok za schváleným krokem."
  h1: "DevOps a cloud"
  intro: "Prototyp ověří nápad, produkce ale potřebuje víc. Nastavíme CI/CD, Kubernetes nebo spravované cloudové služby na AWS, infrastrukturu jako kód a monitoring, aby to, co schválíte, běželo spolehlivě."
  problem:
    title: "Problém"
    body: "Prototypy často běží na jednom notebooku nebo na ručně nastaveném serveru. Nikdo přesně neví, jak je bezpečně nasadit, jak se vrátit k předchozí verzi ani jak poznat, že se něco rozbilo, dřív než to zjistí uživatel."
  overnight:
    title: "Co dodáme přes noc"
    items:
      - "CI/CD pipeline, která sestaví, otestuje a nasadí jednu službu do testovacího prostředí, které nám poskytnete"
      - "Infrastrukturu jako kód pro toto prostředí (například Terraform), zkontrolovanou a opakovatelnou"
      - "Základní monitoring: logy, kontroly dostupnosti a první dashboard"
      - "Písemný postup (runbook): jak nasadit, vrátit změnu a ověřit stav"
      - "Seznam otevřených rozhodnutí: prostředí, přístupy, limity nákladů, co má posílat upozornění"
  after:
    title: "Po prototypu"
    body: "Nastavení rozšíříme na staging a produkci, doplníme správu přístupových údajů (secrets), zálohy, upozornění a bezpečnostní hardening a předáme dokumentaci, podle které ho váš tým zvládne provozovat. Každá změna v produkci prochází kontrolou a vaším schválením."
  fit:
    title: "Hodí se, pokud…"
    items:
      - "máte prototyp nebo produkt, který se nasazuje ručně,"
      - "běžíte na AWS nebo Kubernetes, případně to plánujete,"
      - "chcete infrastrukturu, kterou si můžete přečíst, zkontrolovat a znovu vytvořit,"
      - "potřebujete vědět, že se něco rozbilo, dřív než vám to řeknou uživatelé."
  cta:
    title: "Chcete posunout prototyp dál?"
    button: "Zasaďte svůj nápad"
  jsonld_description: "DevOps a cloudové inženýrství (CI/CD, Kubernetes, AWS, infrastruktura jako kód, monitoring), které schválené prototypy dostane do produkce."
  keywords:
    primary: "DevOps služby"
    secondary: ["CI/CD", "Kubernetes konzultace", "AWS infrastruktura jako kód", "z prototypu do produkce"]
```

---

## 5. About (`/cs/o-nas/`)

### CS

```yaml
about:
  seo:
    title: "O nás: rozhoduje člověk, stavějí agenti | Moonbloom Labs"
    description: "Moonbloom Labs založil AI a cloudový architekt s 20+ lety praxe v cloudu, DevOps a AI/ML, spoluzakladatel AI laboratoře na STU."
  og:
    title: "O Moonbloom Labs"
    description: "Proč stavíme prototypy přes noc, kdo stojí za každou stavbou a podle jakých zásad pracujeme."
  h1: "Rozhoduje člověk. Stavějí agenti."
  intro: "Moonbloom Labs je AI studio, které z nápadu do rána udělá funkční prototyp. Stavbu dělají AI agenti, směr určuje a každý krok schvaluje člověk."
  founder:
    title: "Kdo za tím stojí"
    name: "Michal Maxian"
    role: "Zakladatel, AI a cloudový architekt"
    body:
      - "Moonbloom Labs založil Michal Maxian, AI a cloudový architekt s více než 20 lety zkušeností v oblasti cloudu, DevOps a AI/ML. Je spoluzakladatelem AI laboratoře na Slovenské technické univerzitě v Bratislavě (STU)."
      - "Čekat týdny, než se ukáže, jestli nápad funguje, bývá často nejpomalejší částí projektu. AI agenti dnes dokážou za jednu noc napsat a otestovat spoustu kódu. Moonbloom toho využívá a doplňuje to úsudkem architekta: rozsah domluvíme s vámi, stavba je naplánovaná a zkontrolovaná a každé důležité rozhodnutí zůstává na lidech."
    photo_alt: "Portrét Michala Maxiana, zakladatele Moonbloom Labs"
    photo: "[TODO: founder photo]"
  principles:
    title: "Jak pracujeme"
    items:
      - key: "human_decides"
        title: "Rozhoduje člověk"
        body: "Agenti stavějí, lidé rozhodují. Večer schválíte rozsah, ráno výsledek a bez schválení člověkem se nic nenasadí."
      - key: "transparent"
        title: "Transparentnost"
        body: "Vidíte, co vzniklo, jak se to testovalo a co je ještě otevřené. Ranní seznam rozhodnutí přesně ukazuje, kde je potřeba váš úsudek."
      - key: "secure_by_default"
        title: "Bezpečnost od začátku"
        body: "S vašimi nápady a daty zacházíme jako s důvěrnými, kde to jde, používáme vzorová nebo anonymizovaná data a předem se domluvíme, které služby je smějí zpracovávat."
      - key: "honest_scope"
        title: "Poctivý rozsah"
        body: "Za jednu noc vznikne prototyp, ne hotový produkt. Večer vám řekneme, co se vejde, a ráno, co ještě chybí."
  cta:
    title: "Pojďme se podívat, jak bude váš nápad vypadat ráno."
    button: "Zasaďte svůj nápad"
  keywords:
    primary: "AI studio Česko a Slovensko"
    secondary: ["AI architekt", "AI prototypy na míru", "vývoj AI na míru"]
```

---

## 6. Contact (`/cs/kontakt/`)

Form field `idea` accepts 10 to 5000 characters (`public/api/contact.php`). Use `{min}` = 10 and `{max}` = 5000 for `idea`, and `{max}` = 100 for `name`.

### CS

```yaml
contact:
  seo:
    title: "Zasaďte svůj nápad | Kontakt Moonbloom Labs"
    description: "Popište nám svůj nápad. Ozveme se a domluvíme rozsah i večer, kdy začneme. Slovensky nebo anglicky."
  og:
    title: "Zasaďte svůj nápad v Moonbloom Labs"
    description: "Napište nám, co chcete vidět fungovat. Ozveme se a domluvíme rozsah, který se vejde do jedné noci."
  h1: "Zasaďte svůj nápad"
  intro: "Napište nám, co chcete vidět fungovat. Stačí pár vět. Ozveme se, domluvíme rozsah a večer na krátký úvodní hovor a pak se do práce pustí agenti."
  what_next:
    title: "Co bude následovat"
    items:
      - "Přečteme si váš nápad a odpovíme e-mailem."
      - "Domluvíme rozsah a večer na krátký hovor nebo písemné zadání."
      - "Agenti přes noc stavějí, ráno si prototyp prohlédnete."
  form:
    aria_label: "Kontaktní formulář"
    required_hint: "Pole označená * jsou povinná."
    name:
      label: "Vaše jméno *"
      placeholder: "Jana Nováková"
    email:
      label: "E-mail *"
      placeholder: "jana@firma.cz"
      help: "Použijeme ho jen k odpovědi."
    company:
      label: "Firma (nepovinné)"
      placeholder: "Název firmy"
    idea:
      label: "Váš nápad *"
      placeholder: "Například: chat, který odpovídá na otázky z našich interních příruček a odkazuje na zdroj."
      help: "Co má ráno fungovat a kdo to bude používat? Stačí pár vět. Neuvádějte sem prosím hesla ani důvěrné údaje."
    language:
      label: "Preferovaný jazyk *"
      option_en: "Angličtina"
      option_sk: "Slovenština"
    honeypot:
      label: "Toto pole nevyplňujte"
    submit: "Zasaďte svůj nápad"
    submitting: "Odesílá se…"
    privacy_note: "Vaše údaje použijeme jen k odpovědi na vaši zprávu. Více v [zásadách ochrany osobních údajů](/cs/ochrana-osobnich-udaju/)."
  validation:
    name_required: "Napište nám prosím své jméno."
    email_required: "Zadejte prosím e-mail, abychom vám mohli odpovědět."
    email_invalid: "Tato e-mailová adresa nevypadá správně. Zkontrolujte ji prosím."
    idea_required: "Popište prosím svůj nápad jednou dvěma větami."
    idea_too_short: "Přidáte ještě pár slov? Napište aspoň {min} znaků, stačí jedna věta."
    idea_too_long: "To je víc, než se vejde do jedné zprávy. Zkraťte ji prosím na nejvýš {max} znaků."
    name_too_long: "Zkraťte prosím jméno na nejvýš {max} znaků."
    language_required: "Vyberte prosím jazyk."
    form_errors_summary: "Zkontrolujte prosím zvýrazněná pole."
  status:
    success_title: "Váš nápad je zasazený."
    success_body: "Děkujeme. Ozveme se e-mailem a domluvíme rozsah i večer, kdy začneme."
    failure_title: "Zpráva se neodeslala."
    failure_body: "Něco se pokazilo na naší straně. Zkuste to prosím znovu, nebo nám napište na michal@maxian.sk."
    rate_limited: "Během krátké doby jste poslali několik zpráv. Počkejte prosím pár minut a zkuste to znovu."
    error_invalid: "Některá pole je potřeba zkontrolovat. Opravte je prosím a odešlete znovu."
    error_captcha: "Bezpečnostní kontrolu se nepodařilo ověřit. Zkuste to prosím znovu."
    error_delivery: "Zprávu se nepodařilo doručit. Zkuste to prosím znovu, nebo nám napište na michal@maxian.sk."
    error_method: "Ve formuláři se něco pokazilo. Obnovte prosím stránku a zkuste to znovu."
    error_noscript_generic: "Zpráva se neodeslala. Zkontrolujte prosím pole a zkuste to znovu, nebo nám napište na michal@maxian.sk."
  turnstile_note: "Formulář používá Cloudflare Turnstile na ochranu před spamem."
  talk:
    line: "Raději si promluvíte? [Domluvte si hovor](mailto:michal@maxian.sk?subject=Moonbloom%20Labs%20%E2%80%93%20hovor) a napište nám, kdy se vám to hodí."
    mailto_subject: "Moonbloom Labs – hovor"
    mailto_body: "Dobrý den, chci s vámi probrat nápad. Hodí se mi: "
  keywords:
    primary: "AI prototyp kontakt"
    secondary: ["objednat AI prototyp", "AI studio kontakt"]
```

---

## 7. Thank-you page (`/cs/dekujeme/`, `noindex`)

### CS

```yaml
thank_you:
  seo:
    title: "Děkujeme | Moonbloom Labs"
    description: "Váš nápad je zasazený. Ozveme se e-mailem a domluvíme rozsah i večer, kdy začneme."
  og:
    title: "Váš nápad je zasazený"
    description: "Ozveme se e-mailem a domluvíme rozsah i večer, kdy začneme."
  h1: "Váš nápad je zasazený."
  body: "Děkujeme, že jste nám napsali. Přečteme si váš nápad a ozveme se e-mailem, abychom domluvili rozsah a večer na krátký úvodní hovor."
  next_title: "Než se ozveme"
  next_items:
    - "Rozmyslete si, kdo si prototyp ráno vyzkouší."
    - "Připravte pár vzorových dokumentů, otázek nebo dat, se kterými můžeme stavět. Nejlépe anonymizovaných."
    - "Zapište si jednu otázku, na kterou vám prototyp musí odpovědět."
  links:
    how: "Podívejte se, jak to funguje"
    services: "Přehled služeb"
    home: "Zpět na úvod"
```

---

## 8. Privacy policy (`/cs/ochrana-osobnich-udaju/`)

**[TODO: legal review]**: plain-language draft adapted for Czech readers, not legal advice. The controller is the same Slovak entity as in EN and SK. The Slovak authority stays the lead authority; the Czech ÚOOÚ is named for readers in Czechia.

### CS

```yaml
privacy:
  seo:
    title: "Zásady ochrany osobních údajů | Moonbloom Labs"
    description: "Jak Moonbloom Labs zpracovává osobní údaje: co získáváme přes kontaktní formulář, proč, jak dlouho je uchováváme a vaše práva podle GDPR."
  og:
    title: "Zásady ochrany osobních údajů | Moonbloom Labs"
    description: "Srozumitelně o ochraně údajů: údaje z formuláře jen k odpovědi, analytika bez cookies, vaše práva podle GDPR."
  h1: "Zásady ochrany osobních údajů"
  review_flag: "[TODO: legal review]"
  updated: "Poslední aktualizace: [TODO: date of publication]"
  intro: "Píšeme stručně a srozumitelně. Získáváme co nejméně osobních údajů a používáme je jen k účelům popsaným níže."
  sections:
    - key: "controller"
      title: "Kdo odpovídá za vaše údaje"
      body: "Správcem vašich osobních údajů je [TODO: company legal name], IČO: [TODO: IČO], se sídlem [TODO: registered address], Slovensko. V otázkách ochrany osobních údajů nás kontaktujte na michal@maxian.sk."
    - key: "contact_form"
      title: "Co získáváme přes kontaktní formulář"
      body: "Když odešlete kontaktní formulář, obdržíme vaše jméno, e-mailovou adresu, název firmy (pokud ho uvedete), popis nápadu a preferovaný jazyk. Tyto údaje použijeme jen k tomu, abychom vám odpověděli a probrali s vámi práci, o kterou máte zájem. Nepoužíváme je pro newslettery ani marketing a neprodáváme je."
    - key: "legal_basis"
      title: "Na jakém základě je zpracováváme"
      body: "Údaje zpracováváme, abychom na vaši žádost provedli opatření před případným uzavřením smlouvy (čl. 6 odst. 1 písm. b) GDPR). Korespondenci uchováváme na základě našeho oprávněného zájmu na tom, abychom mohli na rozhovor navázat (čl. 6 odst. 1 písm. f) GDPR)."
    - key: "storage"
      title: "Kde je uchováváme a jak dlouho"
      body: "Zprávy z formuláře se doručují do naší firemní e-mailové schránky a tam je uchováváme. [TODO: confirm email provider and where the mailbox is hosted] Zprávy uchováváme po dobu komunikace s vámi a poté [TODO: retention period], pokud zákon nevyžaduje delší lhůtu nebo pokud nás nepožádáte o dřívější výmaz."
    - key: "hosting"
      title: "Hosting webu"
      body: "Tento web hostuje společnost Websupport s.r.o. na Slovensku. Při návštěvě server zpracovává technické údaje, například IP adresu a typ prohlížeče, aby mohl stránky doručit a chránit. [TODO: confirm server log retention with Websupport]"
    - key: "analytics"
      title: "Analytika bez cookies"
      body: "K počítání návštěv a zjištění, které stránky se čtou, používáme Cloudflare Web Analytics. Nenastavuje cookies a nepoužívá lokální úložiště vašeho prohlížeče. Údaje zpracovává společnost Cloudflare, Inc. jako náš zpracovatel a nám je poskytuje jen v souhrnné podobě. [TODO: confirm Cloudflare data processing terms and any transfer outside the EU]"
    - key: "spam_protection"
      title: "Ochrana formuláře před spamem"
      body: "Kontaktní formulář může používat Cloudflare Turnstile, který rozlišuje lidi od robotů. Při práci s formulářem Turnstile zpracovává technické signály, například IP adresu a vlastnosti prohlížeče. Poskytuje ho společnost Cloudflare, Inc. jako náš zpracovatel. Používáme ho na základě oprávněného zájmu chránit formulář před spamem (čl. 6 odst. 1 písm. f) GDPR). [TODO: confirm Turnstile is enabled at launch, its data processing terms and that it sets no cookies]"
    - key: "cookies"
      title: "Cookies"
      body: "Tento web nepoužívá cookies pro analytiku ani reklamu. [TODO: confirm no other cookies are set, e.g. by the form or the language switcher]"
    - key: "recipients"
      title: "Kdo další vidí vaše údaje"
      body: "Jen výše uvedení poskytovatelé, kteří jednají naším jménem: poskytovatel hostingu, poskytovatel e-mailu a Cloudflare pro analytiku a ochranu před spamem. Nikomu jinému vaše údaje nepředáváme, pokud to nevyžaduje zákon."
    - key: "rights"
      title: "Vaše práva"
      body: "Máte právo na přístup ke svým údajům, na jejich opravu nebo výmaz, na omezení zpracování, právo vznést námitku a právo na přenositelnost údajů. Napište nám na michal@maxian.sk a odpovíme do jednoho měsíce. Máte také právo podat stížnost u dozorového úřadu pro ochranu osobních údajů, zejména v zemi EU, kde žijete nebo pracujete. Naším vedoucím dozorovým úřadem je slovenský Úrad na ochranu osobných údajov Slovenskej republiky (dataprotection.gov.sk). V Česku je dozorovým úřadem Úřad pro ochranu osobních údajů, ÚOOÚ (uoou.gov.cz)."
    - key: "changes"
      title: "Změny těchto zásad"
      body: "Pokud změníme způsob, jakým zpracováváme osobní údaje, aktualizujeme tuto stránku i datum v jejím úvodu."
```

---

## 9. Imprint (`/cs/provozovatel/`)

**[TODO: legal review]**: the operator is the same Slovak entity. Labels use the Slovak identifiers (IČO, DIČ, IČ DPH), because those are the numbers the entity holds.

### CS

```yaml
imprint:
  seo:
    title: "Údaje o provozovateli | Moonbloom Labs"
    description: "Údaje o provozovateli webu moonbloomlabs.com: obchodní firma, IČO, sídlo a kontakt."
  og:
    title: "Údaje o provozovateli | Moonbloom Labs"
    description: "Údaje o provozovateli webu moonbloomlabs.com."
  h1: "Údaje o provozovateli"
  review_flag: "[TODO: legal review]"
  fields:
    operator_label: "Provozovatel"
    operator_value: "[TODO: company legal name]"
    ico_label: "IČO"
    ico_value: "[TODO: IČO]"
    dic_label: "DIČ"
    dic_value: "[TODO: DIČ]"
    vat_label: "IČ DPH"
    vat_value: "[TODO: IČ DPH or 'not a VAT payer']"
    address_label: "Sídlo"
    address_value: "[TODO: registered address]"
    register_label: "Zápis v rejstříku"
    register_value: "[TODO: register entry, e.g. Business Register of the District Court ..., Section ..., Insert No. ...]"
    contact_label: "Kontakt"
    contact_value: "michal@maxian.sk"
    hosting_label: "Hosting"
    hosting_value: "Websupport s.r.o., Slovensko"
  trade_name_note: "Moonbloom Labs je označení, pod kterým vystupuje [TODO: company legal name]."
```

---

## 10. 404 page (`noindex`)

### CS

```yaml
not_found:
  seo:
    title: "Stránka nenalezena | Moonbloom Labs"
    description: "Tahle stránka ještě nerozkvetla. Vraťte se na úvod, nebo nám zasaďte svůj nápad."
  og:
    title: "Stránka nenalezena | Moonbloom Labs"
    description: "Tahle stránka ještě nerozkvetla."
  h1: "Tenhle nápad ještě nerozkvetl."
  body: "Stránka, kterou hledáte, tu není. Možná se přesunula, nebo je to zatím jen semínko. Tyhle cesty ale kvetou naplno:"
  links:
    home: "Zpět na úvod"
    services: "Naše služby"
    contact: "Zasaďte svůj nápad"
  code_label: "Chyba 404"
```

---

## 11. Structured data (JSON-LD text)

### CS

```yaml
jsonld:
  organization:
    name: "Moonbloom Labs"
    url: "https://moonbloomlabs.com/cs/"
    slogan: "Nápady rozkvetou přes noc."
    description: "Moonbloom Labs je AI studio, které z nápadu do rána udělá funkční prototyp. Klient večer popíše nápad, AI agenti ho přes noc postaví a otestují a ráno si klient prohlédne funkční prototyp, jeho testy a seznam otevřených rozhodnutí. Rozhoduje člověk, stavějí agenti."
    founder_name: "Michal Maxian"
    area_served: "[TODO: confirm area served, e.g. Slovakia, European Union]"
    email: "michal@maxian.sk"
    legal_name: "[TODO: company legal name]"
  services:
    rag_ai_search: "Prototyp RAG chatu nad soukromými dokumenty klienta s odpověďmi, které citují zdroje, postavený přes noc."
    knowledge_management: "Prototyp prohledávatelné a udržované znalostní báze, která spojuje dokumenty, wiki a chaty klienta, postavený přes noc."
    chatbots_ai_assistants: "Prototyp AI asistenta nebo chatbota pro zákaznickou podporu, interní helpdesk či zaškolení, založený na obsahu klienta, postavený přes noc."
    gamification: "Hratelný prototyp herních mechanik pro vzdělávání, zaškolení, zapojení lidí nebo finanční gramotnost se sepsanými pravidly, postavený přes noc."
    ai_integration: "Prototyp integrace jazykových modelů a AI agentů do stávajících systémů, API a pracovních postupů klienta se schvalováním člověkem, postavený přes noc."
    devops_cloud: "DevOps a cloudové inženýrství (CI/CD, Kubernetes, AWS, infrastruktura jako kód, monitoring), které schválené prototypy dostane do produkce."
```
