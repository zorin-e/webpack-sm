const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.NODE_ENV;
const isDev = mode !== 'production';

module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    port: 3001,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          !isDev ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDev
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[hash].css',
      chunkFilename: '[id].[hash].css'
    })
  ],
  resolve: {
    extensions: ['.js', '.scss']
  },
  mode
}