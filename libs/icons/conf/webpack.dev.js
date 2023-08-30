const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  // devtool: 'inline-source-map',
  entry: {
    icons: './src/index.js',
    test: './src/test.js',
  },
  devServer: {
    contentBase: '../dist',
    hot: true,
  },
  plugins: [
    // equivalent to "mode: 'production' and is part of '-p'"
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
  ],
})
