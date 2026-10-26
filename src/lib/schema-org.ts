import { SITE_URL, SITE_NAME } from '../config/site';
import type { Dictionary } from '../i18n/dictionary';
import { LOCALE_META, type Locale } from '../i18n/routes';
import { ACTIVE_LOCALES } from '../i18n/active';
import { plain, hasTodo } from '../i18n';

export const ORG_ID = `${SITE_URL}/#org`;
type Json = Record<string, unknown>;

const clean = (o: Json): Json =>
  Object.fromEntries(
    Object.entries(o).filter(([, v]) => v !== undefined && !(typeof v === 'string' && hasTodo(v))),
  );

export function organization(d: Dictionary): Json {
  const o = d.jsonld.organization;
  return clean({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: o.name,
    url: o.url,
    logo: `${SITE_URL}/icon-512.png`,
    slogan: o.slogan,
    description: o.description,
    legalName: o.legal_name,
    email: o.email,
    areaServed: o.area_served,
    founder: { '@type': 'Person', name: o.founder_name },
    knowsLanguage: ACTIVE_LOCALES.map((l) => LOCALE_META[l].formatLang),
  });
}

export function website(locale: Locale): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: SITE_NAME,
    inLanguage: LOCALE_META[locale].formatLang,
    publisher: { '@id': ORG_ID },
  };
}

export function faqPage(items: { q: string; a: string }[], locale: Locale): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: LOCALE_META[locale].formatLang,
    mainEntity: items
      .filter((i) => !hasTodo(i.a))
      .map((i) => ({
        '@type': 'Question',
        name: i.q,
        acceptedAnswer: { '@type': 'Answer', text: plain(i.a) },
      })),
  };
}

export function service(opts: {
  name: string;
  description: string;
  url: string;
  locale: Locale;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    description: opts.description,
    url: opts.url,
    serviceType: opts.name,
    inLanguage: LOCALE_META[opts.locale].formatLang,
    provider: { '@id': ORG_ID },
  };
}

export function breadcrumbs(items: { name: string; url: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

export function webPage(
  type: 'ContactPage' | 'AboutPage' | 'WebPage',
  name: string,
  url: string,
  locale: Locale,
): Json {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    name,
    url,
    inLanguage: LOCALE_META[locale].formatLang,
    isPartOf: { '@id': `${SITE_URL}/#website` },
  };
}
