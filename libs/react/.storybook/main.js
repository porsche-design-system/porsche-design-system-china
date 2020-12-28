const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  stories: ['../src/**/*.stories.(tsx|mdx)', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/preset-typescript',
    'storybook-addon-jsx',
    '@storybook/addon-knobs/register',
    'storybook-addon-paddings',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-knobs',
    { name: '@storybook/addon-docs', options: { configureJSX: true } },
    '@storybook/addon-a11y',
    '@storybook/addon-storysource'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.(scss|sass)$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../')
    });
    return config;
  }
};

// const webpackConf = require('../conf/webpack.common');

// module.exports = {
//   stories: ['../src/**/*.stories.(tsx|mdx)', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
//   addons: [
//     '@storybook/preset-create-react-app',
//     '@storybook/addon-actions',
//     '@storybook/addon-links',
//     '@storybook/addon-viewport',
//     '@storybook/addon-knobs',
//     { name: '@storybook/addon-docs', options: { configureJSX: true } },
//     '@storybook/addon-a11y',
//     '@storybook/addon-storysource',
//   ],
//   webpackFinal: async config => {
//     config.resolve = webpackConf.resolve;
//     config.module.rules.push({
//       test: /\.(ts|tsx)$/,
//       use: [
//         {
//           // loader: require.resolve('react-docgen-typescript-loader'),
//           loader: 'ts-loader',
//             options: {
//               transpileOnly: true,
//             },
//         },
//       ],
//     });
//     return config;
//   },
// };
