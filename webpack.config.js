const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: ['@babel/polyfill', './src/js/index.js', './src/style/main.scss'],
  output: {
    path: path.join(__dirname, 'dist'),
    // publicPath: '/dist/',
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Resume',
      template: path.join(__dirname, './src/index.html'),
      inject: true,
      showErrors: true,
      cache: true, //변경된경우에
      filename: path.join(__dirname, './dist/index.html'),
      meta: {
        charset: {
          charset: 'utf-8'
        },
        viewport: 'width=device-width, initial-scale=1'
      },
    })
  ],
  target: "web",
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      include: path.resolve(__dirname, 'src/js'),
      exclude: /(node_modules)|(dist)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 8000,
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
};