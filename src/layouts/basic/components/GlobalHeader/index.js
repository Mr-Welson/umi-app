import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { Layout } from 'antd';
import { connect } from 'dva';
import style from './index.less';
import ThemeMenu from './ThemeMenu'
import AvatarDropdown from './AvatarDropdown';

const AppHeader = ({ collapsed, dispatch }) => {
  const setCollapsed = (collapsed) => {
    return dispatch({
      type: 'settings/asyncTest2',
      payload: { collapsed },
    })
  }
  return (
    <Layout.Header className={style['global-header']}>
      <div className={style["left-content"]}>
        <span className={style["trigger"]} onClick={() => setCollapsed(!collapsed)}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </span>
      </div>
      <div className={style['right-content']}>
        <div className={style['header-action']}>
          <ThemeMenu />
        </div>
        <div className={style['header-action']}>
          <AvatarDropdown />
        </div>
      </div>
    </Layout.Header>
  )
}

const mapStateToProps = ({ settings, loading }) => ({
  collapsed: settings.collapsed,
  loading: loading.models.settings,
})
export default connect(mapStateToProps)(AppHeader);