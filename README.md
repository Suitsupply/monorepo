# Monorepo

This repository hosts multiple applications and packages managed with [NX](https://nx.dev) and [PNPM](https://pnpm.io), and is deployed on [Vercel](https://vercel.com). We use [Next.js](https://nextjs.org) for our applications.

## Technologies Used

- [NX](https://nx.dev) - Smart, Extensible Build Framework
  - [NX Documentation](https://nx.dev/getting-started/intro)
- [PNPM](https://pnpm.io) - Fast, disk space efficient package manager
  - [PNPM Documentation](https://pnpm.io/motivation)
- [Next.js](https://nextjs.org) - React Framework
  - [Next.js Documentation](https://nextjs.org/docs)
- [Github](https://github.com) - Source Code Management
  - [Github Documentation](https://docs.github.com/en)
- [Vercel](https://vercel.com) - Deployment and Hosting Platform
  - [Vercel Documentation](https://vercel.com/docs)

## Getting Started

### Clone the repository

Choose a method for cloning the repository:

1. HTTPS

   ```sh
   git clone https://github.com/Suitsupply/monorepo.git
   ```

1. SSH

   ```sh
   git clone git@github.com:Suitsupply/monorepo.git
   ```

1. GitHub CLI
   ```sh
   gh repo clone Suitsupply/monorepo
   ```

### Install dependencies

```sh
pnpm install
```

### Lint, Test, Build

```sh
# To lint all apps and packages, run:
pnpm lint
# To test all apps and packages, run:
pnpm test
# To build all apps and packages, run:
pnpm build
```

Since NX is set up to run tests and lints as dependencies of build steps, you can also just run the `pnpm build` command and it will perform all the required steps. Any steps that have already been run will be cached and skipped.

## Adding a package

### Copy the package template

To add a new package, use the example package template provided in `packages/_template`:

```sh
cp -R packages/_template packages/mypackage
```

### Update the package name

Then, update the `package.json` and `project.json` replace `@susu/package-template` with your package name.

### Run Install

```sh
pnpm install
```

### Build the package

```sh
pnpm nx run @susu/mypackage:build
```

## Adding an application

### Copy the application template

To add a new application, use the example template provided in `apps/_template`:

```sh
cp -R apps/_template apps/myapp
```

### Update the application name

Then, update the `package.json` and `project.json` replace `@susu/application-template` with your application name.

### Run Install

```sh
pnpm install
```

### Build the application

```sh
pnpm nx run @susu/myapp:build
```

## Deploying

### Vercel

#### Creating a New Vercel Project

1. Go to [Vercel](https://vercel.com/).
1. Click on `New Project`.
1. Import your repository.

#### Vercel Project Configuration

1. Go to https://vercel.com/suitsupply-team/monorepo-myapp/settings/general.
1. Set the Build Command to `pnpm nx run @susu/myapp:build`.
1. Set the Install Command to `pnpm install`.
1. Set the Root Directory to `apps/myapp`.

#### Vercel Git Configuration

1. Go to https://vercel.com/suitsupply-team/monorepo-myapp/settings/git
1. Scroll down to the Ignored Build Step section.
1. Set the Behaviour to "Custom".
1. Set the Custom Build Step to `npx nx-ignore @susu/myapp`. This will ignore the build step for the application when there is no change.

### Github

1. Go to https://github.com/Suitsupply/monorepo/settings/rules.
1. For each of the environments `release`, `acceptance`, and `testing`:
1. Go to Rules > Branch Protections > Require deployments to succeed.
1. Add the `Preview - monorepo-myapp` environment to the list of required environments. Now, when a PR is made, the PR can only be merged when your application's preview branch has successfully deployed. The `nx-ignore` command will prevent unnecessary builds but when you update some code that breaks someone else's application, you will get immediate feedback.
