import React, { useEffect, useMemo, useState } from 'react';
import { useModel } from 'umi';
import SiderMenu from './components/SiderMenu';

import './index.less';

const BasicLayout = (props) => {
  console.log('=== BasicLayout ===', props);
  const { route, location } = props;
  const { setActiveKey, onPathChange } = useModel('useTabRouteModel');


  // 监听路由变化
  useEffect(() => {
    // TODO: 手动输入路由时需要初始化项目
    console.log(22222);
    onPathChange({ location })
  }, [location.pathname]);

  return <SiderMenu {...props} />;
};

export default BasicLayout;
