const { R, src } = require('./paths');

const fileExtensions = ['jpg', 'jpeg', 'png', 'gif', 'eot', 'otf', 'svg', 'ttf', 'woff', 'woff2'];

const entryInfo = {
  notHotReload: ['contentScript', 'devtools'],
  entry: {
    devtools: R(src, 'pages', 'Devtools', 'index.js'),
    background: R(src, 'pages', 'Background', 'index.js'),
    contentScript: R(src, 'pages', 'Content', 'index.js'),
    popup: {
      import: R(src, 'pages', 'Popup', 'index.jsx'),
      filename: 'popup/popup.bundle.js',
    },
    options: {
      import: R(src, 'pages', 'Options', 'index.jsx'),
      filename: 'options/options.bundle.js',
    },
  },
};

module.exports = {
  fileExtensions,
  entryInfo,
};
