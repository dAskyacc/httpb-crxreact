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
  BaseSrc: src,
  Lib: R(src, 'libs'),
  Assets: R(src, 'assets'),
  'react-dom': '@hot-loader/react-dom',
};
const NODE_MODE = process.env.NODE_ENV || 'development';
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
          console.log('>>>>>>>>>>>>>>>>>', warpperEnv.APP_VERSION);
          return Buffer.from(
            JSON.stringify(
              {
                ...JSON.parse(content.toString()),
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
    template: R(src, 'pages', 'Popup', 'index.html'),
    filename: 'popup.html',
    chunks: ['popup/popup'],
    cache: false,
    inject: 'body',
  }),
  new HtmlWebpackPlugin({
    template: R(src, 'pages', 'Options', 'index.html'),
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
      // {
      //   test: /\.(sa|sc|c)ss$/,
      //   use: [
      //     {
      //       loader: 'style-loader', // js css 生成style节点
      //     },
      //     {
      //       loader: 'css-loader', // 将CSS转化成ComminJS模块
      //     },
      //     {
      //       loader: 'resolve-url-loader', // 置于 loader 链中的 sass-loader 之前，就可以重写 url ,解决url()
      //     },
      //     {
      //       loader: 'sass-loader', //将Sass 编译成CSS
      //       options: {
      //         sourceMap: true,
      //         implementation: require('sass'),
      //         sassOptions: {
      //           fiber: require('fibers'),
      //         },
      //       },
      //     },
      //   ],
      // },
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
        loader: 'ts-loader',
        exclude: /node_modules/,
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
