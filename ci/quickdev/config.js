const chalk = require('chalk');
const dayjs = require('dayjs');

const pkgJson = require('../../package.json');

const cmdArgv = JSON.parse(process.env.npm_config_argv);
const originalArgvs = cmdArgv.original;

// console.log(JSON.stringify(originalArgvs, null, 2));

function getModName() {
  let errMsg = '';
  let modName = '';
  let idx = originalArgvs.findIndex((arg) => arg === '--mod-name');
  if (idx > 0 && idx < originalArgvs.length - 1) {
    let _modName = originalArgvs[idx + 1];
    if (/^[a-z]+([a-z0-9]*([\-]?)(?!\2))*[a-z0-9]+$/g.test(_modName)) {
      modName = _modName;
    }
  }

  if (process.env.MOD_NAME) {
    modName = process.env.MOD_NAME;
  }

  if (!modName) {
    errMsg =
      chalk.redBright(`❌ Arguments MOD_NAME required.\n`) +
      chalk.blueBright(
        '\tyour can use command like " --mod-name <your module name>",\n'
      ) +
      chalk.cyanBright('\tor use "cross-env MOD_NAME=<your module name>"\n.');
    throw new Error(errMsg);
  }

  if (!/^[a-z]+([a-z0-9]*([\-]?)(?!\2))*[a-z0-9]+$/g.test(modName)) {
    errMsg =
      chalk.yellowBright(`⚠ Arguments MOD_NAME Incorrect format.\n`) +
      chalk.blueBright(
        'The module name must be a string of lowercase letters, numbers or "-".'
      );
    throw new Error(errMsg);
  }

  return modName;
}

function getSubModName() {
  let subModName = '';
  let idx = originalArgvs.findIndex((arg) => arg === '--sub-mod-name');
  if (idx > 0 && idx < originalArgvs.length - 1) {
    let _subModName = originalArgvs[idx + 1];
    if (/^[a-z]+([a-z0-9]*([\-]?)(?!\2))*[a-z0-9]+$/g.test(_subModName)) {
      subModName = _subModName;
    }
  }

  if (process.env.SUB_MOD_NAME) {
    subModName = process.env.SUB_MOD_NAME;
  }

  if (
    subModName &&
    !/^[a-z]+([a-z0-9]*([\-]?)(?!\2))*[a-z0-9]+$/g.test(subModName)
  ) {
    let errMsg =
      chalk.yellowBright(`⚠ Arguments SUB_MOD_NAME Incorrect format.\n`) +
      chalk.blueBright(
        'The module name must be a string of lowercase letters, numbers or "-".'
      );
    throw new Error(errMsg);
  }

  return subModName;
}

function getConfiguration() {
  return new Promise((resolve, reject) => {
    try {
      const baseConfig = {
        C_CURRTS: dayjs().format('YY-MM-DD HH:mm dddd'),
        C_AUTHOR: process.env.DEV_AUTHOR || pkgJson.author || pkgJson.name,
        VIEW_BASE: 'views',
        SUB_ENTRY: 'p3',
        noContainer: originalArgvs.includes('--noContainer'),
        notPage: originalArgvs.includes('--notPage'),
        noComments: originalArgvs.includes('--noComments'),
        modName: getModName(),
        subModName: getSubModName(),
      };
      resolve(baseConfig);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = getConfiguration;
