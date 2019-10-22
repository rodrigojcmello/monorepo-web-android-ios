const path = require('path');

module.exports = {
  entry: './src/App.tsx',
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: { extensions: ['.tsx', '.ts', '.js'] }
};
