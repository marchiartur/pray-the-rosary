module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
    project: ['./tsconfig.json'],
    emitDecoratorMetadata: true,
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'plugin:@next/next/recommended'
  ],
  plugins: ['react'],
  rules: {
    '@typescript-eslint/key-spacing': 'error',
    "no-use-before-define": ["error", { "variables": false }],
    "@typescript-eslint/key-spacing": "off",
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"]
  },
  settings: {
    "react": {
      "version": "detect"
    }
  },
  globals: {
    JSX: true
  }
}
