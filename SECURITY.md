# Security Policy

This policy applies to this repository and is intended as the baseline security
policy for all MosTa-TecH organizations and products (Mosta-Pharm, EL-DocToOoR,
MeGaOcToOoN, Eco-StorM, OctoGen, SoLAGeN, MosTa-PiKa).

## Reporting a vulnerability

If you believe you have found a security vulnerability in any MosTa-TecH product:

1. **Do not** open a public issue describing the vulnerability.
2. Report it privately to the maintainers (repository owner/admin contact) with:
   - A description of the vulnerability and its potential impact
   - Steps to reproduce, or a proof of concept
   - Any relevant logs, screenshots, or affected URLs
3. Allow a reasonable time for the report to be triaged before any public disclosure.

Reports involving health or pharmacy data (e.g. El-Bendary Pharmacies, EL-DocToOoR
products) should be flagged as **high priority** given the sensitivity of patient and
prescription information.

## Supported versions

While the ecosystem is in its foundation phase, only the `main` branch of each
repository is supported. As products reach production, this section will be updated
with a version support table per product.

## Scope

In scope:
- Source code in MosTa-TecH organization repositories
- Deployed applications and APIs under MosTa-TecH domains

Out of scope:
- Third-party services and dependencies (report to the upstream project)
- Social engineering, physical security, and denial-of-service testing

## Baseline expectations for every repository

- Dependabot alerts and security updates enabled
- Secret scanning and push protection enabled
- Code scanning enabled where the language is supported
- No secrets or credentials committed to source control; use environment variables
  or a secrets manager instead

## Handling of sensitive data

Products that touch patient, prescription, or payment data (El-Bendary Pharmacies,
pharmos, clinios, medai, healthcare-api) must not log or store sensitive data in
plaintext, and must restrict access to the minimum required for the feature being
built.
