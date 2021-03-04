import React from 'react';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, Dropdown, Avatar } from 'antd';

const MenuHeaderDropdown = (
  <Menu>
    <Menu.Item key="center">
      <UserOutlined />
        个人中心
      </Menu.Item>
    <Menu.Item key="settings">
      <SettingOutlined />
        个人设置
      </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="logout">
      <LogoutOutlined />
      退出登录
    </Menu.Item>
  </Menu>
);

const AvatarDropdown = () => {
  return (
    <Dropdown overlay={MenuHeaderDropdown}>
      <span>
        <Avatar size="small" src={'/avatar.jpg'} alt="avatar" />
        <span> 测试 </span>
      </span>
    </Dropdown>
  )
}

export default AvatarDropdown;