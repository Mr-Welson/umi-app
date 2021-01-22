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
export default [
  {
    path: '/login',
    name: 'login',
    title: '登录',
    component: '@/pages/login',
    hideInMenu: true,
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
        path: '/post',
        name: 'post',
        component: '@/layouts/post',
        title: '文章',
        icon: 'UploadOutlined',
        routes: [
          {
            path: '/post',
            redirect: '/post/frontEnd',
          },
          {
            path: '/post/frontEnd',
            name: 'postFrontEnd',
            component: '@/pages/post/frontEnd',
            title: '前端',
            icon: 'VideoCameraOutlined',
          },
          {
            path: '/post/backEnd',
            name: 'postBackEnd',
            component: '@/pages/post/backEnd',
            title: '后端',
            icon: 'VideoCameraOutlined',
          },
          {
            path: '/post/frontEnd/Detail/:id?',
            name: 'frontEndDetail',
            component: '@/pages/post/frontEnd/detail',
            title: '前端详情页',
            icon: 'VideoCameraOutlined',
            hideInMenu : true,
            parentName: ['postFrontEnd']
          },
        ],
      },
      {
        path: '/test',
        name: 'test',
        title: '测试',
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
      { component: '@/pages/404', name: '404', },
    ],
  },
];
