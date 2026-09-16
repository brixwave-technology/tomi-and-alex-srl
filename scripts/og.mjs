/**
 * Regenerează imaginea de share (Open Graph) `public/og.jpg`, 1200×630.
 * Este imaginea pe care o afișează Facebook, WhatsApp, LinkedIn etc. când
 * cineva postează o adresă de pe site.
 *
 * Textele și numărul de telefon se citesc din `src/data/company.ts`, ca imaginea
 * să nu rămână în urmă când se schimbă datele de contact.
 *
 *   npm run build && node scripts/og.mjs
 *
 * Rulează după build, pentru că folosește fontul copiat în `out/_next/static/media`.
 * Playwright nu este dependență a proiectului; dacă lipsește, instalați-l temporar
 * (`npm i -D playwright`) sau rulați scriptul cu un Playwright global
 * (`NODE_PATH=$(npm root -g) node scripts/og.mjs`).
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import { execSync } from "node:child_process";

/** Playwright din proiect, dacă există; altfel cel instalat global. */
async function loadChromium() {
  const pick = (mod) => mod.chromium ?? mod.default?.chromium;
  try {
    return pick(await import("playwright"));
  } catch {
    const globalRoot = execSync("npm root -g", { encoding: "utf8" }).trim();
    return pick(await import(pathToFileURL(resolve(globalRoot, "playwright/index.js")).href));
  }
}

const root = resolve(import.meta.dirname, "..");
const read = (file, re, fallback) => {
  const m = readFileSync(resolve(root, file), "utf8").match(re);
  if (!m && fallback === undefined) throw new Error(`Nu am găsit ${re} în ${file}`);
  return m ? m[1] : fallback;
};

const company = "src/data/company.ts";
const phone = read(company, /phoneDisplay:\s*"([^"]+)"/);
const name = read(company, /name:\s*"([^"]+)"/);
const locality = read(company, /locality:\s*"([^"]+)"/);
const county = read(company, /county:\s*"județul ([^"]+)"/);
const title = read("src/data/seo.ts", /h1:\s*"([^"]+)\."/);

// Fonturile Archivo copiate de build în out/_next/static/media (mai multe subseturi:
// latin, latin-ext pentru diacriticele românești). Le încorporăm pe toate.
const mediaDir = resolve(root, "out/_next/static/media");
const fonts = readdirSync(mediaDir).filter((f) => f.endsWith(".woff2")).sort((a, b) => statSync(resolve(mediaDir, b)).size - statSync(resolve(mediaDir, a)).size);
if (fonts.length === 0) throw new Error("Rulați întâi `npm run build`: lipsesc fonturile din out/_next/static/media");

const dataUri = (p, mime) => `data:${mime};base64,${readFileSync(resolve(root, p)).toString("base64")}`;
const url = (p) => (p.endsWith(".woff2") ? dataUri(p, "font/woff2") : p.endsWith(".png") ? dataUri(p, "image/png") : dataUri(p, "image/webp"));
const html = `<!doctype html><html lang="ro"><head><meta charset="utf-8">
<style>
${fonts.map((f) => `@font-face{font-family:Archivo;src:url("${url(`out/_next/static/media/${f}`)}") format("woff2");font-weight:100 900;font-stretch:62% 125%;font-display:block}`).join("\n")}
html,body{margin:0;width:1200px;height:630px;background:#0c0d0f;font-family:Archivo,sans-serif;color:#f0f0f2;overflow:hidden}
.bg{position:absolute;inset:0;background:url("${url("public/images/hero-excavator.webp")}") center/cover;opacity:.28}
.grad{position:absolute;inset:0;background:linear-gradient(90deg,rgba(12,13,15,.98),rgba(12,13,15,.85) 55%,rgba(12,13,15,.55))}
.wrap{position:relative;padding:56px 72px;height:630px;box-sizing:border-box;display:flex;flex-direction:column;justify-content:space-between}
.plate{display:inline-flex;background:#fff;padding:14px 22px;border-radius:4px;width:fit-content}
.plate img{height:96px}
.rule{width:96px;height:8px;border-top:2px solid #d23b3c;border-bottom:2px solid #d23b3c}
h1{font-size:60px;line-height:1.04;font-weight:800;font-stretch:112%;letter-spacing:-0.02em;margin:22px 0 0;max-width:1010px}
p{font-size:26px;color:#c9ccd3;margin:30px 0 0;max-width:900px;line-height:1.35}
.foot{display:flex;justify-content:space-between;align-items:center;font-size:24px;font-weight:700}
.foot .tel{background:#d23b3c;color:#fff;padding:14px 26px;border-radius:2px}
.foot .site{color:#8b909a;font-weight:600;font-size:20px;letter-spacing:.14em;text-transform:uppercase}
</style></head><body>
<div class="bg"></div><div class="grad"></div>
<div class="wrap">
  <div class="plate"><img src="${url("public/images/logo-tomi-alex.png")}" alt=""></div>
  <div>
    <div class="rule"></div>
    <h1>${title}</h1>
    <p>Balastieră, stație de betoane și prefabricate proprii · Satu Mare, Maramureș, Bihor, Sălaj</p>
  </div>
  <div class="foot"><span class="tel">Sună: ${phone}</span><span class="site">${name} · ${locality}, ${county}</span></div>
</div></body></html>`;

const chromium = await loadChromium();
const browser = await chromium.launch(process.env.PLAYWRIGHT_CHROMIUM ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM } : {});
const page = await (await browser.newContext({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 })).newPage();
await page.setContent(html, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);
await page.waitForTimeout(400);
await page.screenshot({ path: resolve(root, "public/og.jpg"), type: "jpeg", quality: 88 });
await browser.close();
console.log(`public/og.jpg regenerat · telefon ${phone}`);
