// Central, typed route map. Pure data (no Astro imports) so astro.config.ts can use it too.
export const LOCALES = ['en', 'cs', 'sk', 'de', 'es'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_META: Record<
  Locale,
  { name: string; ogLocale: string; short: string; formatLang: string }
> = {
  en: { name: 'English', ogLocale: 'en_US', short: 'EN', formatLang: 'en' },
  cs: { name: 'Čeština', ogLocale: 'cs_CZ', short: 'CS', formatLang: 'cs' },
  sk: { name: 'Slovenčina', ogLocale: 'sk_SK', short: 'SK', formatLang: 'sk' },
  de: { name: 'Deutsch', ogLocale: 'de_DE', short: 'DE', formatLang: 'de' },
  es: { name: 'Español', ogLocale: 'es_ES', short: 'ES', formatLang: 'es' },
};

export const PAGE_KEYS = [
  'home',
  'services',
  'about',
  'contact',
  'thanks',
  'privacy',
  'imprint',
] as const;
export type PageKey = (typeof PAGE_KEYS)[number];

export const PAGE_PATHS: Record<PageKey, Record<Locale, string>> = {
  home: { en: '/', cs: '/cs/', sk: '/sk/', de: '/de/', es: '/es/' },
  services: {
    en: '/services/',
    cs: '/cs/sluzby/',
    sk: '/sk/sluzby/',
    de: '/de/leistungen/',
    es: '/es/servicios/',
  },
  about: {
    en: '/about/',
    cs: '/cs/o-nas/',
    sk: '/sk/o-nas/',
    de: '/de/ueber-uns/',
    es: '/es/sobre-nosotros/',
  },
  contact: {
    en: '/contact/',
    cs: '/cs/kontakt/',
    sk: '/sk/kontakt/',
    de: '/de/kontakt/',
    es: '/es/contacto/',
  },
  thanks: {
    en: '/thanks/',
    cs: '/cs/dekujeme/',
    sk: '/sk/dakujeme/',
    de: '/de/danke/',
    es: '/es/gracias/',
  },
  privacy: {
    en: '/privacy/',
    cs: '/cs/ochrana-osobnich-udaju/',
    sk: '/sk/ochrana-osobnych-udajov/',
    de: '/de/datenschutz/',
    es: '/es/privacidad/',
  },
  imprint: {
    en: '/imprint/',
    cs: '/cs/provozovatel/',
    sk: '/sk/prevadzkovatel/',
    de: '/de/impressum/',
    es: '/es/aviso-legal/',
  },
};

/** Service id (dictionary key suffix) with localized, ASCII-only slugs. */
export const SERVICE_KEYS = [
  'rag_ai_search',
  'knowledge_management',
  'chatbots_ai_assistants',
  'gamification',
  'ai_integration',
  'devops_cloud',
] as const;
export type ServiceKey = (typeof SERVICE_KEYS)[number];

export const SERVICE_SLUGS: Record<ServiceKey, Record<Locale, string>> = {
  rag_ai_search: {
    en: 'rag-ai-search',
    cs: 'rag-ai-vyhledavani',
    sk: 'rag-ai-vyhladavanie',
    de: 'rag-ki-suche',
    es: 'rag-busqueda-ia',
  },
  knowledge_management: {
    en: 'knowledge-management',
    cs: 'sprava-znalosti',
    sk: 'sprava-znalosti',
    de: 'wissensmanagement',
    es: 'gestion-del-conocimiento',
  },
  chatbots_ai_assistants: {
    en: 'chatbots-ai-assistants',
    cs: 'chatboty-ai-asistenti',
    sk: 'chatboty-ai-asistenti',
    de: 'chatbots-ki-assistenten',
    es: 'chatbots-asistentes-ia',
  },
  gamification: {
    en: 'gamification',
    cs: 'gamifikace',
    sk: 'gamifikacia',
    de: 'gamification',
    es: 'gamificacion',
  },
  ai_integration: {
    en: 'ai-integration',
    cs: 'integrace-ai',
    sk: 'ai-integracia',
    de: 'ki-integration',
    es: 'integracion-ia',
  },
  devops_cloud: {
    en: 'devops-cloud',
    cs: 'devops-cloud',
    sk: 'devops-cloud',
    de: 'devops-cloud',
    es: 'devops-cloud',
  },
};

export function pagePath(locale: Locale, key: PageKey): string {
  return PAGE_PATHS[key][locale];
}
export function servicePath(locale: Locale, key: ServiceKey): string {
  return `${PAGE_PATHS.services[locale]}${SERVICE_SLUGS[key][locale]}/`;
}

/** What a page is, independent of language. Used for alternates and the language switcher. */
export type PageRef =
  { kind: 'page'; key: PageKey } | { kind: 'service'; key: ServiceKey } | { kind: 'notFound' };

export function refPath(locale: Locale, ref: PageRef): string {
  if (ref.kind === 'page') return pagePath(locale, ref.key);
  if (ref.kind === 'service') return servicePath(locale, ref.key);
  return '/404.html';
}

/** Every concrete page of the site, for getStaticPaths, sitemap and OG generation. */
export function allPages(
  locales: readonly Locale[],
): { locale: Locale; ref: PageRef; path: string }[] {
  const out: { locale: Locale; ref: PageRef; path: string }[] = [];
  for (const locale of locales) {
    for (const key of PAGE_KEYS) {
      out.push({ locale, ref: { kind: 'page', key }, path: pagePath(locale, key) });
    }
    for (const key of SERVICE_KEYS) {
      out.push({ locale, ref: { kind: 'service', key }, path: servicePath(locale, key) });
    }
  }
  return out;
}

export const NOINDEX_PAGES: readonly PageKey[] = ['thanks'];
