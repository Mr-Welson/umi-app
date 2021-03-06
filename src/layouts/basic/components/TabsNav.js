import React, { useCallback, useEffect, useRef } from 'react';
import { Link, useModel, useLocation } from 'umi';
import { Tabs, Dropdown, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const TabsNav = ({ history }) => {
  const location = useLocation()
  const contextMenuRef = useRef();
  const { matchRoutes } = useModel('permission');
  const { tabList, activeTab, initTabList, setActiveTab, addTab, updateTabItem, closeTab, closeOther, closeAll } = useModel('tabsNav');

  useEffect(() => {
    initTabList()
  }, [])

  // 监听地址栏变化
  useEffect(() => {
    if (!matchRoutes.length) {
      return
    }
    const { icon, key, name } = matchRoutes[matchRoutes.length - 1];
    const tabItem = {
      icon, key,
      name: name + (location?.state?.pageTitle || ''),
      // name: location?.state?.pageTitle || name,
      pathname: location.pathname,
      location
    }
    addTab(tabItem)
    setActiveTab(tabItem)
  }, [matchRoutes])

  const onTabClose = useCallback((e, tabItem) => {
    e.stopPropagation();
    e.preventDefault();
    closeTab(tabItem);
  }, [tabList, activeTab.pathname]);

  const onContextMenu = (e, item) => {
    e.preventDefault();
    contextMenuRef.current = item;
  }
  const onRefresh = (e) => {
    // e.stopPropagation();
    const item = contextMenuRef.current;
    contextMenuRef.current = null;
    // updateTabItem(item)
    console.log(item);
    const location = {
      ...item.location,
      key: item.location.key + 1
    }
    console.log(location);
    history.replace(location)
  }
  const onClose = () => {
    const item = contextMenuRef.current;
    contextMenuRef.current = null;
    closeTab(item)
  }
  const onCloseOther = () => {
    const item = contextMenuRef.current;
    contextMenuRef.current = null;
    closeOther(item)
  }

  return (
    <Tabs activeKey={activeTab.pathname} className="app-tab-list">
      {tabList.map((v) => {
        const isHomePage = v.key === 'home';
        const closeAble = tabList.length > 1;
        return (
          <TabPane
            key={v.pathname}
            tab={
              <Dropdown
                overlay={
                  <div className="tab-context-menu">
                    <Button type="link" block className="context-item" disabled={activeTab.pathname !== v.pathname} onClick={onRefresh}>刷新</Button>
                    <Button type="link" block className="context-item" disabled={isHomePage || !closeAble} onClick={onClose}>关闭</Button>
                    <Button type="link" className="context-item" disabled={!closeAble} onClick={onCloseOther}>关闭其他</Button>
                    <Button type="link" className="context-item" disabled={isHomePage || !closeAble} onClick={closeAll}>关闭所有</Button>
                  </div>
                }
                placement="bottomLeft"
                trigger={['contextMenu']}
              >
                <Link to={v.location} onContextMenu={(e) => onContextMenu(e, v)}>
                  <div className="app-tab-item" >
                    <span>{v.name}</span>
                    {tabList.length > 1 && !isHomePage && (
                      <CloseOutlined onClick={(e) => onTabClose(e, v)} />
                    )}
                  </div>
                </Link>
              </Dropdown>

            }
          ></TabPane>
        )
      })}
    </Tabs >
  );
};

export default TabsNav;
