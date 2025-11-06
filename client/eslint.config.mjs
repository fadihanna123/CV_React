import _import from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import typescriptEslint from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import editorconfig from 'eslint-plugin-editorconfig';
import { fixupPluginRules } from '@eslint/compat';
import globals from 'globals';
import tsParser from '@typescript-eslint/parser';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ['**/node_modules', '**/storybook-static'],
  },
  {
    files: ['**/*.stories.*'],
    rules: {
      'import/no-anonymous-default-export': 'off',
    },
  },
  ...compat.extends(
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:editorconfig/all',
    'prettier'
  ),
  {
    plugins: {
      import: fixupPluginRules(_import),
      jsdoc,
      '@typescript-eslint': typescriptEslint,
      react,
      editorconfig,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        JSX: 'readonly',
      },

      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    rules: {
      'editorconfig/linebreak-style': 'off',
      '@typescript-eslint/no-var-requires': 'off',

      'prettier/prettier': [
        'off',
        {
          singleQuote: true,
        },
      ],

      '@typescript-eslint/no-unused-vars': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unsafe-call': 'off',
      '@typescript-eslint/restrict-template-expressions': 'off',
      'react/react-in-jsx-scope': 0,
      '@typescript-eslint/no-unsafe-member-access': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/no-misused-promises': 'off',
      '@typescript-eslint/no-unsafe-assignment': 'off',
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      '@typescript-eslint/adjacent-overload-signatures': 'error',

      '@typescript-eslint/array-type': [
        'error',
        {
          default: 'array',
        },
      ],

      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/member-ordering': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-parameter-properties': 'off',

      '@typescript-eslint/no-shadow': [
        'error',
        {
          hoist: 'all',
        },
      ],

      '@typescript-eslint/no-unused-expressions': 'error',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',

      '@typescript-eslint/triple-slash-reference': [
        'error',
        {
          path: 'always',
          types: 'prefer-import',
          lib: 'always',
        },
      ],

      '@typescript-eslint/unified-signatures': 'error',

      'brace-style': [
        'error',
        '1tbs',
        {
          allowSingleLine: false,
        },
      ],

      'comma-dangle': 'off',
      complexity: 'off',
      'constructor-super': 'error',
      curly: 'error',
      'dot-notation': 'error',
      'eol-last': 'off',
      eqeqeq: ['error', 'smart'],
      'guard-for-in': 'error',
      'id-denylist': [
        'error',
        'any',
        'number',
        'string',
        'boolean',
        'Undefined',
        'undefined',
      ],
      'id-match': 'error',
      'import/order': 'off',
      'jsdoc/check-alignment': 'error',
      'jsdoc/check-indentation': 'error',
      'max-classes-per-file': ['error', 10],
      'max-len': 'off',
      'new-parens': 'error',
      'no-bitwise': 'off',
      'no-caller': 'error',
      'no-cond-assign': 'error',
      'no-debugger': 'error',
      'no-empty': 'error',
      'no-empty-function': 0,
      'no-eval': 'error',
      'no-fallthrough': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',
      'no-invalid-this': 'off',
      'no-new-wrappers': 'error',
      'no-throw-literal': 'error',
      'no-trailing-spaces': 'error',
      'no-undef-init': 'error',
      'no-unsafe-finally': 'error',
      'no-unsafe-member-access': 'off',
      'no-unused-expressions': 'error',
      'no-unused-labels': 'error',
      'no-use-before-define': 'off',
      'no-var': 'error',
      'object-curly-newline': 'error',
      'object-shorthand': 'off',
      'one-var': ['error', 'never'],
      'prefer-const': 'error',
      quotes: ['warn', 'single'],
      radix: 'error',
      semi: 'error',

      'spaced-comment': [
        'error',
        'always',
        {
          markers: ['/'],
        },
      ],

      'use-isnan': 'error',
      'valid-typeof': 'off',
      'no-undef': 'off',
    },
  },
];
