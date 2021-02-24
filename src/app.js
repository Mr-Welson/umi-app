import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';

/**
 * 运行时配置文件
 * 按执行顺序书写
 */


/**
* render。
* @desc 覆写 render, 比如用于渲染之前做权限校验，
* @param {*} oldRender 
*/
export function render(oldRender) {
  // console.log('=====  render =====');
  oldRender()
}


/**
 * patchRoutes
 * @desc 修改路由，直接修改routes，不需要返回值
 * @param {*} routes
 */
export function patchRoutes({ routes }) {
  // console.log('=====  patchRoutes =====');
  let pageRoutes = routes.find(v => v.path === '/').routes;
  // TODO: 过滤权限
  if (process.env.NODE_ENV === 'product') {
    // 过滤本地路由
    pageRoutes = pageRoutes.filter(v => !v.isLocal)
  } else {
    // console.log(pageRoutes);
  }
}

/**
 * rootContainer
 * @desc 修改交给 react-dom 渲染时的根组件
 * @param {*} container
 * @param {Object} {history, plugin, routes}
 */
export function rootContainer(container, { routes, history }) {
  // console.log('=====  rootContainer =====');
  return React.createElement(ConfigProvider, { locale: zhCN }, container);
}

/**
 * onRouteChange
 * @desc 在初始加载和路由切换时做一些事情
 * @param {*} routes
 * @param {*} matchedRoutes
 * @param {*} location
 * @param {*} action
 */
// export function onRouteChange({ routes, matchedRoutes, location, action }) {
//   console.log('=====  onRouteChange =====');
//   console.log(location);
//   console.log(matchedRoutes);
//   if (matchedRoutes.length) {
//     const currentRoute = matchedRoutes[matchedRoutes.length - 1];
//   }
// }

export async function getInitialState() {
  console.log('=====  getInitialState =====');
  // const data = await fetchXXX();
  // return data;
}


