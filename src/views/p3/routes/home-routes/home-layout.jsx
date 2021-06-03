import React, { PureComponent } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Layout } from 'antd';

import HomeBanner from '~P3/home-banner';

import HomePage from '~P3/home';

import Log from '~Lib/log';

import { DEFAULT_ROUTE } from '../routes-consts';

const { Content } = Layout;

export default class HomeLayout extends PureComponent {
  UNSAFE_componentWillMount() {
    const { history } = this.props;

    Log.debug('Home Layout>>>>>>>>>>>>>', this.props);
    if (history) {
      history.listen((locationObj, action) => {
        console.log('History listen >>>>', locationObj, action);
      });
    }
  }
  renderHeader() {
    return <HomeBanner />;
  }

  renderRoutes() {
    return (
      <Switch>
        <Route path={DEFAULT_ROUTE} component={HomePage} />
      </Switch>
    );
  }

  render() {
    return (
      <Layout className="home-layout">
        {this.renderHeader()}
        <Content className="home-layout__main">{this.renderRoutes()}</Content>
      </Layout>
    );
  }
}
