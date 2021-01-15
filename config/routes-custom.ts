// 路由配置项
/**
  path 前端路由访问地址
  exact 是否严格匹配
  redirect 路由重定向
  component 前端路由对应的组件路径
    绝对路径: '@/pages/index'
    相对路径（会从 src/pages 开始找起）: 'index'
  routes 配置子路由
  wrappers (Type: string[]) 配置路由的高阶组件封装：比如，可以用于路由级别的权限校验
  title: 路由标题
 */
export default [
  {
    path: '/login',
    component: '@/pages/login',
    title: '登录',
  },
  {
    path: '/',
    component: '@/layouts/basic',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
      {
        path: '/home',
        component: '@/pages/home',
        title: '首页',
        icon: 'UserOutlined',
      },
      {
        path: '/about',
        component: '@/pages/about',
        title: '关于',
        icon: 'VideoCameraOutlined',
      },
      {
        path: '/post',
        component: '@/layouts/post',
        title: '文章',
        icon: 'UploadOutlined',
        routes: [
          {
            path: '/post',
            redirect: '/post/frontEnd',
          },
          {
            path: '/post/frontEnd/:id?',
            component: '@/pages/post/frontEnd',
            title: '前端',
            icon: 'UserOutlined',
          },
          {
            path: '/post/backEnd',
            component: '@/pages/post/backEnd',
            title: '后端',
            icon: 'VideoCameraOutlined',
          },
        ],
      },
    ],
  },
  { component: '@/pages/404' },
];
