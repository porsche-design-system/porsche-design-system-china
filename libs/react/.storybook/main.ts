const path = require('path');
const { getSassResources } = require('../conf/webpack-utils');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [{ name: '@storybook/addon-docs', options: { configureJSX: true } }],
  webpackFinal: config => {
    config.module.rules.push(
      {
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
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      }
    );

    return config;
  }
};
