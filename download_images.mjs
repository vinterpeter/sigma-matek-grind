// One-off image downloader for cards without local images.
// Pulls from Pollinations using each card's prompt, saves to images/{id}.jpg,
// then rewrites both card files with the new image paths.
//
// Usage: node download_images.mjs [--dry]

import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { pipeline } from 'node:stream/promises';
import { Readable } from 'node:stream';

const DRY = process.argv.includes('--dry');
const ROOT = path.resolve('.');
const IMAGES = path.join(ROOT, 'images');

function loadCards(file) {
  const src = fs.readFileSync(file, 'utf8').replace(/^const /, 'var ');
  const ctx = vm.createContext({});
  vm.runInContext(src, ctx);
  return ctx.classicBrainrots || ctx.italianBrainrots || [];
}

const classic = loadCards('cards_classic.js');
const italian = loadCards('cards_italian.js');
const needs = [...classic, ...italian].filter(c => !c.image && c.prompt);

console.log(`Cards needing image: ${needs.length}`);
if (!fs.existsSync(IMAGES)) fs.mkdirSync(IMAGES, { recursive: true });

async function download(card) {
  const seed = Math.floor(Math.abs([...card.id].reduce((h, c) => h * 31 + c.charCodeAt(0), 0)) % 1_000_000);
  const prompt = encodeURIComponent(card.prompt);
  const url = `https://image.pollinations.ai/prompt/${prompt}?seed=${seed}&width=512&height=512&nologo=true`;
  const outPath = path.join(IMAGES, `${card.id}.jpg`);
  if (fs.existsSync(outPath) && fs.statSync(outPath).size > 5000) {
    return { id: card.id, status: 'skipped', size: fs.statSync(outPath).size };
  }
  if (DRY) return { id: card.id, status: 'dry', url };
  for (let attempt = 0; attempt < 5; attempt++) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(120_000) });
      if (res.status === 429) {
        await new Promise(r => setTimeout(r, 5000 + attempt * 5000));
        throw new Error(`HTTP 429`);
      }
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const tmp = outPath + '.tmp';
      await pipeline(Readable.fromWeb(res.body), fs.createWriteStream(tmp));
      const size = fs.statSync(tmp).size;
      if (size < 5000) { fs.unlinkSync(tmp); throw new Error('response too small'); }
      fs.renameSync(tmp, outPath);
      return { id: card.id, status: 'ok', size };
    } catch (e) {
      if (attempt === 4) return { id: card.id, status: 'failed', error: e.message };
      await new Promise(r => setTimeout(r, 3000 * (attempt + 1)));
    }
  }
}

async function run() {
  // Two passes:
  //  1) instant pass — skip-or-download fast for items already on disk
  //  2) throttled serial pass for the actual remaining downloads
  // Filter to only items that need an actual fetch.
  const results = [];
  const remaining = [];
  for (const card of needs) {
    const p = path.join(IMAGES, `${card.id}.jpg`);
    if (fs.existsSync(p) && fs.statSync(p).size > 5000) {
      results.push({ id: card.id, status: 'skipped' });
      process.stdout.write(`· ${card.id}\n`);
    } else {
      remaining.push(card);
    }
  }
  console.log(`\nNeed to fetch: ${remaining.length}\n`);
  const minGap = 6000;
  let lastStart = 0;
  for (const card of remaining) {
    const wait = Math.max(0, lastStart + minGap - Date.now());
    if (wait) await new Promise(r => setTimeout(r, wait));
    lastStart = Date.now();
    const r = await download(card);
    results.push(r);
    const tag = r.status === 'ok' ? '✓' : r.status === 'skipped' ? '·' : r.status === 'dry' ? '…' : '✗';
    process.stdout.write(`${tag} ${r.id} ${r.status === 'failed' ? '— ' + r.error : ''}\n`);
  }
  const ok = results.filter(r => r.status === 'ok' || r.status === 'skipped').length;
  const failed = results.filter(r => r.status === 'failed');
  console.log(`\n${ok}/${needs.length} ready, ${failed.length} failed`);
  if (failed.length) console.log('Failed:', failed.map(f => f.id).join(', '));
  return results;
}

run().catch(e => { console.error(e); process.exit(1); });
