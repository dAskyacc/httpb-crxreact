import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import configureStore from '../store/store';
import history from '../store/history';
import MainLayout from './main-layout';
const store = configureStore(history);

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <MainLayout />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
};

export default hot(module)(App);
