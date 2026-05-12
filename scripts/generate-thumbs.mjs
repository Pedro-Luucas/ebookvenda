import { chromium } from "playwright";
import { readdirSync, statSync, mkdirSync, existsSync } from "node:fs";
import { join, basename, relative } from "node:path";
import { fileURLToPath } from "node:url";

const SCRIPT_DIR = fileURLToPath(new URL(".", import.meta.url));
const ROOT_DIR = join(SCRIPT_DIR, "..");
const MODULOS_DIR = join(ROOT_DIR, "modulos");
const THUMBS_DIR = join(ROOT_DIR, "thumbs");
const BASE_URL = "http://127.0.0.1:8765";

function walkHtml(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      results.push(...walkHtml(full));
    } else if (entry.toLowerCase().endsWith(".html")) {
      results.push(full);
    }
  }
  return results;
}

async function main() {
  if (!existsSync(THUMBS_DIR)) mkdirSync(THUMBS_DIR, { recursive: true });

  const files = walkHtml(MODULOS_DIR);
  console.log(`Encontrados ${files.length} módulos.`);

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1024, height: 1500 },
    deviceScaleFactor: 2,
  });
  const page = await context.newPage();

  for (const file of files) {
    const rel = relative(MODULOS_DIR, file).replace(/\\/g, "/");
    const url = `${BASE_URL}/modulos/${rel}`;
    const name = basename(file, ".html");
    const out = join(THUMBS_DIR, `${name}.png`);

    console.log(`-> ${name}`);
    await page.goto(url, { waitUntil: "networkidle" });

    const handle =
      (await page.$(".cover, .page-cover, .page.cover")) ??
      (await page.$(".page"));
    if (!handle) {
      console.warn(`   sem cover/page, capturando viewport`);
      await page.screenshot({ path: out, fullPage: false });
      continue;
    }

    await handle.scrollIntoViewIfNeeded();
    await handle.screenshot({ path: out });
    console.log(`   salvo em ${out}`);
  }

  await browser.close();
  console.log("Concluído.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
