/* eslint-disable sonarjs/no-duplicate-string */
import type { CodegenConfig } from '@graphql-codegen/cli';
import dotEnv from 'dotenv';
import { existsSync } from 'fs';

dotEnv.config();

const hasEnvVars = Boolean(process.env.NEXT_PUBLIC_NODE_ENV);

if (!hasEnvVars) {
  const localFile = './.env.local';

  // TODO: This should be dynamic (recieve argument from execution?)
  const vercelEnv = 'development';
  const vercelFile = `./.vercel/.env.${vercelEnv}.local`;

  if (!existsSync(vercelFile) && !existsSync(localFile)) {
    throw new Error(`\
  No environment file found
  tried:
  - ${localFile}
  - ${vercelFile}

  Please run vercel pull to get the file
`);
  }

  const envConfigFile = existsSync(localFile) ? localFile : vercelFile;

  dotEnv.config({ path: envConfigFile });
}

const ENVIRONMENT = process.env.NEXT_PUBLIC_NODE_ENV;

const CONTENTFUL_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;
const CONTENTFUL_SPACE = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const CONTENTFUL_END_POINT = process.env.NEXT_PUBLIC_CONTENTFUL_ENDPOINT;

const CONTENTFUL_URL = `${CONTENTFUL_END_POINT}/content/v1/spaces/${CONTENTFUL_SPACE}/environments/${ENVIRONMENT}`;
const COMMERCE_URL = process.env.NEXT_PUBLIC_PRODUCT_ENDPOINT as string;

const fragmentMatcherPlugin = 'fragment-matcher';
const nearOperationFilePreset = 'near-operation-file';
const graphqlBaseTypesPath = '~./graphql';

const typescriptOperationsConfig = {
  arrayInputCoercion: true,
  avoidOptionals: true,
  preResolveTypes: false,
  onlyOpertionTypes: false,
  skipTypename: true,
  useTypeImports: true,
  emitLegacyCommonJSImports: false,
  extractAllFieldsToTypes: true,
  printFieldsOnNewLines: true,
};

const config: CodegenConfig = {
  overwrite: true,
  documents: ['src/gql/fragments/**/*.graphql', 'src/gql/mutations/**/*.graphql', 'src/gql/queries/**/*.graphql'],
  schema: [
    {
      [CONTENTFUL_URL]: {
        headers: { Authorization: `Bearer ${CONTENTFUL_TOKEN}` },
      },
    },
    {
      [COMMERCE_URL]: {
        headers: { Authorization: '' },
      },
    },
  ],
  generates: {
    'schema.graphql': { plugins: ['schema-ast'] },
    'src/gql/generated/schema.graphql': { plugins: ['schema-ast'] },
    'src/gql/generated/graphql.ts': { plugins: ['typescript', fragmentMatcherPlugin] },
    'src/gql/generated/fragments.json': { plugins: ['introspection'] },

    // Used with Server Components
    'src/gql/generated/operations.ts': {
      preset: nearOperationFilePreset,
      presetConfig: {
        extension: '.operation.ts',
        baseTypesPath: graphqlBaseTypesPath,
        folder: '../generated',
      },
      plugins: ['typescript-operations', fragmentMatcherPlugin],
      config: typescriptOperationsConfig,
    },

    // Used with Server Components
    'src/gql/generated/documentNodes.ts': {
      preset: nearOperationFilePreset,
      presetConfig: {
        extension: '.documentNode.ts',
        baseTypesPath: graphqlBaseTypesPath,
        folder: '../generated',
      },
      plugins: ['typescript-document-nodes'],
      config: {
        nameSuffix: 'Document',
        documentMode: 'documentNodeImportFragments',
      },
    },

    // Used with Client Components
    'src/gql/generated/urql.ts': {
      preset: nearOperationFilePreset,
      presetConfig: {
        extension: '.urql.tsx',
        baseTypesPath: graphqlBaseTypesPath,
        folder: '../generated',
      },
      plugins: ['typescript-operations', 'typescript-urql', fragmentMatcherPlugin],
      config: {
        ...typescriptOperationsConfig,
        documentMode: 'documentNodeImportFragments',

        // TODO: This didn't work. Error in the plugin. Maybe it will work in
        // the future and we can get the operation from the operation file.
        // documentMode: 'external',
        // importDocumentNodeExternallyFrom: 'near-operation-file',
        // importOperationTypesFrom: 'Operations',
      },
    },
  },
};

export default config;
