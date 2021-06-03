import React, { Component } from 'react';

import { Switch, Route, Link } from 'react-router-dom';
import { Layout } from 'antd';

import WelcomePage from '~P3/welcome';

const { Header, Content, Footer } = Layout;

export default class SetupLayout extends Component {
  state = {};

  renderHeader() {
    return (
      <Header className="setup-layout__header">
        <span>Hello</span>
        <Link to={'/'}>Home</Link>
      </Header>
    );
  }

  renderInitRoutes() {
    return (
      <Switch>
        <Route path="/setup" component={WelcomePage} exact />
        <Route path="/setup/welcome" component={WelcomePage} />
      </Switch>
    );
  }

  renderFooter() {
    return (
      <Footer className="setup-layout__footer">
        <div className="footer-container">
          <span>Footer</span>
          <span>
            <Link to="/">Home</Link>
          </span>
        </div>
      </Footer>
    );
  }

  render() {
    return (
      <>
        <Layout className="setup-layout">
          {this.renderHeader()}
          <Content className="setup-layout__main">
            {this.renderInitRoutes()}
          </Content>
          {this.renderFooter()}
        </Layout>
      </>
    );
  }
}
