/* eslint-disable import/no-extraneous-dependencies */

// https://stackoverflow.com/questions/40096470/get-webpack-not-to-bundle-files

const path = require('path');
const DeclarationBundlerPlugin = require('declaration-bundler-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const { getSassResources } = require('./webpack-utils');

module.exports = {
  entry: {
    'shared/class-util': './src/shared/class-util.ts',
    'kits/button/button': './src/kits/button/button.tsx',
    'kits/input/input': './src/kits/input/input.tsx',
    'kits/row/row': './src/kits/row/row.tsx',
    'kits/test/test': './src/kits/test/test.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.sass', '.scss']
  },
  output: {
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: getSassResources()
            }
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|ico)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: '6024'
            }
          }
        ]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(csv|tsv)$/,
        use: ['csv-loader']
      },
      {
        test: /\.xml$/,
        use: ['xml-loader']
      },
      /**
       * Without any configuration options, babel-preset-env behaves exactly the same as:
       * babel-preset-latest
       * (or babel-preset-es2015, babel-preset-es2016, and babel-preset-es2017 together).
       */
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          },
          {
            loader: 'ts-loader',
            options: {
              // transpile only in happyPack mode
              // type checking is done via fork-ts-checker-webpack-plugin
              onlyCompileBundledFiles: true
              // must override compiler options here, even though we have set
              // the same options in `tsconfig.json`, because they may still
              // be overriden by `tsconfig.json` in node_modules subdirectories.
            }
          }
        ]
      }
    ]
  },
  plugins: [new CleanWebpackPlugin(['./dist']), new MiniCssExtractPlugin()]
};
