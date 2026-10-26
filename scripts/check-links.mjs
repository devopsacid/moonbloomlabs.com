// Crawls dist/**/*.html and fails when an internal href/src/action points to a missing file or a
// missing #fragment. Run after `npm run build`:  npm run linkcheck
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, dirname, posix } from 'node:path';
import { fileURLToPath } from 'node:url';

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const htmlFiles = [];
(function walk(d) {
  for (const n of readdirSync(d)) {
    const p = join(d, n);
    if (statSync(p).isDirectory()) walk(p);
    else if (n.endsWith('.html')) htmlFiles.push(p);
  }
})(dist);

const urlOf = (file) => {
  let u = '/' + file.slice(dist.length + 1).replace(/\\/g, '/');
  u = u.replace(/index\.html$/, '');
  return u;
};
const ids = new Map();
const pages = new Map();
for (const f of htmlFiles) {
  const html = readFileSync(f, 'utf8');
  pages.set(urlOf(f), html);
  ids.set(urlOf(f), new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1])));
}

const errors = [];
let checked = 0;
for (const [url, html] of pages) {
  for (const m of html.matchAll(/\s(?:href|src|action)="([^"]*)"/g)) {
    const raw = m[1].replace(/&amp;/g, '&');
    if (!raw || /^(https?:|mailto:|tel:|data:|\/\/)/.test(raw)) continue;
    let [path, hash] = raw.split('#');
    path = path.split('?')[0];
    const target =
      path === '' ? url : path.startsWith('/') ? path : posix.join(posix.dirname(url + 'x'), path);
    checked++;
    const asFile = join(dist, target);
    const exists =
      pages.has(target) ||
      pages.has(target.endsWith('/') ? target : target + '/') ||
      (existsSync(asFile) && statSync(asFile).isFile());
    if (!exists) {
      errors.push(`${url}: missing target ${raw}`);
      continue;
    }
    if (hash) {
      const key = pages.has(target) ? target : target + '/';
      const set = ids.get(key);
      if (set && !set.has(hash)) errors.push(`${url}: missing fragment ${raw}`);
    }
  }
}
console.log(`linkcheck: ${htmlFiles.length} pages, ${checked} internal references`);
if (errors.length) {
  console.error([...new Set(errors)].join('\n'));
  process.exit(1);
}
console.log('linkcheck: ok');
