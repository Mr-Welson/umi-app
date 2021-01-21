import { useState, useCallback } from 'react';
import { history } from 'umi';

export default function useTabRouteModel() {
  // 所有路由的集合
  const [routeList, setRouteList] = useState([]);
  // 页签集合
  const [tabList, setTabList] = useState([]);
  // 当前激活菜单和页签的 name
  const [activeKey, setActiveKey] = useState('');


  // TODO: 缓存路由
  const setCache = () => { }


  const matchedRoutes = () => {

  }
  // 设置当前路由
  const setActiveRoute = useCallback((pathname) => {
    // 根据 pathname 查询匹配路由

  }, [])

  /**
   * pathname change
   */
  const onPathChange = useCallback(({ location, action = 'push' }) => {
    console.log(location);
    // 1. 根据 pathname 获取匹配路由信息
    console.log(routeList);
    


    // 2. 路由匹配 -> 更新 tabList


    // 3. 未匹配 -> 404

    // if (tabList.find(v => v.name === route.name)) {
    //   setActiveKey(route.name);
    // } else {
    //   // TODO: 验证路由合法性
    //   const isRouteValidate = true;
    //   if (isRouteValidate) {
    //     setTabList([].concat(tabList, { route, location }));
    //   } else {
    //     // 404
    //   }
    // }
  }, [tabList]);

  /**
   * 页签切换
   */
  const onTabChange = () => {}

  /**
   * 关闭单个页签路由
   */
  const onRouteClose = useCallback(route => {
    const newTabList = tabList.filter((v) => v.name !== route.name);
    if (route.name === activeKey) {
      const index = tabList.findIndex((v) => v.name === route.name);
      const newTab = index === 0 ? tabList[index + 1] : tabList[index - 1];
      onPathChange(newTab);
    }
    setTabList(newTabList);
  }, [tabList, activeKey]);

  return {
    routeList,
    setRouteList,
    tabList,
    setTabList,
    activeKey,
    setActiveKey,
    onPathChange,
    onRouteClose,
    onTabChange,
  };
}
