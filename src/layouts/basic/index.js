import React, { useEffect } from 'react';
import './index.less';
import _ from 'lodash';
import { useModel } from 'umi';
import { connect } from 'dva';
import { Layout } from 'antd';
import GlobalHeader from './components/GlobalHeader';
import AppMenu from './components/AppMenu';
import TabsNav from './components/TabsNav';

const { Sider, Content } = Layout;

const BasicLayout = ({ theme, collapsed, location, ...rest }) => {
  console.log('=== BasicLayout ===', rest);

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
        theme={theme}
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <div className="logo" />
        <AppMenu {...rest} theme={theme} />
      </Sider>
      <Layout className="app-layout">
        <GlobalHeader></GlobalHeader>
        <TabsNav {...rest} />
        <Content className="app-content">
          {rest.children}
        </Content>
        {/* <Footer /> */}
      </Layout>
    </Layout>
  );
};

const mapStateToProps = ({ settings }) => ({
  theme: settings.theme,
  collapsed: settings.collapsed,
})
export default connect(mapStateToProps)(BasicLayout);