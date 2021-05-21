import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';

export default function configurationStore(initialState) {
  const store = createStore(
    reducer,
    initialState,
    compose(applyMiddleware(thunk))
  );

  return store;
}
