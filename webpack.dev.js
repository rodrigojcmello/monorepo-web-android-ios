const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

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
  // externals: { react: 'React', 'react-dom': 'ReactDOM' },
  module: {
    rules: [
      {
        test: /\.([tj])sx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: 'last 1 chrome version' }],
                '@babel/preset-react',
                'module:metro-react-native-babel-preset',
                '@babel/preset-typescript'
              ],
              cacheDirectory: true
            }
          }
        ],
        // include: [/node_modules/]
        // include: [
        //   path.resolve(__dirname, 'src'),
        //   path.resolve(appDirectory, 'index.web.js'),
        //   path.resolve(appDirectory, 'src'),
        //   path.resolve(appDirectory, 'node_modules')
        // ],
        // exclude: [/node_modules/]
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack', 'url-loader']
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
