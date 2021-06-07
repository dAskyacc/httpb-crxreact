import React, { PureComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Layout, Divider } from 'antd';

import HomeBanner from '~P3/home/banner';

import ContactList from '~P3/contacts/index';
import DigitalAssetList from '~P3/digital-assets/list';
import TransactionsList from '~P3/transactions';
import SigninComponent from '~P3/signin';

import AuthRoute from '~P3/auth/authenticated-comp';

import {
  DEFAULT_ROUTE,
  SIGNIN_ROUTE,
  DIGITAL_ASSETS_ROOT_ROUTE,
  TRANSACTION_ROOT_ROUTE,
  CONTACTS_ROOT_ROUTE,
} from '../routes-consts';

const { Content } = Layout;

export default class HomeLayout extends PureComponent {
  UNSAFE_componentWillMount() {
    const { history, isUnlocked } = this.props;
    console.log('History listen >isUnlocked>>>', isUnlocked);
    if (history) {
      history.listen((locationObj, action) => {
        console.log('History listen >>>>', locationObj, action);
      });
    }

    if (!isUnlocked) {
    }
  }
  renderHeader() {
    return <HomeBanner />;
  }

  renderRoutes() {
    const { match } = this.props;

    console.log('Home>>layout_routes>>>>', match);
    return (
      <Switch>
        <AuthRoute
          path={DIGITAL_ASSETS_ROOT_ROUTE}
          component={DigitalAssetList}
        />
        <AuthRoute path={TRANSACTION_ROOT_ROUTE} component={TransactionsList} />
        <AuthRoute path={CONTACTS_ROOT_ROUTE} component={ContactList} />
        <Route path={SIGNIN_ROUTE} component={SigninComponent} exact />
        <AuthRoute path={DEFAULT_ROUTE} component={ContactList} exact />
      </Switch>
    );
  }

  render() {
    return (
      <Layout className="home-layout">
        <div className="home-layout__banner--wrapper">
          {this.renderHeader()}
        </div>
        <Divider className="brave-divider" />
        <Content className="home-layout__main">{this.renderRoutes()}</Content>
      </Layout>
    );
  }
}
