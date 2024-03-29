// @ts-check
/**
 * @type { import("eslint").Linter.Config }
 */
const config = {
  env: {
    browser: true,
    es2023: true,
  },
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:storybook/recommended',
    'plugin:editorconfig/all',
    'prettier',
  ],
  globals: {
    JSX: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-jsdoc',
    '@typescript-eslint',
    'react',
    'editorconfig',
  ],
  rules: {
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
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Object: {
            message: 'Avoid using the `Object` type. Did you mean `object`?',
          },
          Function: {
            message:
              'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
          },
          Boolean: {
            message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
          },
          Number: {
            message: 'Avoid using the `Number` type. Did you mean `number`?',
          },
          String: {
            message: 'Avoid using the `String` type. Did you mean `string`?',
          },
          Symbol: {
            message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
          },
        },
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
    'no-underscore-dangle': 'error',
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
};
module.exports = config;
