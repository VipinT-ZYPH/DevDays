# Copilot instructions for DevDays

## Repository status

This repository is currently an initial scaffold. The only tracked project file is
`README.md`, which contains the project title. No application source, dependency
manifest, build configuration, test suite, lint configuration, or additional
AI-assistant instructions are currently present.

## Build, test, and lint

There are no build, test, or lint commands defined yet. Do not assume a language,
framework, package manager, or test runner. When implementation files and their
tooling are added, update this document with the exact repository commands,
including the command and selector needed to run one test.

## Architecture

There is no implemented runtime architecture yet. The repository is a
documentation-only starting point centered on `README.md`; future sessions
should inspect the current tree and project manifests before choosing an
implementation approach.

## Repository-specific conventions

No project-specific coding, naming, module, testing, or documentation conventions
have been established beyond the existing README title. Add conventions here
only when they are supported by the repository's implementation or authoritative
project documentation, and keep this file synchronized when the project tooling
or architecture changes.


- Every exported function should have a TSDoc comment describing its purpose, parameters, and return value.
- Before imports or any code, add a comment block to the file that explains its purpose.