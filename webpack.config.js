var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
          test: /\.css$/,
          loaders: [
              'style-loader',
              'css-loader?importLoaders=1',
              'postcss-loader'
          ]
      },
      {
        test: /\.(png|jpg)$/,
        loader: "file-loader"
      }
    ]
  },
  sassLoader: {
    includePaths: [path.resolve(__dirname, "./assets/stylesheets"), path.resolve(__dirname, "./assets/scripts")]
  }
};
