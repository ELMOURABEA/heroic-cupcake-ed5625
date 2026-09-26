# MosTa-TecH

MosTa-TecH is the enterprise foundation for a group of technology organizations:
**Mosta-Pharm**, **EL-DocToOoR**, **MeGaOcToOoN**, **Eco-StorM**, **OctoGen**,
**SoLAGeN**, and **MosTa-PiKa**. This repository is the public enterprise site: an
overview of the organizations and their products, and a live preview of the first
flagship product, **El-Bendary Pharmacies**.

## What's here

- **Landing page** (`/`) — the MosTa-TecH enterprise overview and flagship spotlight.
- **Organizations** (`/organizations`) — every organization in the ecosystem, with its
  published products.
- **El-Bendary Pharmacies** (`/el-bendary`) — a pharmacy storefront: product catalog and
  product detail pages.
- **Operations dashboard** (`/el-bendary/dashboard`) — a staff-facing preview of daily
  orders, revenue, and inventory alerts, using sample data.

Governance documentation for contributors lives in [SECURITY.md](./SECURITY.md) and
[CONTRIBUTING.md](./CONTRIBUTING.md). The roadmap for turning this into the full
production ecosystem is in [PLAN.md](./PLAN.md).

## Tech stack

- [TanStack Start](https://tanstack.com/start) (React 19 + TanStack Router)
- Vite 7, Tailwind CSS 4
- Deployed on Netlify, images served through Netlify Image CDN

## Running locally

```bash
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:3000` (or via `netlify dev` on port 8888,
which also emulates Netlify platform features).

## Roadmap

This site currently covers the enterprise landing page and the storefront/dashboard
preview for El-Bendary Pharmacies with sample data. See [PLAN.md](./PLAN.md) for the
full roadmap: real accounts and orders, prescription workflows, the other
organizations' products, and connecting the live `bendaryph.com` and `eldoctooor.ae`
domains.
