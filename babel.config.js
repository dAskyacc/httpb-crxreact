const presets = [
  [
    '@babel/preset-env',
    {
      modules: false,
      targets: {
        chrome: 88,
        firefox: 78,
        edge: 88,
        // browsers: ['last 1 version', '> 5%', 'not dead'],
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
  [
    'babel-plugin-import',
    {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,
    },
  ],
  [
    'import',
    {
      libraryName: '@ant-design/icons',
      // libraryDirectory: 'lib/icons',
      camel2DashComponentName: false,
      customName: function (transformedMethodName) {
        // console.log('Antd Icons>>>>>>', transformedMethodName);
        if (transformedMethodName === 'default') {
          return '@ant-design/icons/es/components/Icon';
        } else {
          return `@ant-design/icons/es/icons/${transformedMethodName}`;
        }
      },
    },
    '@ant-design/icons',
  ],
  // [
  //   'import',
  //   {
  //     libraryName: 'antd-mobile',
  //     libraryDirectory: 'es6',
  //     style: true,
  //     // camel2DashComponentName: false,
  //   },
  //   'antd-mobile',
  // ],
  'react-hot-loader/babel',
];

module.exports = { presets, plugins };
