const path = require('path');
const webpackConf = require('../conf/webpack.common');

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    { name: '@storybook/addon-docs', options: { configureJSX: true } },
    '@storybook/addon-essentials',
    '@storybook/addon-viewport',
    '@storybook/addon-a11y',
    '@storybook/addon-knobs/register'
  ],
  webpackFinal: async (config: any) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    const fs = require('fs');
    let theme = 'default';

    const configPath = path.resolve(__dirname, '../pui.config.js');
    const sassResources = [];
    if (fs.existsSync(configPath)) {
      const puiConfig = require(configPath);
      theme = puiConfig.baseTheme || 'default';
      sassResources.push(path.resolve(__dirname, '../src/styles/themes/' + theme + '.scss'));
      const overrideVars = puiConfig.overrideVars;
      if (overrideVars) {
        let overrideScss = '';
        for (const key in overrideVars) {
          overrideScss += key + ' :' + overrideVars[key] + ';\n';
        }
        fs.writeFileSync('override.scss', overrideScss);
        sassResources.push('override.scss');
      }
    }

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
            indentedSynctax: true
          }
        },
        {
          loader: 'sass-resources-loader',
          options: {
            resources: sassResources
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
