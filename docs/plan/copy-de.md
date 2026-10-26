---
native_review: required
status: draft            # draft | reviewed | approved (approved is set by the owner)
languages: [de]
source: docs/plan/copy.md (EN master, final); same keys, same order
claims_checked_against:
  - docs/plan/copy.md (EN master, its claims review and section 8/9/11.1 adaptation notes)
  - src/i18n/routes.ts (DE page routes and service slugs)
  - scripts/import-copy.mjs (deck format: YAML blocks under "### DE" / "#### DE")
  - owner instruction 2026-10-22: contact email michal@maxian.sk; idea field 10–5000 characters
---

# Moonbloom Labs: Website-Texte und SEO-Metadaten (Deutsch)

## 0. How to use this file

- Adapted from the EN master in `docs/plan/copy.md`. Every YAML block below has the **same keys, list lengths and order** as the matching EN block. Only the blocks under `### DE` / `#### DE` headings are imported (`scripts/import-copy.mjs`); everything else is notes.
- `[TODO: contact email]` is replaced with `michal@maxian.sk`. Every other `[TODO: …]` stays exactly as in EN.
- Register: formal "Sie" throughout. "KI" instead of "AI" in all copy and metadata (German search usage). Technical terms German B2B buyers search in English stay English: RAG, DevOps, CI/CD, Kubernetes, Infrastructure as Code, Observability, Onboarding, Gamification.
- Typography: German noun capitalisation, otherwise sentence case as in EN. Straight YAML quotes; German quotation marks „…“ only inside text if ever needed. Ellipsis is the single character "…", preceded by a space where it stands for omitted words ("Passt gut, wenn …", "Wird gesendet …"). Colons and full stops instead of dashes, no exclamation marks. Typographic apostrophe in "So funktioniert’s".
- `seo.title` is the complete `<title>` (≤ 60 characters incl. brand), `seo.description` ≤ 155 characters. Checked by script.
- Fixed terms (EN → DE): prototype → Prototyp; AI agents → KI-Agenten; open decisions → offene Entscheidungen; evening intake → (kurzes) Vorgespräch am Abend; refine → verfeinern; approve → freigeben; path to production → Weg in die Produktion; plant your idea → Idee pflanzen (button) / Pflanzen Sie Ihre Idee (headline).
- Banned in DE as in every locale: grind, hustle, 24/7, rund um die Uhr, nonstop, Nachtschicht, revolutionär, Garantie/garantiert.
- Contact form: `idea` is 10–5000 characters; the validation strings keep the `{min}` / `{max}` tokens, so the code fills in 10 and 5000 (frontend-dev: render 5000 as "5.000" if numbers are locale-formatted).
- Language of service: the EN master offers intake, prototype UI and docs in English or Slovak only. The DE copy says so honestly (FAQ `languages`, contact `seo.description`). It does not promise German-language service until the owner confirms it.

| Page | DE route |
|---|---|
| Home | `/de/` (anchor `#so-funktionierts`) |
| Services | `/de/leistungen/` |
| RAG & KI-Suche | `/de/leistungen/rag-ki-suche/` |
| Wissensmanagement | `/de/leistungen/wissensmanagement/` |
| Chatbots & KI-Assistenten | `/de/leistungen/chatbots-ki-assistenten/` |
| Gamification | `/de/leistungen/gamification/` |
| KI-Integration | `/de/leistungen/ki-integration/` |
| DevOps & Cloud | `/de/leistungen/devops-cloud/` |
| About | `/de/ueber-uns/` |
| Contact | `/de/kontakt/` |
| Thank you | `/de/danke/` (noindex) |
| Privacy | `/de/datenschutz/` |
| Imprint | `/de/impressum/` |

---

## 1. Global: header, footer, language switcher, skip link

### DE

```yaml
common:
  skip_link: "Zum Inhalt springen"
  brand_name: "Moonbloom Labs"
  logo_alt: "Moonbloom Labs – Startseite"
  nav:
    aria_label: "Hauptnavigation"
    services: "Leistungen"
    how_it_works: "So funktioniert’s"
    about: "Über uns"
    contact: "Kontakt"
    cta: "Idee pflanzen"
    menu_open: "Menü öffnen"
    menu_close: "Menü schließen"
  lang_switcher:
    aria_label: "Sprache"
    current_label: "DE"
    en_label: "English"
    sk_label: "Slovenčina"
    switch_to_other: "Read in English"
  footer:
    tagline: "Ideen blühen über Nacht auf."
    blurb: "Ein KI-Studio, das aus einer Idee bis zum nächsten Morgen einen funktionierenden Prototyp macht. Ein Mensch entscheidet, Agenten bauen."
    nav_heading: "Studio"
    services_heading: "Leistungen"
    legal_heading: "Rechtliches"
    privacy: "Datenschutz"
    imprint: "Impressum"
    contact_line: "Schreiben Sie uns: michal@maxian.sk"
    copyright: "© 2026 Moonbloom Labs"
    principle_line: "Jedes Release gibt ein Mensch frei."
  breadcrumbs:
    home: "Startseite"
    services: "Leistungen"
  common_cta:
    plant_idea: "Idee pflanzen"
    learn_more: "Mehr erfahren"
    back_home: "Zur Startseite"
```

---

## 2. Home (`/de/`)

Headline alternatives (DE), for native review:
1. "Ideen blühen über Nacht auf." (chosen: "über Nacht aufblühen" is the idiomatic verb)
2. "Ideen erblühen über Nacht." (more poetic, slightly old-fashioned)
3. "Ihre Idee, morgens ein funktionierender Prototyp."

### DE

```yaml
home:
  seo:
    title: "Moonbloom Labs: KI-Prototypen über Nacht"
    description: "Abends beschreiben Sie Ihre Idee, über Nacht bauen KI-Agenten. Morgens prüfen Sie einen funktionierenden Prototyp, Tests und offene Entscheidungen."
  og:
    title: "Ideen blühen über Nacht auf | Moonbloom Labs"
    description: "Abends eine Idee pflanzen. Morgens warten ein funktionierender Prototyp, seine Tests, eine kurze Demo und die Entscheidungen, die bei Ihnen liegen."
  h1: "Ideen blühen über Nacht auf."
  hero:
    eyebrow: "KI-Studio für funktionierende Prototypen"
    title: "Ideen blühen über Nacht auf."
    subtitle: "Pflanzen Sie abends eine Idee. Morgens ist sie fertig."
    body: "Moonbloom Labs ist ein KI-Studio für funktionierende Prototypen. Sie erzählen uns Ihre Idee abends in einem kurzen Gespräch; über Nacht bauen KI-Agenten sie nach einem Plan, den ein erfahrener Architekt geprüft hat. Am Morgen sehen Sie sich einen funktionierenden Prototyp an, dazu seine Tests und eine kurze Liste von Entscheidungen, die nur Sie treffen können."
    note: "Ein Prototyp, kein Produktivsystem. Den Umfang legen wir abends so fest, dass er in eine Nacht passt."
    cta_primary: "Idee pflanzen"
    cta_secondary: "So funktioniert’s"
    image_alt: "[TODO: hero illustration alt text, set when the designer picks the image]"
  how:
    anchor_id: "so-funktionierts"
    title: "Vom Einfall am Abend zum Prototyp am Morgen"
    intro: "Ein Abend, eine Nacht, ein Morgen. Dann entscheiden Sie."
    steps:
      - key: "evening"
        label: "Abend"
        title: "Sie beschreiben die Idee"
        body: "In einem kurzen Gespräch oder einem schriftlichen Briefing erzählen Sie uns, was Sie funktionieren sehen möchten. Gemeinsam schneiden wir es auf einen Umfang zu, der in eine Nacht passt."
      - key: "night"
        label: "Nacht"
        title: "Agenten bauen und testen"
        body: "KI-Agenten schreiben den Code und die Tests dazu, nach dem Plan, den ein erfahrener Architekt vor dem Start geprüft hat."
      - key: "morning"
        label: "Morgen"
        title: "Prototyp, Tests, Demo, Fragen"
        body: "Sie erhalten einen funktionierenden Prototyp, seine Tests, eine kurze Demo und eine Liste offener Fragen und Entscheidungen."
      - key: "decision"
        label: "Entscheidung"
        title: "Freigeben oder verfeinern"
        body: "Sie entscheiden, wie es weitergeht: freigeben, in einer weiteren Nacht verfeinern oder den Weg in die Produktion planen."
  services:
    title: "Was wir bauen"
    intro: "Sechs Bereiche, in denen ein Prototyp über Nacht die erste wichtige Frage beantwortet: Funktioniert diese Idee?"
    cards:
      - key: "rag_ai_search"
        title: "RAG & KI-Suche"
        blurb: "Stellen Sie Ihren Unternehmensdokumenten Fragen und erhalten Sie Antworten mit Quellenangabe."
      - key: "knowledge_management"
        title: "Wissensmanagement"
        blurb: "Aus verstreuten Dokumenten, Wikis und Chats wird eine durchsuchbare, gepflegte Wissensdatenbank."
      - key: "chatbots_ai_assistants"
        title: "Chatbots & KI-Assistenten"
        blurb: "Assistenten für den Kundenservice, den internen Helpdesk oder das Onboarding neuer Kolleginnen und Kollegen."
      - key: "gamification"
        title: "Gamification"
        blurb: "Spielmechaniken für Lernen, Onboarding, Engagement und Finanzbildung."
      - key: "ai_integration"
        title: "KI-Integration"
        blurb: "Sprachmodelle und Agenten, angebunden an Ihre bestehenden Systeme, APIs und Abläufe."
      - key: "devops_cloud"
        title: "DevOps & Cloud"
        blurb: "CI/CD, Kubernetes, AWS, Infrastructure as Code und Observability, damit aus Prototypen Produktivsysteme werden können."
    link_label: "Mehr erfahren"
    all_link: "Alle Leistungen"
  why:
    title: "Warum Moonbloom"
    pillars:
      - key: "human_decides"
        title: "Ein Mensch entscheidet, Agenten bauen"
        body: "KI-Agenten übernehmen das Bauen. Menschen setzen das Ziel, prüfen das Ergebnis und geben jeden Schritt frei. Nichts geht ohne menschliche Freigabe live."
      - key: "senior_architect"
        title: "Ein erfahrener Architekt hinter jedem Build"
        body: "Jeder Build wird von einem KI- und Cloud-Architekten geplant und geprüft, der mehr als 20 Jahre Erfahrung in Cloud, DevOps und KI/ML mitbringt."
      - key: "production_path"
        title: "Ein Weg in die Produktion"
        body: "Prototypen kommen mit Tests und einer klaren Struktur. Geben Sie einen frei, können wir ihn mit unserer DevOps- und Cloud-Arbeit in die Produktion bringen."
  morning:
    title: "Was Sie am Morgen erhalten"
    intro: "Alles, was Sie für eine Entscheidung beim ersten Kaffee brauchen."
    items:
      - key: "prototype"
        title: "Ein funktionierender Prototyp"
        body: "Etwas zum Durchklicken, Aufrufen oder Ausprobieren, keine Foliensammlung."
      - key: "tests"
        title: "Tests"
        body: "Automatisierte Tests, die zeigen, was funktioniert und was geprüft wurde."
      - key: "demo"
        title: "Eine kurze Demo"
        body: "Ein Rundgang durch das, was gebaut wurde, und wie Sie es selbst ausprobieren."
      - key: "decisions"
        title: "Offene Entscheidungen und Fragen"
        body: "Eine kurze Liste der Entscheidungen, die die Agenten nicht für Sie treffen sollten, bereit für Ihre Antworten."
  proof:
    # Render ONLY when a real, approved case study exists. Hide the whole section until then.
    title: "Ideen, die schon aufgeblüht sind"
    body: "[TODO: case study]"
  faq:
    title: "Fragen, bevor Sie pflanzen"
    items:
      - key: "scope"
        q: "Was passt in eine Nacht?"
        a: "Eine klare Idee mit einem Kernablauf, den Sie ausprobieren können. Zum Beispiel: ein Chat über eine Auswahl Ihrer Dokumente, ein Assistent für ein Support-Thema oder eine Verbindung zwischen zwei Systemen. Ist Ihre Idee größer, bauen wir zuerst den Teil, der Ihre wichtigste Frage beantwortet, und planen den Rest für weitere Nächte."
      - key: "not_good_enough"
        q: "Was, wenn der Prototyp nicht gut genug ist?"
        a: "Sagen Sie uns, was fehlt, und wir verfeinern ihn, meist in einer weiteren Nacht. Die Liste offener Entscheidungen am Morgen ist dafür da, dass Sie die Richtung anpassen können, bevor mehr gebaut wird. Ein Prototyp ist ein schneller Weg herauszufinden, ob eine Idee funktioniert; er ist kein Versprechen, dass jede Idee funktioniert."
      - key: "confidentiality"
        q: "Bleiben meine Idee und meine Daten vertraulich?"
        a: "Ja. Wir behandeln alles, was Sie uns anvertrauen, vertraulich und können eine Geheimhaltungsvereinbarung (NDA) unterzeichnen, bevor Sie ins Detail gehen. Wo möglich, bauen wir mit Beispieldaten oder anonymisierten Daten und vereinbaren vorab mit Ihnen, welche KI-Dienste sie verarbeiten dürfen."
      - key: "tech"
        q: "Welche Technologien setzen Sie ein?"
        a: "Was zu Ihrer Umgebung passt. Typisch sind Python oder TypeScript, Sprachmodelle etablierter Anbieter oder Open-Weight-Modelle und containerbasiertes Deployment auf AWS oder Kubernetes. Hat Ihr Team einen Standard-Stack, bauen wir darauf auf."
      - key: "ownership"
        q: "Wem gehört der Code?"
        a: "Ihnen. Der Code des Prototyps und seine Dokumentation gehören Ihnen. [TODO: confirm IP terms]"
      - key: "pricing"
        q: "Was kostet das?"
        a: "[TODO: pricing]"
      - key: "languages"
        q: "In welchen Sprachen arbeiten Sie?"
        a: "Auf Englisch und Slowakisch. Das Vorgespräch, das Briefing, die Oberfläche des Prototyps und die Dokumentation können auf Englisch oder Slowakisch sein."
      - key: "after"
        q: "Wie geht es nach dem Prototyp weiter?"
        a: "Das entscheiden Sie. Behalten Sie ihn als Demo, verfeinern Sie ihn in weiteren Nächten oder machen Sie mit unserer DevOps- und Cloud-Arbeit ein Produktivsystem daraus: CI/CD, Infrastructure as Code, Monitoring und Härtung."
  final_cta:
    title: "Haben Sie eine Idee für heute Abend?"
    body: "Erzählen Sie uns davon. Wir melden uns, um den Umfang und einen Abend für den Start abzustimmen."
    button: "Idee pflanzen"
    secondary_link: "Gespräch vereinbaren"
  keywords:
    primary: "KI-Prototyp"
    secondary: ["KI-Prototyp über Nacht", "KI-Studio", "Proof of Concept KI", "KI-Agenten Softwareentwicklung"]
```

---

## 3. Services index (`/de/leistungen/`)

### DE

```yaml
services_index:
  seo:
    title: "KI-Leistungen: RAG, Chatbots, Integration | Moonbloom Labs"
    description: "RAG-Suche, Wissensdatenbanken, KI-Assistenten, Gamification, KI-Integration und DevOps. Jede Leistung beginnt mit einem Prototyp über Nacht."
  og:
    title: "Was wir über Nacht bauen | Moonbloom Labs"
    description: "Sechs Leistungen, eine Arbeitsweise: Abends beschreiben Sie die Idee, morgens prüfen Sie einen funktionierenden Prototyp."
  h1: "Was wir über Nacht bauen"
  intro: "Jede Leistung beginnt gleich: Abends beschreiben Sie die Idee, über Nacht bauen KI-Agenten sie, und am Morgen entscheiden Sie, wie es weitergeht. Bewährt sich ein Prototyp, helfen wir, ihn in die Produktion zu bringen."
  list_title: "Leistungen"
  cta:
    title: "Nicht sicher, was passt?"
    body: "Beschreiben Sie das Problem in Ihren eigenen Worten. Wir schlagen vor, was wir zuerst bauen."
    button: "Idee pflanzen"
  keywords:
    primary: "KI-Entwicklung für Unternehmen"
    secondary: ["KI-Dienstleistungen", "RAG Entwicklung", "KI-Chatbot Entwicklung", "KI-Integration"]
```

---

## 4. Service detail pages

#### DE

```yaml
service_common:
  needs:
    title: "Was wir an dem Abend von Ihnen brauchen"
    items:
      - "Eine kurze Beschreibung der Idee und wer sie nutzen wird"
      - "Beispieldaten oder -dokumente zum Bauen, wenn möglich anonymisiert"
      - "Zugang zu einem Testsystem oder einer API, falls der Prototyp eines braucht"
  paths:
    title: "Wie es weitergehen kann"
    refine: "Verfeinern: eine weitere Nacht für die Teile, die Sie ändern möchten"
    pilot: "Pilot: mit echten Nutzerinnen und Nutzern und echten Daten erproben"
    production: "Produktion: sauber ausrollen mit unserer DevOps- und Cloud-Arbeit"
  overnight_note: "Typische Beispiele. Den genauen Umfang stimmen wir abends mit Ihnen ab, damit er in eine Nacht passt."
  breadcrumb_label: "Leistungen"
```

### 4.1 RAG & KI-Suche

#### DE

```yaml
service_rag_ai_search:
  seo:
    title: "RAG-Chatbot für Ihre Dokumente | Moonbloom Labs"
    description: "Ein Chat über Ihre Unternehmensdokumente, der mit Quellenangaben antwortet, auf privaten Daten. Funktionierender RAG-Prototyp bis zum Morgen."
  og:
    title: "RAG & KI-Suche, als Prototyp über Nacht"
    description: "Stellen Sie Ihren Dokumenten Fragen und erhalten Sie Antworten mit Verweis auf die Quelle. Am Morgen sehen Sie es mit Ihren eigenen Daten."
  h1: "RAG & KI-Suche"
  intro: "Stellen Sie den Dokumenten Ihres Unternehmens eine Frage in normaler Sprache und erhalten Sie eine Antwort, die zeigt, woher sie stammt. Retrieval-Augmented Generation (RAG) lässt ein Sprachmodell aus Ihren eigenen Quellen antworten, statt zu raten."
  problem:
    title: "Das Problem"
    body: "Die Antwort steht irgendwo: in einem Vertrag, einem Handbuch, einer Richtlinie oder auf einem Netzlaufwerk. Sie zu finden heißt Stichwortsuche, zehn Dateien öffnen, Kollegen fragen. Allgemeine Chatbots sehen Ihre Dokumente nicht, und Antworten ohne Quelle vertraut man nur ungern."
  overnight:
    title: "Was wir über Nacht liefern"
    items:
      - "Einen funktionierenden Chat über eine repräsentative Auswahl Ihrer Dokumente"
      - "Antworten mit Verweis auf Quelldokument und Textstelle"
      - "Einlesen der Formate aus Ihrer Auswahl (zum Beispiel PDF, Word, Webseiten)"
      - "Ein kleines Testset echter Fragen mit den Antworten des Prototyps, damit Sie die Qualität beurteilen können"
      - "Eine Liste offener Entscheidungen: Modellwahl, Hosting, Zugriffsrechte, welche Quellen als Nächstes dazukommen"
  after:
    title: "Nach dem Prototyp"
    body: "Sobald Sie den Ansatz freigeben, binden wir den vollständigen Dokumentenbestand an, ergänzen Zugriffsrechte, damit jede Person nur sieht, was sie sehen darf, richten Aktualisierungen bei Dokumentänderungen ein und stellen das Ganze mit Monitoring in Ihrer oder unserer Cloud bereit."
  fit:
    title: "Passt gut, wenn …"
    items:
      - "Ihr Team immer wieder dieselben Fragen zu internen Dokumenten stellt"
      - "Antworten eine Quelle brauchen, die jemand prüfen kann"
      - "Ihre Dokumente vertraulich sind und unter Ihrer Kontrolle bleiben müssen"
      - "Sie Ergebnisse mit Ihren eigenen Inhalten sehen möchten, bevor Sie sich auf eine Plattform festlegen"
  cta:
    title: "Haben Sie Dokumente, die Fragen beantworten sollten?"
    button: "Idee pflanzen"
  jsonld_description: "Prototyp eines RAG-Chats (Retrieval-Augmented Generation) über die vertraulichen Dokumente eines Kunden, mit Antworten samt Quellenangabe, über Nacht gebaut."
  keywords:
    primary: "RAG Chatbot"
    secondary: ["KI-Suche in Unternehmensdokumenten", "Chat mit eigenen Dokumenten", "RAG Prototyp", "KI-Dokumentensuche"]
```

### 4.2 Wissensmanagement

#### DE

```yaml
service_knowledge_management:
  seo:
    title: "KI-Wissensmanagement und Wissensdatenbank | Moonbloom Labs"
    description: "Aus verstreuten Dokumenten, Wikis und Chats wird eine durchsuchbare, gepflegte Wissensdatenbank. Den Prototyp sehen Sie am nächsten Morgen."
  og:
    title: "Wissensmanagement, als Prototyp über Nacht"
    description: "Dokumente, Wikis und Chatverläufe in einer Wissensdatenbank, die Ihr Team durchsuchen und aktuell halten kann."
  h1: "Wissensmanagement"
  intro: "Das Wissen Ihres Teams steckt in Dokumenten, Wikis, Tickets und Chatverläufen. Wir führen es in einer Wissensdatenbank zusammen, die sich durchsuchen lässt und gepflegt bleibt, statt langsam zu veralten."
  problem:
    title: "Das Problem"
    body: "Dieselbe Antwort steht an drei Stellen, zwei davon veraltet. Neue Kolleginnen und Kollegen wissen nicht, wo sie suchen sollen, und die erfahrenen werden zur Suchmaschine. Wikis starten gut, und dann pflegt sie niemand mehr."
  overnight:
    title: "Was wir über Nacht liefern"
    items:
      - "Eine prototypische Wissensdatenbank aus einer Auswahl Ihrer Quellen (zum Beispiel ein Wiki-Bereich, ein freigegebener Ordner und ein exportierter Chat-Kanal)"
      - "Suche über alle Quellen an einem Ort, mit Links zum Original"
      - "Automatische Gruppierung nach Themen, mit Hinweisen auf Dubletten und möglicherweise veraltete Seiten"
      - "Einen Vorschlag, wie die Datenbank gepflegt bleibt: Verantwortliche, Prüftermine, was archiviert wird"
      - "Eine Liste offener Entscheidungen: welche Quellen angebunden werden, wer welches Thema verantwortet, wo das System läuft"
  after:
    title: "Nach dem Prototyp"
    body: "Wir binden die echten Quellen mit regelmäßiger Synchronisierung an, richten Berechtigungen passend zu Ihren bestehenden ein, ergänzen den Pflegeprozess, auf den sich Ihr Team geeinigt hat, und betreiben das Ganze produktiv mit Monitoring und Backups."
  fit:
    title: "Passt gut, wenn …"
    items:
      - "Wissen über mehrere Tools verteilt ist und keinem davon jemand ganz vertraut"
      - "das Onboarding davon abhängt, wer gerade Zeit für Fragen hat"
      - "Sie schon einmal ein Wiki hatten und es veraltet ist"
      - "Sie Suche und Pflege wollen, nicht nur einen weiteren Ort für Notizen"
  cta:
    title: "Wo lebt das Wissen Ihres Teams heute?"
    button: "Idee pflanzen"
  jsonld_description: "Prototyp einer durchsuchbaren, gepflegten Wissensdatenbank, die Dokumente, Wikis und Chatverläufe eines Kunden zusammenführt, über Nacht gebaut."
  keywords:
    primary: "Wissensmanagement KI"
    secondary: ["interne Wissensdatenbank", "KI-Wissensdatenbank", "durchsuchbares Firmenwiki", "Wissensmanagement Software Prototyp"]
```

### 4.3 Chatbots & KI-Assistenten

#### DE

```yaml
service_chatbots_ai_assistants:
  seo:
    title: "KI-Chatbots für Kundenservice und Helpdesk | Moonbloom Labs"
    description: "KI-Assistenten für Kundenservice, internen Helpdesk und Onboarding, gestützt auf Ihre Inhalte. Funktionierender Prototyp bis zum nächsten Morgen."
  og:
    title: "Chatbots & KI-Assistenten, als Prototyp über Nacht"
    description: "Ein Assistent, der aus Ihren eigenen Inhalten antwortet und weiß, wann er an einen Menschen übergibt. Am Morgen probieren Sie ihn aus."
  h1: "Chatbots & KI-Assistenten"
  intro: "Ein Assistent, der Fragen aus Ihren eigenen Inhalten beantwortet, in Ihrem Ton, und weiß, wann er an einen Menschen übergibt. Für Ihre Kundschaft, für Ihren internen Helpdesk oder für neue Kolleginnen und Kollegen, die sich noch zurechtfinden."
  problem:
    title: "Das Problem"
    body: "Die meisten Fragen wiederholen sich, und doch kostet jede einzelne jemanden Zeit. Skriptbasierte Chatbots scheitern, sobald eine Frage anders formuliert ist, und ein Assistent, der Antworten erfindet, ist schlimmer als keiner."
  overnight:
    title: "Was wir über Nacht liefern"
    items:
      - "Einen funktionierenden Assistenten für einen klar umrissenen Anwendungsfall (zum Beispiel Kundensupport für ein Produkt oder die Grundlagen eines IT-Helpdesks)"
      - "Antworten auf Basis der Inhalte, die Sie bereitstellen, mit einer Ausweichantwort, wenn er etwas nicht weiß"
      - "Eine Übergabe an einen Menschen (zum Beispiel als E-Mail- oder Ticket-Entwurf)"
      - "Ein Set von Testgesprächen mit typischen und kniffligen Fragen, samt Ergebnissen"
      - "Eine Liste offener Entscheidungen: Tonalität, Kanäle, was er nie beantworten darf, wo er läuft"
  after:
    title: "Nach dem Prototyp"
    body: "Wir binden ihn an Ihre Kanäle an (Website, Slack, Microsoft Teams oder Ihr Helpdesk-Tool), ergänzen Protokollierung und Auswertung der Gespräche, setzen Grenzen und Schutzregeln, die Sie freigeben, und betreiben ihn produktiv mit Monitoring."
  fit:
    title: "Passt gut, wenn …"
    items:
      - "Ihr Support oder Helpdesk jede Woche dieselben Fragen beantwortet"
      - "neue Kolleginnen und Kollegen eine geduldige Begleitung durch Tools und Prozesse brauchen"
      - "der Assistent an einen Menschen übergeben soll, statt Wissen vorzutäuschen"
      - "Sie lieber mit echten Fragen testen, als sich eine Anbieter-Demo anzusehen"
  cta:
    title: "Welche Fragen sollte ein Assistent Ihrem Team abnehmen?"
    button: "Idee pflanzen"
  jsonld_description: "Prototyp eines KI-Assistenten oder Chatbots für Kundenservice, internen Helpdesk oder Onboarding, gestützt auf die eigenen Inhalte des Kunden, über Nacht gebaut."
  keywords:
    primary: "KI-Chatbot Kundenservice"
    secondary: ["KI-Assistent für Unternehmen", "Helpdesk Chatbot", "Onboarding Assistent", "individueller KI-Chatbot"]
```

### 4.4 Gamification

#### DE

```yaml
service_gamification:
  seo:
    title: "Gamification für Lernen und Onboarding | Moonbloom Labs"
    description: "Spielmechaniken für Lernen, Onboarding, Engagement und Finanzbildung. Ein spielbarer Prototyp bis zum nächsten Morgen."
  og:
    title: "Gamification, als Prototyp über Nacht"
    description: "Aus einer Lektion, einem Onboarding oder dem Umgang mit Geld wird etwas, das Menschen gern zu Ende bringen. Morgens spielen Sie den Prototyp."
  h1: "Gamification"
  intro: "Spielmechaniken wie Ziele, Fortschritt, Feedback und freundlicher Wettbewerb sorgen dafür, dass Gelerntes hängen bleibt und sich Onboarding weniger nach Papierkram anfühlt. Wir bauen sie über Nacht als Prototyp, damit Sie die Idee spielen können, bevor Sie investieren."
  problem:
    title: "Das Problem"
    body: "Schulungen werden durchgeklickt, Onboarding-Checklisten bleiben liegen, und Themen wie private Finanzen wirken abstrakt. Punkte und Abzeichen obendrauf helfen selten; die Mechanik muss zu dem passen, was Menschen tatsächlich lernen oder tun sollen."
  overnight:
    title: "Was wir über Nacht liefern"
    items:
      - "Einen spielbaren Prototyp einer Kernmechanik (zum Beispiel ein Lernpfad mit Levels, ein szenariobasiertes Quiz oder eine Budget-Challenge)"
      - "Die Regeln schriftlich: Ziele, Punktevergabe, Fortschritt und Feedback"
      - "Tests für die Regeln, damit Punktevergabe und Fortschritt wie geplant funktionieren"
      - "Eine kurze Demo einer ersten Spielrunde aus Sicht der Spielenden"
      - "Eine Liste offener Entscheidungen: Zielgruppe, Belohnungen, Schwierigkeitsgrad, woran sich Erfolg zeigt"
  after:
    title: "Nach dem Prototyp"
    body: "Wir verfeinern die Mechanik danach, wie Menschen sie tatsächlich spielen, ergänzen Inhalte und Benutzerkonten, binden sie bei Bedarf an Ihre Lernplattform oder App an und stellen sie mit einer Analyse bereit, die Ihre Datenschutzregeln respektiert."
  fit:
    title: "Passt gut, wenn …"
    items:
      - "Sie Schulungen oder Onboarding anbieten, die Menschen nur abschließen, weil sie müssen"
      - "Sie eine Fähigkeit wie Finanzbildung vermitteln, die Übung braucht, nicht nur Lektüre"
      - "Sie eine Spielidee mit echten Menschen testen möchten, bevor Sie eine vollständige Umsetzung beauftragen"
      - "Ihnen Lernerfolg wichtiger ist als Punkte und Abzeichen"
  cta:
    title: "Was sollen Menschen gern zu Ende bringen?"
    button: "Idee pflanzen"
  jsonld_description: "Spielbarer Prototyp von Spielmechaniken für Lernen, Onboarding, Engagement oder Finanzbildung, mit dokumentierten Regeln, über Nacht gebaut."
  keywords:
    primary: "Gamification Lernen"
    secondary: ["Gamification Onboarding", "Lernspiel Finanzbildung", "Gamification Prototyp", "Lernspiel Entwicklung"]
```

### 4.5 KI-Integration

#### DE

```yaml
service_ai_integration:
  seo:
    title: "KI-Integration in Ihre Systeme und APIs | Moonbloom Labs"
    description: "Sprachmodelle und KI-Agenten, angebunden an Ihre bestehenden Systeme, APIs und Abläufe. Ein funktionierender Integrations-Prototyp bis zum Morgen."
  og:
    title: "KI-Integration, als Prototyp über Nacht"
    description: "Ein Sprachmodell oder ein Agent arbeitet in den Systemen, die Sie schon nutzen, und ein Mensch gibt frei, worauf es ankommt."
  h1: "KI-Integration"
  intro: "Ihren Wert zeigt KI dort, wo sie in den Werkzeugen arbeitet, die Sie bereits nutzen. Wir verbinden Sprachmodelle und Agenten mit Ihren Systemen, APIs und Abläufen, und die Schritte, auf die es ankommt, gibt ein Mensch frei."
  problem:
    title: "Das Problem"
    body: "Menschen kopieren Text zwischen einem Chatfenster und den Systemen, in denen sie arbeiten. Pilotprojekte bleiben in der Sandbox, weil niemand sie an echte Daten angebunden hat. Und es ist unklar, welche Schritte KI allein erledigen soll und welche eine menschliche Freigabe brauchen."
  overnight:
    title: "Was wir über Nacht liefern"
    items:
      - "Eine funktionierende Integration für einen Ablauf (zum Beispiel eingehende E-Mails klassifizieren, Daten aus Dokumenten in Ihr System übernehmen oder Antwortentwürfe zur Freigabe erstellen)"
      - "Anbindung an Ihre APIs oder an eine Testkopie davon"
      - "Einen menschlichen Freigabeschritt überall dort, wo der Ablauf Daten ändert oder jemanden kontaktiert"
      - "Tests für die erwarteten Eingaben und für die unbequemen"
      - "Eine Liste offener Entscheidungen: Modell und Anbieter, Kostengrenzen, Fehlerbehandlung, wer was freigibt"
  after:
    title: "Nach dem Prototyp"
    body: "Wir härten die Integration: Authentifizierung, Aufruf- und Kostengrenzen, Logging, Wiederholungsversuche und Monitoring. Dann rollen wir sie über eine CI/CD-Pipeline in Ihre Umgebung aus, damit Änderungen geprüft und wiederholbar sind."
  fit:
    title: "Passt gut, wenn …"
    items:
      - "Ihr Team Informationen von Hand zwischen Systemen überträgt"
      - "Sie APIs oder Daten haben, mit denen ein Sprachmodell arbeiten könnte"
      - "Sie klare menschliche Freigabepunkte wollen, keine Blackbox"
      - "ein KI-Pilot feststeckt und echte Systeme erreichen muss, um sich zu beweisen"
  cta:
    title: "Bei welchem Ablauf soll KI zuerst helfen?"
    button: "Idee pflanzen"
  jsonld_description: "Prototyp einer Integration von Sprachmodellen und KI-Agenten in bestehende Systeme, APIs und Abläufe eines Kunden, mit menschlichen Freigabeschritten, über Nacht gebaut."
  keywords:
    primary: "KI-Integration"
    secondary: ["LLM Integration", "KI-Agenten Unternehmen", "Prozessautomatisierung mit KI", "KI an API anbinden"]
```

### 4.6 DevOps & Cloud

#### DE

```yaml
service_devops_cloud:
  seo:
    title: "DevOps und Cloud: CI/CD, Kubernetes, AWS | Moonbloom Labs"
    description: "CI/CD, Kubernetes, AWS, Infrastructure as Code und Observability, damit aus einem Prototyp ein Produktivsystem wird, das Sie betreiben können."
  og:
    title: "DevOps & Cloud: vom Prototyp in die Produktion"
    description: "Pipelines, Infrastructure as Code und Monitoring, die einen freigegebenen Prototyp in die Produktion bringen, Schritt für freigegebenen Schritt."
  h1: "DevOps & Cloud"
  intro: "Ein Prototyp beweist eine Idee; die Produktion braucht mehr. Wir richten CI/CD, Kubernetes oder verwaltete Cloud-Dienste auf AWS, Infrastructure as Code und Observability ein, damit das, was Sie freigeben, zuverlässig läuft."
  problem:
    title: "Das Problem"
    body: "Prototypen laufen oft auf einem Laptop oder einem von Hand eingerichteten Server. Niemand weiß genau, wie man sie sicher ausrollt, wie man zurückrollt oder wie man merkt, dass etwas kaputt ist, bevor es Nutzer bemerken."
  overnight:
    title: "Was wir über Nacht liefern"
    items:
      - "Eine CI/CD-Pipeline, die einen Service baut, testet und in eine von Ihnen bereitgestellte Testumgebung ausrollt"
      - "Infrastructure as Code für diese Umgebung (zum Beispiel Terraform), geprüft und wiederholbar"
      - "Grundlegende Observability: Logs, Health-Checks und ein erstes Dashboard"
      - "Ein schriftliches Runbook: wie man ausrollt, zurückrollt und den Zustand prüft"
      - "Eine Liste offener Entscheidungen: Umgebungen, Zugänge, Kostengrenzen, wofür es Alarme braucht"
  after:
    title: "Nach dem Prototyp"
    body: "Wir erweitern das Setup auf Staging und Produktion, ergänzen Secrets-Management, Backups, Alerting und Sicherheitshärtung und übergeben eine Dokumentation, mit der Ihr Team den Betrieb übernehmen kann. Jede Änderung an der Produktion durchläuft ein Review und Ihre Freigabe."
  fit:
    title: "Passt gut, wenn …"
    items:
      - "Sie einen Prototyp oder ein Produkt haben, das von Hand ausgerollt wird"
      - "Sie auf AWS oder Kubernetes laufen oder das planen"
      - "Sie Infrastruktur wollen, die Sie lesen, prüfen und neu aufbauen können"
      - "Sie wissen müssen, dass etwas kaputt ist, bevor Ihre Nutzer es Ihnen sagen"
  cta:
    title: "Bereit, einen Prototyp weiterzubringen?"
    button: "Idee pflanzen"
  jsonld_description: "DevOps- und Cloud-Engineering (CI/CD, Kubernetes, AWS, Infrastructure as Code, Observability), das freigegebene Prototypen in die Produktion bringt."
  keywords:
    primary: "DevOps Beratung"
    secondary: ["CI/CD Einrichtung", "Kubernetes Beratung", "AWS Infrastructure as Code", "vom Prototyp zur Produktion"]
```

---

## 5. About (`/de/ueber-uns/`)

### DE

```yaml
about:
  seo:
    title: "Über Moonbloom Labs: Ein Mensch entscheidet, Agenten bauen"
    description: "Gegründet von einem KI- und Cloud-Architekten mit über 20 Jahren in Cloud, DevOps und KI/ML, Mitgründer eines KI-Labors an der STU."
  og:
    title: "Über Moonbloom Labs"
    description: "Warum wir Prototypen über Nacht bauen, wer hinter jedem Build steht und nach welchen Grundsätzen wir arbeiten."
  h1: "Ein Mensch entscheidet. Agenten bauen."
  intro: "Moonbloom Labs ist ein KI-Studio, das aus einer Idee bis zum nächsten Morgen einen funktionierenden Prototyp macht. KI-Agenten übernehmen das Bauen; ein Mensch gibt die Richtung vor und jeden Schritt frei."
  founder:
    title: "Wer dahintersteht"
    name: "Michal Maxian"
    role: "Gründer, KI- und Cloud-Architekt"
    body:
      - "Gegründet wurde Moonbloom Labs von Michal Maxian, einem KI- und Cloud-Architekten mit mehr als 20 Jahren Erfahrung in Cloud, DevOps und KI/ML. Er ist Mitgründer eines KI-Labors an der Slowakischen Technischen Universität in Bratislava (STU)."
      - "Wochenlang darauf zu warten, ob eine Idee funktioniert, ist oft der langsamste Teil eines Projekts. KI-Agenten können heute in einer Nacht viel Code schreiben und testen. Moonbloom nutzt das und stellt das Urteil eines Architekten daneben: Der Umfang wird mit Ihnen abgestimmt, der Build geplant und geprüft, und jede wichtige Entscheidung bleibt bei Menschen."
    photo_alt: "Porträt von Michal Maxian, Gründer von Moonbloom Labs"
    photo: "[TODO: founder photo]"
  principles:
    title: "So arbeiten wir"
    items:
      - key: "human_decides"
        title: "Ein Mensch entscheidet"
        body: "Agenten bauen, Menschen entscheiden. Abends geben Sie den Umfang frei, morgens das Ergebnis, und nichts geht ohne menschliche Freigabe live."
      - key: "transparent"
        title: "Transparent"
        body: "Sie sehen, was gebaut wurde, wie es getestet wurde und was noch offen ist. Die Liste der Entscheidungen am Morgen zeigt genau, wo Ihr Urteil gefragt ist."
      - key: "secure_by_default"
        title: "Sicher von Anfang an"
        body: "Wir behandeln Ihre Ideen und Daten vertraulich, nutzen wo möglich Beispieldaten oder anonymisierte Daten und vereinbaren vorab, welche Dienste sie verarbeiten dürfen."
      - key: "honest_scope"
        title: "Ehrlicher Umfang"
        body: "Eine Nacht ergibt einen Prototyp, kein fertiges Produkt. Abends sagen wir Ihnen, was hineinpasst, und morgens, was noch fehlt."
  cta:
    title: "Schauen wir, wie Ihre Idee am Morgen aussieht."
    button: "Idee pflanzen"
  keywords:
    primary: "KI-Studio Slowakei"
    secondary: ["KI-Architekt", "KI-Prototypen Bratislava", "Human-in-the-Loop KI-Entwicklung"]
```

---

## 6. Contact (`/de/kontakt/`)

Form limits for DE: `idea` 10–5000 characters (`{min}` = 10, `{max}` = 5000), `name` ≤ 100. The `language` select still offers English and Slovak only (no `option_de` key in the master); default it to English on DE pages unless the owner adds German.

### DE

```yaml
contact:
  seo:
    title: "Idee pflanzen | Kontakt zu Moonbloom Labs"
    description: "Beschreiben Sie Ihre Idee. Wir melden uns, um den Umfang und einen Abend für den Start abzustimmen. Auf Englisch oder Slowakisch."
  og:
    title: "Pflanzen Sie Ihre Idee bei Moonbloom Labs"
    description: "Erzählen Sie uns, was Sie funktionieren sehen möchten. Wir melden uns und stimmen einen Umfang ab, der in eine Nacht passt."
  h1: "Pflanzen Sie Ihre Idee"
  intro: "Erzählen Sie uns, was Sie funktionieren sehen möchten. Ein paar Sätze genügen. Wir melden uns, um den Umfang und einen Abend für ein kurzes Vorgespräch abzustimmen; danach machen sich die Agenten an die Arbeit."
  what_next:
    title: "So geht es weiter"
    items:
      - "Wir lesen Ihre Idee und antworten per E-Mail."
      - "Wir stimmen den Umfang und einen Abend für ein kurzes Gespräch oder ein schriftliches Briefing ab."
      - "Agenten bauen über Nacht; am Morgen prüfen Sie den Prototyp."
  form:
    aria_label: "Kontaktformular"
    required_hint: "Mit * gekennzeichnete Felder sind Pflichtfelder."
    name:
      label: "Ihr Name *"
      placeholder: "Erika Mustermann"
    email:
      label: "E-Mail *"
      placeholder: "erika@firma.de"
      help: "Wir verwenden sie nur, um Ihnen zu antworten."
    company:
      label: "Unternehmen (optional)"
      placeholder: "Name des Unternehmens"
    idea:
      label: "Ihre Idee *"
      placeholder: "Zum Beispiel: ein Chat, der Fragen aus unseren internen Handbüchern beantwortet, mit Links zur Quelle."
      help: "Was soll am Morgen funktionieren, und wer wird es nutzen? Bitte geben Sie hier keine Passwörter oder vertraulichen Daten an."
    language:
      label: "Bevorzugte Sprache *"
      option_en: "Englisch"
      option_sk: "Slowakisch"
    honeypot:
      label: "Dieses Feld bitte leer lassen"
    submit: "Idee pflanzen"
    submitting: "Wird gesendet …"
    privacy_note: "Wir verwenden Ihre Angaben nur, um auf Ihre Nachricht zu antworten. Mehr dazu in unserer [Datenschutzerklärung](/de/datenschutz/)."
  validation:
    name_required: "Bitte geben Sie Ihren Namen an."
    email_required: "Bitte geben Sie Ihre E-Mail-Adresse an, damit wir antworten können."
    email_invalid: "Diese E-Mail-Adresse scheint nicht zu stimmen. Bitte prüfen Sie sie."
    idea_required: "Bitte beschreiben Sie Ihre Idee in ein, zwei Sätzen."
    idea_too_short: "Ein paar Worte mehr, bitte: mindestens {min} Zeichen. Ein kurzer Satz genügt."
    idea_too_long: "Das ist mehr, als in eine Nachricht passt. Bitte kürzen Sie auf höchstens {max} Zeichen."
    name_too_long: "Bitte kürzen Sie Ihren Namen auf höchstens {max} Zeichen."
    language_required: "Bitte wählen Sie eine Sprache."
    form_errors_summary: "Bitte prüfen Sie die markierten Felder."
  status:
    success_title: "Ihre Idee ist gepflanzt."
    success_body: "Vielen Dank. Wir melden uns per E-Mail, um den Umfang und einen Abend für den Start abzustimmen."
    failure_title: "Ihre Nachricht wurde nicht gesendet."
    failure_body: "Bei uns ist etwas schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie uns an michal@maxian.sk."
    rate_limited: "Sie haben in kurzer Zeit mehrere Nachrichten gesendet. Bitte warten Sie ein paar Minuten und versuchen Sie es dann erneut."
    error_invalid: "Einige Felder brauchen noch einen Blick. Bitte prüfen Sie sie und senden Sie erneut."
    error_captcha: "Die Sicherheitsprüfung konnte nicht bestätigt werden. Bitte versuchen Sie es erneut."
    error_delivery: "Ihre Nachricht wurde nicht zugestellt. Bitte versuchen Sie es erneut oder schreiben Sie uns an michal@maxian.sk."
    error_method: "Mit dem Formular ist etwas schiefgelaufen. Bitte laden Sie die Seite neu und versuchen Sie es erneut."
    error_noscript_generic: "Ihre Nachricht wurde nicht gesendet. Bitte prüfen Sie die Felder und versuchen Sie es erneut, oder schreiben Sie uns an michal@maxian.sk."
  turnstile_note: "Dieses Formular nutzt Cloudflare Turnstile, um Spam fernzuhalten."
  talk:
    line: "Lieber sprechen? [Vereinbaren Sie ein Gespräch](mailto:michal@maxian.sk?subject=Moonbloom%20Labs%20%E2%80%93%20Gespr%C3%A4ch) und nennen Sie uns Zeiten, die Ihnen passen."
    mailto_subject: "Moonbloom Labs – Gespräch"
    mailto_body: "Guten Tag, ich würde gern über eine Idee sprechen. Diese Zeiten passen mir: "
  keywords:
    primary: "KI-Prototyp anfragen"
    secondary: ["KI-Prototyp beauftragen", "KI-Studio Kontakt"]
```

---

## 7. Thank-you page (`/de/danke/`, `noindex`)

### DE

```yaml
thank_you:
  seo:
    title: "Danke | Moonbloom Labs"
    description: "Ihre Idee ist gepflanzt. Wir melden uns per E-Mail, um den Umfang und einen Abend für den Start abzustimmen."
  og:
    title: "Ihre Idee ist gepflanzt"
    description: "Wir melden uns per E-Mail, um den Umfang und einen Abend für den Start abzustimmen."
  h1: "Ihre Idee ist gepflanzt."
  body: "Danke für Ihre Nachricht. Wir lesen Ihre Idee und melden uns per E-Mail, um den Umfang und einen Abend für ein kurzes Vorgespräch abzustimmen."
  next_title: "Während Sie warten"
  next_items:
    - "Überlegen Sie, wer den Prototyp am Morgen ausprobieren wird."
    - "Sammeln Sie ein paar Beispieldokumente, Fragen oder Daten, mit denen wir bauen könnten. Am besten anonymisiert."
    - "Notieren Sie die eine Frage, die der Prototyp für Sie beantworten muss."
  links:
    how: "So funktioniert’s"
    services: "Leistungen ansehen"
    home: "Zur Startseite"
```

---

## 8. Datenschutzerklärung (`/de/datenschutz/`)

**[TODO: legal review]**: plain-language draft, not legal advice. The controller is the same Slovak entity as in EN; only the wording is German. GDPR articles are cited in German format ("Art. 6 Abs. 1 lit. b DSGVO"). The supervisory-authority sentence names the Slovak ÚOOÚ SR as the authority responsible for us, plus the reader's local authority (Germany: the data protection authority of the federal state; Austria: Datenschutzbehörde, dsb.gv.at). The legal reviewer should confirm the term "federführend" (Art. 56 DSGVO) fits a controller with a single Slovak establishment.

### DE

```yaml
privacy:
  seo:
    title: "Datenschutzerklärung | Moonbloom Labs"
    description: "Wie Moonbloom Labs personenbezogene Daten verarbeitet: was wir über das Kontaktformular erheben, wozu, wie lange und Ihre Rechte nach der DSGVO."
  og:
    title: "Datenschutzerklärung | Moonbloom Labs"
    description: "Datenschutz in klarer Sprache: Formulardaten nur für die Antwort, Webanalyse ohne Cookies, Ihre Rechte nach der DSGVO."
  h1: "Datenschutzerklärung"
  review_flag: "[TODO: legal review]"
  updated: "Stand: [TODO: date of publication]"
  intro: "Wir halten es kurz und verständlich. Wir erheben so wenige personenbezogene Daten wie möglich und nutzen sie nur für die hier beschriebenen Zwecke."
  sections:
    - key: "controller"
      title: "Verantwortlicher"
      body: "Verantwortlich für die Verarbeitung Ihrer personenbezogenen Daten im Sinne der DSGVO ist [TODO: company legal name], Identifikationsnummer (IČO): [TODO: IČO], Sitz: [TODO: registered address], Slowakei. Bei Fragen zum Datenschutz erreichen Sie uns unter michal@maxian.sk."
    - key: "contact_form"
      title: "Was wir über das Kontaktformular erheben"
      body: "Wenn Sie das Kontaktformular absenden, erhalten wir Ihren Namen, Ihre E-Mail-Adresse, Ihr Unternehmen (falls angegeben), Ihre Beschreibung der Idee und Ihre bevorzugte Sprache. Wir verwenden diese Angaben ausschließlich, um Ihnen zu antworten und die angefragte Arbeit mit Ihnen zu besprechen. Wir nutzen sie nicht für Newsletter oder Werbung und verkaufen sie nicht."
    - key: "legal_basis"
      title: "Rechtsgrundlagen"
      body: "Wir verarbeiten diese Daten zur Durchführung vorvertraglicher Maßnahmen, die auf Ihre Anfrage erfolgen (Art. 6 Abs. 1 lit. b DSGVO). Die Aufbewahrung unserer Korrespondenz stützen wir auf unser berechtigtes Interesse, an das Gespräch anknüpfen zu können (Art. 6 Abs. 1 lit. f DSGVO)."
    - key: "storage"
      title: "Speicherort und Speicherdauer"
      body: "Nachrichten aus dem Formular werden an unser geschäftliches E-Mail-Postfach zugestellt und dort gespeichert. [TODO: confirm email provider and where the mailbox is hosted] Wir bewahren die Nachrichten auf, solange wir mit Ihnen im Austausch sind, und danach für [TODO: retention period], sofern keine gesetzliche Pflicht eine längere Aufbewahrung verlangt und Sie nicht vorher die Löschung verlangen."
    - key: "hosting"
      title: "Hosting der Website"
      body: "Diese Website wird von der Websupport s.r.o. in der Slowakei gehostet. Bei Ihrem Besuch verarbeitet der Server technische Daten wie Ihre IP-Adresse und Ihren Browsertyp, um die Seiten auszuliefern und abzusichern. [TODO: confirm server log retention with Websupport]"
    - key: "analytics"
      title: "Webanalyse ohne Cookies"
      body: "Wir nutzen Cloudflare Web Analytics, um Besuche zu zählen und zu sehen, welche Seiten gelesen werden. Der Dienst setzt keine Cookies und nutzt nicht den lokalen Speicher Ihres Browsers. Die Daten verarbeitet Cloudflare, Inc. als unser Auftragsverarbeiter; wir erhalten sie nur in zusammengefasster Form. [TODO: confirm Cloudflare data processing terms and any transfer outside the EU]"
    - key: "spam_protection"
      title: "Spamschutz im Formular"
      body: "Das Kontaktformular kann Cloudflare Turnstile nutzen, um Menschen von Bots zu unterscheiden. Wenn Sie das Formular verwenden, verarbeitet Turnstile technische Signale wie Ihre IP-Adresse und Merkmale Ihres Browsers; Anbieter ist Cloudflare, Inc. als unser Auftragsverarbeiter. Rechtsgrundlage ist unser berechtigtes Interesse, das Formular frei von Spam zu halten (Art. 6 Abs. 1 lit. f DSGVO). [TODO: confirm Turnstile is enabled at launch, its data processing terms and that it sets no cookies]"
    - key: "cookies"
      title: "Cookies"
      body: "Diese Website verwendet keine Cookies für Analyse oder Werbung. [TODO: confirm no other cookies are set, e.g. by the form or the language switcher]"
    - key: "recipients"
      title: "Empfänger Ihrer Daten"
      body: "Nur die oben genannten Dienstleister, die in unserem Auftrag handeln: unser Hosting-Anbieter, unser E-Mail-Anbieter und Cloudflare für Webanalyse und Spamschutz. Darüber hinaus geben wir Ihre Daten nur weiter, wenn das Gesetz es verlangt."
    - key: "rights"
      title: "Ihre Rechte"
      body: "Sie haben das Recht auf Auskunft, Berichtigung und Löschung Ihrer Daten, auf Einschränkung der Verarbeitung, auf Widerspruch gegen die Verarbeitung und auf Datenübertragbarkeit. Schreiben Sie dazu an michal@maxian.sk; wir antworten innerhalb eines Monats. Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO), insbesondere in dem EU-Mitgliedstaat, in dem Sie leben oder arbeiten. In Deutschland ist das die Datenschutzaufsichtsbehörde Ihres Bundeslandes, in Österreich die Datenschutzbehörde (dsb.gv.at). Federführend für uns zuständig ist das Amt für den Schutz personenbezogener Daten der Slowakischen Republik (Úrad na ochranu osobných údajov SR, ÚOOÚ SR, dataprotection.gov.sk)."
    - key: "changes"
      title: "Änderungen dieser Datenschutzerklärung"
      body: "Wenn sich ändert, wie wir personenbezogene Daten verarbeiten, aktualisieren wir diese Seite und das Datum oben."
```

---

## 9. Impressum (`/de/impressum/`)

**[TODO: legal review: DE imprint = Impressum per § 5 DDG]**. Labels follow the requested German structure: Anbieter, Anschrift, Kontakt, Registereintrag, USt-IdNr. The Slovak IDs (IČO, DIČ) keep their EN keys with German labels.

**Key-parity gap, needs a decision before launch.** Two required Impressum items have no key in the EN master, so they are **not** in the DE block below (adding them here would break parity):
- "Vertretungsberechtigt" (the person authorised to represent the company, § 5 Abs. 1 Nr. 1 DDG).
- "Verantwortlich i.S.d. § 18 Abs. 2 MStV" (only needed if the site carries journalistic-editorial content; the legal reviewer should confirm whether it applies to a business site with no blog).

Proposed fix: add `representative_label/value` and `responsible_label/value` to `imprint.fields` in **all five** locales (copy.md §9 already anticipates `representative_*`). DE strings, ready to paste once the keys exist: `representative_label: "Vertretungsberechtigt"`, `representative_value: "[TODO: legal review]"`, `responsible_label: "Verantwortlich i.S.d. § 18 Abs. 2 MStV"`, `responsible_value: "[TODO: legal review]"`. § 5 DDG also expects a second fast contact channel besides email (phone or the contact form); the contact form at `/de/kontakt/` may satisfy this, which the lawyer should confirm. Suggested render order on the page: Anbieter, Anschrift, Vertretungsberechtigt, Kontakt, Registereintrag, USt-IdNr., IČO, DIČ, Verantwortlich, Hosting.

### DE

```yaml
imprint:
  seo:
    title: "Impressum | Moonbloom Labs"
    description: "Anbieterkennzeichnung von moonbloomlabs.com nach § 5 DDG: Firmenname, Anschrift, Registereintrag und Kontakt."
  og:
    title: "Impressum | Moonbloom Labs"
    description: "Anbieterkennzeichnung von moonbloomlabs.com."
  h1: "Impressum"
  review_flag: "[TODO: legal review]"
  fields:
    operator_label: "Anbieter"
    operator_value: "[TODO: company legal name]"
    ico_label: "Identifikationsnummer (IČO)"
    ico_value: "[TODO: IČO]"
    dic_label: "Steuernummer (DIČ)"
    dic_value: "[TODO: DIČ]"
    vat_label: "USt-IdNr. (IČ DPH)"
    vat_value: "[TODO: IČ DPH or 'not a VAT payer']"
    address_label: "Anschrift"
    address_value: "[TODO: registered address]"
    register_label: "Registereintrag"
    register_value: "[TODO: register entry, e.g. Business Register of the District Court ..., Section ..., Insert No. ...]"
    contact_label: "Kontakt"
    contact_value: "michal@maxian.sk"
    hosting_label: "Hosting"
    hosting_value: "Websupport s.r.o., Slowakei"
  trade_name_note: "Moonbloom Labs ist die Geschäftsbezeichnung von [TODO: company legal name]."
```

---

## 10. 404 page (`noindex`)

### DE

```yaml
not_found:
  seo:
    title: "Seite nicht gefunden | Moonbloom Labs"
    description: "Diese Seite ist noch nicht aufgeblüht. Gehen Sie zurück zur Startseite oder pflanzen Sie Ihre Idee."
  og:
    title: "Seite nicht gefunden | Moonbloom Labs"
    description: "Diese Seite ist noch nicht aufgeblüht."
  h1: "Diese Idee ist noch nicht aufgeblüht."
  body: "Die gesuchte Seite ist nicht hier. Vielleicht wurde sie verschoben, vielleicht ist sie noch ein Samenkorn. So oder so: Diese Wege stehen in voller Blüte."
  links:
    home: "Zur Startseite"
    services: "Unsere Leistungen"
    contact: "Idee pflanzen"
  code_label: "Fehler 404"
```

---

## 11. Structured data (JSON-LD text)

Same rules as EN: no `offers`/price, `aggregateRating`, `review`, `award` or `founder.sameAs` until confirmed.

### DE

```yaml
jsonld:
  organization:
    name: "Moonbloom Labs"
    url: "https://moonbloomlabs.com/de/"
    slogan: "Ideen blühen über Nacht auf."
    description: "Moonbloom Labs ist ein KI-Studio, das aus einer Idee bis zum nächsten Morgen einen funktionierenden Prototyp macht. Am Abend beschreibt der Kunde die Idee, über Nacht bauen und testen KI-Agenten sie, und am Morgen prüft der Kunde einen funktionierenden Prototyp, seine Tests und eine Liste offener Entscheidungen. Ein Mensch entscheidet, Agenten bauen."
    founder_name: "Michal Maxian"
    area_served: "[TODO: confirm area served, e.g. Slovakia, European Union]"
    email: "michal@maxian.sk"
    legal_name: "[TODO: company legal name]"
  services:
    rag_ai_search: "Prototyp eines RAG-Chats (Retrieval-Augmented Generation) über die vertraulichen Dokumente eines Kunden, mit Antworten samt Quellenangabe, über Nacht gebaut."
    knowledge_management: "Prototyp einer durchsuchbaren, gepflegten Wissensdatenbank, die Dokumente, Wikis und Chatverläufe eines Kunden zusammenführt, über Nacht gebaut."
    chatbots_ai_assistants: "Prototyp eines KI-Assistenten oder Chatbots für Kundenservice, internen Helpdesk oder Onboarding, gestützt auf die eigenen Inhalte des Kunden, über Nacht gebaut."
    gamification: "Spielbarer Prototyp von Spielmechaniken für Lernen, Onboarding, Engagement oder Finanzbildung, mit dokumentierten Regeln, über Nacht gebaut."
    ai_integration: "Prototyp einer Integration von Sprachmodellen und KI-Agenten in bestehende Systeme, APIs und Abläufe eines Kunden, mit menschlichen Freigabeschritten, über Nacht gebaut."
    devops_cloud: "DevOps- und Cloud-Engineering (CI/CD, Kubernetes, AWS, Infrastructure as Code, Observability), das freigegebene Prototypen in die Produktion bringt."
```

Keyword note: the DE keywords start from copy.md §11.1 and are unvalidated estimates (no SEO tool connected). After four to six weeks live, re-rank with Search Console data for `/de/`.

---

## 12. Native review: check these first

1. Tagline `home.h1` / `footer.tagline` / `jsonld.slogan`: "Ideen blühen über Nacht auf." vs. "Ideen erblühen über Nacht."
2. Subline `home.hero.subtitle`: "Pflanzen Sie abends eine Idee. Morgens ist sie fertig." Does it keep the lightness of "Wake up to done"?
3. CTA "Idee pflanzen" (button) and "Pflanzen Sie Ihre Idee" (contact H1): natural to a German B2B reader, or too odd? Fallback: "Idee einreichen" (loses the imagery).
4. Gender-inclusive forms: pair forms are used ("Kolleginnen und Kollegen", "Nutzerinnen und Nutzern", "Kundschaft") while some places use the generic masculine ("Nutzer", "der Kunde" in JSON-LD). Decide one site-wide rule.
5. `service_*.fit` items: lower-case continuation of "Passt gut, wenn …" with verb-final clauses and no final punctuation.
6. `home.morning.intro` "beim ersten Kaffee" and `home.why` "Nichts geht ohne menschliche Freigabe live."
7. `contact.talk.line` / `mailto_subject`: follows the owner's EN/SK subject override pattern ("Moonbloom Labs – Gespräch"), not the master's "Book a call" wording.
8. Privacy and Impressum terminology (legal reviewer): "federführend", "vorvertragliche Maßnahmen", "Auftragsverarbeiter", "Anbieterkennzeichnung", labels for IČO/DIČ.

## 13. Claims and brand review (stage 6)

```yaml
claims_review:
  passed:
    - "Every product claim is carried over from the EN master, whose claims review passed; no new capability, client, metric or price added."
    - "Placeholders: every EN [TODO: …] kept verbatim except [TODO: contact email] -> michal@maxian.sk (owner instruction)."
    - "Complaint right: Art. 77 DSGVO; Slovak ÚOOÚ SR named as the authority for us, DE federal-state authorities and AT Datenschutzbehörde as local examples."
  fixed_during_adaptation:
    - "FAQ 'languages' reframed as 'In welchen Sprachen arbeiten Sie?' with answer 'Englisch und Slowakisch', so the German site does not imply German-language service."
    - "Contact seo.description says 'Auf Englisch oder Slowakisch' for the same reason."
    - "Validation copy rewritten for a 10-character minimum ('Ein kurzer Satz genügt' instead of 'a sentence or two')."
  unresolved:
    - "Impressum: 'Vertretungsberechtigt' and 'Verantwortlich i.S.d. § 18 Abs. 2 MStV' need new keys in all locales (see section 9)."
    - "Owner: is German-language intake or delivery offered? If yes, update FAQ 'languages', contact description and add option_de in all locales."
  banned_word_scan: "grind, hustle, 24/7, rund um die Uhr, nonstop, Nachtschicht, revolution*, garant*: checked by script over all DE YAML values"
  length_check: "seo.title <= 60 and seo.description <= 155: checked by script"
  parity_check: "DE key paths, list lengths and item keys identical to the EN blocks in copy.md: checked by script"
```
