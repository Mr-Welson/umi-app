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
    name: '登录',
    layout: false,
    // // 不展示顶栏
    // headerRender: false,
    // // 不展示页脚
    // footerRender: false,
    // // 不展示菜单
    // menuRender: false,
    // // 不展示菜单顶栏
    // menuHeaderRender: false,
    // // 权限配置，需要与 plugin-access 插件配合使用
    // access: 'canRead',
    // // 隐藏子节点
    // hideChildrenInMenu: true,
    // // 隐藏自己和子节点
    hideInMenu: true,
    // // 子项往上提，仍旧展示,
    // flatMenu: true,
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: '@/pages/home',
    name: '首页',
    icon: 'user',
  },
  {
    path: '/about',
    component: '@/pages/about',
    name: '关于',
    icon: 'VideoCameraOutlined',
  },
  {
    path: '/post',
    component: '@/layouts/post',
    name: '文章',
    icon: 'smile',
    routes: [
      {
        path: '/post',
        redirect: '/post/frontEnd',
      },
      {
        // key: '/post/frontEnd',
        path: '/post/frontEnd/:id?',
        component: '@/pages/post/frontEnd',
        name: '前端',
        icon: 'smile',
      },
      {
        path: '/post/backEnd',
        component: '@/pages/post/backEnd',
        name: '后端',
        icon: 'user',
      },
    ],
  },
  { component: '@/pages/404' },
];
