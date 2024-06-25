# Monorepo POC

This repository is a proof of concept for a monorepo setup using Turborepo.

## Getting Started

To get started with this monorepo, clone the repository and install the dependencies:

```sh
git clone <repository-url>
cd Monorepo-POC
pnpm install
```

## What's Inside?

This monorepo includes several applications and packages, structured as follows:

### Apps

- `_template`: A template application for starting new projects.
- `headless-commerce`: A headless commerce application.
- `providing-application`: An application providing various services.

### Packages

- `_template`: A template package for starting new packages.
- `@susu/eslint-config`: ESLint configurations for consistent code style.
- `@susu/typescript-config`: Shared TypeScript configurations.
- `@susu/ui`: A shared UI component library.

Each package and app is fully typed with [TypeScript](https://www.typescriptlang.org/).

### Utilities

The monorepo is equipped with several tools to ensure code quality and ease of development:

- [TypeScript](https://www.typescriptlang.org/) for static type checking.
- [ESLint](https://eslint.org/) for code linting.
- [Prettier](https://prettier.io) for code formatting.
- [Husky](https://typicode.github.io/husky/#/) for Git hooks.

### Build and Development

To build all apps and packages, run:

```sh
pnpm build
```

For development, you can start all apps and packages with:

```sh
pnpm dev
```

### Testing

Run tests across all packages and apps with:

```sh
pnpm test
```

### Remote Caching with Turborepo

Turborepo supports [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines. This feature is useful for sharing build caches with your team and CI/CD pipelines.

To enable Remote Caching, you will need a Vercel account. Follow the instructions in the repository's `README.md` to set up Remote Caching.

## CI/CD

This monorepo is configured with Azure Pipelines for continuous integration and deployment. Check `azure-pipelines.yml` in the `headless-commerce` app for the CI/CD configuration.

## Contributing

Contributions are welcome! Please read the contributing guide in `README.md` for more information on how to get started.

## License

This project is licensed under the MIT License - see the `LICENSE` file for details.
