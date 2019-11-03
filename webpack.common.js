const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json', '.web.js', '.web.ts'],
    alias: {
      'react-content-loader/native$': 'react-content-loader-wrapper',
      'react-content-loader-wrapper': 'react-content-loader',
      'react-native$': 'react-native-web'
    }
  }
};
