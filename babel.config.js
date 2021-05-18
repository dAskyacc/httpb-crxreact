const presets = [
  [
    '@babel/preset-env',
    {
      modules: false,
      targets: {
        browsers: ['last 1 version', '> 5%', 'not dead'],
      },
      useBuiltIns: 'usage', // 按需引入不支持的es6 方法,like includes
      corejs: 3,
      debug: false, //方便调试
    },
  ],
  '@babel/preset-react',
  '@babel/preset-typescript',

  // 'react-app',
];

const plugins = [
  '@babel/plugin-transform-runtime',
  'react-hot-loader/babel',
  [
    'babel-plugin-import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: function (name) {
        console.log('$$$>>>>>>>>>>>>>>>>>>>>>>antd less name', name);
        return `${name}/style/index.css`;
      },
    },
  ],
];

module.exports = { presets, plugins };
