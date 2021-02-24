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

  自定义配置项 meta
  meta: {
    title: 路由标题
    hideInBread: (false) 设为true后此级路由将不会出现在面包屑中
    hideInMenu: (false) 设为true后在菜单中不会显示该选项,如详情页路由不需要显示在菜单
    notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
    icon: 菜单图标
    name: 路由的唯一标识符
    isLocal: 是否只在开发环境显示，如：Test 路由或开发时路由
    parentName: 路由的父级路由,只在 hideInMenu 为true时生效
  }
 
 */
export default [
  {
    path: '/login',
    component: '@/pages/login',
    name: 'login',
    meta: {
      title: '登录',
      hideInMenu: true,
    }
  },
  {
    path: '/',
    exact: true,
    component: '@/layouts/basic',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: '@/layouts/basic',
    meta: {
      title: '首页',
      icon: 'UserOutlined',
    },
    routes: [
      {
        path: '/index',
        component: '@/pages/home',
        exact: true,
        redirect: '/post/frontEnd',
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: '@/layouts/basic',
    meta: {
      title: '关于',
      icon: 'VideoCameraOutlined',
    },
    routes: [
      {
        path: '/index',
        component: '@/pages/about',
        exact: true,
        redirect: '/post/frontEnd',
      }
    ]
  },
  {
    path: '/post',
    name: 'post',
    component: '@/layouts/basic',
    meta: {
      title: '文章',
      icon: 'UploadOutlined',
    },
    routes: [
      {
        path: '/post',
        exact: true,
        redirect: '/post/frontEnd',
      },
      {
        path: '/post/frontEnd',
        name: 'postFrontEnd',
        component: '@/pages/post/frontEnd',
        meta: {
          title: '前端',
          icon: 'VideoCameraOutlined',
          parentName: ['post'],
        },
        routes: [
          {
            path: '/post/frontEnd/test',
            name: 'frontEndTest',
            component: '@/pages/post/frontEnd/detail',
            meta: {
              title: '三级路由',
              icon: 'VideoCameraOutlined',
              hideInMenu: false,
              parentName: ['post', 'postFrontEnd']
            },
          }
        ]
      },
      {
        path: '/post/backEnd',
        name: 'postBackEnd',
        component: '@/pages/post/backEnd',
        meta: {
          title: '后端',
          icon: 'VideoCameraOutlined',
          parentName: ['post']
        },
      },
      {
        path: '/post/frontTest/Detail/:id?',
        name: 'frontEndDetail',
        component: '@/pages/post/frontEnd/detail',
        meta: {
          title: '前端详情页',
          icon: 'VideoCameraOutlined',
          hideInMenu: true,
          parentName: ['post', 'postFrontEnd']
        },
      }
    ],
  },
  {
    path: '/test',
    name: 'test',
    component: '@/pages/test',
    meta: {
      title: '测试',
      isLocal: true,
      icon: 'VideoCameraOutlined',
    },
  },
  {
    path: '/hide',
    name: 'hideRoute',
    component: '@/pages/test',
    meta: {
      title: '隐藏路由',
      hideInMenu: true,
      icon: 'VideoCameraOutlined',
    },
  },
  {
    name: '404',
    component: '@/pages/404',
    meta: {
      hideInMenu: true,
    },
  },

];
