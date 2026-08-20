# Daniel Reyes — Portfolio

Personal portfolio and services site. Bilingual (Spanish / English), light and
dark themes, static output.

Built with [Astro](https://astro.build), TypeScript and Tailwind CSS v4.
React is used only where a component genuinely needs client state; everything
else ships as HTML with no JavaScript.

## Requirements

- Node.js >= 22.12
- pnpm 9

## Getting started

```bash
pnpm install
pnpm dev
```

## Scripts

| Script | What it does |
| --- | --- |
| `pnpm dev` | Dev server at `localhost:4321` |
| `pnpm build` | Static build into `dist/` |
| `pnpm preview` | Serve the built output locally |
| `pnpm lint` | Biome lint and format check |
| `pnpm lint:fix` | Apply Biome fixes |
| `pnpm typecheck` | `astro check` |
| `pnpm verify` | lint + typecheck + build — run this before pushing |

## Project structure

```text
src/
├── config/site.ts        Identity, contact channels, canonical URL
├── content/*.yaml        Editorial content, validated by Zod
├── content.config.ts     Collection schemas
├── data/stack.ts         Technology grid
├── i18n/                 UI dictionary and locale helpers
├── layouts/              Document shell, SEO, fonts
├── components/           Sections and UI pieces
├── scripts/              Theme toggle, scroll reveal
└── styles/global.css     Design tokens and Tailwind theme
```

## Updating content

Most changes are content, not code.

- **Services, experience, case studies, education** — edit the matching file in
  `src/content/`. Each entry holds its Spanish and English text side by side,
  so a translation cannot be forgotten: the schema requires both and the build
  fails if one is missing.
- **Interface copy** (navigation, buttons, form labels) — `src/i18n/ui.ts`.
  Spanish is the source of truth; TypeScript fails the build when English is
  missing a key.
- **Technology grid** — `src/data/stack.ts`.
- **Contact details and canonical URL** — `src/config/site.ts`.

## Internationalisation

Spanish is served from `/` and English from `/en/`. Both are real, indexable
routes with their own canonical URL, `hreflang` alternates and sitemap entries,
so each language can rank on its own.

## Theming

Every colour is defined once per theme under the same token name in
`src/styles/global.css`, and exposed as Tailwind utilities. Components
reference tokens only, so switching themes touches no component.

The design is dark-first: every visitor gets the dark theme, and light is
opt-in through the toggle rather than inherited from the operating system.
The choice is stored in `localStorage` and re-applied by an inline script
before the first paint, so a chosen theme never flashes the other one.

## Deployment

Static output — any host that serves a directory works. `SITE_URL` in
`src/config/site.ts` must match the production domain before the first deploy,
since canonical URLs, `hreflang` and the sitemap are generated from it.

```bash
pnpm build   # -> dist/
```

## Licence

MIT — see [LICENSE](LICENSE).
