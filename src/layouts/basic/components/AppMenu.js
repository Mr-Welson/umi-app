import React, { useState, useEffect, useCallback } from 'react';
import { useModel, history } from 'umi';
import { Menu } from 'antd';
import * as Icon from '@ant-design/icons';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const AppMenu = ({ theme }) => {
  const [activeKeys, setActiveKeys] = useState([]);
  const { menuList, matchRoutes } = useModel('permission');

  // 监听地址栏变化
  useEffect(() => {
    if (matchRoutes.length) {
      const activeKeys = matchRoutes.map(v => v.name)
      setActiveKeys(activeKeys)
    }
  }, [matchRoutes])

  const onMenuClick = useCallback((menu) => {
    if (!activeKeys.includes(menu.name)) {
      history.push(menu.path)
    }
  }, [activeKeys])

  const renderSubMenu = (menu) => {
    let MenuIcon = Icon[menu.icon];
    const subMenuList = menu.routes.filter((v) => !v.hideInMenu && v.title);
    return (
      <SubMenu key={menu.name} icon={<MenuIcon />} title={menu.title}>
        {renderMenu(subMenuList)}
      </SubMenu>
    );
  }

  const renderMenuItem = (menu) => {
    let MenuIcon = Icon[menu.icon];
    return (
      <MenuItem
        key={menu.name}
        icon={<MenuIcon />}
        onClick={() => onMenuClick(menu)}
      >
        {menu.title}
      </MenuItem>
    )
  }

  const renderMenu = (menuList) => {
    return menuList.map((menu) => {
      if (menu.routes && menu.routes.length) {
        return renderSubMenu(menu)
      } else {
        return renderMenuItem(menu)
      }
    })
  }

  return (
    <Menu
      className="app-menu"
      mode="inline"
      theme={theme}
      // defaultOpenKeys={activeKeys}
      selectedKeys={activeKeys}
    >
      {renderMenu(menuList)}
    </Menu>
  );
};

export default AppMenu;
