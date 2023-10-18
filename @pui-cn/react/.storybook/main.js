import { dirname, join } from 'path'
const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],

  addons: [
    { name: '@storybook/addon-docs', options: { configureJSX: true } },
    getAbsolutePath('@storybook/preset-scss'),
    getAbsolutePath('@storybook/addon-essentials')
  ],

  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {}
  },

  features: {
    storyStoreV7: true
  },

  staticDirs: ['../public'],

  env: config => ({
    ...config,
    NODE_ENV: 'production'
  }),

  docs: {
    autodocs: true
  }
}

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}
