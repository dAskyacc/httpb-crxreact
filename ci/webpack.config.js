const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs-extra');

const { context, R, join, src, dist } = require('./paths');
const { fileExtensions, entryInfo } = require('./utils');

const warpperEnv = require('../config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NullWebpackPlugin = require('./null-webpack-plugin');

const ASSET_PATH = process.env.ASSET_PATH || '/';
const targetBrowser = warpperEnv.TARGET_BROWSER || 'chrome';

/**
 *
 */
var alias = {
  '~': src,
  '~Log': R(src, 'lib/log'),
  '~Lib': R(src, 'lib'),
  '~Assets': R(src, 'assets'),
  '~Store': join(src, 'store'),
  '~P3': join(src, 'views/p3'),
  '~Pages': join(src, 'pages'),
  '~UI': join(src, 'ui'),
  '~Widgets': join(src, 'ui/widgets'),
  'react-dom': '@hot-loader/react-dom',
};
const NODE_MODE = process.env.NODE_ENV || 'development';
const DEV_DEBUG = process.env.DEV_DEBUG;
var secretsPath = join(__dirname, '.local/secrets.' + NODE_MODE + '.js');

if (fs.existsSync(secretsPath)) {
  alias['localenv'] = secretsPath;
}

const copyPlugins = [
  // manifest
  new CopyWebpackPlugin({
    patterns: [
      {
        from: R(src, 'manifest.json'),
        to: R(dist, targetBrowser),
        force: true,
        transform: function (content, path) {
          // console.log('>>>>>>>>>>>>>>>>>', warpperEnv.APP_VERSION);
          let manifestJson = JSON.parse(content.toString());

          if (process.env.NODE_ENV === 'development') {
            manifestJson['content_security_policy'] = {
              extension_pages: "script-src 'self'; object-src 'self';",
            };
          }

          return Buffer.from(
            JSON.stringify(
              {
                ...manifestJson,
                version: warpperEnv.APP_VERSION,
              },
              null,
              2
            )
          );
        },
      },
    ],
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: R(src, 'assets/icons'),
        to: R(dist, targetBrowser, 'icons'),
        force: true,
      },
    ],
  }),
];

const htmlPlugins = [
  new HtmlWebpackPlugin({
    template: R(src, 'Popup', 'index.html'),
    filename: 'popup.html',
    chunks: ['popup/popup'],
    cache: false,
    inject: 'body',
  }),
  new HtmlWebpackPlugin({
    template: R(src, 'Options', 'index.html'),
    filename: 'options.html',
    chunks: ['options/options'],
    cache: false,
    inject: 'body',
  }),
];

var options = {
  context: context,
  mode: NODE_MODE,
  entry: entryInfo.entry,
  output: {
    path: R(dist, targetBrowser),
    clean: true,
    pathinfo: true,
    filename: '[name].bundle.js',
    publicPath: ASSET_PATH,
  },
  module: {
    rules: [
      {
        test: new RegExp('.(' + fileExtensions.join('|') + ')$'),
        loader: 'url-loader',
        options: {
          name: '[name].[ext]',
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(ts|tsx)$/,
        // loader: 'ts-loader',
        use: ['react-hot-loader/webpack', 'babel-loader'], // 按需加载
        // exclude: /node_modules/,
      },

      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'source-map-loader',
          },
          {
            loader: 'babel-loader',
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    alias: alias,
    extensions: fileExtensions
      .map((extension) => '.' + extension)
      .concat([
        '.js',
        '.jsx',
        '.ts',
        '.tsx',
        '.css',
        '.sass',
        '.scss',
        '.less',
      ]),
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEBUG__: JSON.stringify(DEV_DEBUG),
    }),
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
      cleanStyleWebpackAssets: true, // Automatically remove all unused webpack assets on rebuild
      cleanOnceBeforeBuildPatterns: [],
    }),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    process.env.NODE_ENV === 'production'
      ? new MiniCssExtractPlugin()
      : new NullWebpackPlugin(),
    ...copyPlugins,
    ...htmlPlugins,
  ],
};

// if (warpperEnv.NODE_ENV === 'development') {
//   options.devtool = 'cheap-module-source-map';
// } else {
//   options.optimization = {
//     minimize: false,
//     minimizer: [],
//   };
// }

module.exports = options;
