import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';

import { hot } from 'react-hot-loader';

import { HashRouter } from 'react-router-dom';
import Routes from './routes';
import { history } from '../../Popup/index';

class Index extends PureComponent {
  state = {};

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <HashRouter history={history}>
          <Routes />
        </HashRouter>
      </Provider>
    );
  }
}

export default hot(module)(Index);
