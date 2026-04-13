// After downloading, rewrite the image field in both card files for any
// card whose images/{id}.jpg now exists (and is non-trivial in size).
// This performs surgical string replacement on the source files, preserving
// everything else (formatting, comments, stats, etc.).

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const IMAGES = path.resolve('images');

function loadCards(file) {
  const src = fs.readFileSync(file, 'utf8').replace(/^const /, 'var ');
  const ctx = vm.createContext({});
  vm.runInContext(src, ctx);
  return ctx.classicBrainrots || ctx.italianBrainrots || [];
}

function hasImage(id) {
  const p = path.join(IMAGES, `${id}.jpg`);
  try { return fs.statSync(p).size > 5000; } catch { return false; }
}

function patchFile(file, cards) {
  let src = fs.readFileSync(file, 'utf8');
  let patched = 0;
  for (const card of cards) {
    if (card.image || !hasImage(card.id)) continue;
    // Find `id: "foo"` and the nearby `image: null` line. The id is unique per
    // object literal, so we anchor on the id and replace the immediate follow-
    // up `image: null` occurrence.
    const idRe = new RegExp(`(id:\\s*["']${card.id}["'][\\s\\S]*?)image:\\s*null`);
    const m = src.match(idRe);
    if (!m) { console.warn(`! no match for ${card.id}`); continue; }
    src = src.replace(idRe, `$1image: "images/${card.id}.jpg"`);
    patched++;
  }
  fs.writeFileSync(file, src);
  return patched;
}

const classic = loadCards('cards_classic.js');
const italian = loadCards('cards_italian.js');

const a = patchFile('cards_classic.js', classic);
const b = patchFile('cards_italian.js', italian);

console.log(`classic patched: ${a}\nitalian patched: ${b}`);

// Validate
const c2 = loadCards('cards_classic.js');
const i2 = loadCards('cards_italian.js');
const stillMissing = [...c2, ...i2].filter(c => !c.image);
console.log(`still without image: ${stillMissing.length}`);
if (stillMissing.length <= 30) console.log(stillMissing.map(c => c.id).join(', '));
