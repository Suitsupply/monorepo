# Headless Commerce

This is a repository for Suitsupply Headless Commerce application.

# Required tools and respective versions

"node": 18.15.0
"pnpm": 7.26.0
"next": "13.2.4",
"react": "18.2.0",

# Getting Started

Install the dependencies

```bash
pnpm install
```

Setup Vercel configuration

```bash
pnpm i -g vercel
vercel login (select the relevant team and project)
vercel link  (select Suitsupply Team - 2 second in a list then put "headless-ecommerce" for project name)
vercel env pull .env.local (this will create a .env.development.local file with environment variables)
```

Start the development server

```bash
npm run dev
```

Run the production build

```bash
npm run build
```

Start the production server

```bash
npm run start
```

Application is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Tests

This is how to generate tests with Github Copilot. If you come across a better prompt imput, please improve it:

```
@workspace /test Generate vitest unit tests for this code. Make sure all possible permutations are tested. Use the 'describe', 'it' and 'expect' functions from the vitest module to build a tree of tests. You cannot use the 'test' function. Use the 'vi' object from vitest to do mocks. This is the documentation on how to do that: https://vitest.dev/guide/mocking.html#functions. Use the 'vi.spyOn' function to create spies for functions on objects and 'vi.fn' for functions. Be sure to include an 'afterEach' that calls 'vi.restoreAllMocks()'.
```

```
@workspace /test Generate vitest unit tests for this code. Make sure all possible permutations are tested. Use the 'describe', 'it' and 'expect' functions from the vitest module to build a tree of tests. You cannot use the 'test' function.
```
