import React from 'react';
import { LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons';
import { useHistory } from 'umi'
import { Menu, Dropdown, Avatar } from 'antd';
import Utils from '@/utils';

const MenuHeaderDropdown = () => {
  const history = useHistory()
  const loginOut = () => {
    Utils.setCache('zf_token', undefined, 'session')
    history.push('/login')
  }
  return (
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
      <Menu.Item key="logout" onClick={loginOut}>
        <LogoutOutlined />
      退出登录
    </Menu.Item>
    </Menu>
  )
};

const AvatarDropdown = () => {
  return (
    <Dropdown overlay={<MenuHeaderDropdown />}>
      <span>
        <Avatar size="small" src={'assets/avatar.jpg'} alt="avatar" />
        <span> 测试 </span>
      </span>
    </Dropdown>
  )
}

export default AvatarDropdown;