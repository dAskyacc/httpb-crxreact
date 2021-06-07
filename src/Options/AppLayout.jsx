import React, { PureComponent } from 'react';

import { Layout, Button, Image } from 'antd';
import { SettingFilled } from '@ant-design/icons';

// import PropTypes from 'prop-types';

import BasSrc from '../assets/images/bas_big.png';

import TaskContainer from '../pages/task';

const { Header, Footer, Sider, Content } = Layout;

class PageLayout extends PureComponent {
  state = {};
  error = {
    title: 'Options Error',
    message: 'OOOp cfuck!!!!',
  };

  render() {
    const headStyle = {
      padding: '0 12px',
    };

    return (
      <Layout>
        <Sider trigger={null} collapsible theme="light">
          <div>Meus</div>
        </Sider>
        <Layout>
          <Header theme="light" style={headStyle}>
            <div>
              <Image src={BasSrc} width={40} preview={false} />
              <SettingFilled style={{ fontSize: '24px' }} />
            </div>
          </Header>

          <Content>
            <TaskContainer />
          </Content>
          <Footer>Foot</Footer>
        </Layout>
      </Layout>
    );
  }
}
// react-hot-loader v4
export default PageLayout;
