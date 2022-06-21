const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');
const { definitions } = new Dotenv();

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main-bundle-[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      '@': path.join(__dirname, 'src'),
    },
  },
  // https://github.com/mrsteele/dotenv-webpack/issues/121#issuecomment-389627452
  plugins: [new CleanWebpackPlugin(), new webpack.DefinePlugin({ ...definitions })],
};
