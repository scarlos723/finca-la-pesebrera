# AGENTS.md

Single-page Vite + React 19 + TypeScript marketing site for **La Pesebrera**, a vacation-rental finca in San Jerónimo, Colombia. The `README.md` is the default Vite template and is misleading — do not treat it as project docs. The brand brief lives in `docs/info.md` (gitignored; ask the user for it if needed).

## Commands

Package manager is **pnpm** (lockfile: `pnpm-lock.yaml`). There is **no test suite**.

- `pnpm dev` — Vite dev server.
- `pnpm build` — full verification: `tsc -b` (project-references build across `tsconfig.app.json` + `tsconfig.node.json`) **then** `vite build`. Use this as the "did it work?" check.
- `pnpm lint` — `eslint .` (flat config, `eslint.config.js`). No standalone typecheck script; run `pnpm exec tsc -b` for typecheck-only.
- `pnpm preview` — serve the built `dist/`.

Recommended order for a change: `pnpm lint` then `pnpm build`.

## Stack & layout

- **React 19.2**, **Vite 8**, **TypeScript 6.0** (note: non-standard major; `tsconfig.app.json` sets `"ignoreDeprecations": "6.0"`).
- **Tailwind v4** via `@tailwindcss/vite` — **no `tailwind.config.js`**; theme tokens are CSS-based in `src/index.css` via `@theme inline` + `:root` / `.dark` OKLCH vars. Use the `tailwind-v4-shadcn` skill before editing tokens.
- **shadcn/ui** configured in `components.json`: style `radix-nova`, baseColor `neutral`, cssVariables on, iconLibrary `lucide`. Generated primitives live in `src/components/ui/`.
- **Path alias `@/*` -> `src/*`** is set in **three** files — keep them in sync: `vite.config.ts:9`, `tsconfig.json:10`, `tsconfig.app.json:20`.
- Page composition is flat: `src/App.tsx` renders `Header` -> `Banner` -> `Proposal` -> `Location` -> `Experience` -> `FloatingButton`, then `Footer`. All sections are in `src/components/`.
- **`react-day-picker`** powers the reservation date picker inside `FloatingButton`.
- **`react-icons`** is the icon set used by feature components; **`lucide-react`** is only consumed by the shadcn-generated `src/components/ui/calendar.tsx`.
- **`motion`** (framer-motion v12) is declared in `package.json` but currently unused in `src/`.

## Adding / changing UI

- Add shadcn primitives: `pnpm dlx shadcn@latest add <name>` (style is fixed by `components.json` — do not override). New files land in `src/components/ui/`.
- For new feature components follow the existing pattern in `src/components/` (one component per file, named export).
- Use the `cn` helper from `src/lib/utils.ts` for conditional classes.
- Load the `frontend-design`, `shadcn`, `tailwind-v4-shadcn`, and `accessibility` skills for non-trivial UI/styling work.

## Hardcoded contact + brand spots

Update these directly when asked — no config layer:

- **WhatsApp number** `+57 319 636 7600` — `src/components/FloatingButton/index.tsx:27` (`wa.me/573196367600`, both the link and the prefilled message live there).
- **Google Maps short-link** — `src/components/Location.tsx:21`.
- **SEO / OpenGraph / Twitter Card / JSON-LD** — all hand-written in `index.html` (no `react-helmet` or similar). Edit there for metadata.
- **Feature images** — `src/assets/recent/*.webp` (imported via Vite, get hashed on build). **Favicons and `site.webmanifest`** live in `public/` and are referenced from `index.html`.

## Deployment

Production target is **Vercel** at `https://finca-la-pesebrera.vercel.app/` (set as canonical + `og:url` in `index.html`). There is no CI config and no `vercel.json`; deploys are push-to-main. Use the `deploy-to-vercel` skill when asked to ship.

## Don'ts

- Do not commit `dist/`, `docs/`, or `skills/` — all are in `.gitignore`.
- Do not introduce a `tailwind.config.js` or move tokens out of `src/index.css` (Tailwind v4 + shadcn setup is CSS-first).
- Do not replace the hand-written `index.html` meta tags with a runtime SEO library unless explicitly asked.
- Do not change the `@/*` alias without updating all three config files.

## Skills

Project-local skills live in `.agents/skills/` (committed). Load via the `skill` tool when relevant — at minimum: `frontend-design`, `shadcn`, `tailwind-v4-shadcn`, `accessibility`, `seo`, `deploy-to-vercel`.
