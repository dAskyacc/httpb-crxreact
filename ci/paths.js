const path = require('path');

const R = (...p) => path.resolve(__dirname, '../', ...p);
const join = (...p) => path.join(...p);

module.exports = {
  R,
  join,
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  distzip: path.resolve(__dirname, '../dist-zip'),
};
