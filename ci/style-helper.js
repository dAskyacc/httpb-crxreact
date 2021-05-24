const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { compactThemeSingle } = require('antd/dist/theme');
const themeVars = require('./themes');

const antdLessRule = {
  test: /antd.*\.less$/,
  use: [
    'css-loader',
    // {
    //   loader: 'postcss-loader',
    //   options: {
    //     config: {
    //       path: './',
    //     },
    //   },
    // },
    {
      loader: 'less-loader',
      options: {
        lessOptions: {
          modifyVars: {
            ...compactThemeSingle,
            ...themeVars,
          },
          javascriptEnabled: true,
        },
      },
    },
  ],
};
const scssRule = {
  test: /\.(sa|sc|c)ss$/,
  use: [
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
};

/**
 *
 * @param {Object} config  webpack options
 * @param {*} prelaoder
 */
function envRulesHandler(config, isDev = false) {
  if (isDev) {
    antdLessRule.use = ['style-loader'].concat(antdLessRule.use);
    scssRule.use = [{ loader: 'style-loader' }].concat(scssRule.use);
  } else {
    antdLessRule.use = [MiniCssExtractPlugin.loader].concat(antdLessRule.use);
    scssRule.use = [MiniCssExtractPlugin.loader].concat(scssRule.use);
  }

  config.module.rules = [antdLessRule, scssRule].concat(
    config.module.rules || []
  );
}

module.exports = { envRulesHandler };
