const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    { name: '@storybook/addon-docs', options: { configureJSX: true } },
    '@storybook/preset-scss'
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite'
  },
  features: {
    storyStoreV7: true
  },
  staticDirs: ['../public'],
  env: config => ({
    ...config,
    NODE_ENV: 'production'
  })
}
