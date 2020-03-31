module.exports = {
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
    createDefaultProgram: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'prettier', 'import', 'import-helpers'],
  rules: {
    'prettier/prettier': 'error',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',
    'no-await-in-loop': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'error',
    'no-unused-expressions': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        js: 'never',
      },
    ],
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          ['absolute'],
          ['module'],
          ['/^@typings/'],
          ['/^@/'],
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-useless-constructor': 'off',
  },
  settings: {
    'import/extensions': ['.ts', '.js'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.js'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts', '.mjs'],
      },
    },
  },
};
