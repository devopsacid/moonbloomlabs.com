// Imported from docs/plan/copy.md by scripts/import-copy.mjs.
import type { Dictionary } from './dictionary';

export const sk: Dictionary = {
  common: {
    skip_link: 'Preskočiť na obsah',
    brand_name: 'Moonbloom Labs',
    logo_alt: 'Moonbloom Labs – úvod',
    nav: {
      aria_label: 'Hlavná navigácia',
      services: 'Služby',
      how_it_works: 'Ako to funguje',
      about: 'O nás',
      contact: 'Kontakt',
      cta: 'Zasaďte svoj nápad',
      menu_open: 'Otvoriť menu',
      menu_close: 'Zavrieť menu',
    },
    lang_switcher: {
      aria_label: 'Jazyk',
      current_label: 'SK',
      en_label: 'English',
      sk_label: 'Slovenčina',
      switch_to_other: 'Read in English',
    },
    footer: {
      tagline: 'Nápady rozkvitnú cez noc.',
      blurb:
        'AI štúdio, ktoré z nápadu do rána urobí funkčný prototyp. Rozhoduje človek, stavajú agenti.',
      nav_heading: 'Štúdio',
      services_heading: 'Služby',
      legal_heading: 'Právne informácie',
      privacy: 'Ochrana osobných údajov',
      imprint: 'Údaje o prevádzkovateľovi',
      contact_line: 'Napíšte nám: michal@maxian.sk',
      copyright: '© 2026 Moonbloom Labs',
      principle_line: 'Každé vydanie schvaľuje človek.',
    },
    breadcrumbs: {
      home: 'Úvod',
      services: 'Služby',
    },
    common_cta: {
      plant_idea: 'Zasaďte svoj nápad',
      learn_more: 'Viac o službe',
      back_home: 'Späť na úvod',
    },
  },
  home: {
    seo: {
      title: 'Moonbloom Labs: AI prototyp cez noc',
      description:
        'Večer nám opíšete nápad, cez noc ho AI agenti postavia a ráno si pozriete funkčný prototyp, testy a zoznam otvorených rozhodnutí.',
    },
    og: {
      title: 'Nápady rozkvitnú cez noc | Moonbloom Labs',
      description:
        'Večer zasaďte nápad. Ráno vás čaká funkčný prototyp, testy, krátke demo a rozhodnutia, ktoré patria vám.',
    },
    h1: 'Nápady rozkvitnú cez noc.',
    hero: {
      eyebrow: 'AI štúdio pre funkčné prototypy',
      title: 'Nápady rozkvitnú cez noc.',
      subtitle: 'Večer zasaďte nápad. Ráno je hotovo.',
      body: 'Moonbloom Labs je AI štúdio pre funkčné prototypy. Večer nám v krátkom hovore predstavíte svoj nápad, cez noc ho AI agenti postavia podľa plánu, ktorý skontroloval skúsený architekt, a ráno si pozriete funkčný prototyp, jeho testy a krátky zoznam rozhodnutí, ktoré môžete urobiť iba vy.',
      note: 'Ide o prototyp, nie o produkčný systém. Rozsah dohodneme večer tak, aby sa zmestil do jednej noci.',
      cta_primary: 'Zasaďte svoj nápad',
      cta_secondary: 'Pozrite sa, ako to funguje',
      image_alt: '',
    },
    how: {
      anchor_id: 'ako-to-funguje',
      title: 'Od večerného nápadu k rannému prototypu',
      intro: 'Jeden večer, jedna noc, jedno ráno. Potom rozhodnete vy.',
      steps: [
        {
          key: 'evening',
          label: 'Večer',
          title: 'Opíšete nápad',
          body: 'V krátkom hovore alebo písomnom zadaní nám poviete, čo chcete vidieť fungovať. Spolu ho zúžime na rozsah, ktorý sa stihne za jednu noc.',
        },
        {
          key: 'night',
          label: 'Noc',
          title: 'Agenti stavajú a testujú',
          body: 'AI agenti napíšu kód aj testy podľa plánu, ktorý pred začatím skontroloval skúsený architekt.',
        },
        {
          key: 'morning',
          label: 'Ráno',
          title: 'Prototyp, testy, demo, otázky',
          body: 'Dostanete funkčný prototyp, jeho testy, krátke demo a zoznam otvorených otázok a rozhodnutí.',
        },
        {
          key: 'decision',
          label: 'Rozhodnutie',
          title: 'Schváliť alebo doladiť',
          body: 'O ďalšom kroku rozhodujete vy: prototyp schválite, necháte ho doladiť ďalšiu noc alebo naplánujeme cestu do produkcie.',
        },
      ],
    },
    services: {
      title: 'Čo staviame',
      intro:
        'Šesť oblastí, v ktorých prototyp cez noc rýchlo odpovie na prvú dôležitú otázku: funguje tento nápad?',
      cards: [
        {
          key: 'rag_ai_search',
          title: 'RAG a AI vyhľadávanie',
          blurb: 'Pýtajte sa firemných dokumentov a dostávajte odpovede s odkazom na zdroj.',
        },
        {
          key: 'knowledge_management',
          title: 'Správa znalostí',
          blurb:
            'Roztrúsené dokumenty, wiki a chaty spojíme do jednej prehľadávateľnej a udržiavanej znalostnej bázy.',
        },
        {
          key: 'chatbots_ai_assistants',
          title: 'Chatboty a AI asistenti',
          blurb: 'Asistenti pre zákaznícku podporu, interný helpdesk či zaškolenie nových kolegov.',
        },
        {
          key: 'gamification',
          title: 'Gamifikácia',
          blurb:
            'Herné mechaniky pre vzdelávanie, onboarding, zapojenie ľudí a finančnú gramotnosť.',
        },
        {
          key: 'ai_integration',
          title: 'AI integrácia',
          blurb:
            'Jazykové modely a agenti prepojení s vašimi systémami, API a pracovnými postupmi.',
        },
        {
          key: 'devops_cloud',
          title: 'DevOps a cloud',
          blurb:
            'CI/CD, Kubernetes, AWS, infraštruktúra ako kód a monitoring, aby sa z prototypu mohol stať produkčný systém.',
        },
      ],
      link_label: 'Viac o službe',
      all_link: 'Všetky služby',
    },
    why: {
      title: 'Prečo Moonbloom',
      pillars: [
        {
          key: 'human_decides',
          title: 'Rozhoduje človek, stavajú agenti',
          body: 'Stavbu robia AI agenti. Ľudia určujú cieľ, kontrolujú výsledok a schvaľujú každý krok. Bez schválenia človekom sa nič nenasadí.',
        },
        {
          key: 'senior_architect',
          title: 'Za každou stavbou skúsený architekt',
          body: 'Každú stavbu plánuje a kontroluje AI a cloudový architekt s viac ako 20 rokmi praxe v cloude, DevOps a AI/ML.',
        },
        {
          key: 'production_path',
          title: 'Cesta do produkcie',
          body: 'Prototypy majú testy a prehľadnú štruktúru. Keď niektorý schválite, s naším DevOps a cloudom ho môžeme dostať do produkcie.',
        },
      ],
    },
    morning: {
      title: 'Čo dostanete ráno',
      intro: 'Všetko, čo potrebujete na rozhodnutie pri prvej rannej káve.',
      items: [
        {
          key: 'prototype',
          title: 'Funkčný prototyp',
          body: 'Niečo, čo si viete preklikať, zavolať alebo vyskúšať. Nie prezentáciu.',
        },
        {
          key: 'tests',
          title: 'Testy',
          body: 'Automatizované testy, ktoré ukazujú, čo funguje a čo sa overilo.',
        },
        {
          key: 'demo',
          title: 'Krátke demo',
          body: 'Prehliadka toho, čo vzniklo, a návod, ako si to vyskúšať sami.',
        },
        {
          key: 'decisions',
          title: 'Otvorené rozhodnutia a otázky',
          body: 'Krátky zoznam volieb, ktoré by agenti nemali robiť za vás, pripravený na vaše odpovede.',
        },
      ],
    },
    proof: {
      title: 'Nápady, ktoré už rozkvitli',
      body: '[TODO: case study]',
    },
    faq: {
      title: 'Skôr než zasadíte: časté otázky',
      items: [
        {
          key: 'scope',
          q: 'Čo sa zmestí do jednej noci?',
          a: 'Jeden jasný nápad so základným postupom, ktorý si viete vyskúšať. Napríklad chat nad vzorkou vašich dokumentov, asistent pre jednu tému podpory alebo prepojenie dvoch systémov. Ak je nápad väčší, najprv postavíme časť, ktorá odpovie na vašu najdôležitejšiu otázku, a zvyšok naplánujeme na ďalšie noci.',
        },
        {
          key: 'not_good_enough',
          q: 'Čo ak prototyp nebude dosť dobrý?',
          a: 'Povedzte nám, čo chýba, a doladíme ho, zvyčajne počas ďalšej noci. Ranný zoznam otvorených rozhodnutí je práve na to, aby ste mohli smer upraviť skôr, než sa postaví viac. Prototyp je rýchly spôsob, ako zistiť, či nápad funguje. Nie je to sľub, že bude fungovať každý nápad.',
        },
        {
          key: 'confidentiality',
          q: 'Zostane môj nápad a moje dáta dôverné?',
          a: 'Áno. So všetkým, čo nám poskytnete, zaobchádzame ako s dôverným a pred podrobnejšou debatou môžeme podpísať NDA. Ak sa dá, staviame na vzorových alebo anonymizovaných dátach a vopred sa s vami dohodneme, ktoré AI služby ich smú spracúvať.',
        },
        {
          key: 'tech',
          q: 'Aké technológie používate?',
          a: 'Tie, ktoré sedia do vášho prostredia. Zvyčajne Python alebo TypeScript, jazykové modely od zavedených poskytovateľov alebo modely s otvorenými váhami a nasadenie v kontajneroch na AWS či Kubernetes. Ak má váš tím štandardný stack, staviame naň.',
        },
        {
          key: 'ownership',
          q: 'Komu patrí kód?',
          a: 'Vám. Kód prototypu aj jeho dokumentácia sú vaše. [TODO: confirm IP terms]',
        },
        {
          key: 'pricing',
          q: 'Koľko to stojí?',
          a: '[TODO: pricing]',
        },
        {
          key: 'languages',
          q: 'Pracujete po anglicky aj po slovensky?',
          a: 'Áno. Úvodný hovor, zadanie, rozhranie prototypu aj dokumentácia môžu byť v angličtine alebo slovenčine.',
        },
        {
          key: 'after',
          q: 'Čo nasleduje po prototype?',
          a: 'Rozhodnete sa vy. Prototyp si môžete nechať ako demo, doladiť ho počas ďalších nocí alebo z neho s naším DevOps a cloudom urobiť produkčný systém: CI/CD, infraštruktúra ako kód, monitoring a zabezpečenie.',
        },
      ],
    },
    final_cta: {
      title: 'Máte nápad na dnešný večer?',
      body: 'Povedzte nám o ňom. Ozveme sa vám a dohodneme rozsah aj večer, kedy začneme.',
      button: 'Zasaďte svoj nápad',
      secondary_link: 'Dohodnite si hovor',
    },
    keywords: {
      primary: 'AI prototyp',
      secondary: [
        'AI štúdio Slovensko',
        'rýchly prototyp aplikácie',
        'AI agenti vývoj',
        'proof of concept AI',
      ],
    },
  },
  services_index: {
    seo: {
      title: 'AI služby: RAG, chatboty, integrácie | Moonbloom Labs',
      description:
        'RAG vyhľadávanie, znalostné bázy, AI asistenti, gamifikácia, AI integrácia a DevOps. Každá služba začína funkčným prototypom cez noc.',
    },
    og: {
      title: 'Čo staviame cez noc | Moonbloom Labs',
      description:
        'Šesť služieb, jeden spôsob práce: večer opíšete nápad, ráno si pozriete funkčný prototyp.',
    },
    h1: 'Čo staviame cez noc',
    intro:
      'Každá služba začína rovnako: večer opíšete nápad, cez noc ho AI agenti postavia a ráno rozhodnete, čo ďalej. Keď sa prototyp osvedčí, pomôžeme ho dostať do produkcie.',
    list_title: 'Služby',
    cta: {
      title: 'Neviete, čo sa k vám hodí?',
      body: 'Opíšte problém vlastnými slovami. Navrhneme, čím začať.',
      button: 'Zasaďte svoj nápad',
    },
    keywords: {
      primary: 'vývoj AI riešení',
      secondary: ['RAG chatbot', 'AI chatbot na mieru', 'AI integrácia', 'AI štúdio Slovensko'],
    },
  },
  service_common: {
    needs: {
      title: 'Čo od vás potrebujeme v ten večer',
      items: [
        'Krátky opis nápadu a toho, kto ho bude používať',
        'Vzorové dáta alebo dokumenty, ideálne anonymizované',
        'Prístup k testovaciemu systému alebo API, ak ho prototyp potrebuje',
      ],
    },
    paths: {
      title: 'Kam sa dá pokračovať',
      refine: 'Doladenie: ďalšia noc na častiach, ktoré chcete zmeniť',
      pilot: 'Pilot: nasadenie pre skutočných používateľov so skutočnými dátami',
      production: 'Produkcia: poriadne nasadenie s naším DevOps a cloudom',
    },
    overnight_note:
      'Ide o typické príklady. Presný rozsah s vami dohodneme večer, aby sa zmestil do jednej noci.',
    breadcrumb_label: 'Služby',
  },
  service_rag_ai_search: {
    seo: {
      title: 'RAG chatbot nad vašimi dokumentmi | Moonbloom Labs',
      description:
        'Chat nad firemnými dokumentmi, ktorý odpovedá s citáciou zdroja a pracuje so súkromnými dátami. Funkčný RAG prototyp do rána.',
    },
    og: {
      title: 'RAG a AI vyhľadávanie: prototyp cez noc',
      description:
        'Pýtajte sa svojich dokumentov a dostávajte odpovede s odkazom na zdroj. Ráno to uvidíte fungovať na vlastných dátach.',
    },
    h1: 'RAG a AI vyhľadávanie',
    intro:
      'Opýtajte sa firemných dokumentov bežnou rečou a dostanete odpoveď s odkazom na to, odkiaľ pochádza. Technika RAG (retrieval-augmented generation) umožňuje jazykovému modelu odpovedať z vašich zdrojov namiesto hádania.',
    problem: {
      title: 'Problém',
      body: 'Odpoveď niekde existuje: v zmluve, príručke, smernici alebo na zdieľanom disku. Nájsť ju znamená hľadať podľa kľúčových slov, otvoriť desať súborov a spýtať sa kolegu. Bežné chatboty vaše dokumenty nevidia a odpovediam bez zdroja sa ťažko verí.',
    },
    overnight: {
      title: 'Čo dodáme cez noc',
      items: [
        'Funkčný chat nad reprezentatívnou vzorkou vašich dokumentov',
        'Odpovede s citáciou zdrojového dokumentu a pasáže',
        'Načítanie dokumentov vo formátoch z vašej vzorky (napríklad PDF, Word, webové stránky)',
        'Malú sadu skutočných otázok s odpoveďami prototypu, aby ste vedeli posúdiť kvalitu',
        'Zoznam otvorených rozhodnutí: výber modelu, hosting, prístupové práva, ktoré zdroje pridať ďalej',
      ],
    },
    after: {
      title: 'Po prototype',
      body: 'Keď prístup schválite, pripojíme celú sadu dokumentov, doplníme riadenie prístupu, aby každý videl len to, čo smie, nastavíme aktualizácie pri zmene dokumentov a nasadíme riešenie s monitoringom vo vašom alebo našom cloude.',
    },
    fit: {
      title: 'Hodí sa, ak…',
      items: [
        'sa váš tím stále pýta tie isté otázky k interným dokumentom,',
        'odpovede potrebujú zdroj, ktorý si niekto vie overiť,',
        'sú vaše dokumenty súkromné a musia zostať pod vašou kontrolou,',
        'chcete vidieť výsledky na vlastnom obsahu skôr, než sa zaviažete k platforme.',
      ],
    },
    cta: {
      title: 'Máte dokumenty, ktoré by mali odpovedať na otázky?',
      button: 'Zasaďte svoj nápad',
    },
    jsonld_description:
      'Prototyp RAG chatu nad súkromnými dokumentmi klienta s odpoveďami, ktoré citujú zdroje, postavený cez noc.',
    keywords: {
      primary: 'RAG chatbot',
      secondary: [
        'AI vyhľadávanie v dokumentoch',
        'chatbot nad firemnými dokumentmi',
        'RAG prototyp',
        'AI nad internými dátami',
      ],
    },
  },
  service_knowledge_management: {
    seo: {
      title: 'Správa znalostí a znalostná báza s AI | Moonbloom Labs',
      description:
        'Roztrúsené dokumenty, wiki a chaty spojené do jednej prehľadávateľnej a udržiavanej znalostnej bázy. Funkčný prototyp do rána.',
    },
    og: {
      title: 'Správa znalostí: prototyp cez noc',
      description:
        'Dokumenty, wiki a chaty v jednej znalostnej báze, v ktorej váš tím ľahko hľadá a ktorú vie udržiavať aktuálnu.',
    },
    h1: 'Správa znalostí',
    intro:
      'Znalosti vášho tímu sú v dokumentoch, wiki, tiketoch a chatoch. Spojíme ich do jednej znalostnej bázy, v ktorej sa dá hľadať a ktorá sa udržiava, namiesto toho, aby pomaly zastarávala.',
    problem: {
      title: 'Problém',
      body: 'Tá istá odpoveď je napísaná na troch miestach a dve z nich sú zastarané. Noví kolegovia nevedia, kde hľadať, a tí skúsení sa stávajú vyhľadávačom. Wiki začne dobre a potom ju nikto neudržiava.',
    },
    overnight: {
      title: 'Čo dodáme cez noc',
      items: [
        'Prototyp znalostnej bázy zo vzorky vašich zdrojov (napríklad časť wiki, zdieľaný priečinok a export chatového kanála)',
        'Vyhľadávanie vo všetkých zdrojoch na jednom mieste s odkazom na originál',
        'Automatické zoskupenie podľa tém a označenie duplicít a pravdepodobne zastaraných stránok',
        'Návrh, ako bázu udržiavať: vlastníci tém, termíny revízií, čo sa archivuje',
        'Zoznam otvorených rozhodnutí: ktoré zdroje pripojiť, kto vlastní ktorú tému, kde bude báza bežať',
      ],
    },
    after: {
      title: 'Po prototype',
      body: 'Pripojíme skutočné zdroje s pravidelnou synchronizáciou, nastavíme oprávnenia podľa tých, ktoré už máte, doplníme dohodnutý postup údržby a riešenie prevádzkujeme v produkcii s monitoringom a zálohami.',
    },
    fit: {
      title: 'Hodí sa, ak…',
      items: [
        'sú znalosti rozdelené v niekoľkých nástrojoch a žiadnemu z nich nikto naplno neverí,',
        'zaškolenie nových ľudí závisí od toho, kto má práve čas odpovedať,',
        'ste už wiki skúšali a zastarala,',
        'nechcete len ďalšie miesto na poznámky, ale vyhľadávanie a údržbu.',
      ],
    },
    cta: {
      title: 'Kde dnes žijú znalosti vášho tímu?',
      button: 'Zasaďte svoj nápad',
    },
    jsonld_description:
      'Prototyp prehľadávateľnej a udržiavanej znalostnej bázy, ktorá spája dokumenty, wiki a chaty klienta, postavený cez noc.',
    keywords: {
      primary: 'znalostná báza',
      secondary: [
        'správa znalostí vo firme',
        'interná wiki s AI',
        'AI znalostná báza',
        'knowledge management',
      ],
    },
  },
  service_chatbots_ai_assistants: {
    seo: {
      title: 'AI chatboty a asistenti pre podporu | Moonbloom Labs',
      description:
        'AI asistenti pre zákaznícku podporu, interný helpdesk a zaškolenie, ktorí vychádzajú z vášho obsahu. Funkčný prototyp do rána.',
    },
    og: {
      title: 'Chatboty a AI asistenti: prototyp cez noc',
      description:
        'Asistent, ktorý odpovedá z vášho obsahu a vie, kedy odovzdať otázku človeku. Ráno si ho vyskúšate.',
    },
    h1: 'Chatboty a AI asistenti',
    intro:
      'Asistent, ktorý odpovedá z vášho vlastného obsahu, vaším tónom a vie, kedy otázku odovzdať človeku. Pre zákazníkov, pre interný helpdesk alebo pre nových kolegov, ktorí sa ešte zorientúvajú.',
    problem: {
      title: 'Problém',
      body: 'Väčšina otázok sa opakuje, no každá aj tak niekomu zaberie čas. Chatboty podľa scenára zlyhajú, len čo sa niekto spýta inak, a asistent, ktorý si odpovede vymýšľa, je horší ako žiadny.',
    },
    overnight: {
      title: 'Čo dodáme cez noc',
      items: [
        'Funkčného asistenta pre jeden jasne vymedzený prípad použitia (napríklad podporu k jednému produktu alebo základy IT helpdesku)',
        'Odpovede založené na obsahu, ktorý nám poskytnete, a náhradnú odpoveď, keď si asistent nie je istý',
        'Odovzdanie človeku (napríklad koncept e-mailu alebo tiketu)',
        'Sadu testovacích rozhovorov s typickými aj zákernými otázkami a ich výsledky',
        'Zoznam otvorených rozhodnutí: tón, kanály, na čo nesmie nikdy odpovedať, kde bude bežať',
      ],
    },
    after: {
      title: 'Po prototype',
      body: 'Pripojíme ho k vašim kanálom (web, Slack, Microsoft Teams alebo váš helpdeskový nástroj), doplníme záznam a kontrolu rozhovorov, nastavíme vami schválené limity a ochranné pravidlá a prevádzkujeme ho v produkcii s monitoringom.',
    },
    fit: {
      title: 'Hodí sa, ak…',
      items: [
        'vaša podpora alebo helpdesk odpovedá každý týždeň na tie isté otázky,',
        'noví kolegovia potrebujú trpezlivého sprievodcu nástrojmi a procesmi,',
        'chcete, aby asistent odovzdal otázku človeku, a nie predstieral, že vie,',
        'radšej testujete na skutočných otázkach, než by ste pozerali demo dodávateľa.',
      ],
    },
    cta: {
      title: 'Ktoré otázky by mal asistent zobrať vášmu tímu?',
      button: 'Zasaďte svoj nápad',
    },
    jsonld_description:
      'Prototyp AI asistenta alebo chatbota pre zákaznícku podporu, interný helpdesk či zaškolenie, založený na obsahu klienta, postavený cez noc.',
    keywords: {
      primary: 'AI chatbot pre zákaznícku podporu',
      secondary: [
        'AI asistent na mieru',
        'chatbot pre helpdesk',
        'chatbot na zaškolenie zamestnancov',
        'vývoj chatbota',
      ],
    },
  },
  service_gamification: {
    seo: {
      title: 'Gamifikácia vzdelávania a onboardingu | Moonbloom Labs',
      description:
        'Herné mechaniky pre vzdelávanie, onboarding, zapojenie ľudí a finančnú gramotnosť. Hrateľný prototyp do rána.',
    },
    og: {
      title: 'Gamifikácia: prototyp cez noc',
      description:
        'Z lekcie, zaškolenia alebo práce s peniazmi urobíme niečo, čo chcú ľudia dokončiť. Ráno si prototyp zahráte.',
    },
    h1: 'Gamifikácia',
    intro:
      'Herné mechaniky, ako sú ciele, postup, spätná väzba a priateľská výzva, pomáhajú, aby si ľudia učivo zapamätali a zaškolenie nepôsobilo ako papierovanie. Prototyp postavíme cez noc, aby ste si nápad zahrali skôr, než doň investujete.',
    problem: {
      title: 'Problém',
      body: 'Školenia sa preklikajú, kontrolné zoznamy pri zaškolení zostanú nedokončené a témy ako osobné financie pôsobia abstraktne. Body a odznaky navrch zriedka pomôžu. Mechanika musí sedieť na to, čo sa ľudia majú naučiť alebo urobiť.',
    },
    overnight: {
      title: 'Čo dodáme cez noc',
      items: [
        'Hrateľný prototyp jednej hlavnej mechaniky (napríklad vzdelávacia cesta s úrovňami, kvíz so scenármi alebo rozpočtová výzva)',
        'Spísané pravidlá: ciele, bodovanie, postup a spätná väzba',
        'Testy pravidiel, aby bodovanie a postup fungovali tak, ako sú navrhnuté',
        'Krátke demo prvého hrania z pohľadu hráča',
        'Zoznam otvorených rozhodnutí: cieľová skupina, odmeny, obtiažnosť, čo znamená úspech',
      ],
    },
    after: {
      title: 'Po prototype',
      body: 'Mechaniku doladíme podľa toho, ako ju ľudia skutočne hrajú, doplníme obsah a používateľské účty, podľa potreby ju prepojíme s vašou vzdelávacou platformou či aplikáciou a nasadíme s analytikou, ktorá rešpektuje vaše pravidlá ochrany súkromia.',
    },
    fit: {
      title: 'Hodí sa, ak…',
      items: [
        'máte školenie alebo zaškolenie, ktoré ľudia dokončia len preto, že musia,',
        'učíte zručnosť, napríklad finančnú gramotnosť, ktorá potrebuje prax, nie iba čítanie,',
        'chcete herný nápad otestovať so skutočnými ľuďmi skôr, než objednáte celý vývoj,',
        'vám ide viac o výsledky učenia než o body a odznaky.',
      ],
    },
    cta: {
      title: 'Čo by ľudia mali chcieť dokončiť?',
      button: 'Zasaďte svoj nápad',
    },
    jsonld_description:
      'Hrateľný prototyp herných mechaník pre vzdelávanie, zaškolenie, zapojenie ľudí alebo finančnú gramotnosť so spísanými pravidlami, postavený cez noc.',
    keywords: {
      primary: 'gamifikácia vzdelávania',
      secondary: [
        'gamifikácia onboardingu',
        'hra na finančnú gramotnosť',
        'gamifikácia vo firme',
        'vzdelávacia hra na mieru',
      ],
    },
  },
  service_ai_integration: {
    seo: {
      title: 'AI integrácia do vašich systémov a API | Moonbloom Labs',
      description:
        'Jazykové modely a AI agenti prepojení s vašimi systémami, API a pracovnými postupmi. Funkčný prototyp integrácie do rána.',
    },
    og: {
      title: 'AI integrácia: prototyp cez noc',
      description:
        'Jazykový model alebo agent priamo v systémoch, ktoré už používate, a dôležité kroky schvaľuje človek.',
    },
    h1: 'AI integrácia',
    intro:
      'Hodnota AI sa ukáže, keď funguje priamo v nástrojoch, ktoré už používate. Jazykové modely a agentov prepojíme s vašimi systémami, API a pracovnými postupmi a kroky, na ktorých záleží, bude schvaľovať človek.',
    problem: {
      title: 'Problém',
      body: 'Ľudia kopírujú text medzi oknom chatu a systémami, v ktorých pracujú. Pilotné projekty zostávajú v testovacom prostredí, lebo ich nikto neprepojil so skutočnými dátami. A nie je jasné, čo má AI robiť sama a čo musí schváliť človek.',
    },
    overnight: {
      title: 'Čo dodáme cez noc',
      items: [
        'Funkčnú integráciu pre jeden pracovný postup (napríklad triedenie prichádzajúcich e-mailov, prenos údajov z dokumentov do vášho systému alebo návrhy odpovedí na schválenie)',
        'Prepojenie s vašimi API alebo s ich testovacou kópiou',
        'Schválenie človekom všade, kde postup mení dáta alebo niekoho kontaktuje',
        'Testy pre očakávané aj nepríjemné vstupy',
        'Zoznam otvorených rozhodnutí: model a poskytovateľ, limity nákladov, spracovanie chýb, kto čo schvaľuje',
      ],
    },
    after: {
      title: 'Po prototype',
      body: 'Integráciu spevníme: autentifikácia, limity volaní a nákladov, logovanie, opakované pokusy a monitoring. Potom ju nasadíme do vášho prostredia cez CI/CD pipeline, aby boli zmeny skontrolované a opakovateľné.',
    },
    fit: {
      title: 'Hodí sa, ak…',
      items: [
        'váš tím prenáša informácie medzi systémami ručne,',
        'máte API alebo dáta, ktoré by jazykový model vedel využiť,',
        'chcete jasné body schválenia človekom, nie čiernu skrinku,',
        'AI pilot uviazol a potrebuje sa dotknúť skutočných systémov, aby sa osvedčil.',
      ],
    },
    cta: {
      title: 'S ktorým postupom by vám mala AI pomôcť najskôr?',
      button: 'Zasaďte svoj nápad',
    },
    jsonld_description:
      'Prototyp integrácie jazykových modelov a AI agentov do existujúcich systémov, API a pracovných postupov klienta so schvaľovaním človekom, postavený cez noc.',
    keywords: {
      primary: 'AI integrácia',
      secondary: [
        'integrácia jazykových modelov',
        'AI agenti pre firmy',
        'automatizácia procesov s AI',
        'napojenie AI na API',
      ],
    },
  },
  service_devops_cloud: {
    seo: {
      title: 'DevOps a cloud: CI/CD, Kubernetes, AWS | Moonbloom Labs',
      description:
        'CI/CD, Kubernetes, AWS, infraštruktúra ako kód a monitoring, aby sa z prototypu mohol stať produkčný systém, ktorý viete prevádzkovať.',
    },
    og: {
      title: 'DevOps a cloud: z prototypu do produkcie',
      description:
        'Pipeline, infraštruktúra ako kód a monitoring, ktoré schválený prototyp dostanú do produkcie, krok za schváleným krokom.',
    },
    h1: 'DevOps a cloud',
    intro:
      'Prototyp overí nápad, produkcia však potrebuje viac. Nastavíme CI/CD, Kubernetes alebo spravované cloudové služby na AWS, infraštruktúru ako kód a monitoring, aby to, čo schválite, bežalo spoľahlivo.',
    problem: {
      title: 'Problém',
      body: 'Prototypy často bežia na jednom notebooku alebo ručne nastavenom serveri. Nikto presne nevie, ako ich bezpečne nasadiť, ako sa vrátiť k predchádzajúcej verzii ani ako zistiť, že sa niečo pokazilo, skôr než to zistí používateľ.',
    },
    overnight: {
      title: 'Čo dodáme cez noc',
      items: [
        'CI/CD pipeline, ktorá zostaví, otestuje a nasadí jednu službu do testovacieho prostredia, ktoré nám poskytnete',
        'Infraštruktúru ako kód pre toto prostredie (napríklad Terraform), skontrolovanú a opakovateľnú',
        'Základný monitoring: logy, kontroly dostupnosti a prvý dashboard',
        'Písaný postup (runbook): ako nasadiť, vrátiť zmenu a overiť stav',
        'Zoznam otvorených rozhodnutí: prostredia, prístupy, limity nákladov, čo má posielať upozornenia',
      ],
    },
    after: {
      title: 'Po prototype',
      body: 'Nastavenie rozšírime na staging a produkciu, doplníme správu tajomstiev, zálohy, upozornenia a bezpečnostné spevnenie a odovzdáme dokumentáciu, podľa ktorej to váš tím zvládne prevádzkovať. Každá zmena v produkcii prechádza kontrolou a vaším schválením.',
    },
    fit: {
      title: 'Hodí sa, ak…',
      items: [
        'máte prototyp alebo produkt, ktorý sa nasadzuje ručne,',
        'bežíte na AWS alebo Kubernetes, alebo to plánujete,',
        'chcete infraštruktúru, ktorú si viete prečítať, skontrolovať a znova vytvoriť,',
        'potrebujete vedieť, že sa niečo pokazilo, skôr než vám to povedia používatelia.',
      ],
    },
    cta: {
      title: 'Chcete posunúť prototyp ďalej?',
      button: 'Zasaďte svoj nápad',
    },
    jsonld_description:
      'DevOps a cloudové inžinierstvo (CI/CD, Kubernetes, AWS, infraštruktúra ako kód, monitoring), ktoré schválené prototypy dostane do produkcie.',
    keywords: {
      primary: 'DevOps služby',
      secondary: [
        'CI/CD nasadenie',
        'Kubernetes konzultácie',
        'AWS infraštruktúra ako kód',
        'z prototypu do produkcie',
      ],
    },
  },
  about: {
    seo: {
      title: 'O nás: rozhoduje človek, stavajú agenti | Moonbloom Labs',
      description:
        'Moonbloom Labs založil AI a cloudový architekt s 20+ rokmi praxe v cloude, DevOps a AI/ML, spoluzakladateľ AI laboratória na STU.',
    },
    og: {
      title: 'O Moonbloom Labs',
      description:
        'Prečo staviame prototypy cez noc, kto stojí za každou stavbou a podľa akých zásad pracujeme.',
    },
    h1: 'Rozhoduje človek. Stavajú agenti.',
    intro:
      'Moonbloom Labs je AI štúdio, ktoré z nápadu do rána urobí funkčný prototyp. Stavbu robia AI agenti, smer určuje a každý krok schvaľuje človek.',
    founder: {
      title: 'Kto za tým stojí',
      name: 'Michal Maxian',
      role: 'Zakladateľ, AI a cloudový architekt',
      body: [
        'Moonbloom Labs založil Michal Maxian, AI a cloudový architekt s viac ako 20 rokmi skúseností v oblasti cloudu, DevOps a AI/ML. Je spoluzakladateľom AI laboratória na Slovenskej technickej univerzite v Bratislave (STU).',
        'Čakať týždne na to, či nápad funguje, býva často najpomalšou časťou projektu. AI agenti dnes dokážu za jednu noc napísať a otestovať veľa kódu. Moonbloom to využíva a dopĺňa úsudkom architekta: rozsah dohodneme s vami, stavba je naplánovaná a skontrolovaná a každé dôležité rozhodnutie zostáva na ľuďoch.',
      ],
      photo_alt: 'Portrét Michala Maxiana, zakladateľa Moonbloom Labs',
      photo: '[TODO: founder photo]',
    },
    principles: {
      title: 'Ako pracujeme',
      items: [
        {
          key: 'human_decides',
          title: 'Rozhoduje človek',
          body: 'Agenti stavajú, ľudia rozhodujú. Večer schválite rozsah, ráno výsledok a bez schválenia človekom sa nič nenasadí.',
        },
        {
          key: 'transparent',
          title: 'Transparentne',
          body: 'Vidíte, čo vzniklo, ako sa to testovalo a čo je ešte otvorené. Ranný zoznam rozhodnutí presne ukazuje, kde je potrebný váš úsudok.',
        },
        {
          key: 'secure_by_default',
          title: 'Bezpečne od začiatku',
          body: 'S vašimi nápadmi a dátami zaobchádzame ako s dôvernými, kde sa dá, používame vzorové alebo anonymizované dáta a vopred sa dohodneme, ktoré služby ich smú spracúvať.',
        },
        {
          key: 'honest_scope',
          title: 'Poctivý rozsah',
          body: 'Za jednu noc vznikne prototyp, nie hotový produkt. Večer vám povieme, čo sa zmestí, a ráno, čo ešte chýba.',
        },
      ],
    },
    cta: {
      title: 'Pozrime sa, ako bude váš nápad vyzerať ráno.',
      button: 'Zasaďte svoj nápad',
    },
    keywords: {
      primary: 'AI štúdio Slovensko',
      secondary: ['AI architekt', 'vývoj AI Bratislava', 'AI prototypy na mieru'],
    },
  },
  contact: {
    seo: {
      title: 'Zasaďte svoj nápad | Kontakt Moonbloom Labs',
      description:
        'Opíšte nám svoj nápad. Ozveme sa, dohodneme rozsah a večer, kedy začneme. Po slovensky alebo po anglicky.',
    },
    og: {
      title: 'Zasaďte svoj nápad v Moonbloom Labs',
      description:
        'Napíšte nám, čo chcete vidieť fungovať. Ozveme sa a dohodneme rozsah, ktorý sa zmestí do jednej noci.',
    },
    h1: 'Zasaďte svoj nápad',
    intro:
      'Napíšte nám, čo chcete vidieť fungovať. Stačí pár viet. Ozveme sa, dohodneme rozsah a večer na krátky úvodný hovor a potom sa do práce pustia agenti.',
    what_next: {
      title: 'Čo bude nasledovať',
      items: [
        'Prečítame si váš nápad a odpovieme e-mailom.',
        'Dohodneme rozsah a večer na krátky hovor alebo písomné zadanie.',
        'Agenti cez noc stavajú, ráno si prototyp pozriete.',
      ],
    },
    form: {
      aria_label: 'Kontaktný formulár',
      required_hint: 'Polia označené * sú povinné.',
      name: {
        label: 'Vaše meno *',
        placeholder: 'Jana Nováková',
      },
      email: {
        label: 'E-mail *',
        placeholder: 'jana@firma.sk',
        help: 'Použijeme ho iba na odpoveď.',
      },
      company: {
        label: 'Firma (nepovinné)',
        placeholder: 'Názov firmy',
      },
      idea: {
        label: 'Váš nápad *',
        placeholder:
          'Napríklad: chat, ktorý odpovedá na otázky z našich interných príručiek a odkazuje na zdroj.',
        help: 'Čo má ráno fungovať a kto to bude používať? Prosím, neuvádzajte sem heslá ani dôverné údaje.',
      },
      language: {
        label: 'Preferovaný jazyk *',
        option_en: 'Angličtina',
        option_sk: 'Slovenčina',
      },
      honeypot: {
        label: 'Toto pole nevypĺňajte',
      },
      submit: 'Zasaďte svoj nápad',
      submitting: 'Odosiela sa…',
      privacy_note:
        'Vaše údaje použijeme iba na odpoveď na vašu správu. Viac v [zásadách ochrany osobných údajov](route:privacy).',
    },
    validation: {
      name_required: 'Napíšte nám, prosím, svoje meno.',
      email_required: 'Zadajte, prosím, e-mail, aby sme vám mohli odpovedať.',
      email_invalid: 'Táto e-mailová adresa nevyzerá správne. Skontrolujte ju, prosím.',
      idea_required: 'Opíšte, prosím, svoj nápad jednou-dvoma vetami.',
      idea_too_short: 'Pridáte ešte trochu podrobností? Aspoň {min} znakov, stačí jedna-dve vety.',
      idea_too_long:
        'To je viac, než sa zmestí do jednej správy. Skráťte ju, prosím, na {max} znakov.',
      name_too_long: 'Skráťte, prosím, meno na {max} znakov.',
      language_required: 'Vyberte, prosím, jazyk.',
      form_errors_summary: 'Skontrolujte, prosím, zvýraznené polia.',
    },
    status: {
      success_title: 'Váš nápad je zasadený.',
      success_body: 'Ďakujeme. Ozveme sa e-mailom a dohodneme rozsah aj večer, kedy začneme.',
      failure_title: 'Správa sa neodoslala.',
      failure_body:
        'Niečo sa pokazilo na našej strane. Skúste to, prosím, znova alebo nám napíšte na michal@maxian.sk.',
      rate_limited:
        'V krátkom čase ste poslali niekoľko správ. Počkajte, prosím, pár minút a skúste to znova.',
      error_invalid: 'Niektoré polia treba skontrolovať. Opravte ich, prosím, a odošlite znova.',
      error_captcha: 'Bezpečnostnú kontrolu sa nepodarilo overiť. Skúste to, prosím, znova.',
      error_delivery:
        'Správa sa nedoručila. Skúste to, prosím, znova alebo nám napíšte na michal@maxian.sk.',
      error_method: 'Pri formulári sa niečo pokazilo. Obnovte, prosím, stránku a skúste to znova.',
      error_noscript_generic:
        'Správa sa neodoslala. Skontrolujte, prosím, polia a skúste to znova alebo nám napíšte na michal@maxian.sk.',
    },
    turnstile_note: 'Formulár používa Cloudflare Turnstile na ochranu pred spamom.',
    talk: {
      line: 'Radšej sa porozprávate? [Dohodnite si hovor](mailto:michal@maxian.sk?subject=Dohodnutie%20hovoru%20%E2%80%93%20Moonbloom%20Labs) a napíšte nám, kedy sa vám to hodí.',
      mailto_subject: 'Moonbloom Labs – hovor',
      mailto_body: 'Dobrý deň, chcem sa porozprávať o nápade. Hodí sa mi: ',
    },
    keywords: {
      primary: 'AI prototyp kontakt',
      secondary: ['objednať AI prototyp', 'AI štúdio kontakt'],
    },
  },
  thank_you: {
    seo: {
      title: 'Ďakujeme | Moonbloom Labs',
      description:
        'Váš nápad je zasadený. Ozveme sa e-mailom a dohodneme rozsah aj večer, kedy začneme.',
    },
    og: {
      title: 'Váš nápad je zasadený',
      description: 'Ozveme sa e-mailom a dohodneme rozsah aj večer, kedy začneme.',
    },
    h1: 'Váš nápad je zasadený.',
    body: 'Ďakujeme, že ste nám napísali. Prečítame si váš nápad a ozveme sa e-mailom, aby sme dohodli rozsah a večer na krátky úvodný hovor.',
    next_title: 'Kým čakáte',
    next_items: [
      'Premyslite si, kto si prototyp ráno vyskúša.',
      'Pripravte niekoľko vzorových dokumentov, otázok alebo dát, s ktorými môžeme stavať. Najlepšie anonymizovaných.',
      'Zapíšte si jednu otázku, na ktorú vám prototyp musí odpovedať.',
    ],
    links: {
      how: 'Pozrite sa, ako to funguje',
      services: 'Prehľad služieb',
      home: 'Späť na úvod',
    },
  },
  privacy: {
    seo: {
      title: 'Ochrana osobných údajov | Moonbloom Labs',
      description:
        'Ako Moonbloom Labs spracúva osobné údaje: čo zbierame cez kontaktný formulár, prečo, ako dlho ich uchovávame a aké máte práva podľa GDPR.',
    },
    og: {
      title: 'Ochrana osobných údajov | Moonbloom Labs',
      description:
        'Zrozumiteľne o ochrane údajov: údaje z formulára iba na odpoveď, analytika bez cookies, vaše práva podľa GDPR.',
    },
    h1: 'Ochrana osobných údajov',
    review_flag: '[TODO: legal review]',
    updated: 'Posledná aktualizácia: [TODO: date of publication]',
    intro:
      'Píšeme stručne a zrozumiteľne. Zbierame čo najmenej osobných údajov a používame ich iba na účely opísané nižšie.',
    sections: [
      {
        key: 'controller',
        title: 'Kto zodpovedá za vaše údaje',
        body: 'Prevádzkovateľom vašich osobných údajov je [TODO: company legal name], IČO: [TODO: IČO], so sídlom [TODO: registered address], Slovensko. V otázkach ochrany údajov nás kontaktujte na michal@maxian.sk.',
      },
      {
        key: 'contact_form',
        title: 'Čo zbierame cez kontaktný formulár',
        body: 'Keď odošlete kontaktný formulár, dostaneme vaše meno, e-mailovú adresu, názov firmy (ak ho uvediete), opis nápadu a preferovaný jazyk. Tieto údaje použijeme iba na to, aby sme vám odpovedali a prebrali s vami prácu, o ktorú máte záujem. Nepoužívame ich na newslettre ani marketing a nepredávame ich.',
      },
      {
        key: 'legal_basis',
        title: 'Na akom základe ich spracúvame',
        body: 'Údaje spracúvame, aby sme na vašu žiadosť vykonali opatrenia pred prípadným uzavretím zmluvy (čl. 6 ods. 1 písm. b) GDPR), a uchovávanie korešpondencie na základe nášho oprávneného záujmu nadviazať na rozhovor (čl. 6 ods. 1 písm. f) GDPR).',
      },
      {
        key: 'storage',
        title: 'Kde ich uchovávame a ako dlho',
        body: 'Správy z formulára sa doručujú do našej firemnej e-mailovej schránky a uchovávame ich tam. [TODO: confirm email provider and where the mailbox is hosted] Správy uchovávame počas komunikácie s vami a potom [TODO: retention period], ak zákon nevyžaduje dlhšiu lehotu alebo ak nás nepožiadate o skoršie vymazanie.',
      },
      {
        key: 'hosting',
        title: 'Hosting webu',
        body: 'Tento web hostí spoločnosť Websupport s.r.o. na Slovensku. Pri návšteve server spracúva technické údaje, napríklad IP adresu a typ prehliadača, aby mohol stránky doručiť a chrániť. [TODO: confirm server log retention with Websupport]',
      },
      {
        key: 'analytics',
        title: 'Analytika bez cookies',
        body: 'Na počítanie návštev a zistenie, ktoré stránky sa čítajú, používame Cloudflare Web Analytics. Nenastavuje cookies a nepoužíva lokálne úložisko vášho prehliadača. Údaje spracúva spoločnosť Cloudflare, Inc. ako náš sprostredkovateľ a nám ich poskytuje iba v súhrnnej podobe. [TODO: confirm Cloudflare data processing terms and any transfer outside the EU]',
      },
      {
        key: 'spam_protection',
        title: 'Ochrana formulára pred spamom',
        body: 'Kontaktný formulár môže používať Cloudflare Turnstile, ktorý rozlišuje ľudí od robotov. Pri práci s formulárom Turnstile spracúva technické signály, napríklad IP adresu a vlastnosti prehliadača. Poskytuje ho spoločnosť Cloudflare, Inc. ako náš sprostredkovateľ. Používame ho na základe oprávneného záujmu chrániť formulár pred spamom (čl. 6 ods. 1 písm. f) GDPR). [TODO: confirm Turnstile is enabled at launch, its data processing terms and that it sets no cookies]',
      },
      {
        key: 'cookies',
        title: 'Cookies',
        body: 'Tento web nepoužíva cookies na analytiku ani reklamu. [TODO: confirm no other cookies are set, e.g. by the form or the language switcher]',
      },
      {
        key: 'recipients',
        title: 'Kto ďalší vidí vaše údaje',
        body: 'Iba uvedení poskytovatelia, ktorí konajú v našom mene: poskytovateľ hostingu, poskytovateľ e-mailu a Cloudflare pre analytiku a ochranu pred spamom. Nikomu inému vaše údaje neposkytujeme, ak to nevyžaduje zákon.',
      },
      {
        key: 'rights',
        title: 'Vaše práva',
        body: 'Máte právo na prístup k svojim údajom, na ich opravu alebo vymazanie, na obmedzenie spracúvania, právo namietať a právo na prenosnosť údajov. Napíšte nám na michal@maxian.sk a odpovieme do jedného mesiaca. Máte tiež právo podať sťažnosť dozornému orgánu na ochranu údajov, najmä v krajine EÚ, kde žijete alebo pracujete. Na Slovensku je to Úrad na ochranu osobných údajov Slovenskej republiky (dataprotection.gov.sk).',
      },
      {
        key: 'changes',
        title: 'Zmeny týchto zásad',
        body: 'Ak zmeníme spôsob, akým spracúvame osobné údaje, aktualizujeme túto stránku aj dátum v jej úvode.',
      },
    ],
  },
  imprint: {
    seo: {
      title: 'Údaje o prevádzkovateľovi | Moonbloom Labs',
      description:
        'Údaje o prevádzkovateľovi webu moonbloomlabs.com: obchodné meno, IČO, sídlo a kontakt.',
    },
    og: {
      title: 'Údaje o prevádzkovateľovi | Moonbloom Labs',
      description: 'Údaje o prevádzkovateľovi webu moonbloomlabs.com.',
    },
    h1: 'Údaje o prevádzkovateľovi',
    review_flag: '[TODO: legal review]',
    fields: {
      operator_label: 'Prevádzkovateľ',
      operator_value: '[TODO: company legal name]',
      ico_label: 'IČO',
      ico_value: '[TODO: IČO]',
      dic_label: 'DIČ',
      dic_value: '[TODO: DIČ]',
      vat_label: 'IČ DPH',
      vat_value: "[TODO: IČ DPH or 'not a VAT payer']",
      address_label: 'Sídlo',
      address_value: '[TODO: registered address]',
      register_label: 'Zápis',
      register_value:
        '[TODO: register entry, e.g. Obchodný register Okresného súdu ..., oddiel ..., vložka č. ...]',
      contact_label: 'Kontakt',
      contact_value: 'michal@maxian.sk',
      hosting_label: 'Hosting',
      hosting_value: 'Websupport s.r.o., Slovensko',
      representative_label: '',
      representative_value: '',
      responsible_label: '',
      responsible_value: '',
    },
    trade_name_note:
      'Moonbloom Labs je označenie, pod ktorým vystupuje [TODO: company legal name].',
  },
  not_found: {
    seo: {
      title: 'Stránka sa nenašla | Moonbloom Labs',
      description: 'Táto stránka ešte nerozkvitla. Vráťte sa na úvod alebo nám zasaďte svoj nápad.',
    },
    og: {
      title: 'Stránka sa nenašla | Moonbloom Labs',
      description: 'Táto stránka ešte nerozkvitla.',
    },
    h1: 'Tento nápad ešte nerozkvitol.',
    body: 'Stránka, ktorú hľadáte, tu nie je. Možno sa presunula, alebo je to zatiaľ len semienko. Tieto cesty však kvitnú naplno:',
    links: {
      home: 'Späť na úvod',
      services: 'Naše služby',
      contact: 'Zasaďte svoj nápad',
    },
    code_label: 'Chyba 404',
  },
  jsonld: {
    organization: {
      name: 'Moonbloom Labs',
      url: 'https://moonbloomlabs.com/sk/',
      slogan: 'Nápady rozkvitnú cez noc.',
      description:
        'Moonbloom Labs je AI štúdio, ktoré z nápadu do rána urobí funkčný prototyp. Klient večer opíše nápad, AI agenti ho cez noc postavia a otestujú a ráno si klient pozrie funkčný prototyp, jeho testy a zoznam otvorených rozhodnutí. Rozhoduje človek, stavajú agenti.',
      founder_name: 'Michal Maxian',
      area_served: '[TODO: confirm area served, e.g. Slovakia, European Union]',
      email: 'michal@maxian.sk',
      legal_name: '[TODO: company legal name]',
    },
    services: {
      rag_ai_search:
        'Prototyp RAG chatu nad súkromnými dokumentmi klienta s odpoveďami, ktoré citujú zdroje, postavený cez noc.',
      knowledge_management:
        'Prototyp prehľadávateľnej a udržiavanej znalostnej bázy, ktorá spája dokumenty, wiki a chaty klienta, postavený cez noc.',
      chatbots_ai_assistants:
        'Prototyp AI asistenta alebo chatbota pre zákaznícku podporu, interný helpdesk či zaškolenie, založený na obsahu klienta, postavený cez noc.',
      gamification:
        'Hrateľný prototyp herných mechaník pre vzdelávanie, zaškolenie, zapojenie ľudí alebo finančnú gramotnosť so spísanými pravidlami, postavený cez noc.',
      ai_integration:
        'Prototyp integrácie jazykových modelov a AI agentov do existujúcich systémov, API a pracovných postupov klienta so schvaľovaním človekom, postavený cez noc.',
      devops_cloud:
        'DevOps a cloudové inžinierstvo (CI/CD, Kubernetes, AWS, infraštruktúra ako kód, monitoring), ktoré schválené prototypy dostane do produkcie.',
    },
  },
};
