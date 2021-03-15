const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: './dist/main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
    ],
  },
};