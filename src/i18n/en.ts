// Imported from docs/plan/copy.md by scripts/import-copy.mjs.
export const en = {
  common: {
    skip_link: 'Skip to content',
    brand_name: 'Moonbloom Labs',
    logo_alt: 'Moonbloom Labs home',
    nav: {
      aria_label: 'Main navigation',
      services: 'Services',
      how_it_works: 'How it works',
      about: 'About',
      contact: 'Contact',
      cta: 'Plant your idea',
      menu_open: 'Open menu',
      menu_close: 'Close menu',
    },
    lang_switcher: {
      aria_label: 'Language',
      current_label: 'EN',
      en_label: 'English',
      sk_label: 'Slovenčina',
      switch_to_other: 'Prečítajte si po slovensky',
    },
    footer: {
      tagline: 'Ideas bloom overnight.',
      blurb:
        'An AI studio that turns an idea into a working prototype by the next morning. A human decides; agents build.',
      nav_heading: 'Studio',
      services_heading: 'Services',
      legal_heading: 'Legal',
      privacy: 'Privacy policy',
      imprint: 'Imprint',
      contact_line: 'Write to us: michal@maxian.sk',
      copyright: '© 2026 Moonbloom Labs',
      principle_line: 'A human approves every release.',
    },
    breadcrumbs: {
      home: 'Home',
      services: 'Services',
    },
    common_cta: {
      plant_idea: 'Plant your idea',
      learn_more: 'Learn more',
      back_home: 'Back to home',
    },
  },
  home: {
    seo: {
      title: 'Moonbloom Labs: AI prototypes, built overnight',
      description:
        'Describe your idea in the evening. AI agents build overnight; in the morning you review a working prototype, its tests and open decisions.',
    },
    og: {
      title: 'Ideas bloom overnight | Moonbloom Labs',
      description:
        'Plant an idea at night. Wake up to a working prototype, its tests, a short demo and the decisions that are yours to make.',
    },
    h1: 'Ideas bloom overnight.',
    hero: {
      eyebrow: 'AI studio for working prototypes',
      title: 'Ideas bloom overnight.',
      subtitle: 'Plant an idea at night. Wake up to done.',
      body: 'Moonbloom Labs is an AI studio for working prototypes. Tell us your idea in a short evening call; AI agents build it overnight, following a plan a senior architect has reviewed. In the morning you review a working prototype, its tests and a short list of decisions only you can make.',
      note: 'A prototype, not a production system. We agree the scope in the evening so it fits one night.',
      cta_primary: 'Plant your idea',
      cta_secondary: 'See how it works',
      image_alt: '',
    },
    how: {
      anchor_id: 'how-it-works',
      title: 'From evening idea to morning prototype',
      intro: 'One evening, one night, one morning. Then you decide.',
      steps: [
        {
          key: 'evening',
          label: 'Evening',
          title: 'You describe the idea',
          body: 'In a short call or a written brief you tell us what you want to see working. Together we cut it to a scope that fits one night.',
        },
        {
          key: 'night',
          label: 'Night',
          title: 'Agents build and test',
          body: 'AI agents write the code and its tests, following the plan a senior architect reviewed before the build started.',
        },
        {
          key: 'morning',
          label: 'Morning',
          title: 'Prototype, tests, demo, questions',
          body: 'You receive a working prototype, its tests, a short demo and a list of open questions and decisions.',
        },
        {
          key: 'decision',
          label: 'Decision',
          title: 'Approve or refine',
          body: 'You decide what happens next: approve it, refine it in another night, or plan the path to production.',
        },
      ],
    },
    services: {
      title: 'What we build',
      intro:
        'Six areas where an overnight prototype answers the question that matters first: does this idea work?',
      cards: [
        {
          key: 'rag_ai_search',
          title: 'RAG & AI search',
          blurb:
            'Ask your company documents questions and get answers with citations to the source.',
        },
        {
          key: 'knowledge_management',
          title: 'Knowledge management',
          blurb:
            'Turn scattered docs, wikis and chats into one searchable, maintained knowledge base.',
        },
        {
          key: 'chatbots_ai_assistants',
          title: 'Chatbots & AI assistants',
          blurb:
            'Assistants for customer support, an internal helpdesk or onboarding new colleagues.',
        },
        {
          key: 'gamification',
          title: 'Gamification',
          blurb: 'Game mechanics for learning, onboarding, engagement and financial literacy.',
        },
        {
          key: 'ai_integration',
          title: 'AI integration',
          blurb:
            'Language models and agents connected to your existing systems, APIs and workflows.',
        },
        {
          key: 'devops_cloud',
          title: 'DevOps & cloud',
          blurb:
            'CI/CD, Kubernetes, AWS, infrastructure as code and observability, so prototypes can become production systems.',
        },
      ],
      link_label: 'Learn more',
      all_link: 'All services',
    },
    why: {
      title: 'Why Moonbloom',
      pillars: [
        {
          key: 'human_decides',
          title: 'A human decides, agents build',
          body: 'AI agents do the building. People set the goal, review the result and approve every step. Nothing ships without human approval.',
        },
        {
          key: 'senior_architect',
          title: 'A senior architect behind every build',
          body: 'Every build is planned and reviewed by an AI and cloud architect with more than 20 years in cloud, DevOps and AI/ML.',
        },
        {
          key: 'production_path',
          title: 'A path to production',
          body: 'Prototypes come with tests and a clear structure. When you approve one, our DevOps and cloud work can take it to production.',
        },
      ],
    },
    morning: {
      title: 'What you get in the morning',
      intro: 'Everything you need to make a decision over your first coffee.',
      items: [
        {
          key: 'prototype',
          title: 'A working prototype',
          body: 'Something you can click through, call or try, not a slide deck.',
        },
        {
          key: 'tests',
          title: 'Tests',
          body: 'Automated tests that show what works and what was checked.',
        },
        {
          key: 'demo',
          title: 'A short demo',
          body: 'A walkthrough of what was built and how to try it yourself.',
        },
        {
          key: 'decisions',
          title: 'Open decisions and questions',
          body: 'A short list of choices the agents should not make for you, ready for your answers.',
        },
      ],
    },
    proof: {
      title: 'Ideas that have bloomed',
      body: '[TODO: case study]',
    },
    faq: {
      title: 'Questions before you plant',
      items: [
        {
          key: 'scope',
          q: 'What fits into one night?',
          a: 'One clear idea with a core flow you can try. For example: a chat over a sample of your documents, an assistant for one support topic, or a connection between two systems. If your idea is bigger, we build the part that answers your most important question first and plan the rest as further nights.',
        },
        {
          key: 'not_good_enough',
          q: "What if the prototype isn't good enough?",
          a: 'Tell us what is missing and we refine it, usually in another night. The morning list of open decisions is there so you can steer before more gets built. A prototype is a fast way to learn whether an idea works; it is not a promise that every idea will.',
        },
        {
          key: 'confidentiality',
          q: 'Is my idea and my data kept confidential?',
          a: 'Yes. We treat what you share as confidential and can sign an NDA before you go into detail. Where possible we build with sample or anonymised data, and we agree with you up front which AI services may process it.',
        },
        {
          key: 'tech',
          q: 'Which technologies do you use?',
          a: 'Whatever fits your environment. Typical choices are Python or TypeScript, language models from established providers or open-weight models, and container-based deployment on AWS or Kubernetes. If your team has a standard stack, we build on it.',
        },
        {
          key: 'ownership',
          q: 'Who owns the code?',
          a: 'You do. The prototype code and its documentation are yours. [TODO: confirm IP terms]',
        },
        {
          key: 'pricing',
          q: 'How much does it cost?',
          a: '[TODO: pricing]',
        },
        {
          key: 'languages',
          q: 'Do you work in English and Slovak?',
          a: "Yes. The intake call, the brief, the prototype's interface and the documentation can be in English or Slovak.",
        },
        {
          key: 'after',
          q: 'What happens after the prototype?',
          a: 'You decide. Keep it as a demo, refine it over further nights, or turn it into a production system with our DevOps and cloud work: CI/CD, infrastructure as code, monitoring and hardening.',
        },
      ],
    },
    final_cta: {
      title: 'Have an idea for tonight?',
      body: "Tell us about it. We'll reply to agree the scope and an evening to start.",
      button: 'Plant your idea',
      secondary_link: 'Book a call',
    },
    keywords: {
      primary: 'AI prototype overnight',
      secondary: [
        'AI prototyping studio',
        'rapid AI prototype',
        'AI agents build prototype',
        'AI proof of concept',
      ],
    },
  },
  services_index: {
    seo: {
      title: 'AI services: RAG, chatbots, integration | Moonbloom Labs',
      description:
        'RAG search, knowledge bases, AI assistants, gamification, AI integration and DevOps. Each starts as a working prototype built overnight.',
    },
    og: {
      title: 'What we build overnight | Moonbloom Labs',
      description:
        'Six services, one way of working: you describe the idea in the evening and review a working prototype in the morning.',
    },
    h1: 'What we build overnight',
    intro:
      'Every service starts the same way: you describe the idea in the evening, AI agents build it overnight, and in the morning you decide what happens next. When a prototype earns its place, we help take it to production.',
    list_title: 'Services',
    cta: {
      title: 'Not sure which one fits?',
      body: "Describe the problem in your own words. We'll suggest what to build first.",
      button: 'Plant your idea',
    },
    keywords: {
      primary: 'AI development services',
      secondary: [
        'RAG development',
        'AI chatbot development',
        'AI integration services',
        'AI prototype studio',
      ],
    },
  },
  service_common: {
    needs: {
      title: 'What we need from you that evening',
      items: [
        'A short description of the idea and who will use it',
        'Sample data or documents to build with, anonymised where possible',
        'Access to a test system or API, if the prototype needs one',
      ],
    },
    paths: {
      title: 'Where it can go next',
      refine: 'Refine: another night on the parts you want changed',
      pilot: 'Pilot: put it in front of real users with real data',
      production: 'Production: deploy it properly with our DevOps & cloud work',
    },
    overnight_note:
      'Typical examples. We agree the exact scope with you in the evening so it fits one night.',
    breadcrumb_label: 'Services',
  },
  service_rag_ai_search: {
    seo: {
      title: 'RAG chatbot over your documents | Moonbloom Labs',
      description:
        'A chat over your company documents that answers with citations, on private data. Working RAG prototype by the next morning.',
    },
    og: {
      title: 'RAG & AI search, prototyped overnight',
      description:
        'Ask your documents questions and get answers that point to the source. See it working on your own data in the morning.',
    },
    h1: 'RAG & AI search',
    intro:
      "Ask your company's documents a question in plain language and get an answer that cites where it came from. Retrieval-augmented generation (RAG) lets a language model answer from your own sources instead of guessing.",
    problem: {
      title: 'The problem',
      body: 'The answer exists somewhere: in a contract, a manual, a policy or a shared drive. Finding it means keyword search, opening ten files and asking a colleague. General-purpose chatbots cannot see your documents, and answers without sources are hard to trust.',
    },
    overnight: {
      title: 'What we deliver overnight',
      items: [
        'A working chat over a representative sample of your documents',
        'Answers that cite the source document and passage',
        'Document ingestion for the formats in your sample (for example PDF, Word, web pages)',
        "A small test set of real questions with the prototype's answers, so you can judge quality",
        'A list of open decisions: model choice, hosting, access rights, which sources to add next',
      ],
    },
    after: {
      title: 'After the prototype',
      body: 'Once you approve the approach, we connect the full document set, add access control so people only see what they are allowed to, set up updates when documents change, and deploy it in your cloud or ours with monitoring.',
    },
    fit: {
      title: 'Good fit if…',
      items: [
        'Your team keeps asking the same questions about internal documents',
        'Answers need a source someone can check',
        'Your documents are private and must stay under your control',
        'You want to see results on your own content before committing to a platform',
      ],
    },
    cta: {
      title: 'Have documents that should answer questions?',
      button: 'Plant your idea',
    },
    jsonld_description:
      "Prototype of a retrieval-augmented generation (RAG) chat over a client's private documents, with answers that cite their sources, built overnight.",
    keywords: {
      primary: 'RAG chatbot',
      secondary: [
        'chat with company documents',
        'AI document search',
        'RAG prototype',
        'private data AI search',
      ],
    },
  },
  service_knowledge_management: {
    seo: {
      title: 'AI knowledge management and knowledge base | Moonbloom Labs',
      description:
        'Scattered docs, wikis and chats turned into one searchable, maintained knowledge base. See a working prototype the next morning.',
    },
    og: {
      title: 'Knowledge management, prototyped overnight',
      description:
        'Bring docs, wikis and chat threads into one knowledge base your team can search and keep up to date.',
    },
    h1: 'Knowledge management',
    intro:
      "Your team's knowledge lives in documents, wikis, tickets and chat threads. We bring it together into one knowledge base that people can search, and that stays maintained instead of slowly going stale.",
    problem: {
      title: 'The problem',
      body: "The same answer is written in three places, two of them out of date. New colleagues don't know where to look, and experienced ones become the search engine. Wikis start well and then nobody maintains them.",
    },
    overnight: {
      title: 'What we deliver overnight',
      items: [
        'A prototype knowledge base built from a sample of your sources (for example a wiki space, a shared folder and an exported chat channel)',
        'Search across all of them in one place, with links back to the original',
        'Automatic grouping by topic, with a flag on duplicates and possibly outdated pages',
        'A suggested structure for keeping it maintained: owners, review dates, what gets archived',
        'A list of open decisions: which sources to connect, who owns which topic, where it runs',
      ],
    },
    after: {
      title: 'After the prototype',
      body: 'We connect the real sources with scheduled sync, set up permissions that match your existing ones, add the maintenance workflow your team agreed on, and run it in production with monitoring and backups.',
    },
    fit: {
      title: 'Good fit if…',
      items: [
        'Knowledge is spread across several tools and nobody trusts any one of them',
        'Onboarding depends on who happens to be available to answer questions',
        'You have tried a wiki before and it went stale',
        'You want search and maintenance, not just another place to write things down',
      ],
    },
    cta: {
      title: "Where does your team's knowledge live today?",
      button: 'Plant your idea',
    },
    jsonld_description:
      "Prototype of a searchable, maintained knowledge base that unifies a client's documents, wikis and chat threads, built overnight.",
    keywords: {
      primary: 'AI knowledge management',
      secondary: [
        'internal knowledge base',
        'AI knowledge base',
        'searchable company wiki',
        'knowledge management software prototype',
      ],
    },
  },
  service_chatbots_ai_assistants: {
    seo: {
      title: 'AI chatbots and assistants for support | Moonbloom Labs',
      description:
        'AI assistants for customer support, internal helpdesk and onboarding, grounded in your content. A working prototype by the next morning.',
    },
    og: {
      title: 'Chatbots & AI assistants, prototyped overnight',
      description:
        'An assistant that answers from your own content and hands over to a person when it should. Try it in the morning.',
    },
    h1: 'Chatbots & AI assistants',
    intro:
      'An assistant that answers questions from your own content, in your tone, and knows when to hand over to a person. For customers, for your internal helpdesk, or for new colleagues finding their way.',
    problem: {
      title: 'The problem',
      body: "Most questions are repeats, yet each one still takes someone's time. Scripted chatbots break as soon as a question is phrased differently, and an assistant that invents answers is worse than none.",
    },
    overnight: {
      title: 'What we deliver overnight',
      items: [
        'A working assistant for one clearly defined use case (for example customer support for one product, or IT helpdesk basics)',
        "Answers grounded in the content you provide, with a fallback when it doesn't know",
        'A handover path to a person (for example an email or ticket draft)',
        'A test conversation set covering typical and tricky questions, with the results',
        'A list of open decisions: tone, channels, what it must never answer, where it runs',
      ],
    },
    after: {
      title: 'After the prototype',
      body: 'We connect it to your channels (website, Slack, Microsoft Teams or your helpdesk tool), add logging and review of conversations, set limits and guardrails you approve, and run it in production with monitoring.',
    },
    fit: {
      title: 'Good fit if…',
      items: [
        'Your support or helpdesk answers the same questions every week',
        'New colleagues need a patient guide through tools and processes',
        'You want the assistant to hand over to a human, not pretend to know',
        "You'd rather test with real questions than read a vendor demo",
      ],
    },
    cta: {
      title: 'Which questions should an assistant take off your team?',
      button: 'Plant your idea',
    },
    jsonld_description:
      "Prototype of an AI assistant or chatbot for customer support, internal helpdesk or onboarding, grounded in the client's own content, built overnight.",
    keywords: {
      primary: 'AI chatbot for customer support',
      secondary: [
        'AI assistant development',
        'internal helpdesk chatbot',
        'onboarding assistant',
        'custom AI chatbot',
      ],
    },
  },
  service_gamification: {
    seo: {
      title: 'Gamification for learning and onboarding | Moonbloom Labs',
      description:
        'Game mechanics for learning, onboarding, engagement and financial literacy. A playable prototype by the next morning.',
    },
    og: {
      title: 'Gamification, prototyped overnight',
      description:
        'Turn a lesson, an onboarding path or a money skill into something people want to finish. Play the prototype in the morning.',
    },
    h1: 'Gamification',
    intro:
      'Game mechanics such as goals, progress, feedback and friendly challenge can make learning stick and onboarding feel less like paperwork. We prototype them overnight so you can play the idea before you invest in it.',
    problem: {
      title: 'The problem',
      body: 'Training gets clicked through, onboarding checklists get abandoned, and topics like personal finance feel abstract. Adding points and badges on top rarely helps; the mechanic has to fit what people are actually meant to learn or do.',
    },
    overnight: {
      title: 'What we deliver overnight',
      items: [
        'A playable prototype of one core mechanic (for example a learning path with levels, a scenario-based quiz or a budgeting challenge)',
        'The rules written down: goals, scoring, progression and feedback',
        'Tests for the rules, so scoring and progression behave as designed',
        "A short demo of a first session from a player's point of view",
        'A list of open decisions: audience, rewards, difficulty, what success looks like',
      ],
    },
    after: {
      title: 'After the prototype',
      body: 'We refine the mechanic based on how people actually play it, add content and accounts, connect it to your learning platform or app where needed, and deploy it with analytics that respect your privacy rules.',
    },
    fit: {
      title: 'Good fit if…',
      items: [
        'You run training or onboarding that people finish only because they must',
        'You teach a skill, such as financial literacy, that needs practice, not just reading',
        'You want to test a game idea with real people before commissioning a full build',
        'You care about learning outcomes more than points and badges',
      ],
    },
    cta: {
      title: 'What should people want to finish?',
      button: 'Plant your idea',
    },
    jsonld_description:
      'Playable prototype of game mechanics for learning, onboarding, engagement or financial literacy, with documented rules, built overnight.',
    keywords: {
      primary: 'gamification for learning',
      secondary: [
        'gamified onboarding',
        'financial literacy game',
        'gamification prototype',
        'learning game development',
      ],
    },
  },
  service_ai_integration: {
    seo: {
      title: 'AI integration into your systems and APIs | Moonbloom Labs',
      description:
        'Language models and AI agents connected to your existing systems, APIs and workflows. A working integration prototype by morning.',
    },
    og: {
      title: 'AI integration, prototyped overnight',
      description:
        'Put a language model or an agent to work inside the systems you already use, with a person approving what matters.',
    },
    h1: 'AI integration',
    intro:
      'The value of AI shows up when it works inside the tools you already use. We connect language models and agents to your systems, APIs and workflows, with a person approving the steps that matter.',
    problem: {
      title: 'The problem',
      body: 'People copy text between a chat window and the systems they work in. Pilots stay in a sandbox because nobody connected them to real data. And it is unclear which steps AI should do on its own and which need a human sign-off.',
    },
    overnight: {
      title: 'What we deliver overnight',
      items: [
        'A working integration for one workflow (for example classifying incoming emails, extracting data from documents into your system, or drafting replies for approval)',
        'Connections to your APIs or a test copy of them',
        'A human approval step wherever the workflow changes data or contacts someone',
        'Tests that cover the expected inputs and the awkward ones',
        'A list of open decisions: model and provider, cost limits, error handling, who approves what',
      ],
    },
    after: {
      title: 'After the prototype',
      body: 'We harden the integration: authentication, rate and cost limits, logging, retries, and monitoring. Then we deploy it into your environment through a CI/CD pipeline, so changes are reviewed and repeatable.',
    },
    fit: {
      title: 'Good fit if…',
      items: [
        'Your team moves information between systems by hand',
        'You have APIs or data that a language model could put to work',
        'You want clear human approval points, not a black box',
        'An AI pilot is stuck and needs to touch real systems to prove itself',
      ],
    },
    cta: {
      title: 'Which workflow should AI help with first?',
      button: 'Plant your idea',
    },
    jsonld_description:
      "Prototype integration of language models and AI agents into a client's existing systems, APIs and workflows, with human approval steps, built overnight.",
    keywords: {
      primary: 'AI integration services',
      secondary: [
        'LLM integration',
        'AI agents for business workflows',
        'integrate ChatGPT-style models with API',
        'AI workflow automation',
      ],
    },
  },
  service_devops_cloud: {
    seo: {
      title: 'DevOps and cloud: CI/CD, Kubernetes, AWS | Moonbloom Labs',
      description:
        'CI/CD, Kubernetes, AWS, infrastructure as code and observability, so a prototype can become a production system you can run.',
    },
    og: {
      title: 'DevOps & cloud: from prototype to production',
      description:
        'Pipelines, infrastructure as code and monitoring that take an approved prototype to production, step by approved step.',
    },
    h1: 'DevOps & cloud',
    intro:
      'A prototype proves an idea; production needs more. We set up CI/CD, Kubernetes or managed cloud services on AWS, infrastructure as code and observability, so the things you approve can run reliably.',
    problem: {
      title: 'The problem',
      body: 'Prototypes often live on one laptop or one manually configured server. Nobody is sure how to deploy them safely, how to roll back, or how to tell that something is broken before a user does.',
    },
    overnight: {
      title: 'What we deliver overnight',
      items: [
        'A CI/CD pipeline that builds, tests and deploys one service to a test environment you provide',
        'Infrastructure as code for that environment (for example Terraform), reviewed and repeatable',
        'Basic observability: logs, health checks and a first dashboard',
        'A written runbook: how to deploy, roll back and check health',
        'A list of open decisions: environments, access, cost limits, what needs alerts',
      ],
    },
    after: {
      title: 'After the prototype',
      body: 'We extend the setup to staging and production, add secrets management, backups, alerting and security hardening, and hand over documentation your team can operate. Every production change goes through review and your approval.',
    },
    fit: {
      title: 'Good fit if…',
      items: [
        'You have a prototype or product that is deployed by hand',
        'You run on AWS or Kubernetes, or plan to',
        'You want infrastructure you can read, review and recreate',
        'You need to know something broke before your users tell you',
      ],
    },
    cta: {
      title: 'Ready to take a prototype further?',
      button: 'Plant your idea',
    },
    jsonld_description:
      'DevOps and cloud engineering (CI/CD, Kubernetes, AWS, infrastructure as code, observability) that takes approved prototypes to production.',
    keywords: {
      primary: 'DevOps and cloud services',
      secondary: [
        'CI/CD setup',
        'Kubernetes consulting',
        'AWS infrastructure as code',
        'prototype to production',
      ],
    },
  },
  about: {
    seo: {
      title: 'About Moonbloom Labs: a human decides, agents build',
      description:
        'Moonbloom Labs was founded by an AI and cloud architect with 20+ years in cloud, DevOps and AI/ML, co-founder of an AI lab at STU.',
    },
    og: {
      title: 'About Moonbloom Labs',
      description:
        'Why we build prototypes overnight, who stands behind every build, and the principles we work by.',
    },
    h1: 'A human decides. Agents build.',
    intro:
      'Moonbloom Labs is an AI studio that turns an idea into a working prototype by the next morning. AI agents do the building; a person sets the direction and approves every step.',
    founder: {
      title: 'Who is behind it',
      name: 'Michal Maxian',
      role: 'Founder, AI & cloud architect',
      body: [
        'Moonbloom Labs was founded by Michal Maxian, an AI and cloud architect with more than 20 years of experience in cloud, DevOps and AI/ML. He is a co-founder of an AI lab at the Slovak University of Technology in Bratislava (STU).',
        "Waiting weeks to find out whether an idea works is often the slowest part of a project. AI agents can now write and test a lot of code in one night. Moonbloom puts that to work with an architect's judgement around it: the scope is agreed with you, the build is planned and reviewed, and every decision that matters stays with people.",
      ],
      photo_alt: 'Portrait of Michal Maxian, founder of Moonbloom Labs',
      photo: '[TODO: founder photo]',
    },
    principles: {
      title: 'How we work',
      items: [
        {
          key: 'human_decides',
          title: 'A human decides',
          body: 'Agents build; people decide. You approve the scope in the evening and the result in the morning, and nothing ships without human approval.',
        },
        {
          key: 'transparent',
          title: 'Transparent',
          body: 'You see what was built, how it was tested and what is still open. The morning list of decisions shows exactly where your judgement is needed.',
        },
        {
          key: 'secure_by_default',
          title: 'Secure by default',
          body: 'We treat your ideas and data as confidential, use sample or anonymised data where we can, and agree up front which services may process them.',
        },
        {
          key: 'honest_scope',
          title: 'Honest scope',
          body: 'One night builds a prototype, not a finished product. We tell you in the evening what fits, and in the morning what is still missing.',
        },
      ],
    },
    cta: {
      title: "Let's see what your idea looks like by morning.",
      button: 'Plant your idea',
    },
    keywords: {
      primary: 'AI studio Slovakia',
      secondary: [
        'AI architect Slovakia',
        'AI prototyping studio Bratislava',
        'human in the loop AI development',
      ],
    },
  },
  contact: {
    seo: {
      title: 'Plant your idea | Contact Moonbloom Labs',
      description:
        "Describe your idea and we'll reply to agree the scope and an evening to start. In English or Slovak.",
    },
    og: {
      title: 'Plant your idea with Moonbloom Labs',
      description:
        "Tell us what you'd like to see working. We'll reply to agree the scope that fits one night.",
    },
    h1: 'Plant your idea',
    intro:
      "Tell us what you'd like to see working. A few sentences are enough. We'll reply to agree the scope and an evening for a short intake call; then the agents get to work.",
    what_next: {
      title: 'What happens next',
      items: [
        'We read your idea and reply by email.',
        'We agree the scope and an evening for a short call or written brief.',
        'Agents build overnight; you review the prototype in the morning.',
      ],
    },
    form: {
      aria_label: 'Contact form',
      required_hint: 'Fields marked * are required.',
      name: {
        label: 'Your name *',
        placeholder: 'Jane Novak',
      },
      email: {
        label: 'Email *',
        placeholder: 'jane@company.com',
        help: "We'll only use it to reply to you.",
      },
      company: {
        label: 'Company (optional)',
        placeholder: 'Company name',
      },
      idea: {
        label: 'Your idea *',
        placeholder:
          'For example: a chat that answers questions from our internal manuals, with links to the source.',
        help: "What should work in the morning, and who will use it? Please don't include passwords or confidential data here.",
      },
      language: {
        label: 'Preferred language *',
        option_en: 'English',
        option_sk: 'Slovak',
      },
      honeypot: {
        label: 'Leave this field empty',
      },
      submit: 'Plant your idea',
      submitting: 'Sending…',
      privacy_note:
        'We use your details only to reply to your message. See our [privacy policy](route:privacy).',
    },
    validation: {
      name_required: 'Please tell us your name.',
      email_required: 'Please enter your email so we can reply.',
      email_invalid: "That email address doesn't look right. Please check it.",
      idea_required: 'Please describe your idea in a sentence or two.',
      idea_too_short:
        'Could you add a little more detail? At least {min} characters; a sentence or two is enough.',
      idea_too_long:
        "That's more than we can take in one message. Please shorten it to {max} characters.",
      name_too_long: 'Please shorten your name to {max} characters.',
      language_required: 'Please choose a language.',
      form_errors_summary: 'Please check the highlighted fields.',
    },
    status: {
      success_title: 'Your idea is planted.',
      success_body: "Thank you. We'll reply by email to agree the scope and an evening to start.",
      failure_title: "Your message wasn't sent.",
      failure_body:
        'Something went wrong on our side. Please try again, or write to us at michal@maxian.sk.',
      rate_limited:
        "You've sent several messages in a short time. Please wait a few minutes and try again.",
      error_invalid: 'Some fields need another look. Please check them and send again.',
      error_captcha: "We couldn't confirm the security check. Please try again.",
      error_delivery:
        "Your message wasn't delivered. Please try again, or write to us at michal@maxian.sk.",
      error_method: 'Something went wrong with the form. Please reload the page and try again.',
      error_noscript_generic:
        "Your message wasn't sent. Please check the fields and try again, or write to us at michal@maxian.sk.",
    },
    turnstile_note: 'This form uses Cloudflare Turnstile to keep out spam.',
    talk: {
      line: 'Prefer to talk? [Book a call](mailto:michal@maxian.sk?subject=Book%20a%20call%20%E2%80%93%20Moonbloom%20Labs) and tell us when suits you.',
      mailto_subject: 'Moonbloom Labs – call',
      mailto_body: "Hello, I'd like to talk about an idea. Times that suit me: ",
    },
    keywords: {
      primary: 'AI prototype contact',
      secondary: ['start AI prototype', 'AI studio contact'],
    },
  },
  thank_you: {
    seo: {
      title: 'Thank you | Moonbloom Labs',
      description:
        "Your idea is planted. We'll reply by email to agree the scope and an evening to start.",
    },
    og: {
      title: 'Your idea is planted',
      description: "We'll reply by email to agree the scope and an evening to start.",
    },
    h1: 'Your idea is planted.',
    body: "Thank you for writing to us. We'll read your idea and reply by email to agree the scope and an evening for a short intake call.",
    next_title: 'While you wait',
    next_items: [
      'Think about who will try the prototype in the morning.',
      'Gather a few sample documents, questions or data we could build with. Anonymised is best.',
      'Note the one question the prototype must answer for you.',
    ],
    links: {
      how: 'See how it works',
      services: 'Browse services',
      home: 'Back to home',
    },
  },
  privacy: {
    seo: {
      title: 'Privacy policy | Moonbloom Labs',
      description:
        'How Moonbloom Labs handles personal data: what we collect through the contact form, why, how long we keep it and your GDPR rights.',
    },
    og: {
      title: 'Privacy policy | Moonbloom Labs',
      description:
        'Plain-language privacy policy: contact form data used only to reply, cookieless analytics, your GDPR rights.',
    },
    h1: 'Privacy policy',
    review_flag: '[TODO: legal review]',
    updated: 'Last updated: [TODO: date of publication]',
    intro:
      'We keep this short and plain. We collect as little personal data as we can and use it only for the purposes described here.',
    sections: [
      {
        key: 'controller',
        title: 'Who is responsible for your data',
        body: 'The controller of your personal data is [TODO: company legal name], ID (IČO): [TODO: IČO], registered at [TODO: registered address], Slovakia. You can contact us about privacy at michal@maxian.sk.',
      },
      {
        key: 'contact_form',
        title: 'What we collect through the contact form',
        body: 'When you send the contact form, we receive your name, email address, company (if you give it), your description of the idea and your preferred language. We use this information only to reply to you and to discuss the work you asked about. We do not use it for newsletters or marketing, and we do not sell it.',
      },
      {
        key: 'legal_basis',
        title: 'Why we are allowed to process it',
        body: 'We process this data to take steps at your request before a possible contract (Article 6(1)(b) GDPR) and, for keeping our correspondence, on the basis of our legitimate interest in being able to follow up on the conversation (Article 6(1)(f) GDPR).',
      },
      {
        key: 'storage',
        title: 'Where it is stored and for how long',
        body: 'Form messages are delivered to our business email mailbox and stored there. [TODO: confirm email provider and where the mailbox is hosted] We keep the messages for as long as we are talking to you and then for [TODO: retention period], unless the law requires us to keep them longer or you ask us to delete them sooner.',
      },
      {
        key: 'hosting',
        title: 'Website hosting',
        body: 'This website is hosted by Websupport s.r.o. in Slovakia. When you visit it, the server processes technical data such as your IP address and browser type in order to deliver the pages and keep them secure. [TODO: confirm server log retention with Websupport]',
      },
      {
        key: 'analytics',
        title: 'Analytics without cookies',
        body: "We use Cloudflare Web Analytics to count visits and see which pages are read. It does not set cookies and does not use your browser's local storage. The data is processed by Cloudflare, Inc. as our processor and is reported to us only in aggregate. [TODO: confirm Cloudflare data processing terms and any transfer outside the EU]",
      },
      {
        key: 'spam_protection',
        title: 'Spam protection on the form',
        body: 'The contact form may use Cloudflare Turnstile to tell people from bots. When you interact with the form, Turnstile processes technical signals such as your IP address and browser characteristics; it is provided by Cloudflare, Inc. as our processor. We use it on the basis of our legitimate interest in keeping the form free of spam (Article 6(1)(f) GDPR). [TODO: confirm Turnstile is enabled at launch, its data processing terms and that it sets no cookies]',
      },
      {
        key: 'cookies',
        title: 'Cookies',
        body: 'This website does not use cookies for analytics or advertising. [TODO: confirm no other cookies are set, e.g. by the form or the language switcher]',
      },
      {
        key: 'recipients',
        title: 'Who else sees your data',
        body: 'Only the providers named above, acting on our behalf: our hosting provider, our email provider and Cloudflare for analytics and spam protection. We do not share your data with anyone else unless the law requires it.',
      },
      {
        key: 'rights',
        title: 'Your rights',
        body: 'You have the right to access your data, have it corrected or deleted, restrict or object to its processing, and receive it in a portable format. Write to michal@maxian.sk and we will respond within one month. You also have the right to lodge a complaint with a data protection supervisory authority, in particular in the EU country where you live or work. Our lead authority is the Office for Personal Data Protection of the Slovak Republic (Úrad na ochranu osobných údajov SR, dataprotection.gov.sk).',
      },
      {
        key: 'changes',
        title: 'Changes to this policy',
        body: 'If we change how we handle personal data, we will update this page and the date at the top.',
      },
    ],
  },
  imprint: {
    seo: {
      title: 'Imprint | Moonbloom Labs',
      description:
        'Company details of the operator of moonbloomlabs.com: legal name, company ID, registered address and contact.',
    },
    og: {
      title: 'Imprint | Moonbloom Labs',
      description: 'Company details of the operator of moonbloomlabs.com.',
    },
    h1: 'Imprint',
    review_flag: '[TODO: legal review]',
    fields: {
      operator_label: 'Operator',
      operator_value: '[TODO: company legal name]',
      ico_label: 'Company ID (IČO)',
      ico_value: '[TODO: IČO]',
      dic_label: 'Tax ID (DIČ)',
      dic_value: '[TODO: DIČ]',
      vat_label: 'VAT ID (IČ DPH)',
      vat_value: "[TODO: IČ DPH or 'not a VAT payer']",
      address_label: 'Registered address',
      address_value: '[TODO: registered address]',
      register_label: 'Registration',
      register_value:
        '[TODO: register entry, e.g. Business Register of the District Court ..., Section ..., Insert No. ...]',
      contact_label: 'Contact',
      contact_value: 'michal@maxian.sk',
      hosting_label: 'Hosting',
      hosting_value: 'Websupport s.r.o., Slovakia',
      representative_label: '',
      representative_value: '',
      responsible_label: '',
      responsible_value: '',
    },
    trade_name_note: 'Moonbloom Labs is the trade name used by [TODO: company legal name].',
  },
  not_found: {
    seo: {
      title: 'Page not found | Moonbloom Labs',
      description: "This page hasn't bloomed yet. Head back to the home page or plant your idea.",
    },
    og: {
      title: 'Page not found | Moonbloom Labs',
      description: "This page hasn't bloomed yet.",
    },
    h1: "This idea hasn't bloomed yet.",
    body: "The page you're looking for isn't here. Maybe it was moved, or maybe it's still a seed. Either way, these paths are in full bloom:",
    links: {
      home: 'Back to home',
      services: 'Our services',
      contact: 'Plant your idea',
    },
    code_label: 'Error 404',
  },
  jsonld: {
    organization: {
      name: 'Moonbloom Labs',
      url: 'https://moonbloomlabs.com/',
      slogan: 'Ideas bloom overnight.',
      description:
        'Moonbloom Labs is an AI studio that turns an idea into a working prototype by the next morning. The client describes the idea in the evening, AI agents build and test it overnight, and in the morning the client reviews a working prototype, its tests and a list of open decisions. A human decides; agents build.',
      founder_name: 'Michal Maxian',
      area_served: '[TODO: confirm area served, e.g. Slovakia, European Union]',
      email: 'michal@maxian.sk',
      legal_name: '[TODO: company legal name]',
    },
    services: {
      rag_ai_search:
        "Prototype of a retrieval-augmented generation (RAG) chat over a client's private documents, with answers that cite their sources, built overnight.",
      knowledge_management:
        "Prototype of a searchable, maintained knowledge base that unifies a client's documents, wikis and chat threads, built overnight.",
      chatbots_ai_assistants:
        "Prototype of an AI assistant or chatbot for customer support, internal helpdesk or onboarding, grounded in the client's own content, built overnight.",
      gamification:
        'Playable prototype of game mechanics for learning, onboarding, engagement or financial literacy, with documented rules, built overnight.',
      ai_integration:
        "Prototype integration of language models and AI agents into a client's existing systems, APIs and workflows, with human approval steps, built overnight.",
      devops_cloud:
        'DevOps and cloud engineering (CI/CD, Kubernetes, AWS, infrastructure as code, observability) that takes approved prototypes to production.',
    },
  },
};
