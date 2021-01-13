import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  // layout: {
  //   name: 'Ant Design Pro',
  //   locale: true,
  //   siderWidth: 208,
  // },
  title: 'Test', // 项目标题
  routes,
  favicon: '/static/logo.png',
  base: '/', // 部署路径
  publicPath: '/static/', // 静态资源访问目录
  hash: true, // build 文件 hash 后缀
  // history: {
  //   type: 'browser', // 路由模式，browser默认、hash、memory
  // },
  // metas: [], 配置额外的 meta 标签
  // proxy: {
  //   '/mock': {
  //     'target': 'http://jsonplaceholder.typicode.com/',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/mock' : '' },
  //   },
  // },
  dynamicImport: {
    // 异步加载设置
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: { 
    // 配置浏览器兼容（对象合并），默认 { chrome: 49, firefox: 64, safari: 10, edge: 13, ios: 10 }
    ie: 11,
    ios: false
  },
  theme: {
    'primary-color': 'red',
  },
});