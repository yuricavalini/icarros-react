const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');

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
  // https://github.com/mrsteele/dotenv-webpack#properties
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      path: path.join(__dirname, './.env'),
      safe: true,
      allowEmptyValues: true,
      systemvars: true,
    }),
  ],
};
