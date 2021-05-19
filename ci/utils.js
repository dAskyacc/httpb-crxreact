const { R, src } = require('./paths');

const fileExtensions = [
  'jpg',
  'jpeg',
  'png',
  'gif',
  'eot',
  'otf',
  'svg',
  'ttf',
  'woff',
  'woff2',
];

const entryInfo = {
  notHotReload: ['contentScript', 'devtools'],
  entry: {
    // devtools: R(src, 'Devtools', 'index.js'),
    background: R(src, 'Background', 'index.js'),
    contentScript: R(src, 'ContentScript', 'index.js'),
    'popup/popup': [R(src, 'Popup', 'index.jsx')],
    'options/options': [R(src, 'Options', 'index.jsx')],
    // popup: {
    //   import: R(src, 'pages', 'Popup', 'index.jsx'),
    //   filename: 'popup/popup.bundle.js',
    // },
  },
};

module.exports = {
  fileExtensions,
  entryInfo,
};
