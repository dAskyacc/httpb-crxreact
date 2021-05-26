import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';

import configureStore from '../store/store';
import initialAppState from '../store/initialState';

import Layout from './AppLayout';
import history from '../store/history';
import log from '~Log';

const store = configureStore(initialAppState);
log.debug('>>>>>>Log>>>>>', store.getState());

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <>
            <Switch>
              <Route extends path="/" render={() => <div>Home</div>}></Route>
              <Route render={() => <div>Miss</div>}></Route>
            </Switch>
            <Layout />
          </>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default hot(module)(Root);
