/**
 * @type { import("eslint").Linter.Config }
 */
const config = {
  env: {
    node: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended',
    'plugin:jsdoc/recommended-error',
    'plugin:jsdoc/recommended-typescript',
    'plugin:import/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jsdoc', 'import', 'prefer-arrow'],
  rules: {
    'jsdoc/check-tag-names': 'off',
    'no-console': 'error',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};

module.exports = config;
