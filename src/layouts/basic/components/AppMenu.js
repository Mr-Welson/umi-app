import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useModel } from 'umi';
import { Menu } from 'antd';
import * as Icon from '@ant-design/icons';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const AppMenu = (props) => {
  console.log('=== AppMenu ===', props);
  const { routeList, activeKey, onMenuClick } = useModel('useTabRouteModel');
  const menuList = useMemo(() => routeList.filter(v => !v.hideInMenu), [routeList])

  return (
    <Menu
      className="app-menu"
      theme="dark"
      mode="inline"
      selectedKeys={[activeKey]}
    >
      {menuList.map((menu) => {
        let MenuIcon = Icon[menu.icon];
        if (menu.routes && menu.routes.length) {
          const subMenuList = menu.routes.filter((v) => v.title);
          return (
            <SubMenu key={menu.name} icon={<MenuIcon />} title={menu.title}>
              {subMenuList.map((subMenu) => {
                let SubMenuIcon = Icon[subMenu.icon];
                return (
                  <MenuItem
                    key={subMenu.name}
                    icon={<SubMenuIcon />}
                    onClick={() => onMenuClick(subMenu)}
                  >
                    {subMenu.title}
                  </MenuItem>
                );
              })}
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
      })}
    </Menu>
  );
};

export default AppMenu;
