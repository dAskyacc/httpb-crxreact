import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';

const composeEnhancers = composeWithDevTools({
  // if need,define in here
});

// 使用日志打印方法， collapsed让action折叠，看着舒服
const loggerMiddleware = createLogger({ collapsed: true });

export default function configurationStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];

  const store = createStore(
    rootReducer, // connect router
    preloadedState,
    composeEnhancers(...enhancers)
  );

  return store;
}
