import React, { useCallback } from 'react';
import { useModel } from 'umi';
import { Menu } from 'antd';
import * as Icon from '@ant-design/icons';

const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;

const AppMenu = (props) => {
  console.log('=== AppMenu ===', props);
  const { menuList, activeKey, onMenuClick } = useModel('useTabRouteModel');

  const renderMenu = useCallback((menuList) => {
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
  }, [menuList])

  console.log(activeKey);
  return (
    <Menu
      className="app-menu"
      theme="dark"
      mode="inline"
      // openKeys={activeKey.split('-')}
      selectedKeys={activeKey.split('-')}
    >
      {renderMenu(menuList)}
    </Menu>
  );
};

export default AppMenu;


/* {menuList.map((menu) => {
       let MenuIcon = Icon[menu.icon];
       if (menu.routes && menu.routes.length) {
         const subMenuList = menu.routes.filter((v) => v.title);
         return renderMenu(subMenuList)
         // return (
         //   <SubMenu key={menu.name} icon={<MenuIcon />} title={menu.title}>
         //     {subMenuList.map((subMenu) => {
         //       let SubMenuIcon = Icon[subMenu.icon];
         //       return (
         //         <MenuItem
         //           key={subMenu.name}
         //           icon={<SubMenuIcon />}
         //           onClick={() => onMenuClick(subMenu)}
         //         >
         //           {subMenu.title}
         //         </MenuItem>
         //       );
         //     })}
         //   </SubMenu>
         // );
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
     })} */
