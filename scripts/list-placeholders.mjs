// Lists every "[TODO: ...]" placeholder under src/, grouped by text (with locales/files).
//   npm run placeholders            print the list
//   TODO_STRICT=1 npm run placeholders   exit 1 when any remain (launch gate)
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const found = new Map();
function walk(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p);
    else if (p.endsWith('src/i18n/index.ts')) continue;
    else if (/\.(ts|astro|md|json|css)$/.test(name)) {
      readFileSync(p, 'utf8')
        .split('\n')
        .forEach((line, i) => {
          for (const m of line.matchAll(/\[TODO:[^\]]*\]/g)) {
            const e = found.get(m[0]) ?? { n: 0, where: new Set() };
            e.n++;
            e.where.add(`${relative(root, p)}:${i + 1}`);
            found.set(m[0], e);
          }
        });
    }
  }
}
walk(join(root, 'src'));
const rows = [...found.entries()].sort((a, b) => a[0].localeCompare(b[0]));
for (const [text, e] of rows) {
  console.log(`${text}  x${e.n}`);
  for (const w of [...e.where].slice(0, 6)) console.log(`    ${w}`);
  if (e.where.size > 6) console.log(`    ... ${e.where.size - 6} more`);
}
const total = rows.reduce((s, [, e]) => s + e.n, 0);
console.log(`\n${rows.length} distinct placeholders, ${total} occurrences`);
if (process.env.TODO_STRICT === '1' && total) process.exit(1);
