import { ReactNode } from 'react';

import { Layout } from 'antd';

import CustomMenu from '../shared/Menu';

const { Header, Content } = Layout;

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  return (
    <Layout>
      <Header>
        <CustomMenu />
      </Header>
      <Content>{children}</Content>
    </Layout>
  );
};

export default BaseLayout;
