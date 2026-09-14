#!/usr/bin/env node
/**
 * Genera capturas de pantalla del sitio ya desplegado en 3 anchos
 * (desktop, tablet, móvil) y registra la evidencia en /evidencias/REGISTRO.md.
 *
 * Uso:
 *   npm run evidencias -- --url=https://loxxo-dev.vercel.app
 *   npm run evidencias -- --url=https://loxxo-dev.vercel.app --desc="Ajusta hero en mobile"
 */
import { chromium } from "@playwright/test";
import { execSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const EVIDENCIAS_DIR = path.join(ROOT, "evidencias");
const REGISTRO_PATH = path.join(EVIDENCIAS_DIR, "REGISTRO.md");

// Rutas del sitio a capturar. Para un sitio de una sola página basta con "/",
// pero se puede extender agregando más entradas aquí.
const PAGES = [{ name: "home", route: "/" }];

const VIEWPORTS = [
  { name: "desktop", width: 1440, height: 900 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "mobile", width: 375, height: 812 },
];

function parseArgs(argv) {
  const args = {};
  for (const arg of argv) {
    const match = arg.match(/^--([^=]+)=(.*)$/);
    if (match) args[match[1]] = match[2];
  }
  return args;
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function getCommitHash() {
  try {
    return execSync("git rev-parse --short HEAD", { cwd: ROOT })
      .toString()
      .trim();
  } catch {
    return "sin-commit";
  }
}

function getLastCommitMessage() {
  try {
    return execSync("git log -1 --pretty=%s", { cwd: ROOT }).toString().trim();
  } catch {
    return "";
  }
}

function ensureRegistro() {
  if (existsSync(REGISTRO_PATH)) return;
  const header =
    "# Registro de evidencias\n\n" +
    "Capturas automáticas generadas con `npm run evidencias -- --url=<url>`.\n\n" +
    "| Fecha | Página | Descripción del cambio | Capturas | URL desplegada | Commit |\n" +
    "| --- | --- | --- | --- | --- | --- |\n";
  writeFileSync(REGISTRO_PATH, header, "utf8");
}

function appendRegistro(rows) {
  ensureRegistro();
  const content = readFileSync(REGISTRO_PATH, "utf8");
  writeFileSync(REGISTRO_PATH, content + rows.join("\n") + "\n", "utf8");
}

async function run() {
  const args = parseArgs(process.argv.slice(2));
  const baseUrl = args.url;

  if (!baseUrl) {
    console.error(
      "Falta --url. Uso: npm run evidencias -- --url=https://tu-proyecto.vercel.app"
    );
    process.exit(1);
  }

  const date = today();
  const commit = getCommitHash();
  const description = args.desc || getLastCommitMessage() || "Sin descripción";

  const browser = await chromium.launch();
  const registroRows = [];

  try {
    for (const pageDef of PAGES) {
      const outDir = path.join(EVIDENCIAS_DIR, pageDef.name, date);
      mkdirSync(outDir, { recursive: true });

      const shotLinks = [];

      for (const viewport of VIEWPORTS) {
        const context = await browser.newContext({
          viewport: { width: viewport.width, height: viewport.height },
        });
        const page = await context.newPage();

        const url = new URL(pageDef.route, baseUrl).toString();
        console.log(`→ ${pageDef.name} · ${viewport.name} (${url})`);

        await page.goto(url, { waitUntil: "networkidle" });
        // Deja terminar animaciones de entrada antes de capturar.
        await page.waitForTimeout(600);

        const fileName = `${viewport.name}.png`;
        const filePath = path.join(outDir, fileName);
        await page.screenshot({ path: filePath, fullPage: true });

        const relLink = path
          .relative(EVIDENCIAS_DIR, filePath)
          .split(path.sep)
          .join("/");
        shotLinks.push(`[${viewport.name}](${relLink})`);

        await context.close();
      }

      registroRows.push(
        `| ${date} | ${pageDef.name} | ${description} | ${shotLinks.join(" · ")} | ${baseUrl} | ${commit} |`
      );
    }
  } finally {
    await browser.close();
  }

  appendRegistro(registroRows);
  console.log(`\nEvidencia guardada en ${path.relative(ROOT, EVIDENCIAS_DIR)}/`);
  console.log(`Registro actualizado: ${path.relative(ROOT, REGISTRO_PATH)}`);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
