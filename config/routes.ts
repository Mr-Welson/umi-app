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
    title: 路由标题

 * 自定义配置项
    icon: 菜单图标
    name: 路由的唯一标识符
    isLocal: 是否只在开发环境显示，如：Test 路由或临时路由
    hideInMenu: 是否显示在菜单，如详情页路由不需要显示在菜单
    parentName: 路由的父级路由,只在 hideInMenu 为true时生效

 */

export const constantRoutes = [
  {
    path: '/login',
    name: 'login',
    title: '登录',
    component: '@/pages/login',
    hideInMenu: true,
  }
]


export const pageRoutes = [
  {
    path: '/',
    exact: true,
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: '@/pages/home',
    title: '首页',
    icon: 'UserOutlined',
  },
  {
    path: '/about',
    name: 'about',
    component: '@/pages/about',
    title: '关于',
    icon: 'VideoCameraOutlined',
  },
  {
    path: '/nested',
    name: 'nested',
    component: '@/layouts/nested',
    title: '嵌套',
    icon: 'UploadOutlined',
    routes: [
      {
        path: '/nested',
        exact: true,
        redirect: '/nested/menu-1/menu-1-1',
      },
      {
        path: '/nested/menu-1',
        name: 'menu-1',
        title: 'menu-1',
        icon: 'VideoCameraOutlined',
        parentName: ['post'],
        routes: [
          {
            path: '/nested/menu-1',
            redirect: '/nested/menu-1/menu-1-1',
            exact: true,
          },
          {
            path: '/nested/menu-1/menu-1-1',
            name: 'menu-1-1',
            component: '@/pages/nested/menu-1/menu-1-1',
            title: 'menu-1-1',
            icon: 'VideoCameraOutlined',
            hideInMenu: false,
            parentName: ['nested', 'menu-1']
          },
          {
            path: '/nested/menu-1/menu-1-2',
            name: 'menu-1-2',
            component: '@/pages/nested/menu-1/menu-1-2',
            title: 'menu-1-2',
            icon: 'VideoCameraOutlined',
            hideInMenu: false,
            parentName: ['nested', 'menu-1']
          },
          {
            path: '/nested/menu-1/menu-1-1/:id',
            name: 'menu-1-1-detail',
            component: '@/pages/nested/menu-1/menu-1-1-detail',
            title: 'menu-1-1 详情',
            icon: 'VideoCameraOutlined',
            hideInMenu: true,
            parentName: ['nested', 'menu-1', 'menu-1-1']
          }
        ]
      },
      {
        path: '/nested/menu-2',
        name: 'menu-2',
        component: '@/pages/nested/menu-2',
        title: 'menu-2',
        icon: 'VideoCameraOutlined',
        parentName: ['nested']
      },
      {
        path: '/nested/menu-2/:id',
        name: 'menu-2-detail',
        component: '@/pages/nested/menu-2/menu-2-detail',
        title: 'menu 2 详情页',
        icon: 'VideoCameraOutlined',
        hideInMenu: true,
        parentName: ['nested', 'menu-2']
      }
    ],
  },
  {
    path: '/test',
    name: 'test',
    title: '本地路由',
    isLocal: true,
    component: '@/pages/test',
    icon: 'VideoCameraOutlined',
  },
  {
    path: '/hide',
    name: 'hideRoute',
    title: '隐藏路由',
    hideInMenu: true,
    component: '@/pages/test',
    icon: 'VideoCameraOutlined',
  },
  {
    name: '404',
    hideInMenu: true,
    component: '@/pages/404',
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
