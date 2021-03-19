import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  ignoreMomentLocale: true, // 忽略 moment 的 locale 文件，用于减少尺寸
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {},
  // layout: {
  //   name: 'Ant Design Pro',
  //   locale: false, // 国际化
  //   siderWidth: 208,
  //   layout: 'side',
  //   logo: '',
  //   navTheme: 'dark',
  //   primaryColor: '#1890ff',
  //   contentWidth: 'Fluid',
  //   fixedHeader: true,
  //   fixSiderbar: false,
  //   title: false,
  //   pwa: false,
  // },
  // metas: [], 配置额外的 meta 标签
  title: '中台系统', // 项目标题
  routes,
  base: '/', // 部署路径
  // publicPath: '/static/', // 静态资源访问目录
  hash: true, // build 文件 hash 后缀
  history: {
    type: 'browser', // 路由模式, 默认: browser, hash, memory
  },
  dynamicImport: {
    // 异步加载设置
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    // 配置浏览器兼容（对象合并），默认 { chrome: 49, firefox: 64, safari: 10, edge: 13, ios: 10 }
    ie: 11,
    ios: false,
    safari: false,
  },
  theme: {
    'primary-color': 'red',
  },
  devServer: {
    port: 8000
  },
  proxy: {
    '/mock': {
      'target': 'http://jsonplaceholder.typicode.com/',
      'changeOrigin': true,
      'pathRewrite': { '^/mock': '' },
    },
  },
});
