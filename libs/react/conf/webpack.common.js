const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    dark: './src/dark.js',
    light: './src/light.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.sass', '.scss'],
    // modules: [path.join(__dirname, './src'), 'node_modules'],
    alias: {
      '@src': path.resolve(__dirname, 'src'),
      '@kits': path.resolve(__dirname, 'src/kits'),
      '@styles': path.resolve(__dirname, 'src/styles')
    }
  },
  output: {
    filename: '[name].js',
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
          'sass-loader'
        ]
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
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
        // exclude: [/\.spec.tsx?$/],
        use: [
          'thread-loader',
          'babel-loader',
          {
            loader: 'ts-loader',
            options: {
              // transpile only in happyPack mode
              // type checking is done via fork-ts-checker-webpack-plugin
              happyPackMode: true,
              transpileOnly: true,
              // must override compiler options here, even though we have set
              // the same options in `tsconfig.json`, because they may still
              // be overriden by `tsconfig.json` in node_modules subdirectories.
              compilerOptions: {
                esModuleInterop: false,
                importHelpers: false,
                module: 'esnext',
                target: 'esnext'
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'PUI: Porsche Digital China UI: others',
      template: 'index.html'
    }),
    // new ExtractTextPlugin({
    //   filename: getPath => {
    //     return 'style.css'
    //   },
    //   allChunks: true,
    // }),
    new MiniCssExtractPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
