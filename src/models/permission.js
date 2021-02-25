import { useState, useCallback } from 'react';
import { matchPath } from 'react-router-dom';
import { flattenRoutes } from '@/utils/array';
import allRoutes, { pageRoutes } from '../../config/routes'
import { history } from 'umi';

// routeList

// menuList

// tabList


export default function permissionModel() {
  // 扁平化理由
  const [flatRoutes, setFlatRoutes] = useState(flattenRoutes(allRoutes));
  // 菜单
  const [menuList, setMenuList] = useState([])
  // 当前菜单
  const [activeKey, setActiveKey] = useState('home');

  // 根据 pathname 匹配路由
  const getMatchRoute = (pathname) => {
    const matchRoutes = flatRoutes.filter(v => {
      const matchInfo = matchPath(pathname, {
        path: v.path,
        exact: v.exact,
        strict: v.strict
      });
      return matchInfo
    })
    return matchRoutes;
  }

  // 初始化路由数据
  function initRoutes() {
    let flatRoutes = flattenRoutes(allRoutes)
    flatRoutes = flatRoutes.filter(v => !v.redirect)
    setFlatRoutes(flatRoutes)
  }

  // 过滤隐藏菜单
  function filterHiddenRoute(routeList) {
    let list = [];
    list = routeList.filter(v => {
      if (v.routes?.length) {
        v.routes = filterHiddenRoute(v.routes);
        return !v.hideInMenu || v.routes.length
      } else {
        return !v.hideInMenu && v.name
      }
    })
    return list
  }

  // TODO: 过滤后台权限
  function filterNoAuthRoute(routes) {
    return routes
  }

  // 生成菜单
  function generateMenuList() {
    // console.log('routes==', pageRoutes);
    const layoutRoutes = pageRoutes;
    const authRoutes = filterNoAuthRoute(layoutRoutes);
    const menuList = filterHiddenRoute(authRoutes);
    console.log(menuList);
    setMenuList(menuList)
  }

  // 菜单点击事件
  const onMenuClick = useCallback((menu) => {
    if (activeKey !== menu.name) {
      history.push(menu.path)
    }
  }, [activeKey])


  return {
    menuList,
    activeKey,
    setActiveKey,
    generateMenuList,
    initRoutes,
    onMenuClick,
    getMatchRoute,
  }
} 