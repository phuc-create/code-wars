module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    indent: 'off',
    'template-curly-spacing': 'off',
    camelcase: 'off',
    'no-return-assign': 'off',
    'one-var': 'off',
    'no-prototype-builtins': 'warn',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'space-unary-ops': 2,
    'no-undef': 'off',
    'func-names': 'off',
    'no-console': 'off',
    'max-classes-per-file': 'off',
    'no-func-assign': 'off',
    'no-restricted-syntax': 'off',
  },
}
