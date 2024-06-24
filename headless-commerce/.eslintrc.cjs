const javascriptConfiguration = {
  files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
  plugins: [
    "prettier",
    "sonarjs",
    "@typescript-eslint",
    "simple-import-sort",
    "jsx-a11y",
    "react-perf",
  ],
  extends: [
    "plugin:import/errors",
    "plugin:import/warnings",
    "eslint:recommended",
    "next/core-web-vitals",
    "plugin:react-perf/recommended",
    "plugin:jsx-a11y/strict",
    "plugin:sonarjs/recommended",
    "prettier"
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaFeatures: {
      impliedStrict: true,
    },
  },
  rules: {
    "no-console": "error",
    "curly": "error",
    "no-undef": "off",
    // "no-unused-vars": "off",
    // "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        "prefer": "type-imports",
        "fixStyle": "separate-type-imports"
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "import/extensions": "off",
    "import/no-cycle": [ "off" ],
    "import/no-dynamic-require": [ "off" ],
    "import/no-extraneous-dependencies": [ "off" ],
    "import/no-import-module-exports": "off",
    "import/no-unresolved": "off",
    "import/prefer-default-export": "off",
    "import/no-relative-packages": ["warn"],
    "simple-import-sort/exports": [
      "error"
    ],
    "simple-import-sort/imports": [
      "error"
    ],
    "react-perf/jsx-no-new-object-as-prop": [
      "warn"
    ],
    "react-perf/jsx-no-new-array-as-prop": [
      "warn"
    ],
    "react-perf/jsx-no-new-function-as-prop": [
      "warn"
    ],
    "react-perf/jsx-no-jsx-as-prop": [ "warn" ],
  }
}

module.exports = {
  overrides: [javascriptConfiguration]
}