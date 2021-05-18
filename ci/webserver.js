/**
 * Webpack Dev Server
 */
const { webpack } = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const chalk = require('chalk');
const fs = require('fs-extra');

const DEV_ENV_VALT = 'development';

process.env.BABEL_ENV = DEV_ENV_VALT;
process.env.NODE_ENV = DEV_ENV_VALT;

const { entryInfo } = require('./utils');
const { DEV_PORT, TARGET_BROWSER } = require('../config');
const { join, dist } = require('./paths');

//  // chromeExtensionBoilerplate: {
//   notHotReload: [],
// },

const distTarget = join(dist, TARGET_BROWSER);
if (fs.existsSync(distTarget)) {
  fs.removeSync(distTarget);
}

const styleRules = [
  {
    test: /antd.*\.less$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          config: {
            path: './',
          },
        },
      },
      {
        loader: 'less-loader',
        options: {
          javascriptEnabled: true,
        },
      },
    ],
  },
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

var config = require('./webpack.config');
config.module.rules = [...styleRules].concat(config.module.rules || []);

let excludeEntriesToHotReload = entryInfo.notHotReload || [];

// handle hotreload
for (var entryName in config.entry) {
  if (excludeEntriesToHotReload.indexOf(entryName) === -1) {
    let _tmpEntry = config.entry[entryName];
    config.entry[entryName] = [
      'webpack-dev-server/client?http://localhost:' + DEV_PORT,
      'webpack/hot/dev-server',
    ].concat(_tmpEntry);
  }
}
if (process.env.DEBUG_CONFIG) {
  console.log(
    'Entries :\n ',
    chalk.magentaBright(JSON.stringify(config.entry, null, 2))
  );
}

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'cheap-module-source-map';

  config.stats = {
    // colors: '\u001b[32m',
    // entrypoints: 'auto',
    errors: true,
    errorDetails: true,
  };
  // config.plugins = (config.plugins || []).concat([
  //   new webpack.HotModuleReplacementPlugin(),
  // ]);
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
};

WebpackDevServer.addDevServerEntrypoints(config, hmrOpts);

var compiler = webpack(config);
const server = new WebpackDevServer(compiler, hmrOpts);

if (process.env.NODE_ENV === 'development' && module.hot) {
  module.hot.accept();
}

server.listen(DEV_PORT, 'localhost', () => {
  console.log('dev Server listening on port:' + DEV_PORT);
});
