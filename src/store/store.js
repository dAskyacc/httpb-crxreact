import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { routerMiddleware } from 'connected-react-router';
import { compose } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import createRootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用日志打印方法， collapsed让action折叠，看着舒服
const loggerMiddleware = createLogger({ collapsed: true });

export default function configurationStore(preloadedState, history) {
  const middlewares = [
    loggerMiddleware,
    thunkMiddleware,
    routerMiddleware(history),
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];

  const store = createStore(
    createRootReducer(history), // connect router
    preloadedState,
    composeEnhancers(...enhancers)
  );

  // Hot reloading
  // if (module && module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     store.replaceReducer(createRootReducer(history));
  //   });
  // }

  return store;
}
