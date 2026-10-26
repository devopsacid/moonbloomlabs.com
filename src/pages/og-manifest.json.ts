// Build-time manifest consumed by scripts/postbuild.mjs to render the OG PNGs; deleted afterwards.
import { allPages } from '../i18n/routes';
import { ACTIVE_LOCALES } from '../i18n/active';
import { getDictionary, ogImagePath } from '../i18n';
import type { Dictionary } from '../i18n/dictionary';

const meta = (d: Dictionary, ref: ReturnType<typeof allPages>[number]['ref']) => {
  if (ref.kind === 'service') return d[`service_${ref.key}` as const].og;
  switch (ref.kind === 'page' ? ref.key : 'home') {
    case 'services':
      return d.services_index.og;
    case 'about':
      return d.about.og;
    case 'contact':
      return d.contact.og;
    case 'privacy':
      return d.privacy.og;
    case 'imprint':
      return d.imprint.og;
    default:
      return d.home.og;
  }
};

export function GET() {
  const items = allPages(ACTIVE_LOCALES)
    .filter((p) => !(p.ref.kind === 'page' && p.ref.key === 'thanks'))
    .map(({ locale, ref }) => {
      const d = getDictionary(locale);
      const og = meta(d, ref);
      return {
        file: ogImagePath(locale, ref),
        locale,
        title: og.title.replace(/\s*\|\s*Moonbloom Labs\s*$/, ''),
        description: og.description,
      };
    });
  return new Response(JSON.stringify(items), { headers: { 'Content-Type': 'application/json' } });
}
