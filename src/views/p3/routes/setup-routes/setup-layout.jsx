import React, { Component } from 'react';

import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Button } from 'antd';

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
        <Route path="/setup" component={() => <div>Setup Index</div>} exact />
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
            <Button type="text" size="small">
              Welcome
            </Button>
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
