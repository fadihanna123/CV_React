// @ts-check

/**
 * @type { import("eslint").Linter.Config }
 */
const config = {
  env: {
    node: true,
    es2023: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsdoc/recommended',
    'plugin:jsdoc/recommended-error',
    'plugin:jsdoc/recommended-typescript',
    'plugin:import/recommended',
    'prisma',
    'plugin:editorconfig/all',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'jsdoc', 'import', 'editorconfig'],
  rules: {
    'jsdoc/check-tag-names': 'off',
    'no-console': 'warn',
    indent: ['warn', 2],
    quotes: ['warn', 'single'],
    semi: ['warn', 'always'],
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
  },
};

module.exports = config;
