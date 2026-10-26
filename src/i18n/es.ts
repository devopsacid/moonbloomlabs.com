// Imported from docs/plan/copy-es.md by scripts/import-copy.mjs.
import type { Dictionary } from './dictionary';

export const es: Dictionary = {
  common: {
    skip_link: 'Saltar al contenido',
    brand_name: 'Moonbloom Labs',
    logo_alt: 'Moonbloom Labs, página de inicio',
    nav: {
      aria_label: 'Navegación principal',
      services: 'Servicios',
      how_it_works: 'Cómo funciona',
      about: 'Sobre nosotros',
      contact: 'Contacto',
      cta: 'Siembre su idea',
      menu_open: 'Abrir menú',
      menu_close: 'Cerrar menú',
    },
    lang_switcher: {
      aria_label: 'Idioma',
      current_label: 'ES',
      en_label: 'English',
      sk_label: 'Slovenčina',
      switch_to_other: 'Read in English',
    },
    footer: {
      tagline: 'Las ideas florecen de la noche a la mañana.',
      blurb:
        'Un estudio de IA que convierte una idea en un prototipo funcional para la mañana siguiente. Decide una persona; construyen los agentes.',
      nav_heading: 'Estudio',
      services_heading: 'Servicios',
      legal_heading: 'Legal',
      privacy: 'Política de privacidad',
      imprint: 'Aviso legal',
      contact_line: 'Escríbanos: michal@maxian.sk',
      copyright: '© 2026 Moonbloom Labs',
      principle_line: 'Cada versión la aprueba una persona.',
    },
    breadcrumbs: {
      home: 'Inicio',
      services: 'Servicios',
    },
    common_cta: {
      plant_idea: 'Siembre su idea',
      learn_more: 'Más información',
      back_home: 'Volver al inicio',
    },
  },
  home: {
    seo: {
      title: 'Moonbloom Labs: prototipos con IA en una noche',
      description:
        'Cuéntenos su idea por la tarde. Los agentes de IA la construyen de noche; por la mañana revisa un prototipo funcional y sus pruebas, y decide usted.',
    },
    og: {
      title: 'Las ideas florecen de la noche a la mañana | Moonbloom Labs',
      description:
        'Siembre una idea por la noche. Al despertar tendrá un prototipo funcional, sus pruebas, una breve demo y las decisiones que le corresponden a usted.',
    },
    h1: 'Las ideas florecen de la noche a la mañana.',
    hero: {
      eyebrow: 'Estudio de IA para prototipos funcionales',
      title: 'Las ideas florecen de la noche a la mañana.',
      subtitle: 'Siembre una idea por la noche. Al despertar, ya está hecha.',
      body: 'Moonbloom Labs es un estudio de IA para prototipos funcionales. Nos cuenta su idea en una breve llamada por la tarde; los agentes de IA la construyen durante la noche, siguiendo un plan revisado por un arquitecto sénior. Por la mañana revisa un prototipo funcional, sus pruebas y una breve lista de decisiones que solo usted puede tomar.',
      note: 'Es un prototipo, no un sistema en producción. Acordamos el alcance por la tarde para que quepa en una noche.',
      cta_primary: 'Siembre su idea',
      cta_secondary: 'Vea cómo funciona',
      image_alt: '',
    },
    how: {
      anchor_id: 'como-funciona',
      title: 'De la idea de la tarde al prototipo de la mañana',
      intro: 'Una tarde, una noche, una mañana. Después decide usted.',
      steps: [
        {
          key: 'evening',
          label: 'Tarde',
          title: 'Usted describe la idea',
          body: 'En una breve llamada o en una descripción por escrito nos cuenta qué quiere ver funcionando. Juntos lo acotamos a un alcance que quepa en una noche.',
        },
        {
          key: 'night',
          label: 'Noche',
          title: 'Los agentes construyen y prueban',
          body: 'Los agentes de IA escriben el código y sus pruebas siguiendo el plan que un arquitecto sénior revisó antes de empezar.',
        },
        {
          key: 'morning',
          label: 'Mañana',
          title: 'Prototipo, pruebas, demo y preguntas',
          body: 'Recibe un prototipo funcional, sus pruebas, una breve demo y una lista de preguntas y decisiones pendientes.',
        },
        {
          key: 'decision',
          label: 'Decisión',
          title: 'Aprobar o pulir',
          body: 'Usted decide el siguiente paso: aprobarlo, pulirlo en otra noche o planificar el camino a producción.',
        },
      ],
    },
    services: {
      title: 'Qué construimos',
      intro:
        'Seis áreas en las que un prototipo hecho en una noche responde primero a la pregunta que importa: ¿funciona esta idea?',
      cards: [
        {
          key: 'rag_ai_search',
          title: 'RAG y búsqueda con IA',
          blurb:
            'Haga preguntas a los documentos de su empresa y obtenga respuestas que citan la fuente.',
        },
        {
          key: 'knowledge_management',
          title: 'Gestión del conocimiento',
          blurb:
            'Documentos, wikis y chats dispersos, reunidos en una única base de conocimiento con buscador y siempre al día.',
        },
        {
          key: 'chatbots_ai_assistants',
          title: 'Chatbots y asistentes de IA',
          blurb:
            'Asistentes para atención al cliente, un helpdesk interno o la incorporación de nuevos compañeros.',
        },
        {
          key: 'gamification',
          title: 'Gamificación',
          blurb:
            'Mecánicas de juego para el aprendizaje, la incorporación, la participación y la educación financiera.',
        },
        {
          key: 'ai_integration',
          title: 'Integración de IA',
          blurb:
            'Modelos de lenguaje y agentes conectados a sus sistemas, API y flujos de trabajo actuales.',
        },
        {
          key: 'devops_cloud',
          title: 'DevOps y cloud',
          blurb:
            'CI/CD, Kubernetes, AWS, infraestructura como código y observabilidad, para que un prototipo pueda convertirse en un sistema en producción.',
        },
      ],
      link_label: 'Más información',
      all_link: 'Todos los servicios',
    },
    why: {
      title: 'Por qué Moonbloom',
      pillars: [
        {
          key: 'human_decides',
          title: 'Decide una persona, construyen los agentes',
          body: 'Los agentes de IA construyen. Las personas fijan el objetivo, revisan el resultado y aprueban cada paso. Nada sale a producción sin la aprobación de una persona.',
        },
        {
          key: 'senior_architect',
          title: 'Un arquitecto sénior detrás de cada proyecto',
          body: 'Cada proyecto lo planifica y lo revisa un arquitecto de IA y cloud con más de 20 años de experiencia en cloud, DevOps e IA/ML.',
        },
        {
          key: 'production_path',
          title: 'Un camino a producción',
          body: 'Los prototipos llegan con pruebas y una estructura clara. Cuando apruebe uno, nuestro trabajo de DevOps y cloud puede llevarlo a producción.',
        },
      ],
    },
    morning: {
      title: 'Qué recibe por la mañana',
      intro: 'Todo lo que necesita para decidir con el primer café.',
      items: [
        {
          key: 'prototype',
          title: 'Un prototipo funcional',
          body: 'Algo que puede recorrer, llamar o probar, no una presentación.',
        },
        {
          key: 'tests',
          title: 'Pruebas',
          body: 'Pruebas automatizadas que muestran qué funciona y qué se ha comprobado.',
        },
        {
          key: 'demo',
          title: 'Una breve demo',
          body: 'Un recorrido por lo que se ha construido y por cómo probarlo por su cuenta.',
        },
        {
          key: 'decisions',
          title: 'Decisiones y preguntas pendientes',
          body: 'Una breve relación de decisiones que los agentes no deben tomar por usted, a la espera de sus respuestas.',
        },
      ],
    },
    proof: {
      title: 'Ideas que ya han florecido',
      body: '[TODO: case study]',
    },
    faq: {
      title: 'Preguntas antes de sembrar',
      items: [
        {
          key: 'scope',
          q: '¿Qué cabe en una noche?',
          a: 'Una idea clara con un flujo principal que se pueda probar. Por ejemplo: un chat sobre una muestra de sus documentos, un asistente para un tema de soporte o la conexión entre dos sistemas. Si su idea es más grande, construimos primero la parte que responde a su pregunta más importante y planificamos el resto para noches posteriores.',
        },
        {
          key: 'not_good_enough',
          q: '¿Y si el prototipo no es lo bastante bueno?',
          a: 'Díganos qué falta y lo pulimos, normalmente en otra noche. La lista matinal de decisiones pendientes está ahí para que pueda corregir el rumbo antes de que se construya más. Un prototipo es una forma rápida de saber si una idea funciona; no es una promesa de que todas vayan a funcionar.',
        },
        {
          key: 'confidentiality',
          q: '¿Mi idea y mis datos se tratan de forma confidencial?',
          a: 'Sí. Tratamos como confidencial todo lo que comparte con nosotros y podemos firmar un acuerdo de confidencialidad (NDA) antes de entrar en detalles. Siempre que es posible trabajamos con datos de muestra o anonimizados, y acordamos con usted de antemano qué servicios de IA pueden procesarlos.',
        },
        {
          key: 'tech',
          q: '¿Qué tecnologías utilizan?',
          a: 'Las que encajen en su entorno. Lo habitual es Python o TypeScript, modelos de lenguaje de proveedores consolidados o modelos de pesos abiertos, y despliegue en contenedores sobre AWS o Kubernetes. Si su equipo tiene un stack estándar, construimos sobre él.',
        },
        {
          key: 'ownership',
          q: '¿De quién es el código?',
          a: 'Suyo. El código del prototipo y su documentación le pertenecen. [TODO: confirm IP terms]',
        },
        {
          key: 'pricing',
          q: '¿Cuánto cuesta?',
          a: '[TODO: pricing]',
        },
        {
          key: 'languages',
          q: '¿Trabajan en inglés y en eslovaco?',
          a: 'Sí. La llamada inicial, la descripción del proyecto, la interfaz del prototipo y la documentación pueden estar en inglés o en eslovaco.',
        },
        {
          key: 'after',
          q: '¿Qué pasa después del prototipo?',
          a: 'Usted decide. Puede quedárselo como demo, pulirlo en más noches o convertirlo en un sistema en producción con nuestro trabajo de DevOps y cloud: CI/CD, infraestructura como código, monitorización y refuerzo de la seguridad.',
        },
      ],
    },
    final_cta: {
      title: '¿Tiene una idea para esta noche?',
      body: 'Cuéntenosla. Le responderemos para acordar el alcance y una tarde para empezar.',
      button: 'Siembre su idea',
      secondary_link: 'Reserve una llamada',
    },
    keywords: {
      primary: 'prototipo con IA',
      secondary: ['prototipo en una noche', 'estudio de IA', 'prueba de concepto IA'],
    },
  },
  services_index: {
    seo: {
      title: 'Servicios de IA: RAG, chatbots, integración | Moonbloom Labs',
      description:
        'Búsqueda RAG, bases de conocimiento, asistentes de IA, gamificación, integración de IA y DevOps. Cada servicio empieza con un prototipo hecho en una noche.',
    },
    og: {
      title: 'Lo que construimos en una noche | Moonbloom Labs',
      description:
        'Seis servicios, una forma de trabajar: describe la idea por la tarde y revisa un prototipo funcional por la mañana.',
    },
    h1: 'Lo que construimos en una noche',
    intro:
      'Todos los servicios empiezan igual: describe la idea por la tarde, los agentes de IA la construyen durante la noche y por la mañana usted decide qué hacer. Cuando un prototipo se gana su sitio, le ayudamos a llevarlo a producción.',
    list_title: 'Servicios',
    cta: {
      title: '¿No sabe cuál encaja?',
      body: 'Describa el problema con sus propias palabras. Le propondremos qué construir primero.',
      button: 'Siembre su idea',
    },
    keywords: {
      primary: 'desarrollo de soluciones de IA',
      secondary: ['servicios de IA para empresas', 'chatbot RAG', 'integración de IA'],
    },
  },
  service_common: {
    needs: {
      title: 'Lo que necesitamos de usted esa tarde',
      items: [
        'Una breve descripción de la idea y de quién la va a usar',
        'Datos o documentos de muestra con los que construir, anonimizados si es posible',
        'Acceso a un sistema de pruebas o a una API, si el prototipo lo necesita',
      ],
    },
    paths: {
      title: 'Hacia dónde puede ir después',
      refine: 'Pulir: otra noche dedicada a las partes que quiera cambiar',
      pilot: 'Piloto: ponerlo en manos de usuarios reales, con datos reales',
      production: 'Producción: desplegarlo como es debido con nuestro trabajo de DevOps y cloud',
    },
    overnight_note:
      'Son ejemplos habituales. Acordamos con usted el alcance exacto por la tarde para que quepa en una noche.',
    breadcrumb_label: 'Servicios',
  },
  service_rag_ai_search: {
    seo: {
      title: 'Chatbot RAG sobre sus documentos | Moonbloom Labs',
      description:
        'Un chat sobre los documentos de su empresa que responde citando la fuente, con datos privados. Prototipo RAG funcional para la mañana siguiente.',
    },
    og: {
      title: 'RAG y búsqueda con IA, prototipado en una noche',
      description:
        'Pregunte a sus documentos y obtenga respuestas que señalan la fuente. Por la mañana lo verá funcionar con sus propios datos.',
    },
    h1: 'RAG y búsqueda con IA',
    intro:
      'Haga una pregunta en lenguaje natural a los documentos de su empresa y obtenga una respuesta que cita de dónde sale. La generación aumentada por recuperación (RAG) permite que un modelo de lenguaje responda a partir de sus propias fuentes en lugar de adivinar.',
    problem: {
      title: 'El problema',
      body: 'La respuesta está en algún sitio: en un contrato, un manual, una política interna o una unidad compartida. Encontrarla significa buscar por palabras clave, abrir diez archivos y preguntar a un compañero. Los chatbots generalistas no ven sus documentos, y es difícil fiarse de una respuesta sin fuente.',
    },
    overnight: {
      title: 'Lo que entregamos en una noche',
      items: [
        'Un chat funcional sobre una muestra representativa de sus documentos',
        'Respuestas que citan el documento y el fragmento de origen',
        'Carga de documentos en los formatos de su muestra (por ejemplo PDF, Word o páginas web)',
        'Un pequeño conjunto de preguntas reales con las respuestas del prototipo, para que pueda valorar la calidad',
        'Una lista de decisiones pendientes: elección del modelo, alojamiento, permisos de acceso, qué fuentes añadir después',
      ],
    },
    after: {
      title: 'Después del prototipo',
      body: 'Cuando apruebe el enfoque, conectamos el conjunto completo de documentos, añadimos control de acceso para que cada persona vea solo lo que le corresponde, configuramos la actualización cuando cambian los documentos y lo desplegamos en su nube o en la nuestra, con monitorización.',
    },
    fit: {
      title: 'Encaja bien si…',
      items: [
        'Su equipo hace una y otra vez las mismas preguntas sobre documentos internos',
        'Las respuestas necesitan una fuente que alguien pueda comprobar',
        'Sus documentos son privados y deben seguir bajo su control',
        'Quiere ver resultados con su propio contenido antes de comprometerse con una plataforma',
      ],
    },
    cta: {
      title: '¿Tiene documentos que deberían responder preguntas?',
      button: 'Siembre su idea',
    },
    jsonld_description:
      'Prototipo de chat con generación aumentada por recuperación (RAG) sobre los documentos privados de un cliente, con respuestas que citan sus fuentes, construido en una noche.',
    keywords: {
      primary: 'chatbot RAG',
      secondary: ['búsqueda con IA en documentos', 'chat con documentos de empresa'],
    },
  },
  service_knowledge_management: {
    seo: {
      title: 'Gestión del conocimiento con IA | Moonbloom Labs',
      description:
        'Documentos, wikis y chats dispersos, reunidos en una base de conocimiento interna con buscador y al día. Prototipo funcional para la mañana siguiente.',
    },
    og: {
      title: 'Gestión del conocimiento, prototipada en una noche',
      description:
        'Reúna documentos, wikis y conversaciones en una base de conocimiento en la que su equipo pueda buscar y que se mantenga al día.',
    },
    h1: 'Gestión del conocimiento',
    intro:
      'El conocimiento de su equipo vive en documentos, wikis, tickets y conversaciones de chat. Lo reunimos en una única base de conocimiento en la que se puede buscar y que se mantiene al día, en lugar de quedarse obsoleta poco a poco.',
    problem: {
      title: 'El problema',
      body: 'La misma respuesta está escrita en tres sitios, y dos están desactualizados. Los recién llegados no saben dónde buscar y los veteranos acaban haciendo de buscador. Las wikis empiezan bien y luego nadie las mantiene.',
    },
    overnight: {
      title: 'Lo que entregamos en una noche',
      items: [
        'Un prototipo de base de conocimiento creado a partir de una muestra de sus fuentes (por ejemplo, un espacio de la wiki, una carpeta compartida y un canal de chat exportado)',
        'Búsqueda en todas ellas desde un solo lugar, con enlaces al original',
        'Agrupación automática por temas, con aviso de duplicados y de páginas posiblemente desactualizadas',
        'Una propuesta de estructura para mantenerla: responsables, fechas de revisión y qué se archiva',
        'Una lista de decisiones pendientes: qué fuentes conectar, quién se ocupa de cada tema, dónde se ejecuta',
      ],
    },
    after: {
      title: 'Después del prototipo',
      body: 'Conectamos las fuentes reales con sincronización programada, configuramos permisos que reproducen los que ya tiene, añadimos el flujo de mantenimiento que su equipo haya acordado y la ponemos en producción con monitorización y copias de seguridad.',
    },
    fit: {
      title: 'Encaja bien si…',
      items: [
        'El conocimiento está repartido entre varias herramientas y nadie se fía del todo de ninguna',
        'La incorporación de personas nuevas depende de quién tenga tiempo para responder preguntas',
        'Ya probó una wiki y acabó desactualizada',
        'Quiere búsqueda y mantenimiento, no otro sitio más donde apuntar cosas',
      ],
    },
    cta: {
      title: '¿Dónde vive hoy el conocimiento de su equipo?',
      button: 'Siembre su idea',
    },
    jsonld_description:
      'Prototipo de base de conocimiento con buscador y mantenida al día, que unifica los documentos, wikis y conversaciones de chat de un cliente, construido en una noche.',
    keywords: {
      primary: 'gestión del conocimiento con IA',
      secondary: ['base de conocimiento interna'],
    },
  },
  service_chatbots_ai_assistants: {
    seo: {
      title: 'Chatbot de atención al cliente con IA | Moonbloom Labs',
      description:
        'Asistentes de IA para atención al cliente, helpdesk interno e incorporación, basados en su propio contenido. Prototipo funcional a la mañana siguiente.',
    },
    og: {
      title: 'Chatbots y asistentes de IA, prototipados en una noche',
      description:
        'Un asistente que responde a partir de su contenido y pasa la conversación a una persona cuando debe. Pruébelo por la mañana.',
    },
    h1: 'Chatbots y asistentes de IA',
    intro:
      'Un asistente que responde a partir de su propio contenido, con su tono, y sabe cuándo pasar la conversación a una persona. Para sus clientes, para su helpdesk interno o para que los nuevos compañeros se orienten.',
    problem: {
      title: 'El problema',
      body: 'La mayoría de las preguntas se repiten, pero cada una sigue quitándole tiempo a alguien. Los chatbots con guion fallan en cuanto alguien formula la pregunta de otra manera, y un asistente que se inventa las respuestas es peor que no tener ninguno.',
    },
    overnight: {
      title: 'Lo que entregamos en una noche',
      items: [
        'Un asistente funcional para un caso de uso bien definido (por ejemplo, atención al cliente de un producto o lo básico de un helpdesk de TI)',
        'Respuestas basadas en el contenido que nos facilite, con una salida prevista para cuando no sabe la respuesta',
        'Un traspaso a una persona (por ejemplo, un borrador de correo o de ticket)',
        'Un conjunto de conversaciones de prueba con preguntas habituales y otras con trampa, con sus resultados',
        'Una lista de decisiones pendientes: tono, canales, lo que nunca debe responder, dónde se ejecuta',
      ],
    },
    after: {
      title: 'Después del prototipo',
      body: 'Lo conectamos a sus canales (web, Slack, Microsoft Teams o su herramienta de helpdesk), añadimos registro y revisión de conversaciones, fijamos los límites y salvaguardas que usted apruebe y lo ponemos en producción con monitorización.',
    },
    fit: {
      title: 'Encaja bien si…',
      items: [
        'Su equipo de soporte o helpdesk responde cada semana a las mismas preguntas',
        'Los nuevos compañeros necesitan una guía paciente por herramientas y procesos',
        'Quiere que el asistente pase la conversación a una persona, no que finja saber',
        'Prefiere probar con preguntas reales a ver la demo de un proveedor',
      ],
    },
    cta: {
      title: '¿Qué preguntas debería quitarle un asistente a su equipo?',
      button: 'Siembre su idea',
    },
    jsonld_description:
      'Prototipo de asistente de IA o chatbot para atención al cliente, helpdesk interno o incorporación, basado en el contenido propio del cliente, construido en una noche.',
    keywords: {
      primary: 'chatbot de atención al cliente con IA',
      secondary: ['asistente virtual con IA', 'chatbot para helpdesk'],
    },
  },
  service_gamification: {
    seo: {
      title: 'Gamificación del aprendizaje y onboarding | Moonbloom Labs',
      description:
        'Mecánicas de juego para el aprendizaje, la incorporación, la participación y la educación financiera. Prototipo jugable para la mañana siguiente.',
    },
    og: {
      title: 'Gamificación, prototipada en una noche',
      description:
        'Convierta una lección, un plan de incorporación o una habilidad financiera en algo que la gente quiera terminar. Juegue al prototipo por la mañana.',
    },
    h1: 'Gamificación',
    intro:
      'Las mecánicas de juego, como los objetivos, el progreso, la retroalimentación o un reto amistoso, ayudan a que lo aprendido se quede y a que la incorporación parezca menos papeleo. Las prototipamos en una noche para que pueda jugar con la idea antes de invertir en ella.',
    problem: {
      title: 'El problema',
      body: 'La formación se pasa a golpe de clic, las listas de incorporación se quedan a medias y temas como las finanzas personales resultan abstractos. Añadir puntos e insignias por encima rara vez ayuda: la mecánica tiene que encajar con lo que la gente debe aprender o hacer de verdad.',
    },
    overnight: {
      title: 'Lo que entregamos en una noche',
      items: [
        'Un prototipo jugable de una mecánica principal (por ejemplo, un itinerario de aprendizaje por niveles, un cuestionario basado en escenarios o un reto de presupuesto)',
        'Las reglas por escrito: objetivos, puntuación, progresión y retroalimentación',
        'Pruebas de las reglas, para que la puntuación y la progresión se comporten como se diseñaron',
        'Una breve demo de una primera partida desde el punto de vista del jugador',
        'Una lista de decisiones pendientes: público, recompensas, dificultad, qué se considera un éxito',
      ],
    },
    after: {
      title: 'Después del prototipo',
      body: 'Ajustamos la mecánica según cómo la juega la gente en realidad, añadimos contenido y cuentas de usuario, la conectamos con su plataforma de formación o su app cuando haga falta y la desplegamos con una analítica que respeta sus normas de privacidad.',
    },
    fit: {
      title: 'Encaja bien si…',
      items: [
        'Tiene formaciones o procesos de incorporación que la gente termina solo porque es obligatorio',
        'Enseña una habilidad, como la educación financiera, que necesita práctica y no solo lectura',
        'Quiere probar una idea de juego con personas reales antes de encargar el desarrollo completo',
        'Le importan más los resultados del aprendizaje que los puntos y las insignias',
      ],
    },
    cta: {
      title: '¿Qué debería querer terminar la gente?',
      button: 'Siembre su idea',
    },
    jsonld_description:
      'Prototipo jugable de mecánicas de juego para el aprendizaje, la incorporación, la participación o la educación financiera, con reglas documentadas, construido en una noche.',
    keywords: {
      primary: 'gamificación del aprendizaje',
      secondary: ['gamificación onboarding', 'juego de educación financiera'],
    },
  },
  service_ai_integration: {
    seo: {
      title: 'Integración de IA en sus sistemas y API | Moonbloom Labs',
      description:
        'Modelos de lenguaje y agentes de IA conectados a sus sistemas, API y flujos de trabajo actuales. Prototipo de integración funcional por la mañana.',
    },
    og: {
      title: 'Integración de IA, prototipada en una noche',
      description:
        'Ponga a trabajar un modelo de lenguaje o un agente dentro de los sistemas que ya usa, con una persona que aprueba lo importante.',
    },
    h1: 'Integración de IA',
    intro:
      'La IA aporta valor cuando trabaja dentro de las herramientas que ya utiliza. Conectamos modelos de lenguaje y agentes a sus sistemas, API y flujos de trabajo, con una persona que aprueba los pasos importantes.',
    problem: {
      title: 'El problema',
      body: 'La gente copia texto entre una ventana de chat y los sistemas en los que trabaja. Los pilotos se quedan en un entorno de pruebas porque nadie los conectó a datos reales. Y no está claro qué pasos puede dar la IA por su cuenta y cuáles necesitan el visto bueno de una persona.',
    },
    overnight: {
      title: 'Lo que entregamos en una noche',
      items: [
        'Una integración funcional para un flujo de trabajo (por ejemplo, clasificar los correos entrantes, pasar datos de documentos a su sistema o redactar respuestas para su aprobación)',
        'Conexiones con sus API o con una copia de prueba de ellas',
        'Un paso de aprobación humana allí donde el flujo modifica datos o contacta con alguien',
        'Pruebas que cubren tanto las entradas esperadas como las complicadas',
        'Una lista de decisiones pendientes: modelo y proveedor, límites de coste, gestión de errores, quién aprueba qué',
      ],
    },
    after: {
      title: 'Después del prototipo',
      body: 'Reforzamos la integración: autenticación, límites de uso y de coste, registros, reintentos y monitorización. Después la desplegamos en su entorno mediante un pipeline de CI/CD, para que los cambios se revisen y sean reproducibles.',
    },
    fit: {
      title: 'Encaja bien si…',
      items: [
        'Su equipo pasa información de un sistema a otro a mano',
        'Tiene API o datos que un modelo de lenguaje podría aprovechar',
        'Quiere puntos claros de aprobación humana, no una caja negra',
        'Un piloto de IA se ha atascado y necesita tocar sistemas reales para demostrar su valor',
      ],
    },
    cta: {
      title: '¿En qué flujo de trabajo debería ayudarle primero la IA?',
      button: 'Siembre su idea',
    },
    jsonld_description:
      'Prototipo de integración de modelos de lenguaje y agentes de IA en los sistemas, API y flujos de trabajo existentes de un cliente, con pasos de aprobación humana, construido en una noche.',
    keywords: {
      primary: 'integración de IA',
      secondary: [
        'integración de LLM',
        'agentes de IA para empresas',
        'automatización de procesos con IA',
      ],
    },
  },
  service_devops_cloud: {
    seo: {
      title: 'DevOps y cloud: CI/CD, Kubernetes, AWS | Moonbloom Labs',
      description:
        'CI/CD, Kubernetes, AWS, infraestructura como código y observabilidad, para que un prototipo se convierta en un sistema en producción que pueda operar.',
    },
    og: {
      title: 'DevOps y cloud: del prototipo a producción',
      description:
        'Pipelines, infraestructura como código y monitorización que llevan un prototipo aprobado a producción, paso a paso y con su aprobación.',
    },
    h1: 'DevOps y cloud',
    intro:
      'Un prototipo demuestra una idea; la producción necesita más. Configuramos CI/CD, Kubernetes o servicios cloud gestionados en AWS, infraestructura como código y observabilidad, para que lo que usted aprueba funcione de forma fiable.',
    problem: {
      title: 'El problema',
      body: 'Los prototipos suelen vivir en un portátil o en un servidor configurado a mano. Nadie sabe bien cómo desplegarlos con seguridad, cómo volver a la versión anterior ni cómo detectar que algo falla antes de que lo note un usuario.',
    },
    overnight: {
      title: 'Lo que entregamos en una noche',
      items: [
        'Un pipeline de CI/CD que compila, prueba y despliega un servicio en un entorno de pruebas que usted proporciona',
        'Infraestructura como código para ese entorno (por ejemplo, con Terraform), revisada y reproducible',
        'Observabilidad básica: logs, comprobaciones de estado y un primer panel',
        'Un runbook por escrito: cómo desplegar, volver atrás y comprobar el estado',
        'Una lista de decisiones pendientes: entornos, accesos, límites de coste, qué necesita alertas',
      ],
    },
    after: {
      title: 'Después del prototipo',
      body: 'Ampliamos la configuración a preproducción y producción, añadimos gestión de secretos, copias de seguridad, alertas y bastionado, y entregamos documentación con la que su equipo pueda operar. Cada cambio en producción pasa por revisión y por su aprobación.',
    },
    fit: {
      title: 'Encaja bien si…',
      items: [
        'Tiene un prototipo o un producto que se despliega a mano',
        'Trabaja con AWS o Kubernetes, o tiene previsto hacerlo',
        'Quiere una infraestructura que pueda leer, revisar y volver a crear',
        'Necesita saber que algo ha fallado antes de que se lo digan sus usuarios',
      ],
    },
    cta: {
      title: '¿Quiere llevar un prototipo más allá?',
      button: 'Siembre su idea',
    },
    jsonld_description:
      'Ingeniería DevOps y cloud (CI/CD, Kubernetes, AWS, infraestructura como código, observabilidad) que lleva prototipos aprobados a producción.',
    keywords: {
      primary: 'servicios DevOps',
      secondary: ['CI/CD', 'consultoría Kubernetes', 'infraestructura como código AWS'],
    },
  },
  about: {
    seo: {
      title: 'Sobre nosotros: decide una persona | Moonbloom Labs',
      description:
        'Moonbloom Labs lo fundó un arquitecto de IA y cloud con más de 20 años en cloud, DevOps e IA/ML, cofundador de un laboratorio de IA en la STU.',
    },
    og: {
      title: 'Sobre Moonbloom Labs',
      description:
        'Por qué construimos prototipos en una noche, quién está detrás de cada proyecto y los principios con los que trabajamos.',
    },
    h1: 'Decide una persona. Construyen los agentes.',
    intro:
      'Moonbloom Labs es un estudio de IA que convierte una idea en un prototipo funcional para la mañana siguiente. Los agentes de IA construyen; una persona marca la dirección y aprueba cada paso.',
    founder: {
      title: 'Quién está detrás',
      name: 'Michal Maxian',
      role: 'Fundador, arquitecto de IA y cloud',
      body: [
        'Moonbloom Labs lo fundó Michal Maxian, arquitecto de IA y cloud con más de 20 años de experiencia en cloud, DevOps e IA/ML. Es cofundador de un laboratorio de IA en la Universidad Tecnológica Eslovaca de Bratislava (STU).',
        'Esperar semanas para saber si una idea funciona suele ser la parte más lenta de un proyecto. Hoy, los agentes de IA pueden escribir y probar mucho código en una sola noche. Moonbloom lo aprovecha y lo acompaña del criterio de un arquitecto: el alcance se acuerda con usted, el trabajo se planifica y se revisa, y cada decisión importante queda en manos de personas.',
      ],
      photo_alt: 'Retrato de Michal Maxian, fundador de Moonbloom Labs',
      photo: '[TODO: founder photo]',
    },
    principles: {
      title: 'Cómo trabajamos',
      items: [
        {
          key: 'human_decides',
          title: 'Decide una persona',
          body: 'Los agentes construyen; las personas deciden. Usted aprueba el alcance por la tarde y el resultado por la mañana, y nada sale a producción sin aprobación humana.',
        },
        {
          key: 'transparent',
          title: 'Transparencia',
          body: 'Ve lo que se ha construido, cómo se ha probado y qué queda pendiente. La lista matinal de decisiones muestra exactamente dónde hace falta su criterio.',
        },
        {
          key: 'secure_by_default',
          title: 'Seguridad desde el principio',
          body: 'Tratamos sus ideas y sus datos como confidenciales, usamos datos de muestra o anonimizados siempre que podemos y acordamos de antemano qué servicios pueden procesarlos.',
        },
        {
          key: 'honest_scope',
          title: 'Un alcance honesto',
          body: 'Una noche da para un prototipo, no para un producto terminado. Por la tarde le decimos qué cabe y, por la mañana, qué falta todavía.',
        },
      ],
    },
    cta: {
      title: 'Veamos qué aspecto tiene su idea mañana por la mañana.',
      button: 'Siembre su idea',
    },
    keywords: {
      primary: 'estudio de IA Eslovaquia',
      secondary: ['arquitecto de IA', 'prototipos con IA a medida'],
    },
  },
  contact: {
    seo: {
      title: 'Siembre su idea | Contacto Moonbloom Labs',
      description:
        'Describa su idea y le responderemos para acordar el alcance y una tarde para empezar. Trabajamos en inglés o en eslovaco.',
    },
    og: {
      title: 'Siembre su idea con Moonbloom Labs',
      description:
        'Cuéntenos qué le gustaría ver funcionando. Le responderemos para acordar un alcance que quepa en una noche.',
    },
    h1: 'Siembre su idea',
    intro:
      'Cuéntenos qué le gustaría ver funcionando. Bastan unas pocas frases. Le responderemos para acordar el alcance y una tarde para una breve llamada inicial; después, los agentes se ponen manos a la obra.',
    what_next: {
      title: 'Qué pasa después',
      items: [
        'Leemos su idea y le respondemos por correo electrónico.',
        'Acordamos el alcance y una tarde para una breve llamada o una descripción por escrito.',
        'Los agentes construyen durante la noche; usted revisa el prototipo por la mañana.',
      ],
    },
    form: {
      aria_label: 'Formulario de contacto',
      required_hint: 'Los campos marcados con * son obligatorios.',
      name: {
        label: 'Su nombre *',
        placeholder: 'Lucía García',
      },
      email: {
        label: 'Correo electrónico *',
        placeholder: 'lucia@empresa.es',
        help: 'Solo lo usaremos para responderle.',
      },
      company: {
        label: 'Empresa (opcional)',
        placeholder: 'Nombre de la empresa',
      },
      idea: {
        label: 'Su idea *',
        placeholder:
          'Por ejemplo: un chat que responda preguntas a partir de nuestros manuales internos, con enlaces a la fuente.',
        help: '¿Qué debería funcionar por la mañana y quién lo va a usar? Entre 10 y 5000 caracteres. Por favor, no incluya contraseñas ni datos confidenciales.',
      },
      language: {
        label: 'Idioma preferido *',
        option_en: 'Inglés',
        option_sk: 'Eslovaco',
      },
      honeypot: {
        label: 'Deje este campo vacío',
      },
      submit: 'Siembre su idea',
      submitting: 'Enviando…',
      privacy_note:
        'Solo usamos sus datos para responder a su mensaje. Consulte nuestra [política de privacidad](route:privacy).',
    },
    validation: {
      name_required: 'Por favor, díganos su nombre.',
      email_required: 'Indique su correo electrónico para que podamos responderle.',
      email_invalid: 'Esa dirección de correo no parece correcta. Por favor, revísela.',
      idea_required: 'Por favor, describa su idea en una o dos frases.',
      idea_too_short:
        '¿Podría añadir algo más de detalle? Al menos 10 caracteres; con una o dos frases basta.',
      idea_too_long:
        'Es más de lo que cabe en un mensaje. Por favor, acórtelo a 5000 caracteres como máximo.',
      name_too_long: 'Por favor, acorte su nombre a 100 caracteres como máximo.',
      language_required: 'Por favor, elija un idioma.',
      form_errors_summary: 'Por favor, revise los campos marcados.',
    },
    status: {
      success_title: 'Su idea ya está sembrada.',
      success_body:
        'Gracias. Le responderemos por correo electrónico para acordar el alcance y una tarde para empezar.',
      failure_title: 'Su mensaje no se ha enviado.',
      failure_body:
        'Algo ha fallado por nuestra parte. Inténtelo de nuevo o escríbanos a michal@maxian.sk.',
      rate_limited:
        'Ha enviado varios mensajes en poco tiempo. Espere unos minutos y vuelva a intentarlo.',
      error_invalid:
        'Algunos campos necesitan un segundo vistazo. Revíselos y vuelva a enviar el formulario.',
      error_captcha: 'No hemos podido confirmar la comprobación de seguridad. Inténtelo de nuevo.',
      error_delivery:
        'Su mensaje no se ha entregado. Inténtelo de nuevo o escríbanos a michal@maxian.sk.',
      error_method: 'Algo ha fallado en el formulario. Recargue la página e inténtelo de nuevo.',
      error_noscript_generic:
        'Su mensaje no se ha enviado. Revise los campos e inténtelo de nuevo, o escríbanos a michal@maxian.sk.',
    },
    turnstile_note: 'Este formulario usa Cloudflare Turnstile para evitar el spam.',
    talk: {
      line: '¿Prefiere hablar? [Reserve una llamada](mailto:michal@maxian.sk?subject=Moonbloom%20Labs%20%E2%80%93%20llamada) y díganos qué horario le viene bien.',
      mailto_subject: 'Moonbloom Labs – llamada',
      mailto_body: 'Hola, me gustaría hablar sobre una idea. Horarios que me vienen bien: ',
    },
    keywords: {
      primary: 'encargar prototipo con IA',
      secondary: ['contacto estudio de IA', 'solicitar prueba de concepto IA'],
    },
  },
  thank_you: {
    seo: {
      title: 'Gracias | Moonbloom Labs',
      description:
        'Su idea ya está sembrada. Le responderemos por correo electrónico para acordar el alcance y una tarde para empezar.',
    },
    og: {
      title: 'Su idea ya está sembrada',
      description:
        'Le responderemos por correo electrónico para acordar el alcance y una tarde para empezar.',
    },
    h1: 'Su idea ya está sembrada.',
    body: 'Gracias por escribirnos. Leeremos su idea y le responderemos por correo electrónico para acordar el alcance y una tarde para una breve llamada inicial.',
    next_title: 'Mientras espera',
    next_items: [
      'Piense en quién probará el prototipo por la mañana.',
      'Reúna algunos documentos, preguntas o datos de muestra con los que podamos construir. Mejor si están anonimizados.',
      'Anote la única pregunta a la que el prototipo tiene que responder.',
    ],
    links: {
      how: 'Vea cómo funciona',
      services: 'Ver los servicios',
      home: 'Volver al inicio',
    },
  },
  privacy: {
    seo: {
      title: 'Política de privacidad | Moonbloom Labs',
      description:
        'Cómo trata Moonbloom Labs los datos personales: qué recogemos con el formulario de contacto, para qué, cuánto tiempo y sus derechos según el RGPD.',
    },
    og: {
      title: 'Política de privacidad | Moonbloom Labs',
      description:
        'Privacidad en lenguaje claro: los datos del formulario solo para responderle, analítica sin cookies y sus derechos según el RGPD.',
    },
    h1: 'Política de privacidad',
    review_flag: '[TODO: legal review]',
    updated: 'Última actualización: [TODO: date of publication]',
    intro:
      'La mantenemos breve y clara. Recogemos el mínimo de datos personales posible y solo los usamos para los fines que se describen aquí.',
    sections: [
      {
        key: 'controller',
        title: 'Responsable del tratamiento',
        body: 'El responsable del tratamiento de sus datos personales es [TODO: company legal name], con número de identificación (IČO) [TODO: IČO] y domicilio social en [TODO: registered address], Eslovaquia. Para cualquier cuestión sobre privacidad puede escribirnos a michal@maxian.sk.',
      },
      {
        key: 'contact_form',
        title: 'Qué datos recogemos con el formulario de contacto',
        body: 'Cuando envía el formulario de contacto, recibimos su nombre, su dirección de correo electrónico, su empresa (si la indica), la descripción de su idea y su idioma preferido. Usamos esta información solo para responderle y hablar del trabajo que le interesa. No la usamos para boletines ni para marketing, y no la vendemos.',
      },
      {
        key: 'legal_basis',
        title: 'Base jurídica del tratamiento',
        body: 'Tratamos estos datos para aplicar, a petición suya, medidas precontractuales (art. 6.1.b) RGPD) y, en lo que respecta a la conservación de nuestra correspondencia, sobre la base de nuestro interés legítimo en poder dar seguimiento a la conversación (art. 6.1.f) RGPD).',
      },
      {
        key: 'storage',
        title: 'Dónde se almacenan y durante cuánto tiempo',
        body: 'Los mensajes del formulario llegan a nuestro buzón de correo profesional y se almacenan allí. [TODO: confirm email provider and where the mailbox is hosted] Conservamos los mensajes mientras dure nuestra conversación con usted y, después, durante [TODO: retention period], salvo que la ley nos obligue a conservarlos más tiempo o que usted nos pida suprimirlos antes.',
      },
      {
        key: 'hosting',
        title: 'Alojamiento del sitio web',
        body: 'Este sitio web está alojado por Websupport s.r.o. en Eslovaquia. Cuando lo visita, el servidor trata datos técnicos como su dirección IP y el tipo de navegador para servir las páginas y mantenerlas seguras. [TODO: confirm server log retention with Websupport]',
      },
      {
        key: 'analytics',
        title: 'Analítica sin cookies',
        body: 'Usamos Cloudflare Web Analytics para contar visitas y saber qué páginas se leen. No instala cookies ni usa el almacenamiento local de su navegador. Los datos los trata Cloudflare, Inc. como encargado del tratamiento por cuenta nuestra y solo nos llegan de forma agregada. [TODO: confirm Cloudflare data processing terms and any transfer outside the EU]',
      },
      {
        key: 'spam_protection',
        title: 'Protección contra el spam en el formulario',
        body: 'El formulario de contacto puede usar Cloudflare Turnstile para distinguir a las personas de los bots. Cuando interactúa con el formulario, Turnstile trata señales técnicas como su dirección IP y características de su navegador; lo presta Cloudflare, Inc. como encargado del tratamiento. Lo usamos sobre la base de nuestro interés legítimo en mantener el formulario libre de spam (art. 6.1.f) RGPD). [TODO: confirm Turnstile is enabled at launch, its data processing terms and that it sets no cookies]',
      },
      {
        key: 'cookies',
        title: 'Cookies',
        body: 'Este sitio web no usa cookies de analítica ni de publicidad. [TODO: confirm no other cookies are set, e.g. by the form or the language switcher]',
      },
      {
        key: 'recipients',
        title: 'Quién más ve sus datos',
        body: 'Solo los proveedores mencionados, que actúan por cuenta nuestra: nuestro proveedor de alojamiento, nuestro proveedor de correo electrónico y Cloudflare para la analítica y la protección contra el spam. No comunicamos sus datos a nadie más, salvo obligación legal.',
      },
      {
        key: 'rights',
        title: 'Sus derechos',
        body: 'Tiene derecho a acceder a sus datos, a rectificarlos o suprimirlos, a limitar su tratamiento u oponerse a él y a recibirlos en un formato portable. Escríbanos a michal@maxian.sk y le responderemos en el plazo de un mes. También tiene derecho a presentar una reclamación ante una autoridad de control de protección de datos, en particular la del Estado miembro de la UE en el que resida o trabaje. Nuestra autoridad de control principal es la Oficina de Protección de Datos Personales de la República Eslovaca (Úrad na ochranu osobných údajov SR, ÚOOÚ SR, dataprotection.gov.sk). En España, la autoridad competente es la Agencia Española de Protección de Datos (AEPD, aepd.es).',
      },
      {
        key: 'changes',
        title: 'Cambios en esta política',
        body: 'Si cambiamos la forma en que tratamos los datos personales, actualizaremos esta página y la fecha que figura al principio.',
      },
    ],
  },
  imprint: {
    seo: {
      title: 'Aviso legal | Moonbloom Labs',
      description:
        'Datos identificativos del titular de moonbloomlabs.com: denominación social, número de identificación, domicilio social y contacto.',
    },
    og: {
      title: 'Aviso legal | Moonbloom Labs',
      description: 'Datos identificativos del titular de moonbloomlabs.com.',
    },
    h1: 'Aviso legal',
    review_flag: '[TODO: legal review]',
    fields: {
      operator_label: 'Titular',
      operator_value: '[TODO: company legal name]',
      ico_label: 'Número de identificación (IČO)',
      ico_value: '[TODO: IČO]',
      dic_label: 'Número de identificación fiscal (DIČ)',
      dic_value: '[TODO: DIČ]',
      vat_label: 'NIF-IVA (IČ DPH)',
      vat_value: "[TODO: IČ DPH or 'not a VAT payer']",
      address_label: 'Domicilio social',
      address_value: '[TODO: registered address]',
      register_label: 'Datos registrales',
      register_value:
        '[TODO: register entry, e.g. Business Register of the District Court ..., Section ..., Insert No. ...]',
      contact_label: 'Correo electrónico',
      contact_value: 'michal@maxian.sk',
      hosting_label: 'Alojamiento web',
      hosting_value: 'Websupport s.r.o., Eslovaquia',
      representative_label: '',
      representative_value: '',
      responsible_label: '',
      responsible_value: '',
    },
    trade_name_note:
      'Moonbloom Labs es el nombre comercial que utiliza [TODO: company legal name].',
  },
  not_found: {
    seo: {
      title: 'Página no encontrada | Moonbloom Labs',
      description: 'Esta página aún no ha florecido. Vuelva al inicio o siembre su idea.',
    },
    og: {
      title: 'Página no encontrada | Moonbloom Labs',
      description: 'Esta página aún no ha florecido.',
    },
    h1: 'Esta idea aún no ha florecido.',
    body: 'La página que busca no está aquí. Quizá se ha movido, o quizá todavía es una semilla. En cualquier caso, estos caminos están en plena floración:',
    links: {
      home: 'Volver al inicio',
      services: 'Nuestros servicios',
      contact: 'Siembre su idea',
    },
    code_label: 'Error 404',
  },
  jsonld: {
    organization: {
      name: 'Moonbloom Labs',
      url: 'https://moonbloomlabs.com/es/',
      slogan: 'Las ideas florecen de la noche a la mañana.',
      description:
        'Moonbloom Labs es un estudio de IA que convierte una idea en un prototipo funcional para la mañana siguiente. El cliente describe la idea por la tarde, los agentes de IA la construyen y la prueban durante la noche y, por la mañana, el cliente revisa un prototipo funcional, sus pruebas y una lista de decisiones pendientes. Decide una persona; construyen los agentes.',
      founder_name: 'Michal Maxian',
      area_served: '[TODO: confirm area served, e.g. Slovakia, European Union]',
      email: 'michal@maxian.sk',
      legal_name: '[TODO: company legal name]',
    },
    services: {
      rag_ai_search:
        'Prototipo de chat con generación aumentada por recuperación (RAG) sobre los documentos privados de un cliente, con respuestas que citan sus fuentes, construido en una noche.',
      knowledge_management:
        'Prototipo de base de conocimiento con buscador y mantenida al día, que unifica los documentos, wikis y conversaciones de chat de un cliente, construido en una noche.',
      chatbots_ai_assistants:
        'Prototipo de asistente de IA o chatbot para atención al cliente, helpdesk interno o incorporación, basado en el contenido propio del cliente, construido en una noche.',
      gamification:
        'Prototipo jugable de mecánicas de juego para el aprendizaje, la incorporación, la participación o la educación financiera, con reglas documentadas, construido en una noche.',
      ai_integration:
        'Prototipo de integración de modelos de lenguaje y agentes de IA en los sistemas, API y flujos de trabajo existentes de un cliente, con pasos de aprobación humana, construido en una noche.',
      devops_cloud:
        'Ingeniería DevOps y cloud (CI/CD, Kubernetes, AWS, infraestructura como código, observabilidad) que lleva prototipos aprobados a producción.',
    },
  },
};
