/**
 * Webpack Dev Server
 */
const { webpack } = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');

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
    // if (typeof _tmpEntry === 'string') {
    config.entry[entryName] = [
      'webpack-dev-server/client?http://localhost:' + DEV_PORT,
      'webpack/hot/dev-server',
    ].concat(_tmpEntry);
    // } else {
    //   // console.log('_tmpEntry>>>', _tmpEntry);
    // }
  }
}
console.log('Entries :\n ', chalk.magentaBright(JSON.stringify(config.entry, null, 2)));

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'cheap-module-source-map';
}

// config.plugins = [new webpack.HotModuleReplacementPlugin()].concat(config.plugins || []);
const hmrOpts = {
  contentBase: join(__dirname, 'dist', TARGET_BROWSER),
  port: DEV_PORT,
  hot: true,
  open: false,
  // openPage: ['options/options.html'],
  injectClient: false,
  writeToDisk: true,
  publicPath: `http://localhost:${DEV_PORT}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
  disableHostCheck: true,
  onListening: function (server) {
    const port = server.listeningApp.address.port;
    console.log(port, '>>>>>>', server.listeningApp);
  },
};
WebpackDevServer.addDevServerEntrypoints(config, options);

var compiler = webpack(config);
const server = new WebpackDevServer(compiler, hmrOpts);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

server.listen(DEV_PORT, 'localhost', () => {
  console.log('dev Server listening on port:' + DEV_PORT);
});
