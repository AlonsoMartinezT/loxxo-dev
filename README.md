# loxxo · Portfolio

Sitio web personal de **Alonso Martínez** — desarrollador full stack. Sitio
de una sola página con hero animado, sección "sobre mí", proyectos,
habilidades y contacto.

**Demo:** https://loxxo-dev.vercel.app

## Stack

- [Next.js 16](https://nextjs.org) (App Router) + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com) — tokens de diseño (color, tipografía, espaciado) centralizados en [`src/app/globals.css`](src/app/globals.css)
- [Framer Motion](https://motion.dev) — scroll-reveal, transiciones y micro-interacciones, respetando `prefers-reduced-motion`
- Modo claro/oscuro automático según la preferencia del sistema (`prefers-color-scheme`)
- [Playwright](https://playwright.dev) — evidencia visual automatizada del sitio desplegado

## Estructura

```
src/
  app/            # App Router: layout, page, metadata, OG image, icon
  components/     # Componentes de UI reutilizables y tipados
  lib/            # Contenido del sitio (site.ts, data.ts) — un solo lugar para editar textos
scripts/
  evidencias.mjs  # Script de evidencia automática (Playwright)
evidencias/        # Capturas generadas + REGISTRO.md
.github/workflows/ # GitHub Action que corre la evidencia tras cada deploy
```

## Correr en local

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Editar el contenido

Todo el contenido (nombre, bio, proyectos, habilidades, redes sociales) vive
en [`src/lib/site.ts`](src/lib/site.ts) y [`src/lib/data.ts`](src/lib/data.ts) —
edítalos ahí, no hace falta tocar los componentes.

## Evidencia automática

Genera capturas del sitio ya desplegado en 3 anchos (1440 / 768 / 375px) y
actualiza [`evidencias/REGISTRO.md`](evidencias/REGISTRO.md):

```bash
npm run evidencias -- --url=https://loxxo-dev.vercel.app
```

Esto se ejecuta automáticamente vía
[`.github/workflows/evidencias.yml`](.github/workflows/evidencias.yml) cada
vez que Vercel reporta un deployment exitoso (producción o preview), y el
resultado se commitea de vuelta al repositorio.

## Despliegue

El repositorio está conectado a Vercel: cada push a `main` despliega a
producción, y cada rama o PR genera un preview deployment con su propia URL.
