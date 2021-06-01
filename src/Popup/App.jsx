import React from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Switch } from 'react-router-dom';

import configureStore from '../store/store';

import MainLayout from './main-layout';

import { browserHistory as history } from '../router/history';
import initialAppState from '../store/initialState';

import Routes from './router';

const store = configureStore(initialAppState, history);

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {/* <Switch> */}
        {/* <MainLayout /> */}
        {/* </Switch> */}
        <Routes />
      </ConnectedRouter>
    </Provider>
  );
};

export default hot(module)(App);
