const path = require('path');
const webpackConf = require('../conf/webpack.common');
const { getSassResources } = require('../conf/webpack-utils');

console.log(getSassResources());

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    { name: '@storybook/addon-docs', options: { configureJSX: true } },
    '@storybook/addon-essentials'
  ],
  webpackFinal: async (config: any) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.resolve = webpackConf.resolve;
    config.module.rules.push({
      test: /\.(scss|sass)$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            indentedSynctax: true,
            additionalData: `$pui-theme: dark;`
          }
        },
        {
          loader: 'sass-resources-loader',
          options: {
            resources: getSassResources()
          }
        }
      ],
      include: path.resolve(__dirname, '../src')
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader']
    });

    return config;
  }
};
