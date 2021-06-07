import React, { Component } from 'react';

import { Form, Input, Layout, Button } from 'antd';

const { Content, Footer } = Layout;

export default class SigninComponent extends Component {
  state = {};

  static FormOpts = {};

  renderHeader() {
    return <div className="signin-container__header"></div>;
  }

  renderForm() {
    return (
      <Form name="signinForm">
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password' }]}
        >
          <Input.Password bordered={false} className="signin-pwd-input" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" shape="round" block>
            Unlock
          </Button>
        </Form.Item>
      </Form>
    );
  }

  renderFooterContent() {
    return (
      <>
        <div className="pravicy">隐私协议</div>
      </>
    );
  }

  render() {
    // const { xxx } = this.props;

    return (
      <Layout className="signin-container">
        {this.renderHeader()}
        <Content className="signin-container__main">
          {this.renderForm()}
        </Content>
        <Footer className="signin-container__footer">
          {this.renderFooterContent()}
        </Footer>
      </Layout>
    );
  }
}
