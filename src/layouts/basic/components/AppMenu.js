import React, { useState, useEffect, useCallback } from 'react';
import { useModel, history } from 'umi';
import { Menu } from 'antd';
import * as Icon from '@ant-design/icons';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const AppMenu = () => {
  const [activeKey, setActiveKey] = useState('');
  const { menuList, matchRoutes } = useModel('permission');

  useEffect(() => {
    if (matchRoutes.length) {
      const currRoute = matchRoutes[matchRoutes.length - 1];
      setActiveKey(currRoute.name)
    }
  }, [matchRoutes])

  const onMenuClick = useCallback((menu) => {
    if (activeKey !== menu.name) {
      history.push(menu.path)
    }
  }, [activeKey])

  const renderMenu = (menuList) => {
    return menuList.map((menu) => {
      let MenuIcon = Icon[menu.icon];
      if (menu.routes && menu.routes.length) {
        const subMenuList = menu.routes.filter((v) => !v.hideInMenu && v.title);
        return (
          <SubMenu key={menu.name} icon={<MenuIcon />} title={menu.title}>
            {renderMenu(subMenuList)}
          </SubMenu>
        );
      } else {
        return (
          <MenuItem
            key={menu.name}
            icon={<MenuIcon />}
            onClick={() => onMenuClick(menu)}
          >
            {menu.title}
          </MenuItem>
        );
      }
    })
  }

  return (
    <Menu
      className="app-menu"
      theme="dark"
      mode="inline"
      // openKeys={activeKey.split('-')}
      selectedKeys={[activeKey]}
    >
      {renderMenu(menuList)}
    </Menu>
  );
};

export default AppMenu;
