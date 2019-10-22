const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(true)
    }),
    new HtmlWebpackPlugin({ template: './index-dev.html' })
  ],
  devServer: { historyApiFallback: true },
  externals: { react: 'React', 'react-dom': 'ReactDOM' },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    targets: 'last 1 chrome version'
                  }
                ],
                '@babel/preset-react',
                '@babel/preset-typescript'
              ],
              cacheDirectory: true
            }
          }
        ],
        include: [path.resolve(__dirname, 'src')],
        exclude: [/node_modules/]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]'
              }
            }
          },
          'typed-css-modules-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|eot|woff2?|ttf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'assets/[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  }
});
