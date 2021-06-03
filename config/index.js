/**
 * local secret configuration
 * out of the project
 */
const chalk = require('chalk');
const fs = require('fs-extra');
const pkgJson = require('../package.json');
const path = require('path');

const { getEnvTargetBrowser } = require('./cfg-types');

let localeEnv = {};

!process.env.NODE_ENV && (process.env.NODE_ENV = 'development');

const prodMode = process.env.NODE_ENV === 'production';

// production mode will set env.git verion
if (prodMode) {
}

// const localeEnvPath = `./.env.${process.env.NODE_ENV}.js`;

const localeEnvPath = path.resolve(
  __dirname,
  `.env.${process.env.NODE_ENV}.js`
);

if (fs.existsSync(localeEnvPath)) {
  localeEnv = require(localeEnvPath);
  // console.log(`>>>fund ${localeEnvPath} locale env config file.`, JSON.stringify(localeEnv));
} else {
  console.log(
    chalk.redBright(`Unfund ${localeEnvPath} locale env config file.`)
  );
}

//
let SECRETS_ENV_PATH = path.resolve(
  __dirname,
  '../../',
  '.localenv/crxextension'
);
let secretsEnv = {};
if (fs.existsSync(path.join(SECRETS_ENV_PATH, '/secrets.env.js'))) {
  secretsEnv = require(path.join(SECRETS_ENV_PATH, '/secrets.env.js'));
} else {
  console.log(
    chalk.redBright(
      `Unfund ${path.join(
        SECRETS_ENV_PATH,
        '/secrets.env.js'
      )} locale secrets config file.`
    )
  );
}

const mixinProperty = (key, defaultValue = '') => {
  return process.env[key] || localeEnv[key] || defaultValue;
};

let envWarpper = Object.assign({}, secretsEnv, localeEnv, {
  ...localeEnv,
  APP_NAME: mixinProperty('APP_NAME', pkgJson.name),
  APP_VERSION: mixinProperty('APP_VERSION', pkgJson.version),
  APP_AUHTOR: mixinProperty('APP_AUTHOR', pkgJson.author),
  TARGET_BROWSER: getEnvTargetBrowser('chrome'),
  prodMode: prodMode,
});

console.log(
  'Used Build Env:',
  chalk.yellowBright(JSON.stringify(envWarpper, null, 2))
);

module.exports = envWarpper;
