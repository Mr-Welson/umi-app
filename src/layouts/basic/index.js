import React, { useEffect, useState } from 'react';
import './index.less';
import _ from 'lodash';
import { useModel } from 'umi';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import AppMenu from './components/AppMenu';
import TabsNav from './components/TabsNav';

const { Header, Sider, Content } = Layout;

// 过滤隐藏菜单和重定向菜单
const filterHiddenMenu = (menuList) => {
  let list = [];
  list = menuList.filter(v => {
    if (v.routes?.length) {
      v.routes = filterHiddenMenu(v.routes);
      return !v?.meta?.hideInMenu || v.routes.length
    } else {
      return !v?.meta?.hideInMenu && v?.meta?.title
    }
  })
  return list
}

const BasicLayout = (props) => {
  console.log('=== BasicLayout ===', props);
  const { route, location } = props;
  const [collapsed, setCollapsed] = useState(false);
  const { routeList, setRouteList, setMenuList, onPathChange } = useModel('useTabRouteModel');
  // 业务路由的集合
  const [pageRoutes] = useState(route.routes.filter((v) => v.path && v.name))
  // const [pageRoutes] = useState(route.routes)

  useEffect(() => {
    console.log('=== BasicLayout DidMount===');
  }, [])

  useEffect(() => {
    setRouteList(pageRoutes)
    const menuList = filterHiddenMenu(_.cloneDeep(pageRoutes));
    setMenuList(menuList);
  }, [pageRoutes])

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
        <TabsNav {...props} />
        <Content className="app-content">
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default BasicLayout;
