module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_'
      }
    ],
    quotes: ['error', 'single', { avoidEscape: true }],
    strict: ['error', 'global'],
    'space-before-function-paren': ["error", {
      "anonymous": "never",
      "named": "never",
      "asyncArrow": "always"
    }],
    '@typescript-eslint/no-explicit-any': false,
    'no-use-before-define': ['error', { 'functions': false, 'classes': false, 'variables': false }],
    '@typescript-eslint/no-use-before-define': ['error', { 'functions': false, 'classes': false, 'variables': false }],
  }
};
