import React from 'react';

import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return (
    <Layout className="layout">
      <Header>Head</Header>
      <Content style={{ padding: '0 24px' }}>
        <div>Helllsldlsldl</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Lanbery UI</Footer>
    </Layout>
  );
};

export default Options;
