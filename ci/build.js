process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// make sure before webpack config
// const wrapperEnv = require('../config');

const styleRules = [
  {
    test: /\.(sa|sc|c)ss$/,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader', // 将CSS转化成ComminJS模块
      },
      {
        loader: 'resolve-url-loader', // 置于 loader 链中的 sass-loader 之前，就可以重写 url ,解决url()
      },
      {
        loader: 'sass-loader', //将Sass 编译成CSS
        options: {
          sourceMap: true,
          implementation: require('sass'),
          sassOptions: {
            fiber: require('fibers'),
          },
        },
      },
    ],
  },
];

// config
var config = require('./webpack.config');

// merge rules

config.module.rules = [...styleRules].concat(config.module.rules || []);

config.optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      extractComments: false,
    }),
  ],
};

webpack(config, function (err) {
  if (err) throw err;
});
