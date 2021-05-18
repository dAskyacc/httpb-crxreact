const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

let styleRule = {
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
      options: { sourceMap: true },
    },
  ],
};

if (isDev) {
  styleRule.use = [
    {
      loader: 'style-loader', // js css 生成style节点
    },
  ].concat(styleRule.use);
} else {
  styleRule.use = [
    {
      loader: MiniCssExtractPlugin.loader, //  提取css
    },
  ].concat(styleRule.use);
}

module.exports = { styleRule };
