// After `astro build`: render one 1200x630 OG PNG per page and locale from SVG (resvg), then
// remove the temporary manifest. Fonts: static TTF instances in scripts/og-fonts.
import { readFileSync, writeFileSync, mkdirSync, rmSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const manifestPath = join(dist, 'og-manifest.json');
if (!existsSync(manifestPath))
  throw new Error('dist/og-manifest.json missing: run astro build first');
const items = JSON.parse(readFileSync(manifestPath, 'utf8'));
const fontFiles = [
  join(root, 'scripts/og-fonts/Newsreader-Regular.ttf'),
  join(root, 'scripts/og-fonts/Atkinson-SemiBold.ttf'),
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/** Greedy word wrap by an average glyph width (serif ~0.47em). */
function wrap(text, fontSize, maxWidth, avg = 0.47) {
  const perLine = Math.floor(maxWidth / (fontSize * avg));
  const lines = [];
  let line = '';
  for (const w of text.split(/\s+/)) {
    if ((line + ' ' + w).trim().length > perLine && line) {
      lines.push(line);
      line = w;
    } else line = (line + ' ' + w).trim();
  }
  if (line) lines.push(line);
  return lines;
}

function svgFor({ title, description }) {
  let size = 76;
  let lines = wrap(title, size, 640);
  while (lines.length > 3 && size > 52) {
    size -= 6;
    lines = wrap(title, size, 640);
  }
  const lh = Math.round(size * 1.08);
  const y0 = 150 + size;
  const tspans = lines
    .map(
      (l, i) =>
        `<text x="80" y="${y0 + i * lh}" font-family="Newsreader" font-size="${size}" fill="#EEF0FA">${esc(l)}</text>`,
    )
    .join('');
  const descLines = wrap(description, 28, 640, 0.52).slice(0, 3);
  const dy = y0 + (lines.length - 1) * lh + 56;
  const desc = descLines
    .map(
      (l, i) =>
        `<text x="80" y="${dy + i * 36}" font-family="Atkinson Hyperlegible Next" font-weight="600" font-size="26" fill="#B9C0E4">${esc(l)}</text>`,
    )
    .join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs><linearGradient id="h" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#0F1433"/><stop offset="0.38" stop-color="#5B4A86"/><stop offset="0.66" stop-color="#C98BA0"/><stop offset="0.88" stop-color="#F6D5C2"/><stop offset="1" stop-color="#FDF3EC"/>
  </linearGradient></defs>
  <rect width="1200" height="630" fill="#0F1433"/>
  <rect y="420" width="1200" height="210" fill="url(#h)"/>
  <path d="M0 540C220 500 420 560 660 536S1040 490 1200 520V630H0Z" fill="#FDF3EC" opacity="0.5"/>
  <path d="M0 580C260 548 520 600 780 580S1100 556 1200 572V630H0Z" fill="#FDF3EC"/>
  <circle cx="1030" cy="130" r="96" fill="#EEF0FA" opacity="0.06"/>
  <path d="M1006 66a80 80 0 1 0 76 132 68 68 0 0 1-76-132Z" fill="#EEF0FA"/>
  <circle cx="860" cy="70" r="5" fill="#B9C0E4"/><circle cx="930" cy="230" r="4" fill="#B9C0E4"/><circle cx="780" cy="190" r="4" fill="#B9C0E4"/>
  <g transform="translate(980 560)">
    <path d="M0 0C4-40-4-70 0-110" stroke="#5F8A72" stroke-width="7" fill="none" stroke-linecap="round"/>
    <path d="M-2 -40c-36 0-56-14-62-40 36 0 56 14 62 40Z" fill="#5F8A72"/>
    <g transform="translate(0 -110)">
      <g id="p"><path d="M0 0C-18-28-16-70 0-100C16-70 18-28 0 0Z" fill="#FBE9EF" stroke="#8C2E55" stroke-opacity="0.6" stroke-width="2"/></g>
      <path d="M0 0C-18-28-16-70 0-100C16-70 18-28 0 0Z" fill="#FBE9EF" stroke="#8C2E55" stroke-opacity="0.6" stroke-width="2" transform="rotate(-50)"/>
      <path d="M0 0C-18-28-16-70 0-100C16-70 18-28 0 0Z" fill="#F2BFD0" stroke="#8C2E55" stroke-opacity="0.6" stroke-width="2" transform="rotate(50)"/>
      <circle r="9" fill="#F5B98A"/>
    </g>
  </g>
  ${tspans}
  ${desc}
  <text x="80" y="570" font-family="Atkinson Hyperlegible Next" font-weight="600" font-size="28" fill="#0F1433">Moonbloom Labs</text>
</svg>`;
}

let count = 0;
for (const it of items) {
  const svg = svgFor(it);
  const png = new Resvg(svg, {
    font: { fontFiles, loadSystemFonts: false, defaultFontFamily: 'Newsreader' },
  })
    .render()
    .asPng();
  const out = join(dist, it.file);
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, png);
  count++;
}
rmSync(manifestPath);
console.log(`postbuild: wrote ${count} OG images`);
