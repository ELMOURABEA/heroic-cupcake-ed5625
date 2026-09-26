# AGENTS.md

This document orients AI agents and developers working on this codebase.

## Project overview

The MosTa-TecH enterprise site: a marketing/portfolio site for the MosTa-TecH group of
organizations, plus a live preview of its first flagship product, El-Bendary
Pharmacies (a pharmacy storefront and staff operations dashboard). Built with
TanStack Start and deployed on Netlify.

This is a **branded product surface with stubbed data**, not the full production
ecosystem. See [PLAN.md](./PLAN.md) for the roadmap — future sessions should read it
before adding backend features, auth, or a database.

### Tech stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Icons | lucide-react |
| Images | Netlify Image CDN (`/.netlify/images`) |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Directory structure

```
├── public
│   ├── favicon.ico
│   └── img/
│       ├── hero-enterprise.png   # Landing page hero illustration
│       └── hero-pharmacy.png     # El-Bendary Pharmacies hero illustration
├── src
│   ├── components
│   │   └── Header.tsx            # Site nav: Home / Organizations / El-Bendary Pharmacies
│   ├── data
│   │   ├── organizations.ts      # The 7 MosTa-TecH organizations and their products
│   │   ├── pharmacy-products.ts  # El-Bendary Pharmacies catalog (stubbed)
│   │   └── pharmacy-dashboard.ts # Stubbed stats/orders/inventory for the ops dashboard
│   ├── routes
│   │   ├── __root.tsx            # Root layout: Header, footer, global styles
│   │   ├── index.tsx             # Enterprise landing page
│   │   ├── organizations.tsx     # Full organization/product listing
│   │   └── el-bendary
│   │       ├── index.tsx           # Storefront catalog
│   │       ├── dashboard.tsx       # Staff operations dashboard preview
│   │       └── products/$productId.tsx  # Product detail page
│   ├── router.tsx                # TanStack Router setup
│   └── styles.css                # Tailwind entry + global styles
├── netlify.toml                  # Build command, publish dir, dev server settings
├── PLAN.md                       # Roadmap for the full production ecosystem
├── SECURITY.md                   # Vulnerability reporting policy
└── CONTRIBUTING.md               # Contribution guidelines across MosTa-TecH orgs
```

## Key concepts

### File-based routing (TanStack Router)

Routes are files under `src/routes/`. `routeTree.gen.ts` is generated automatically by
the TanStack Router Vite plugin at dev/build time — never edit or commit it by hand.

### Data

All content is stubbed in `src/data/*.ts` — there is no database or API yet. Keep new
sample data in that directory so a future milestone can swap in real persistence
without touching page components.

### Styling

- Tailwind CSS 4 utility classes, brand accent `#2a78d6` (blue)
- Status colors follow a fixed convention: green (`#0ca30c`) for good/in-stock, amber
  (`#fab219`/`#7a5400`) for warnings/alerts, red (`#d03b3b`) for out-of-stock —
  always paired with a label or icon, never color alone

## Conventions

- Components: PascalCase. Utilities/hooks: camelCase. Route files: TanStack's
  file-based routing conventions (`$param`, `index.tsx`).
- Import paths use the `@/` alias for `src/*`.
- TypeScript strict mode; prefer typed data fixtures over `any`.

## Development commands

```bash
pnpm dev      # Start dev server (port 3000)
pnpm build    # Production build
```

## What's next

Read [PLAN.md](./PLAN.md) before starting new work — it breaks the rest of the
MosTa-TecH ecosystem (accounts, real orders and prescriptions, the other
organizations' products, domain connections) into milestones.
