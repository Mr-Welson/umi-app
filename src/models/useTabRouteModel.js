import { useState, useCallback } from 'react';
import { history } from 'umi';

export default function useTabRouteModel() {
  const [routeList, setRouteList] = useState([]);
  const [tabList, setTabList] = useState([]);
  const [activeKey, setActiveKey] = useState('');

  // TODO: 路由缓存
  const onRouteChange = useCallback((route) => {
    // TODO: 验证路由合法性
    if (tabList.find((v) => v.name === route.name)) {
      setActiveKey(route.name);
    } else {
      setTabList([].concat(tabList, route));
    }
    history.push(route.path);
  }, [tabList]);

  const onRouteClose = useCallback(({ name }) => {
    const newTabList = tabList.filter((v) => v.name !== name);
    const index = tabList.findIndex((v) => v.name === name);
    if (key === activeKey) {
      const newTab = index === 0 ? tabList[index + 1] : tabList[index - 1];
      onRouteChange(newTab);
    }
    setTabList(newTabList);
  }, [tabList, activeKey]);

  return {
    tabList,
    activeKey,
    setTabList,
    setActiveKey,
    onRouteChange,
    onRouteClose,
  };
}
