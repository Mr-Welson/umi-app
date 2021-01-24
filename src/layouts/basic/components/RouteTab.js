import React from 'react';
import { useModel } from 'umi';
import { Tabs } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const RouteTab = () => {
  const { activeKey, tabList, onMenuClose, onMenuClick } = useModel(
    'useTabRouteModel',
  );

  const onTabClose = (e, route) => {
    e.stopPropagation();
    onMenuClose(route);
  };

  return (
    <Tabs hideAdd activeKey={activeKey} className="app-tab-list">
      {tabList.map(({ route }) => (
        <TabPane
          key={
            route.parentName
              ? `${route.parentName.join('-')}-${route.name}`
              : route.name
          }
          tab={
            <div className="app-tab-item" onClick={() => onMenuClick(route)}>
              <span>{route.title}</span>
              {tabList.length > 1 && (
                <CloseOutlined onClick={(e) => onTabClose(e, route)} />
              )}
            </div>
          }
        ></TabPane>
      ))}
    </Tabs>
  );
};

export default RouteTab;
