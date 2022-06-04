const path = require('path')

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [{ name: '@storybook/addon-docs', options: { configureJSX: true } }],
  webpackFinal: (config: any) => {
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
          }
        ],
        include: path.resolve(__dirname, '../src')
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      }
    )

    return config
  }
}
