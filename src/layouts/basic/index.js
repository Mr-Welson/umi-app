import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useModel } from 'umi';
import SiderMenu from './components/SiderMenu';

import './index.less';

const BasicLayout = (props) => {
  console.log('=== BasicLayout ===', props);
  const { route, location } = props;
  const { setRouteList, onPathChange } = useModel('useTabRouteModel');
  // 业务路由的集合
  const [pageRoutes] = useState(route.routes.filter((v) => v.path && v.name))

  useEffect(() => {
    console.log('=== setRouteList ===', 111, pageRoutes);
    setRouteList(pageRoutes)
  }, [pageRoutes])

  // 监听路由变化
  useEffect(() => {
    setTimeout(() => {
      console.log('=== onPathChange ===', 222);
      onPathChange({ location })
    }, 100)
  }, [location.pathname]);

  return <SiderMenu {...props} />;
};

export default BasicLayout;
