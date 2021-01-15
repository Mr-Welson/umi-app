import React from 'react';
import { useModel } from 'umi';
import { Tabs } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const RouteTab = (props) => {
  const { activeKey, tabList, onRouteClose, onRouteChange } = useModel(
    'useTabRouteModel',
  );

  const onTabClose = (e, key) => {
    e.stopPropagation();
    onRouteClose(key);
  };

  return (
    <Tabs hideAdd activeKey={activeKey} className="app-tab-list">
      {tabList.map((pane) => (
        <TabPane
          key={pane.path}
          tab={
            <div className="app-tab-item" onClick={() => onRouteChange(pane)}>
              <span>{pane.title}</span>
              {tabList.length > 1 && (
                <CloseOutlined onClick={(e) => onTabClose(e, pane.path)} />
              )}
            </div>
          }
        ></TabPane>
      ))}
    </Tabs>
  );
};

export default RouteTab;
