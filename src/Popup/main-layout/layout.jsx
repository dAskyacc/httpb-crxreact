import React, { PureComponent } from 'react';

import { Layout } from 'antd';

import RootRoutes from '../router';

const { Content } = Layout;

export default class MainLayout extends PureComponent {
  state = {
    /**
     * 这里缓存Store 中state
     * 供 Component 使用
     */
  };

  componentDidMount() {}

  renderPlaceholder() {
    return <div className="holder">Block</div>;
  }

  render() {
    return (
      <Layout className="main-container">
        <Content className="main-body">Border</Content>
        <RootRoutes />
      </Layout>
    );
  }
}
