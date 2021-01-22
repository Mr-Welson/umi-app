import { useState, useCallback } from 'react';
import { matchPath } from 'react-router-dom';
import { history } from 'umi';

export default function useTabRouteModel() {
  // 所有业务路由的集合
  const [routeList, setRouteList] = useState([]);
  // 页签集合
  const [tabList, setTabList] = useState([]);
  // 渲染的菜单集合
  const [menuList, setMenuList] = useState([]);
  // 当前激活菜单和页签的 name
  const [activeKey, setActiveKey] = useState('');


  // TODO: 缓存路由
  const setCache = () => { }


  // 路由匹配
  const getMatchRoute = (routeList, pathname) => {
    let matchRoutes = false;
    routeList.every(v => {
      let match = null;
      if (v.routes?.length) {
        match = getMatchRoute(v.routes, pathname);
        match && (matchRoutes = match);
      } else {
        match = matchPath(pathname, {
          path: v.path,
          exact: v.exact,
          strict: v.strict
        });
        match && (matchRoutes = v);
      }
      return !match
    })
    return matchRoutes;
  }
  /**
   * pathname 监听
   */
  const onPathChange = useCallback(({ location }) => {
    // 1. 根据 pathname 获取匹配路由信息
    const matchRoutes = getMatchRoute(routeList, location.pathname);
    console.log(routeList);
    console.log('matchRoutes==', matchRoutes);
    // 2. 未匹配 -> 404
    if (!matchRoutes) {
      return
    }
    // 3. 路由匹配
    // 4.1. 页面已打开，直接切换
    const tabExist = tabList.find((v) => v.route.name === matchRoutes.name);
    if (!tabExist) {
      // 2. 页面未打开 -> 更新 tabList
      setTabList([].concat(tabList, { route: matchRoutes, location }));
    } else {
      // 3. 页面已打开 -> 更新 location
      tabExist.location = location
    }
    // 4.2 匹配 -> 更新 tabList, 更新 activeKey
    setActiveKey(`${matchRoutes?.parentName.join('-')}-${matchRoutes.name}`);
  }, [routeList, tabList]);

  /**
   * 切换菜单
   */
  const onMenuClick = useCallback((menu) => {
    if (activeKey !== menu.name) {
      history.push(menu.path)
    }
  }, [activeKey])

  /**
   * 关闭单个菜单
   */
  const onMenuClose = useCallback(route => {
    const newTabList = tabList.filter((v) => v.route.name !== route.name);
    if (route.name === activeKey) {
      // 关闭的是当前激活页签
      const index = tabList.findIndex((v) => v.route.name === route.name);
      const newTab = index === 0 ? tabList[index + 1] : tabList[index - 1];
      history.push(newTab.location.pathname)
    }
    setTabList(newTabList);
  }, [tabList, activeKey]);

  return {
    routeList,
    setRouteList,
    menuList,
    setMenuList,
    tabList,
    setTabList,
    activeKey,
    // setActiveKey,
    onPathChange,
    onMenuClose,
    onMenuClick,
  };
}
