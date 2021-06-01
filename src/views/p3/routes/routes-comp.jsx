import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { DEFAULT_ROUTE, LOCK_ROUTE, INIT_ROUTE } from './routes-consts';
import { Layout } from 'antd';

import Lock from '../lock';
import FirstSetupPage from '../first-setup';
import HomePage from '../home';
import UnlockPage from '../unlock';

import HomeBanner from '../home-banner';

const { Content } = Layout;

export default class RoutesComp extends Component {
  UNSAFE_componentWillMount() {
    const { history } = this.props;

    console.log('Location>>>>>>>>>>>>>', this.props);
    if (history) {
      history.listen((locationObj, action) => {
        console.log('History listen >>>>', locationObj, action);
      });
    }
  }

  renderRoutes() {
    const routes = (
      <Switch>
        <Route
          exact
          path={DEFAULT_ROUTE}
          component={HomePage}
          // component={(props) => <HomePage {...props} />}
        />
        <Route
          path={LOCK_ROUTE}
          component={UnlockPage}
          // component={(props) => <Lock {...props} />}
          exact
        />
        <Route
          path={INIT_ROUTE}
          component={(props) => <FirstSetupPage {...props} />}
          exact
        />
      </Switch>
    );

    return routes;
  }

  render() {
    const { isLoading, isUnlocked, loadingMessage } = this.props;

    return (
      <>
        <Layout className="brave-layout">
          <>
            <HomeBanner />
          </>
          {/* <div className="brave-banner">
            <h1>Header</h1>
          </div> */}
          <Content>{this.renderRoutes()}</Content>
        </Layout>
      </>
    );
  }
}
