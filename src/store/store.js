import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

import createRootReducer from './reducers';
import history from './history';

const composeEnhancers = composeWithDevTools({
  // if need,define in here
});

// 使用日志打印方法， collapsed让action折叠，看着舒服
const loggerMiddleware = createLogger({ collapsed: true });

export default function configurationStore(preloadedState) {
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

  return store;
}
