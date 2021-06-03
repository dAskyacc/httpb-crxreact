const chalk = require('chalk');

const TARGET_CHROME = 'chrome';

const TARGET_FIREFOX = 'firefox';
const TARGET_EDGE = 'edge';
const TARGET_OPERA = 'opera';

function getEnvTargetBrowser(defaultTarget) {
  const t = process.env.TARGET_BROWSER;
  if (!t) {
    process.env.TARGET_BROWSER = defaultTarget || TARGET_CHROME;
    return process.env.TARGET_BROWSER;
  }
  if (t.toLowerCase() === TARGET_CHROME) {
    process.env.TARGET_BROWSER = TARGET_CHROME;
    return TARGET_CHROME;
  }
  if (t.toLowerCase() === TARGET_FIREFOX || t.toLowerCase() === 'fox') {
    process.env.TARGET_BROWSER = TARGET_FIREFOX;
    return TARGET_FIREFOX;
  }
  if (t.toLowerCase() === TARGET_OPERA) {
    process.env.TARGET_BROWSER = TARGET_OPERA;
    return TARGET_OPERA;
  }

  if (t.toLowerCase() === TARGET_EDGE) {
    process.env.TARGET_BROWSER = TARGET_EDGE;
    return TARGET_EDGE;
  }

  console.error(
    chalk.redBright(
      `TARGET_BROWSER must one of [${TARGET_CHROME},${TARGET_FIREFOX},${TARGET_OPERA},${TARGET_EDGE}]`
    )
  );
  process.exit(0);
}

module.exports = {
  getEnvTargetBrowser,
  TARGET_CHROME,
  TARGET_FIREFOX,
  TARGET_EDGE,
  TARGET_OPERA,
};
