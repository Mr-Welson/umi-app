import { useState } from "react"
import { history } from 'umi';
import _ from 'lodash';

export default function tabsNavModel() {

  /**
  通过 pathname 匹配对应路由, 找到路由信息, 合成 tabItem
  tabItem: {
    icon: 'icon'
    name: 'home',
    title: '首页',
    pathname: '/home',
    location: {
      pathname: '/home',
      query: {},
      search: '',
      state: undefined,
      hash: ''
    }
  }
 */
  const [tabList, setTabList] = useState([]);
  const [activeTab, setActiveTab] = useState({});
  // 点击 Tab
  function onTabClick(tabItem) {
    if (activeTab.pathname !== tabItem.pathname) {
      // console.log(location.pathname);
      setActiveTab(tabItem)
      history.push(tabItem.location)
    }
  }
  // 新增 Tab 
  function addTab(tabItem) {
    const index = tabList.findIndex(v => v.pathname === tabItem.pathname);
    if (index === -1) {
      // 新增
      return setTabList([...tabList, tabItem])
    }
    const item = tabList[index];
    if (!_.isEqual(item, tabItem)) {
      // 更新
      return updateTabItem(tabItem, index)
    }
  };
  // 更新 Tab
  function updateTabItem(tabItem, index) {
    index = index || tabList.findIndex(v => v.pathname === tabItem.pathname);
    tabList.splice(index, 1, tabItem)
    setTabList(tabList);
  };
  // 关闭当前
  function closeTab(tabItem) {
    if (tabItem.pathname === activeTab.pathname) {
      const index = tabList.findIndex((v) => v.pathname === tabItem.pathname);
      const newTab = index === 0 ? tabList[index + 1] : tabList[index - 1];
      history.push(newTab.location.pathname)
    }
    const newTabList = tabList.filter((v) => v.pathname !== tabItem.pathname);
    setTabList(newTabList);
  }
  // 关闭其他
  function closeOther() {

  }
  // 关闭所有
  function closeAll() {

  }

  return {
    tabList,
    addTab,
    activeTab,
    setActiveTab,
    onTabClick,
    closeTab,
  }
}