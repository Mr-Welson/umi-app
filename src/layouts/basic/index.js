import React, { useEffect, useState } from 'react';
import { useModel } from 'umi';
import SiderMenu from './components/SiderMenu';
import _ from 'lodash';

import './index.less';
// 过滤隐藏菜单和重定向菜单
const filterHiddenMenu = (menuList) => {
  let list = [];
  list = menuList.filter(v => {
    if (v.routes?.length) {
      v.routes = filterHiddenMenu(v.routes);
      return !v.hideInMenu || v.routes.length
    } else {
      return !v.hideInMenu && v.title
    }
  })
  return list
}

const BasicLayout = (props) => {
  console.log('=== BasicLayout ===', props);
  const { route, location } = props;
  const { routeList, setRouteList, setMenuList, onPathChange } = useModel('useTabRouteModel');
  // 业务路由的集合
  const [pageRoutes] = useState(route.routes.filter((v) => v.path && v.name))
  // const [pageRoutes] = useState(route.routes)

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

  return <SiderMenu {...props} />;
};

export default BasicLayout;
