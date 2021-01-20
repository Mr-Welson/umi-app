import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

/**
 * 运行时配置文件
 * 按执行顺序书写
 */

/**
 * patchRoutes
 * @desc 修改路由，直接修改routes，不需要返回
 * @param {*} routes
 */
export function patchRoutes({ routes }) {
  console.log('=====  patchRoutes =====');
  console.log(routes);
  const pageRoute = routes.find(v => v.path === '/');
  if(process.env.NODE_ENV === 'product') {
    // 过滤本地路由
    pageRoute.routes = pageRoute.routes.filter(v => !v.isLocal)
  }
}

/**
 * rootContainer
 * @desc 修改交给 react-dom 渲染时的根组件
 * @param {*} container
 * @param {Object} {history, plugin, routes}
 */
export function rootContainer(container) {
  return React.createElement(ConfigProvider, { locale: zhCN }, container);
}

/**
 * patchRoutes
 * @desc 在初始加载和路由切换时做一些事情
 * @param {*} routes
 * @param {*} matchedRoutes
 * @param {*} location
 * @param {*} action
 */
export function onRouteChange({ routes, matchedRoutes, location, action }) {
  console.log('=====  onRouteChange =====');
  console.log(location);
  console.log(matchedRoutes);
  if (matchedRoutes.length) {
    const currentRoute = matchedRoutes[matchedRoutes.length - 1];
  }
}


