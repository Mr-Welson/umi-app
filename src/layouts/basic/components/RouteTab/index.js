import React from 'react';
import { useModel } from 'umi';
import { Tabs } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const RouteTab = (props) => {
  const { activeKey, tabList, onRouteClose, onTabChange } = useModel(
    'useTabRouteModel',
  );

  const onTabClose = (e, route) => {
    e.stopPropagation();
    onRouteClose(route);
  };

  return (
    <Tabs hideAdd activeKey={activeKey} className="app-tab-list">
      {tabList.map(({ route, location }) => (
        <TabPane
          key={route.name}
          tab={
            <div className="app-tab-item" onClick={() => onTabChange({ route, location })}>
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
