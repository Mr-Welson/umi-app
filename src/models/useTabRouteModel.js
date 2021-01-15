import { useState, useCallback } from 'react';
import { history } from 'umi';

export default function useTabRouteModel() {
  const [tabList, setTabList] = useState([]);
  const [activeKey, setActiveKey] = useState('');

  // TODO: 路由缓存
  const onRouteChange = useCallback(
    (route) => {
      // TODO: 验证路由合法性
      if (tabList.find((v) => v.path === route.path)) {
        setActiveKey(route.path);
      } else {
        setTabList([].concat(tabList, route));
      }
      history.push(route.path);
    },
    [tabList],
  );

  const onRouteClose = useCallback(
    (key) => {
      const newTabList = tabList.filter((v) => v.path !== key);
      if (key === activeKey) {
        const index = tabList.findIndex((v) => v.path === key);
        const newTab = index === 0 ? tabList[index + 1] : tabList[index - 1];
        onRouteChange(newTab);
      }
      setTabList(newTabList);
    },
    [tabList, activeKey],
  );

  return {
    tabList,
    activeKey,
    setTabList,
    setActiveKey,
    onRouteChange,
    onRouteClose,
  };
}
