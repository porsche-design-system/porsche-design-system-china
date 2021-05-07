module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'no-use-before-define': 'off',
    'import/extensions': 'off',
    'prefer-template': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-unresolved': 'off',
    'dot-notation': 'off',
    'arrow-body-style': 'off',
    'no-console': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn'],
    'no-plusplus': 'off',
    'no-param-reassign': 'off',
    'react/destructuring-assignment': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    radix: 'off',
    'no-shadow': 'off',
    'prefer-destructuring': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true }],
    'react/no-array-index-key': 'off',
    'no-nested-ternary': 'off',
    'no-else-return': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'consistent-return': 'off',
    'no-constant-condition': 'off'
  }
}
