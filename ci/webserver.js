/**
 * Webpack Dev Server
 */
const { webpack } = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const DEV_ENV_VALT = 'development';

process.env.BABEL_ENV = DEV_ENV_VALT;
process.env.NODE_ENV = DEV_ENV_VALT;

const { entryInfo } = require('./utils');
const { DEV_PORT, TARGET_BROWSER } = require('../config');

//  // chromeExtensionBoilerplate: {
//   notHotReload: [],
// },

var config = require('./webpack.config');
const { join } = require('./paths');
const options = require('./webpack.config');

let excludeEntriesToHotReload = entryInfo.notHotReload || [];

// handle hotreload
for (var entryName in config.entry) {
  if (excludeEntriesToHotReload.indexOf(entryName) === -1) {
    let _tmpEntry = config.entry[entryName];
    if (typeof _tmpEntry === 'string') {
      config.entry[entryName] = [
        'webpack-dev-server/client?http://localhost:' + DEV_PORT,
        'webpack/hot/dev-server',
      ].concat(_tmpEntry);
    } else {
      console.log('_tmpEntry>>>', _tmpEntry);
    }
  }
}

// config.plugins = [new webpack.HotModuleReplacementPlugin()].concat(config.plugins || []);
const hmrOpts = {
  contentBase: join(__dirname, 'dist', TARGET_BROWSER),
  hot: true,
  injectClient: false,
  writeToDisk: true,
  publicPath: `http://localhost:${DEV_PORT}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  disableHostCheck: true,
};
WebpackDevServer.addDevServerEntrypoints(config, options);

var compiler = webpack(config);
const server = new WebpackDevServer(compiler, hmrOpts);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

server.listen(DEV_PORT);
