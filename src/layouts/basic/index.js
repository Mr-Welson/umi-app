import React, { useEffect, useState } from 'react';
import './index.less';
import _ from 'lodash';
import { useModel } from 'umi';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import AppMenu from './components/AppMenu';
import RouteTab from './components/RouteTab';

const { Header, Sider, Content } = Layout;

const BasicLayout = (props) => {
  console.log('=== BasicLayout ===', props);
  const { location } = props;
  const [collapsed, setCollapsed] = useState(false);

  const { flatRoutes, generateMenuList, initRoutes, onPathNameChange } = useModel('permission');
  useEffect(() => {
    initRoutes()
    generateMenuList()
  }, [])

  useEffect(() => {
    onPathNameChange(location.pathname, flatRoutes)
  }, [location.pathname, flatRoutes])

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
        <Content className="app-content">
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
