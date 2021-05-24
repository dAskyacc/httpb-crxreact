import React, { Component } from 'react';
import { hot } from 'react-hot-loader';

import { Provider } from 'react-redux';
import configureStore from 'Store/store';

import initialAppState from '../store/initialState';

import Layout from './AppLayout';

const store = configureStore(initialAppState);

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Layout />
      </Provider>
    );
  }
}

export default hot(module)(Root);
