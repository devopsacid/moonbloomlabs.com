// Renders public/apple-touch-icon.png, icon-192.png, icon-512.png and favicon.ico from public/favicon.svg.
import { readFileSync, writeFileSync } from 'node:fs';
import { Resvg } from '@resvg/resvg-js';

const svg = readFileSync('public/favicon.svg');
const png = (size) => new Resvg(svg, { fitTo: { mode: 'width', value: size } }).render().asPng();
writeFileSync('public/apple-touch-icon.png', png(180));
writeFileSync('public/icon-192.png', png(192));
writeFileSync('public/icon-512.png', png(512));
// favicon.ico with one embedded 32x32 PNG
const p32 = png(32);
const head = Buffer.alloc(22);
head.writeUInt16LE(0, 0);
head.writeUInt16LE(1, 2);
head.writeUInt16LE(1, 4);
head[6] = 32;
head[7] = 32;
head.writeUInt16LE(1, 12);
head.writeUInt16LE(32, 14);
head.writeUInt32LE(p32.length, 14 + 4);
head.writeUInt32LE(22, 18);
writeFileSync('public/favicon.ico', Buffer.concat([head, p32]));
console.log('icons written');
