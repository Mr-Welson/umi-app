import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
/**
 * 运行时配置文件
 */

/**
 * patchRoutes
 * @desc 修改路由
 * @param {*} container
 */

/**
 * rootContainer
 * @desc 修改交给 react-dom 渲染时的根组件
 * @param {*} container
 */
export function rootContainer(container) {
  return React.createElement(ConfigProvider, { locale: zhCN }, container);
}
