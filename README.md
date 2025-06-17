# `lcore-shared`

This repository is part of the IoT-L{CORE} SDK and is structured as a monorepo to hold shared TypeScript/JavaScript packages.

## Purpose in the Broader Architecture

The `lcore-shared` repository is designed to provide common utilities, type definitions, and configurations across different components of the IoT-L{CORE} ecosystem, particularly for front-end applications, Node.js services, and testing frameworks.

It is intended to contain NPM packages such as:
- `@lcore/types`: Shared data structures and API type definitions.
- `@lcore/utils`: Common utility functions.
- `@lcore/crypto`: Cryptographic helpers for client-side operations.
- `@lcore/config`: Shared configuration constants and loaders.

## Role in the Current MVP

In the context of the current Rust-based `lcore-node-mvp`, this repository **does not have a direct build dependency**. The MVP is self-contained and does not consume any packages from this repository.

`lcore-shared` currently serves as a foundational piece for future development, such as:
- Building a web-based dashboard to visualize data from the `lcore-node-mvp`.
- Creating Node.js-based services for monitoring or data aggregation.
- Developing automated end-to-end testing suites in TypeScript.
