/**
 * local secret configuration
 * out of the project
 */
const fs = require('fs-extra');
const pkgJson = require('../package.json');
const path = require('path');

let localeEnv = {
  TARGET_BROWSER: 'chrome',
};

!process.env.NODE_ENV && (process.env.NODE_ENV = 'development');
const localeEnvPath = `./.env.${process.env.NODE_ENV}.js`;
if (fs.existsSync(localeEnvPath)) {
  localeEnv = require(localeEnvPath);
}

//
let SECRETS_ENV_PATH = '.localenv/crxextension';
let secretsEnv = {};
if (fs.existsSync(path.resolve(__dirname, '../../', SECRETS_ENV_PATH, 'secrets.env.js'))) {
  secretsEnv = require(path.resolve(__dirname, '../../', SECRETS_ENV_PATH, 'secrets.env.js'));
}

const mixinProperty = (key, defaultValue = '') => {
  return process.env[key] || localeEnv[key] || defaultValue;
};

let envWarpper = Object.assign({}, secretsEnv, localeEnv, {
  APP_NAME: mixinProperty('APP_NAME', pkgJson.name),
  APP_AUHTOR: mixinProperty('APP_AUTHOR', pkgJson.author),
});

module.exports = envWarpper;
