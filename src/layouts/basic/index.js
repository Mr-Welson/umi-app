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
  const [collapsed, setCollapsed] = useState(false);

  const { route, location } = props;
  const { generateMenuList, initRoutes, getMatchRoute, setActiveKey } = useModel('permission');
  useEffect(() => {
    initRoutes()
    generateMenuList()
  },[])


  const { routeList, setRouteList, onPathChange } = useModel('useTabRouteModel');
  // 业务路由的集合
  const [pageRoutes] = useState(route.routes.filter((v) => v.path && v.name))
  
  useEffect(() => {
    setRouteList(pageRoutes)
  }, [pageRoutes])


  useEffect(() => {
    console.log('location==', location);
    const matchRoutes = getMatchRoute(location.pathname)
    console.log('matchRoutes==', matchRoutes);
    setActiveKey(matchRoutes?.reverse()[0].name)
  }, [location.pathname])

  // 监听路由变化
  useEffect(() => {
    
    // fix: 添加 routeList 解决首次渲染 routeList 获取不到的bug
    routeList.length && onPathChange({ location })
  }, [location.pathname, routeList.length]);

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
