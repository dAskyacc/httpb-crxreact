import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import configureStore from '../store/store';
import history from '../store/history';

const store = configureStore(history);

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch></Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default hot(module)(App);
