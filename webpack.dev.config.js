// ESLint rules per file start
/* eslint-disable no-console */
// ESLint rules per file end

const path = require('path');
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// suppress reason: ESLint cant identifier inner lvl webpack config file
const { getTimestamp } = require('./config_utils/config-utils');
// getTimestamp function import

console.log('Using webpack.dev.config.js.');

module.exports = (env) => {
// module.exports = {
  // Use env.<YOUR VARIABLE> here:
  // noinspection JSUnresolvedVariable
  const noCssInJs = env.no_css_in_js === 'true';
  console.log({ noCssInJs });
  // console.log('env.no_css_in_js = : ', no_css_in_js);
  // console.log({ env });

  const styleLoaderOrMiniCssExtractPluginLoader = noCssInJs
    ? MiniCssExtractPlugin.loader
    : 'style-loader';

  return {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
      static: './dist',
      open: false,
      client: {
        overlay: false,
        progress: true,
      },
    },
    output: {
      filename: '[name].[contenthash:8].js',
      chunkFilename: '[name].chunk.js',
      path: path.resolve(__dirname, 'dist', getTimestamp()),
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'pages/index.html',
        minify: false,
      }),
      new MiniCssExtractPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            styleLoaderOrMiniCssExtractPluginLoader,
            'css-loader',
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
          generator: {
            filename: '[name].[hash][ext]',
          },
        },
      ],
    },
    optimization: {
      minimize: false,
      runtimeChunk: 'single',
    },
  };
};
