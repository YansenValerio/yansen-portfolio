/**
 * Capture N screenshots from a live URL for use as portfolio mockup images.
 * Usage:
 *   node scripts/capture-portfolio.mjs <url> <name> [--mobile] [--count=N] [--start=I]
 * Examples:
 *   node scripts/capture-portfolio.mjs "https://example.com" notic
 *   node scripts/capture-portfolio.mjs "https://example.com" plesir --count=4
 *   node scripts/capture-portfolio.mjs "https://example.com/admin" plesir --count=1 --start=5
 *   node scripts/capture-portfolio.mjs "https://example.com" myapp --mobile
 */

import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const args = process.argv.slice(2);
const isMobile = args.includes("--mobile");
const countArg = args.find((a) => a.startsWith("--count="));
const startArg = args.find((a) => a.startsWith("--start="));
const count = countArg ? parseInt(countArg.split("=")[1], 10) : 3;
const startIdx = startArg ? parseInt(startArg.split("=")[1], 10) : 1;
const positional = args.filter((a) => !a.startsWith("--"));
const [url, name] = positional;

if (!url || !name) {
  console.error("Usage: node scripts/capture-portfolio.mjs <url> <name> [--mobile] [--count=N] [--start=I]");
  process.exit(1);
}

const viewport = isMobile
  ? { width: 390, height: 844 } // iPhone 14 Pro size
  : { width: 1440, height: 810 }; // Desktop 16:9

const outDir = "public/portfolio";
mkdirSync(outDir, { recursive: true });

console.log(`▸ Launching Chromium...`);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport });

console.log(`▸ Navigating to ${url}...`);
await page.goto(url, { waitUntil: "networkidle", timeout: 45000 }).catch(async () => {
  console.log("  (networkidle timed out, falling back to load)");
  await page.goto(url, { waitUntil: "load", timeout: 30000 });
});
await page.waitForTimeout(2500);

const capture = async (idx, fraction) => {
  if (fraction > 0) {
    await page.evaluate(
      (f) => window.scrollTo({ top: document.body.scrollHeight * f, behavior: "instant" }),
      fraction
    );
    await page.waitForTimeout(1500);
  }
  const path = `${outDir}/${name}-${idx}.jpg`;
  await page.screenshot({ path, type: "jpeg", quality: 88, fullPage: false });
  console.log(`  ✓ ${path}`);
};

console.log(`▸ Capturing ${count} screenshot(s) at ${viewport.width}x${viewport.height} (starting index ${startIdx})...`);

// Distribute scroll fractions evenly: count=1 → [0], count=3 → [0, 0.35, 0.7], count=4 → [0, 0.25, 0.5, 0.75], etc.
const fractions =
  count === 1
    ? [0]
    : Array.from({ length: count }, (_, i) => Math.round((i / count) * 100) / 100);

for (let i = 0; i < count; i++) {
  await capture(startIdx + i, fractions[i]);
}

await browser.close();
const used = Array.from({ length: count }, (_, i) => `/portfolio/${name}-${startIdx + i}.jpg`).join(", ");
console.log(`✓ Done. Files: ${used}`);
