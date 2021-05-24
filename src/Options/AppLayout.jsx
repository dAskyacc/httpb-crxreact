import React, { PureComponent } from 'react';

import { Layout, Button } from 'antd';
// import PropTypes from 'prop-types';

import ErrorPage from 'Pages/error';

const { Header, Footer, Sider, Content } = Layout;

class PageLayout extends PureComponent {
  state = {};
  error = {
    title: 'Options Error',
    message: 'OOOp cfuck!!!!',
  };

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible theme="light">
          <div>Meus</div>
        </Sider>
        <Layout>
          <Header theme="light">
            <div>App Header</div>
          </Header>

          <Content>
            <ErrorPage error={this.error} />
            <Button type="danger">YOK</Button>
          </Content>
          <Footer>Foot</Footer>
        </Layout>
      </Layout>
    );
  }
}
// react-hot-loader v4
export default PageLayout;
