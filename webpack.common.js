const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-native$': 'react-native-web'
    }
  }
};
