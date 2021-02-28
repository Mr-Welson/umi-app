import React, { useState, useEffect, useCallback } from 'react';
import { useModel, history } from 'umi';
import { Menu } from 'antd';
import * as Icon from '@ant-design/icons';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const AppMenu = ({theme}) => {
  const [activeKeys, setActiveKeys] = useState([]);
  const { menuList, matchRoutes } = useModel('permission');

  useEffect(() => {
    if (matchRoutes.length) {
      // console.log('matchRoutes==', matchRoutes);
      const activeKeys = matchRoutes.map(v => v.name)
      setActiveKeys(activeKeys)
    }
  }, [matchRoutes])

  const onMenuClick = useCallback((menu) => {
    if (!activeKeys.includes(menu.name)) {
      history.push(menu.path)
    }
  }, [activeKeys])

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
      mode="inline"
      theme={theme}
      defaultOpenKeys={activeKeys}
      selectedKeys={activeKeys}
    >
      {renderMenu(menuList)}
    </Menu>
  );
};

export default AppMenu;
