// const { createProxyMiddleware } = require('http-proxy-middleware');
const { R, dist } = require('./paths');
const targetBrowser = process.env.TARGET_BROWSER || 'chrome';
module.exports = {
  port: 28964,
  browser: ['chrome'],
  files: ['./dist/chrome/**/*.{html,css,js}'],
  server: {
    baseDir: R(dist, targetBrowser),
    middleware: {
      1: require('connect-history-api-fallback')({
        index: '/popup.html',
        verbose: true,
      }),
    },
  },
  open: true,
};
