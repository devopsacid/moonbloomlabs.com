import type { Dictionary } from './dictionary';
import { en } from './en';
import { cs } from './cs';
import { sk } from './sk';
import { de } from './de';
import { es } from './es';
import { ACTIVE_LOCALES } from './active';
import { BOOKING_EMAIL } from '../config/site';
import {
  DEFAULT_LOCALE,
  PAGE_KEYS,
  PAGE_PATHS,
  refPath,
  type Locale,
  type PageKey,
  type PageRef,
} from './routes';

const dictionaries: Record<Locale, Dictionary> = { en, cs, sk, de, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export interface Alternate {
  locale: Locale;
  path: string;
}
/** All translations of a page that are built, default locale first. */
export function alternatesFor(ref: PageRef): Alternate[] {
  const order = [DEFAULT_LOCALE, ...ACTIVE_LOCALES.filter((l) => l !== DEFAULT_LOCALE)];
  return order.map((locale) => ({ locale, path: refPath(locale, ref) }));
}

const escapeHtml = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Internal links in copy are written as `(route:<pageKey>)` and resolved through the route map, so a
 * slug change can never leave a dead link. Any other internal href (starting with "/") is a build error.
 */
function resolveHref(locale: Locale, href: string): string {
  if (href.startsWith('route:')) {
    const key = href.slice('route:'.length);
    if ((PAGE_KEYS as readonly string[]).includes(key)) return PAGE_PATHS[key as PageKey][locale];
    throw new Error(`Unknown route token "${href}" in copy`);
  }
  if (href.startsWith('/')) {
    throw new Error(`Hard-coded internal link "${href}" in copy: use (route:<pageKey>) instead`);
  }
  return href;
}

export function mailtoHref(dict: Dictionary): string {
  const q = new URLSearchParams({
    subject: dict.contact.talk.mailto_subject,
    body: dict.contact.talk.mailto_body,
  });
  return `mailto:${BOOKING_EMAIL}?${q.toString().replace(/\+/g, '%20')}`;
}

/**
 * Renders deck strings to safe inline HTML: [text](url) links (internal EN paths are localized,
 * mailto: becomes the booking mailto) and visible [TODO: ...] placeholders.
 */
export function rich(
  text: string,
  locale: Locale,
  vars: Record<string, string | number> = {},
): string {
  const dict = getDictionary(locale);
  let out = escapeHtml(text);
  out = out.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
  const links: string[] = [];
  out = out.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label: string, href: string) => {
    const h = href.startsWith('mailto:') ? escapeHtml(mailtoHref(dict)) : resolveHref(locale, href);
    links.push(`<a href="${h}">${label}</a>`);
    return `\uE000${links.length - 1}\uE000`;
  });
  out = out.replace(
    /(^|[\s(>])([\w.+-]+@[\w-]+(?:\.[\w-]+)+)/g,
    (_m, pre: string, email: string) => `${pre}<a href="mailto:${email}">${email}</a>`,
  );
  out = out.replace(/\[TODO:[^\]]*\]/g, (m) => `<span class="todo">${m}</span>`);
  return out.replace(/\uE000(\d+)\uE000/g, (_m, i: string) => links[Number(i)] ?? '');
}

/** Same as rich() but returns plain text (for attributes, titles, JSON-LD). */
export function plain(text: string): string {
  return text.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
}
export const hasTodo = (text: string): boolean => text.includes('[TODO');

/** OG image file (generated at build, see scripts/postbuild.mjs) for a page in a locale. */
export function ogImagePath(locale: Locale, ref: PageRef): string {
  const id =
    ref.kind === 'page' && ref.key !== 'thanks'
      ? ref.key
      : ref.kind === 'service'
        ? ref.key
        : 'home';
  return `/og/${locale}-${id}.png`;
}
