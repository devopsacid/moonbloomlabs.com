import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { SERVICE_KEYS, PAGE_KEYS, allPages, type Locale } from './src/i18n/routes';
import { ACTIVE_LOCALES } from './src/i18n/active';

const SITE = 'https://moonbloomlabs.com';
const pages = allPages(ACTIVE_LOCALES);
// path -> every translation of the same page, for hreflang alternates in the sitemap.
const byPath = new Map(pages.map((p) => [p.path, p]));
const sibling = (ref: (typeof pages)[number]['ref']) =>
  pages.filter((p) => JSON.stringify(p.ref) === JSON.stringify(ref));
void SERVICE_KEYS;
void PAGE_KEYS;

const HREFLANG: Record<Locale, string> = { en: 'en', cs: 'cs', sk: 'sk', de: 'de', es: 'es' };

export default defineConfig({
  site: SITE,
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory', inlineStylesheets: 'always' },
  compressHTML: true,
  devToolbar: { enabled: false },
  i18n: {
    defaultLocale: 'en',
    locales: [...ACTIVE_LOCALES],
    routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Thank-you pages and the 404 are noindex; keep them out.
      filter: (url) => {
        const path = new URL(url).pathname;
        const p = byPath.get(path);
        return !!p && !(p.ref.kind === 'page' && p.ref.key === 'thanks');
      },
      // Custom hreflang alternates: localized slugs make the built-in i18n option unusable.
      serialize: (item) => {
        const p = byPath.get(new URL(item.url).pathname);
        if (!p) return item;
        const alts = sibling(p.ref);
        const links = alts.map((a) => ({ url: `${SITE}${a.path}`, lang: HREFLANG[a.locale] }));
        const en = alts.find((a) => a.locale === 'en');
        if (en) links.push({ url: `${SITE}${en.path}`, lang: 'x-default' });
        return { ...item, links };
      },
    }),
  ],
  vite: {
    // @ts-expect-error: @tailwindcss/vite resolves a second copy of vite's types
    plugins: [tailwindcss()],
    // Never inline hoisted scripts: the site CSP forbids inline scripts.
    build: { assetsInlineLimit: 0 },
  },
});
