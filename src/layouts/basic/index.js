import React, { useEffect } from 'react';
import { useModel } from 'umi';
import SiderMenu from './components/SiderMenu';

import './index.less';

const BasicLayout = (props) => {
  const { route, location } = props;
  const { setActiveKey, onRouteChange } = useModel('useTabRouteModel');

  useEffect(() => {
    //  TODO:
    console.log(location.pathname);
    // onRouteChange(route.routes.filter((v) => v.title)[0]);
  }, []);
  // 监听路由变化
  useEffect(() => {
    setActiveKey(location.pathname);
    // TODO: 手动输入路由时需要初始化项目
    // onRouteChange(routeInfo)
  }, [location.pathname]);

  return <SiderMenu {...props} />;
};

export default BasicLayout;
