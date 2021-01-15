import React, { useState } from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import AppMenu from './AppMenu';
import RouteTab from './RouteTab';

const { Header, Sider, Content } = Layout;

const BasicLayout = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="app-layout sider-layout">
      <Sider
        className="app-sider"
        width={240}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <AppMenu {...props} />
      </Sider>
      <Layout className="app-layout">
        <Header className="app-header">
          <span className="trigger" onClick={() => setCollapsed(!collapsed)}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </span>
        </Header>
        <RouteTab {...props} />
        <Content className="app-content">{props.children}</Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
