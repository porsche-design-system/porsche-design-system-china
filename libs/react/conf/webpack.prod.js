const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  // mode: 'development',
  // devtool: 'cheap-module-eval-source-map',

  output: {
    filename: '[name].js',
    library: '@pui/react',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, '../dist'),
  },
  externals: {
    axios: 'axios',
    react: {
      // /^react\/.+$/,
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'react',
      root: 'react',
    },
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
    webpack: {
      commonjs: 'webpack',
      commonjs2: 'webpack',
      amd: 'webpack',
      root: 'webpack',
		},
		'react-router-dom': 'react-router-dom'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'style',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
      },
    },
    minimizer: [
      // loads UglifyJSPlugin which was first introduced by the tree shaking guide:
      // https://webpack.js.org/guides/tree-shaking
      new UglifyJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  // easy running benchmark tests
  // devtool: 'source-map',
  // Avoid inline-*** and eval-*** use in production as
  // they can increase bundle size and reduce the overall performance.
  plugins: [
    // equivalent to "mode: 'production' and is part of '-p'"
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[name].css',
    }),
  ],
  // TODO:
  // module: {
  //   rules: [{
  //     // This plugin should be used only :
  //     // on production builds without style-loader in the loaders chain
  //     test: /\.s?[ac]ss$/,
  //     use: [
  //       MiniCssExtractPlugin.loader,
  //       'css-loader',
  //       'sass-loader',
  //     ],
  //   }]
  // }
})
