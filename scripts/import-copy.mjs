// Imports docs/plan/copy*.md (YAML blocks under "### EN" / "### SK" / "#### EN" ...) into typed
// dictionaries: src/i18n/<locale>.ts. Re-runnable. After the first import the TypeScript files can
// be edited directly; re-run only to pull in a fresh copy deck (it overwrites them).
//   node scripts/import-copy.mjs
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { parse } from 'yaml';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const LOCALES = ['en', 'cs', 'sk', 'de', 'es'];
// Master deck holds EN + SK. CS/DE/ES decks (same keys) are optional.
const sources = {
  en: 'docs/plan/copy.md',
  sk: 'docs/plan/copy.md',
  cs: 'docs/plan/copy-cs.md',
  de: 'docs/plan/copy-de.md',
  es: 'docs/plan/copy-es.md',
};
// Owner decisions that override the deck (2026-10-22).
const overrides = {
  en: { 'contact.talk.mailto_subject': 'Moonbloom Labs – call' },
  sk: { 'contact.talk.mailto_subject': 'Moonbloom Labs – hovor' },
};

function extract(md, lang) {
  const out = {};
  let cur = null;
  let inYaml = false;
  let buf = [];
  for (const line of md.split('\n')) {
    if (!inYaml) {
      const h = /^(#{1,4})\s+(.*?)\s*$/.exec(line);
      if (h) {
        const t = h[2].trim().toLowerCase();
        cur =
          t === lang ? lang : t === 'en' || t === 'sk' || /^(cs|de|es)$/.test(t) ? 'other' : null;
        continue;
      }
      if (cur === lang && /^```ya?ml\s*$/.test(line)) {
        inYaml = true;
        buf = [];
      }
    } else if (/^```\s*$/.test(line)) {
      inYaml = false;
      const doc = parse(buf.join('\n'));
      for (const [k, v] of Object.entries(doc ?? {})) out[k] = v;
    } else buf.push(line);
  }
  return out;
}

function setPath(obj, path, value) {
  const parts = path.split('.');
  let o = obj;
  for (const p of parts.slice(0, -1)) o = o[p];
  o[parts.at(-1)] = value;
}

// Owner decision: the public contact address is the booking address.
const CONTACT_EMAIL = 'michal@maxian.sk';
// Optional imprint fields (DE needs them, others stay empty so they are not rendered).
const IMPRINT_EXTRA = {
  de: {
    representative_label: 'Vertretungsberechtigt',
    representative_value: '[TODO: company legal name]',
    responsible_label: 'Verantwortlich i.S.d. § 18 Abs. 2 MStV',
    responsible_value: '[TODO: company legal name]',
  },
};
const paths = (o, pre = '') =>
  Object.entries(o).flatMap(([k, v]) =>
    v && typeof v === 'object' && !Array.isArray(v) ? paths(v, `${pre}${k}.`) : [`${pre}${k}`],
  );
const ready = [];
let enDict;
for (const loc of LOCALES) {
  const file = join(root, sources[loc]);
  let dict;
  let isReady = existsSync(file);
  if (isReady) dict = extract(readFileSync(file, 'utf8'), loc);
  if (!isReady || !Object.keys(dict).length) {
    isReady = false;
    dict = null;
  }
  if (loc === 'en') enDict = dict;
  if (isReady) ready.push(loc);
  const body = JSON.stringify(dict ?? enDict, null, 2);
  const banner = isReady
    ? `// Imported from ${sources[loc]} by scripts/import-copy.mjs.\n`
    : `// NOT READY: ${sources[loc]} does not exist yet, so this file holds the English text as a stand-in.\n// The locale is excluded from the build until scripts/import-copy.mjs finds the deck.\n`;
  const head =
    loc === 'en'
      ? `${banner}export const en = ${body};\n`
      : `${banner}import type { Dictionary } from './dictionary';\n\nexport const ${loc}: Dictionary = ${body};\n`;
  const text = head;
  const dictObj = JSON.parse(body);
  if (isReady && overrides[loc])
    for (const [p, v] of Object.entries(overrides[loc])) setPath(dictObj, p, v);
  // Internal links resolve through the route map (see rich() in src/i18n/index.ts), never via copy paths.
  if (isReady && dictObj.contact?.form?.privacy_note)
    dictObj.contact.form.privacy_note = dictObj.contact.form.privacy_note.replace(
      /\]\(\/[^)]*\)/,
      '](route:privacy)',
    );
  // The hero art is decorative (aria-hidden); the deck's alt-text placeholder is not used.
  if (isReady && dictObj.home?.hero) dictObj.home.hero.image_alt = '';
  if (isReady && dictObj.imprint?.fields) {
    const f = dictObj.imprint.fields;
    for (const k of [
      'representative_label',
      'representative_value',
      'responsible_label',
      'responsible_value',
    ])
      f[k] = IMPRINT_EXTRA[loc]?.[k] ?? f[k] ?? '';
  }
  if (isReady && enDict && loc !== 'en') {
    const a = new Set(paths(enDict));
    const b = new Set(paths(dictObj));
    const missing = [...a].filter((x) => !b.has(x) && !x.startsWith('imprint.fields.re'));
    const extra = [...b].filter((x) => !a.has(x) && !x.startsWith('imprint.fields.re'));
    if (missing.length || extra.length)
      console.log(
        `  ${loc} key mismatch: missing=${JSON.stringify(missing)} extra=${JSON.stringify(extra)}`,
      );
  }
  const finalBody = JSON.stringify(dictObj, null, 2).replaceAll(
    '[TODO: contact email]',
    CONTACT_EMAIL,
  );
  writeFileSync(join(root, `src/i18n/${loc}.ts`), text.replace(body, finalBody));
  console.log(`${loc}: ${isReady ? 'imported' : 'stand-in (deck missing)'}`);
}
writeFileSync(
  join(root, 'src/i18n/ready.ts'),
  `// Written by scripts/import-copy.mjs: locales whose copy deck exists.\nexport const READY_LOCALES = ${JSON.stringify(ready)} as const;\n`,
);
