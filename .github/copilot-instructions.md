# Copilot instructions for DevDays

## Repository status

This repository contains a Vite + React + TypeScript games catalogue. Publisher
data access remains in `src/lib/publishers.ts`; client-side game records and
publisher filtering are defined in `src/lib/games.ts`.

## Build, test, and lint

Install dependencies with `npm install`.

- Development server: `npm run dev`
- Production build: `npm run build`
- Full test suite: `npm test`
- One test file: `npm test -- src/lib/games.test.ts`

## Architecture

The browser entry point is `src/main.tsx`, which renders `src/App.tsx`. The
games filter is a pure function so it can be tested independently of the UI.

## Repository-specific conventions

No project-specific coding, naming, module, testing, or documentation conventions
have been established beyond the existing README title. Add conventions here
only when they are supported by the repository's implementation or authoritative
project documentation, and keep this file synchronized when the project tooling
or architecture changes.


- Every exported function should have a TSDoc comment describing its purpose, parameters, and return value.
- Before imports or any code, add a comment block to the file that explains its purpose.

## Contribution workflow

Before filing an issue, creating a branch, generating commits, pushing changes,
or opening a pull request, search the repository guidance and relevant history
first. Follow the repository conventions, keep changes focused, run the
appropriate validation commands, and do not create contribution artifacts until
the requested scope and current branch state have been confirmed.
