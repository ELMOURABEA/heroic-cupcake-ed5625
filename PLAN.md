# MosTa-TecH Roadmap

This project started as a large, multi-product ask: an enterprise structure covering
seven organizations and a full pharmacy/healthcare/automation product ecosystem. That
can't be built end-to-end in one pass, so this first milestone focused on the
branded product surface — the part people can actually see and click — with the rest
broken into the milestones below.

## Milestone 1 — Enterprise site & flagship preview (done)

- Landing page introducing MosTa-TecH and its seven organizations
- Full organization/product listing page
- El-Bendary Pharmacies storefront: product catalog and product detail pages
- El-Bendary Pharmacies staff operations dashboard preview (orders, revenue,
  inventory alerts — sample data)
- Governance docs: README, AGENTS, SECURITY, CONTRIBUTING

All product and order data currently lives in `src/data/*.ts` as stubs, not in a
database.

## Milestone 2 — Real data model

- Design a Postgres schema (via Netlify Database + Drizzle) for the pharmacy
  domain: products, branches, inventory levels, orders, order items, prescriptions
- Replace `src/data/pharmacy-products.ts` and `src/data/pharmacy-dashboard.ts` with
  real queries
- Keep `src/data/organizations.ts` as static content (it rarely changes) unless the
  org/product list needs to be editable without a deploy

## Milestone 3 — Accounts & authentication

- Customer accounts for ordering and order history
- Separate staff/admin access for the operations dashboard, scoped to branch
- Decide identity provider (Netlify Identity vs. a custom auth flow) based on
  whether staff accounts need role-based permissions beyond what Identity offers

## Milestone 4 — Ordering & prescriptions

- Shopping cart and checkout (payment provider integration, e.g. Stripe)
- Prescription upload and pharmacist verification workflow for Rx-required items
- Order status updates feeding the operations dashboard in real time

## Milestone 5 — Multi-branch operations

- Branch-level inventory management (restock, transfer between branches)
- Low-stock/out-of-stock alerting wired to real inventory instead of sample data
- Reporting across branches (daily revenue, top products, fulfillment time)

## Milestone 6 — Beyond El-Bendary Pharmacies

Bring the rest of the ecosystem onto the same foundation, one product at a time:

- **EL-DocToOoR**: pharmos, clinios, medai, healthcare-api, api-gateway
- **MeGaOcToOoN**: agent-orchestrator, research-engine, workflow-engine, knowledge-hub
- **Eco-StorM**: economic-storm-platform, marketing-intelligence, analytics-suite
- **OctoGen / SoLAGeN / MosTa-PiKa**: scope not yet defined — define product intent
  before building

## Milestone 7 — AI features

- Product/refill recommendations for El-Bendary Pharmacies (`elbendary-ai`) and
  clinical decision support for EL-DocToOoR (`medai`) via Netlify AI Gateway
- Keep AI-generated recommendations clearly labeled and reviewable by a pharmacist
  for anything prescription-related

## Milestone 8 — Domains & infrastructure

- Connect `bendaryph.com` and `eldoctooor.ae` as custom domains on this Netlify
  deployment (the original brief mentioned Vercel; since this project is built and
  deployed on Netlify, domain connection happens through Netlify's custom domain
  settings, not Vercel)
- Set up a production/staging split once real user data is involved

## Operational tasks outside this project

The original brief also called for creating a GitHub Enterprise, GitHub
organizations, moving existing repositories between them, and enabling
Dependabot/code scanning/secret scanning on each repo. Those are GitHub account
administration actions that require GitHub org-owner access and happen outside any
codebase — they aren't something a code change can perform. As a checklist for
whoever holds that access:

- [ ] Create the `MosTa-TecH` GitHub Enterprise
- [ ] Create the seven organizations (Mosta-Pharm, EL-DocToOoR, MeGaOcToOoN,
      Eco-StorM, OctoGen, SoLAGeN, MosTa-PiKa)
- [ ] Move existing repositories into the matching organization
- [ ] Publish this repo's README/SECURITY/CONTRIBUTING as the shared governance
      baseline across those organizations
- [ ] Enable Issues, Discussions, Actions, Dependabot, code scanning and secret
      scanning per repository
- [ ] Connect each product's hosting (this site on Netlify; others as decided) and
      point production domains at them
