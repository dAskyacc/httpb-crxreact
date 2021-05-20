# React CI (Continus Integration)

> React 17.x + Webpack5 + Babel7.x

> Typescript

## Antd CI

> 按需加载 Antd + Antd-Icons

```bash
yarn add antd@4.x @ant-design/icons@4.x
yarn add -D less-loader@9.x less@4.x  # parse antd less file
yarn add -D babel-plugin-import@1.13.x
```

> ISSUE TS2304 hot-module-webpack

    remove ts-loader and add babel-loader

**Webpack config**

```javascript
    // add ts rule
    {
        test: /\.(ts|tsx)$/,
        // loader: 'ts-loader',
        use: ['react-hot-loader/webpack', 'babel-loader'], // 按需加载
        // exclude: /node_modules/,
    },
```

**Babel Config**

```javascript
{
  plugins: [
    [
      // antd 按需加载
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: function (name, file) {
          return `${name}/style/index.css`;
        },
      },
    ],
    [
      // antd-icons 按需加载
      'import',
      {
        libraryName: '@ant-design/icons',
        camel2DashComponentName: false,
        customName: function (transformedMethodName) {
          if (transformedMethodName === 'default') {
            return '@ant-design/icons/es/components/Icon'; // 自定义Icon处理
          } else {
            return `@ant-design/icons/es/icons/${transformedMethodName}`;
          }
        },
      },
      '@ant-design/icons',
    ],
  ];
}
```

> 使用

```javascript
import { default as Icon, HeartTwoTone } from '@ant-design/icons';

const HeartSvg = () => (
  <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
  </svg>
);

const HeartIcon = (props) => <Icon component={HeartSvg} {...props} />;

render(
  <div>
    <HeartTwoTone />
    <HeartIcon />
  </div>,
  document.getElementById('app')
);
```

---

## Redux CI

> Redux@4.x + redux-thunk@2.x

> Redux Flow

1. 通过 mapStateToProps 定义将 Store state 与 dom property 关联
2. 通过 React-redux 提供的 connect 将 store state 以及 dom 事件处理函数 与 react Component 链接.

```js
 const mapStateToProps = (state)=>{
   products:getCartProducts(state), // getCartProducts 在reducer
   ...
 }
 connect(mapStateToProps,{checkout})(CartContainer)  ; 
 // 这样在 组件中 就可以使用 <CartContainer >

const CartContainer = ({ products, total, checkout }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)} />
)

```

```bash
yarn add redux redux-thunk react-redux

```

> redux store 数据状态管理核心库, reducer (触发会返回新的 store 替换 old store),actions (通过 action 调用 reducer,类似 vue store 的 mutations)

> react-redux 用来简化在 React 中使用 Redux 的流程.Provider/connect

> redux-thunk: 扩展 redux 的 action 可以以函数方式作为参数调用和 异步调用

## prop-types CI

> [类型检查器](https://github.com/facebook/prop-types)
