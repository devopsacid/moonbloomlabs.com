#!/usr/bin/env node
/**
 * Moonbloom Labs marketing renderer: regenerates every logo SVG/PNG, PNG board and PDF in marketing/.
 *
 * Usage (from the repo root):
 *   node marketing/tools/render.mjs            # everything
 *   node marketing/tools/render.mjs logos      # brand/logo/*.svg + *.png and social/avatars/*.png
 *   node marketing/tools/render.mjs boards     # every HTML artboard -> PNG (brand, social, posts)
 *   node marketing/tools/render.mjs pdf        # sales one-pagers and pitch decks -> PDF
 *   node marketing/tools/render.mjs boards social/banners/banners.en.html   # one source file only
 *
 * Dependencies (nothing is added to the repo package.json):
 *   - @resvg/resvg-js and sharp: already devDependencies of the site (run `npm ci` first).
 *   - playwright-core (or playwright): NOT a repo dependency. Install it anywhere and point to it:
 *       mkdir -p ~/.tmp/mb-render && cd ~/.tmp/mb-render && npm init -y && npm i playwright-core sharp @resvg/resvg-js@2.6.2
 *       MB_RENDER_DEPS=~/.tmp/mb-render node marketing/tools/render.mjs
 *     MB_RENDER_DEPS is a directory that contains node_modules/. It is searched before the repo root.
 *   - Chromium: the one Playwright downloaded (~/.cache/ms-playwright). If playwright-core cannot find
 *     its own revision, the newest chromium_headless_shell-* / chromium-* there is used. Override with
 *     MB_CHROMIUM=/path/to/chrome.
 *
 * Sources:
 *   - Logos are built here from the mark geometry (src/components/art/Mark.astro, public/favicon.svg)
 *     and Newsreader 450 (marketing/tools/fonts/Newsreader-450.ttf, an OFL static instance of the
 *     site's variable font). The wordmark text is converted to outlines, so the SVGs need no font.
 *   - Every other PNG comes from an HTML artboard file: each element with data-out="file.png" is
 *     screenshotted at its CSS size (device scale 1) and saved next to the HTML file, then optimised.
 *   - PDFs come from the sales HTML files with their own @page size (A4, 16:9).
 *   - Fonts are self-hosted via marketing/brand/fonts.css -> ../../src/assets/fonts, so renders are offline.
 */
import { createRequire } from 'node:module';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { homedir } from 'node:os';

const MKT = join(dirname(fileURLToPath(import.meta.url)), '..');
const REPO = join(MKT, '..');

// ---------------------------------------------------------------- dependency resolution
function load(names) {
  const bases = [process.env.MB_RENDER_DEPS, REPO, MKT].filter(Boolean);
  for (const name of names) {
    for (const base of bases) {
      try {
        return createRequire(join(base, 'noop.js'))(name);
      } catch {
        /* try next */
      }
    }
  }
  console.error(
    `render.mjs: cannot resolve ${names.join(' or ')}.\n` +
      `Install it outside the repo and set MB_RENDER_DEPS (see the usage block at the top of this file).`,
  );
  process.exit(1);
}

// ---------------------------------------------------------------- tokens
const T = {
  night950: '#0F1433',
  moon100: '#EEF0FA',
  apricot300: '#F5B98A',
  petal300: '#F2BFD0',
  bloom700: '#8C2E55',
  dawn50: '#FDF3EC',
};

// ---------------------------------------------------------------- PNG optimisation
async function savePng(file, buf, { palette = true } = {}) {
  const sharp = load(['sharp']);
  const out = await sharp(buf)
    .png(
      palette
        ? { palette: true, quality: 95, effort: 10, compressionLevel: 9 }
        : { compressionLevel: 9, effort: 10 },
    )
    .toBuffer();
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, out);
  const meta = await sharp(out).metadata();
  console.log(
    `  ${relative(MKT, file)}  ${meta.width}x${meta.height}  ${(out.length / 1024).toFixed(0)} kB`,
  );
}

// ---------------------------------------------------------------- logos
// Mark geometry, 120-unit box, exactly as Mark.astro / favicon.svg.
const CRESCENT = 'M55.76 20.23A40 40 0 1 0 93.9 81.23A36 36 0 0 1 55.76 20.23Z';
const PETAL = 'M74 78C66 66 68 52 74 44C80 52 82 66 74 78Z';
const MARK_BOX = { x: 20, y: 20.2, w: 73.9, h: 79.8 }; // visible bounds of the crescent (bud sits inside)
const BUD_H = 34; // bud height in mark units = clear-space unit

const VARIANTS = {
  'on-night': {
    crescent: T.moon100,
    bud: T.apricot300,
    side: T.petal300,
    sideOpacity: 0.9,
    text: T.moon100,
    tile: T.night950,
  },
  'on-dawn': {
    crescent: T.night950,
    bud: T.apricot300,
    side: T.bloom700,
    sideOpacity: 0.9,
    text: T.night950,
    tile: T.dawn50,
  },
  'mono-dark': {
    crescent: T.night950,
    bud: T.night950,
    side: T.night950,
    sideOpacity: 1,
    text: T.night950,
    tile: T.night950,
    knockout: true,
  },
  'mono-light': {
    crescent: T.moon100,
    bud: T.moon100,
    side: T.moon100,
    sideOpacity: 1,
    text: T.moon100,
    tile: T.moon100,
    knockout: true,
  },
};

function markSvg(v) {
  const so = v.sideOpacity < 1 ? ` opacity="${v.sideOpacity}"` : '';
  return (
    `<path d="${CRESCENT}" fill="${v.crescent}"/>` +
    `<g transform="translate(0 4)">` +
    `<path d="${PETAL}" fill="${v.bud}"/>` +
    `<path d="${PETAL}" fill="${v.side}" transform="rotate(-24 74 78)"${so}/>` +
    `<path d="${PETAL}" fill="${v.side}" transform="rotate(24 74 78)"${so}/>` +
    `<path d="${PETAL}" fill="${v.bud}" transform="scale(0.8 0.9) translate(18.5 8)"/>` +
    `</g>`
  );
}

const WORD = 'Moonbloom Labs';
const FONT_FILE = join(MKT, 'tools/fonts/Newsreader-450.ttf');
// Measured with resvg for Newsreader 450 at 100 px: ink top 71.55 above baseline, 3.2 below, width 751.
const WM = { asc: 0.7155, desc: 0.032, width: 7.5105, left: 0.0285 };

function layouts() {
  const pad = 6;
  const F = 76; // horizontal: wordmark size in mark units (site header ratio, 22 px text : 32 px mark)
  const gap = 40;
  const hx = MARK_BOX.x + MARK_BOX.w + gap;
  const centre = MARK_BOX.y + MARK_BOX.h / 2 + 4; // optical: a little below the crescent centre
  const hBase = centre + ((WM.asc - WM.desc) / 2) * F;
  const hW = hx + WM.width * F - MARK_BOX.x;

  const S = 2.1; // stacked: mark scale
  const Fs = 76;
  const sw = WM.width * Fs;
  const mw = MARK_BOX.w * S;
  const sGap = BUD_H * 0.9;
  const sBase = MARK_BOX.h * S + sGap + WM.asc * Fs;

  const wF = 100;
  return {
    mark: {
      vb: [MARK_BOX.x - pad, MARK_BOX.y - pad, MARK_BOX.w + pad * 2, MARK_BOX.h + pad * 2],
      body: (v) => markSvg(v),
    },
    wordmark: {
      vb: [-pad, -WM.asc * wF - pad, WM.width * wF + pad * 2, (WM.asc + WM.desc) * wF + pad * 2],
      body: (v) => text(v, -WM.left * wF, 0, wF),
    },
    horizontal: {
      vb: [MARK_BOX.x - pad, MARK_BOX.y - pad, hW + pad * 2, MARK_BOX.h + pad * 2],
      body: (v) => markSvg(v) + text(v, hx - WM.left * F, hBase, F),
    },
    stacked: {
      vb: [-pad, -pad, sw + pad * 2, sBase + WM.desc * Fs + pad * 2],
      body: (v) =>
        `<g transform="translate(${(sw - mw) / 2 - MARK_BOX.x * S} ${-MARK_BOX.y * S}) scale(${S})">${markSvg(v)}</g>` +
        text(v, -WM.left * Fs, sBase, Fs),
    },
  };
}
function text(v, x, y, size) {
  return `<text x="${x}" y="${y}" font-family="Newsreader" font-size="${size}" letter-spacing="${-0.005 * size}" fill="${v.text}">${WORD}</text>`;
}
function tileSvg(v) {
  // App-icon tile: favicon.svg geometry (rx 26, mark at translate(6 6) scale(0.9)).
  if (v.knockout) {
    return (
      `<defs><mask id="k"><rect width="120" height="120" rx="26" fill="#fff"/>` +
      `<g transform="translate(6 6) scale(0.9)">${markSvg({ ...v, crescent: '#000', bud: '#000', side: '#000' })}</g></mask></defs>` +
      `<rect width="120" height="120" rx="26" fill="${v.tile}" mask="url(#k)"/>`
    );
  }
  return `<rect width="120" height="120" rx="26" fill="${v.tile}"/><g transform="translate(6 6) scale(0.9)">${markSvg(v)}</g>`;
}

function outline(svg) {
  const { Resvg } = load(['@resvg/resvg-js']);
  const r = new Resvg(svg, {
    font: { fontFiles: [FONT_FILE], loadSystemFonts: false, defaultFontFamily: 'Newsreader' },
  });
  return r.toString();
}
function rasterWidth(svg, width) {
  const { Resvg } = load(['@resvg/resvg-js']);
  return new Resvg(svg, {
    fitTo: { mode: 'width', value: width },
    font: { loadSystemFonts: false },
  })
    .render()
    .asPng();
}
const HEADER = (name, variant) =>
  `<!-- Moonbloom Labs ${name} (${variant}). Generated by marketing/tools/render.mjs; text is outlined (Newsreader 450). Do not redraw. -->\n`;

async function logos() {
  console.log('logos');
  const dir = join(MKT, 'brand/logo');
  mkdirSync(dir, { recursive: true });
  const L = layouts();
  for (const [vname, v] of Object.entries(VARIANTS)) {
    for (const [lname, l] of Object.entries(L)) {
      const [x, y, w, h] = l.vb.map((n) => +n.toFixed(2));
      const src = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x} ${y} ${w} ${h}" width="${w}" height="${h}">${l.body(v)}</svg>`;
      const svg = HEADER(lname, vname) + outline(src);
      const base = join(dir, `moonbloom-${lname}-${vname}`);
      writeFileSync(base + '.svg', svg);
      for (const px of [512, 1024, 2048]) await savePng(`${base}-${px}.png`, rasterWidth(svg, px));
    }
    const tile = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">${tileSvg(v)}</svg>`;
    const tbase = join(dir, `moonbloom-mark-tile-${vname}`);
    writeFileSync(tbase + '.svg', HEADER('mark tile (app icon)', vname) + tile + '\n');
    for (const px of [512, 1024, 2048]) await savePng(`${tbase}-${px}.png`, rasterWidth(tile, px));
  }
  // Social avatars: full-bleed night square (platforms crop to a circle and add their own rounding).
  // The mark's visible bounds sit inside the inscribed circle with ~16 % margin.
  const s = 0.78;
  const cx = MARK_BOX.x + MARK_BOX.w / 2;
  const cy = MARK_BOX.y + MARK_BOX.h / 2;
  const avatar =
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="120" height="120">` +
    `<rect width="120" height="120" fill="${T.night950}"/>` +
    `<g transform="translate(${60 - cx * s} ${60 - cy * s}) scale(${s})">${markSvg(VARIANTS['on-night'])}</g></svg>`;
  const adir = join(MKT, 'social/avatars');
  mkdirSync(adir, { recursive: true });
  writeFileSync(
    join(adir, 'moonbloom-avatar.svg'),
    HEADER('social avatar', 'on-night') + avatar + '\n',
  );
  for (const px of [400, 800])
    await savePng(join(adir, `moonbloom-avatar-${px}.png`), rasterWidth(avatar, px));
}

// ---------------------------------------------------------------- browser
function findChromium() {
  if (process.env.MB_CHROMIUM) return process.env.MB_CHROMIUM;
  const root = join(homedir(), '.cache/ms-playwright');
  if (!existsSync(root)) return undefined;
  const cands = [];
  for (const d of readdirSync(root)) {
    const m = d.match(/^(chromium_headless_shell|chromium)-(\d+)$/);
    if (!m) continue;
    const exe =
      m[1] === 'chromium'
        ? join(root, d, 'chrome-linux64/chrome')
        : join(root, d, 'chrome-headless-shell-linux64/chrome-headless-shell');
    if (existsSync(exe)) cands.push({ exe, rev: +m[2], shell: m[1] !== 'chromium' });
  }
  cands.sort((a, b) => b.rev - a.rev || (b.shell ? 1 : 0) - (a.shell ? 1 : 0));
  return cands[0]?.exe;
}
async function browser() {
  const pw = load(['playwright-core', 'playwright']);
  try {
    if (!process.env.MB_CHROMIUM) return await pw.chromium.launch();
  } catch {
    /* fall through to a cached build */
  }
  const exe = findChromium();
  if (!exe) {
    console.error(
      'render.mjs: no Chromium found. Run `npx playwright install chromium` or set MB_CHROMIUM.',
    );
    process.exit(1);
  }
  return pw.chromium.launch({ executablePath: exe });
}

const BOARDS = [
  'brand/color-swatches.html',
  'brand/type-specimen.html',
  'brand/logo/clearspace-and-misuse.html',
  'social/banners/banners.en.html',
  'social/banners/banners.sk.html',
  'social/og-default.html',
  'social/post-templates/quote-card.en.html',
  'social/post-templates/how-it-works.en.html',
  'social/post-templates/how-it-works.sk.html',
  'social/post-templates/service-spotlight.en.html',
  'social/post-templates/launch.en.html',
  'social/post-templates/launch.sk.html',
];
const PDFS = [
  'sales/one-pager.en.html',
  'sales/one-pager.sk.html',
  'sales/pitch-deck.en.html',
  'sales/pitch-deck.sk.html',
];

async function openPage(b, rel, viewport = { width: 2700, height: 1600 }) {
  const ctx = await b.newContext({ viewport, deviceScaleFactor: 1, colorScheme: 'light' });
  const page = await ctx.newPage();
  const problems = [];
  page.on('console', (m) => m.type() === 'error' && problems.push(m.text()));
  page.on('requestfailed', (r) => problems.push(`failed: ${r.url()}`));
  await page.goto(pathToFileURL(join(MKT, rel)).href, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  // Fail loudly if a brand font did not load (renders must never fall back silently).
  const fonts = await page.evaluate(() =>
    [...document.fonts].filter((f) => f.status === 'loaded').map((f) => f.family.replace(/"/g, '')),
  );
  if (
    !fonts.some((f) => f.startsWith('Newsreader')) ||
    !fonts.some((f) => f.startsWith('Atkinson'))
  )
    problems.push(`brand fonts not loaded (loaded: ${[...new Set(fonts)].join(', ') || 'none'})`);
  return { ctx, page, problems };
}

async function boards(only) {
  console.log('boards');
  const b = await browser();
  for (const rel of only ? [only] : BOARDS) {
    const { ctx, page, problems } = await openPage(b, rel);
    const items = await page.locator('[data-out]').all();
    for (const el of items) {
      const out = await el.getAttribute('data-out');
      // Overflow guard: any text box that is wider/taller than its artboard is a bug.
      const over = await el.evaluate((root) => {
        const r = root.getBoundingClientRect();
        const bad = [];
        for (const n of root.querySelectorAll('h1,h2,h3,p,li,span,a,figcaption,dt,dd')) {
          const q = n.getBoundingClientRect();
          if (
            q.width &&
            (q.right > r.right + 0.5 || q.bottom > r.bottom + 0.5 || q.left < r.left - 0.5)
          )
            bad.push(n.textContent.trim().slice(0, 40));
          if (n.scrollWidth > n.clientWidth + 1 && getComputedStyle(n).overflow !== 'visible')
            bad.push('clipped: ' + n.textContent.trim().slice(0, 40));
        }
        return bad;
      });
      if (over.length) problems.push(`${out}: text outside artboard: ${over.join(' | ')}`);
      // Snap auto-height boards to whole pixels so the page background never bleeds into the last row.
      await el.evaluate(
        (n) => (n.style.height = `${Math.floor(n.getBoundingClientRect().height)}px`),
      );
      const buf = await el.screenshot({ animations: 'disabled' });
      await savePng(join(MKT, dirname(rel), out), buf, {
        palette: !(await el.getAttribute('data-truecolor')),
      });
    }
    if (problems.length) console.warn(`  ! ${rel}\n    ${problems.join('\n    ')}`);
    await ctx.close();
  }
  await b.close();
}

async function pdfs(only) {
  console.log('pdf');
  const b = await browser();
  for (const rel of only ? [only] : PDFS) {
    const { ctx, page, problems } = await openPage(b, rel, { width: 1400, height: 1000 });
    await page.emulateMedia({ media: 'print' });
    // Overflow guard: every text element must stay inside its printed page.
    const over = await page.evaluate(() => {
      const bad = [];
      document.querySelectorAll('.page').forEach((pg, i) => {
        const r = pg.getBoundingClientRect();
        for (const n of pg.querySelectorAll('h1,h2,h3,p,li,a,dd,dt')) {
          const q = n.getBoundingClientRect();
          if (q.width && (q.right > r.right + 0.5 || q.bottom > r.bottom + 0.5))
            bad.push(`page ${i + 1}: ${n.textContent.trim().slice(0, 40)}`);
        }
      });
      return bad;
    });
    if (over.length) problems.push(`text outside page: ${over.join(' | ')}`);
    const out = join(MKT, rel.replace(/\.html$/, '.pdf'));
    await page.pdf({ path: out, preferCSSPageSize: true, printBackground: true });
    const pages = (readFileSync(out, 'latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
    console.log(
      `  ${relative(MKT, out)}  ${pages} page(s)  ${(statSync(out).size / 1024).toFixed(0)} kB`,
    );
    if (problems.length) console.warn(`  ! ${rel}\n    ${problems.join('\n    ')}`);
    await ctx.close();
  }
  await b.close();
}

// ---------------------------------------------------------------- main
const [what = 'all', only] = process.argv.slice(2);
if (!['all', 'logos', 'boards', 'pdf'].includes(what)) {
  console.error('usage: node marketing/tools/render.mjs [all|logos|boards|pdf] [source.html]');
  process.exit(2);
}
if (what === 'all' || what === 'logos') await logos();
if (what === 'all' || what === 'boards') await boards(only);
if (what === 'all' || what === 'pdf') await pdfs(only);
