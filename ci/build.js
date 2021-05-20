process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

const { envRulesHandler } = require('./style-helper');

// make sure before webpack config
// const wrapperEnv = require('../config');

// config
var config = require('./webpack.config');

// merge rules,handle env style rule
//
envRulesHandler(config, false);

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
