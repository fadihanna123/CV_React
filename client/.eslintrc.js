/**
 * @type { import("eslint").Linter.Config }
 */
const config = {
  env: {
    browser: true,
    es2022: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended',
    'plugin:jsdoc/recommended-error',
    'plugin:import/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jsdoc',
    'import',
    'prefer-arrow',
    'html',
  ],
  rules: {
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'jsdoc/require-param-description': 'off',
    'no-console': 'error',
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'no-undef': 'off',
  },
};

module.exports = config;
