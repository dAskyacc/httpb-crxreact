const presets = [
  '@babel/preset-react',
  '@babel/preset-typescript',
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

  // 'react-app',
];

const plugins = [
  '@babel/plugin-transform-runtime',
  [
    'babel-plugin-import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: function (name, file) {
        console.log('Antd loader Importor>>>>>>>>>>>>>>>>>>>>>>', name);
        return `${name}/style/index.css`;
      },
    },
  ],
  [
    'import',
    {
      libraryName: '@ant-design/icons',
      libraryDirectory: 'lib/icons',
      camel2DashComponentName: false,
      // style: function (name,file) {
      //   console.log('Antd Icons>>>>>>', name,file);
      //   return `${name}/style/index.css`;
      // },
    },
    '@ant-design/icons',
  ],
  'react-hot-loader/babel',
];

module.exports = { presets, plugins };
