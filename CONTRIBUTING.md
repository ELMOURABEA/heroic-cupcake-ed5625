# Contributing to MosTa-TecH

Thanks for contributing. This guide applies to this repository and is intended as
the shared baseline for every MosTa-TecH organization and product.

## Ground rules

- Be respectful and constructive in issues, discussions, and reviews.
- Prefer small, focused pull requests over large ones — they're easier to review
  and safer to ship.
- Write commit messages and PR descriptions that explain *why* a change was made,
  not just what changed.

## Getting started

```bash
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:3000`. See [AGENTS.md](./AGENTS.md) for the
project structure and conventions, and [PLAN.md](./PLAN.md) for the current roadmap.

## Making a change

1. Open an issue first for anything beyond a small fix, so the approach can be
   discussed before code is written.
2. Create a branch from `main` named `feature/<short-description>` or
   `fix/<short-description>`.
3. Keep changes scoped to the issue at hand — avoid unrelated refactors in the same
   pull request.
4. Make sure the project builds locally before opening a pull request.
5. Open the pull request against `main` and describe what changed and why.

## Code style

- TypeScript strict mode; avoid `any` where a real type is available.
- Follow the existing conventions in the file/directory you're editing rather than
  introducing a new pattern.
- Keep sample/stub data in `src/data/` separate from route and component code.

## Reporting bugs

Open an issue with:
- What you expected to happen
- What actually happened
- Steps to reproduce

## Reporting security issues

Do not open a public issue for security vulnerabilities — see
[SECURITY.md](./SECURITY.md) for how to report them privately.
