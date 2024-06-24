import base from '../../eslint.base.config.js';

export default [
  {
    ignores: ['coverage/**', 'gql/generated/**/*', '.next/**/*'],
  },
  ...base,
  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
      },
    },
  },
];
