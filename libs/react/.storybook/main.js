const webpackConf = require('../conf/webpack.common');

module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
    { name: '@storybook/addon-docs', options: { configureJSX: true } },
    '@storybook/addon-a11y',
    '@storybook/addon-storysource',
  ],
  webpackFinal: async config => {
    config.resolve = webpackConf.resolve;
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          // loader: require.resolve('react-docgen-typescript-loader'),
          loader: 'ts-loader',
            options: {
              transpileOnly: true,
            },
        },
      ],
    });
    return config;
  },
};
