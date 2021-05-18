import React from 'react';

import { Layout, Button } from 'antd';

const { Header, Content, Footer } = Layout;

interface Props {
  title: string;
}

const Options: React.FC<Props> = ({ title }: Props) => {
  return (
    <Layout className="layout">
      <Header>
        Head{' '}
        <Button type="primary" shape="circle">
          Hell
        </Button>
      </Header>
      <Content style={{ padding: '0 24px' }}>
        <div>Helllsldlsldl</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Lanbery UI DSH</Footer>
    </Layout>
  );
};

export default Options;
