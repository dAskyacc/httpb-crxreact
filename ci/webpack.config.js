const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const fs = require('fs-extra');

const { R, join, src, dist } = require('./paths');
const { fileExtensions } = require('./utils');

const ASSET_PATH = process.env.ASSET_PATH || '/';

const TARGET_BS = process.env.TARGET_BROWSER || 'chrome';
/**
 *
 */
var alias = {
  'react-dom': '@hot-loader/react-dom',
};
const NODE_MODE = process.env.NODE_ENV || 'development';
var secretsPath = join(__dirname, '.local/secrets.' + NODE_MODE + '.js');

if (fs.existsSync(secretsPath)) {
  alias['localenv'] = secretsPath;
}

var options = {
  mode: NODE_MODE,
  entry: {
    devtools: R(src, 'pages', 'Devtools', 'index.js'),
    background: R(src, 'pages', 'Background', 'index.js'),
    contentScript: R(src, 'pages', 'Content', 'index.js'),
    popup: R(src, 'pages', 'Popup', 'index.jsx'),
  },
  chromeExtensionBoilerplate: {
    notHotReload: ['contentScript', 'devtools'],
  },
  output: {
    path: R(dist, TARGET_BS),
    filename: '[name].bundle.js',
    publicPath: ASSET_PATH,
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader', // js css 生成style节点
          },
          {
            loader: 'css-loader', // 将CSS转化成ComminJS模块
          },
          {
            loader: 'resolve-url-loader', // 置于 loader 链中的 sass-loader 之前，就可以重写 url ,解决url()
          },
          {
            loader: 'sass-loader', //将Sass 编译成CSS
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: new RegExp('.(' + fileExtensions.join('|') + ')$'),
        loader: 'file-loader',
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
      .concat(['.js', '.jsx', '.ts', '.tsx', '.css', '.sass', '.scss']),
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new CleanWebpackPlugin({
      verbose: true,
      cleanStyleWebpackAssets: true, // Automatically remove all unused webpack assets on rebuild
    }),
  ],
};

module.exports = options;
