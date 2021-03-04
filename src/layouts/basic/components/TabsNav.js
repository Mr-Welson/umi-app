import React, { useCallback, useEffect } from 'react';
import { useModel, useLocation } from 'umi';
import { Tabs } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const TabsNav = () => {
  const location = useLocation()
  const { matchRoutes } = useModel('permission');
  const { tabList, activeTab, setActiveTab, onTabClick, addTab, closeTab } = useModel('tabsNav');

  // useEffect(() => {
  // initTabList()
  // }, [])

  // 监听地址栏变化
  useEffect(() => {
    if (matchRoutes.length) {
      const { icon, name, title } = matchRoutes[matchRoutes.length - 1];
      const tabItem = {
        icon, name,
        title: location?.state?.pageTitle || title,
        pathname: location.pathname,
        location
      }
      addTab(tabItem)
      setActiveTab(tabItem)
    }
  }, [matchRoutes])

  const onTabClose = useCallback((e, tabItem) => {
    e.stopPropagation();
    closeTab(tabItem);
  }, [tabList, activeTab.pathname]);

  return (
    <Tabs hideAdd activeKey={activeTab.pathname} className="app-tab-list">
      {tabList.map((v) => (
        <TabPane
          key={v.pathname}
          tab={
            <div className="app-tab-item" onClick={() => onTabClick(v)}>
              <span>{v.title}</span>
              {tabList.length > 1 && (
                <CloseOutlined onClick={(e) => onTabClose(e, v)} />
              )}
            </div>
          }
        ></TabPane>
      ))}
    </Tabs>
  );
};

export default TabsNav;
