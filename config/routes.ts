// 路由配置项
/**
 * umi配置项：
    path 前端路由访问地址
    exact 是否严格匹配
    redirect 路由重定向
    component 前端路由对应的组件路径
      绝对路径: '@/pages/index'
      相对路径（会从 src/pages 开始找起）: 'index'
    routes 配置子路由
    wrappers (Type: string[]) 配置路由的高阶组件封装：比如，可以用于路由级别的权限校验
    name: 路由标题

 * 自定义配置项
    icon: 菜单图标
    key: 路由的唯一标识符
    isLocal: 是否只在开发环境显示，如：Test 路由或临时路由
    hideInMenu: 是否显示在菜单，如详情页路由不需要显示在菜单

 */

export const constantRoutes = [
  {
    path: '/login',
    key: 'login',
    name: '登录',
    component: '@/pages/login',
    hideInMenu: true,
  }
]

export const pageRoutes = [
  {
    path: '/',
    redirect: '/home',
    exact: true,
  },
  {
    path: '/home',
    key: 'home',
    component: '@/pages/home',
    name: '首页',
    icon: 'UserOutlined',
  },
  {
    path: '/about',
    key: 'about',
    component: '@/pages/about',
    name: '关于',
    icon: 'VideoCameraOutlined',
  },
  {
    path: '/nested',
    component: '@/layouts/nested',
    key: 'nested',
    name: '嵌套',
    icon: 'UploadOutlined',
    needRedirect: true,
    routes: [
      {
        path: '/nested',
        redirect: '/nested/menu-1/menu-1-1',
        exact: true,
        // key: 'nested',
        // name: '嵌套',
        // icon: 'UploadOutlined',
      },
      {
        path: '/nested/menu-1',
        key: 'menu-1',
        name: 'menu-1',
        icon: 'VideoCameraOutlined',
        needRedirect: true,
        routes: [
          {
            path: '/nested/menu-1',
            redirect: '/nested/menu-1/menu-1-1',
            exact: true,
            // key: 'menu-1',
            // name: 'menu-1',
            // icon: 'VideoCameraOutlined',
          },
          {
            path: '/nested/menu-1/menu-1-1',
            key: 'menu-1-1',
            component: '@/pages/nested/menu-1/menu-1-1',
            name: 'menu-1-1',
            icon: 'VideoCameraOutlined',
            // routes: [
            //   {
            //     此种配置暂不生效，待完善
            //     path: '/nested/menu-1/menu-1-1/:id',
            //     key: 'menu-1-1-detail',
            //     component: '@/pages/nested/menu-1/menu-1-1-detail',
            //     name: 'menu-1-1 详情',
            //     icon: 'VideoCameraOutlined',
            //     hideInMenu: true,
            //   },
            // ],
          },
          {
            path: '/nested/menu-1/menu-1-1/:id',
            key: 'menu-1-1-detail',
            component: '@/pages/nested/menu-1/menu-1-1-detail',
            name: 'menu-1-1 详情',
            icon: 'VideoCameraOutlined',
            hideInMenu: true
          },
          {
            path: '/nested/menu-1/menu-1-2',
            key: 'menu-1-2',
            component: '@/pages/nested/menu-1/menu-1-2',
            name: 'menu-1-2',
            icon: 'VideoCameraOutlined',
          },
        ]
      },
      {
        path: '/nested/menu-2',
        key: 'menu-2',
        component: '@/pages/nested/menu-2',
        name: 'menu-2',
        icon: 'VideoCameraOutlined',
      },
      {
        path: '/nested/menu-2-detail/:id?',
        key: 'menu-2-detail',
        component: '@/pages/nested/menu-2/menu-2-detail',
        name: 'menu 2 详情页',
        icon: 'VideoCameraOutlined',
        hideInMenu: true,
        activeMenuName: 'menu-2'
      }
    ],
  },
  {
    path: '/test',
    key: 'test',
    name: '本地路由',
    isLocal: true,
    component: '@/pages/test',
    icon: 'VideoCameraOutlined',
  },
  {
    path: '/hide',
    key: 'hideRoute',
    name: '隐藏路由',
    hideInMenu: true,
    component: '@/pages/test',
    icon: 'VideoCameraOutlined',
  },
  // {
  //   path: '/404',
  //   key: '404',
  //   name: '404',
  //   hideInMenu: true,
  //   component: '@/pages/404',
  //   icon: 'VideoCameraOutlined',
  // },
  {
    // key: '404',
    component: '@/pages/404',
    hideInMenu: true,
    // redirect: '/404',
  },
]

export const asyncRoutes = [
  {
    path: '/',
    component: '@/layouts/basic',
    routes: pageRoutes,
  },
]
export default [
  ...constantRoutes,
  ...asyncRoutes,
];
