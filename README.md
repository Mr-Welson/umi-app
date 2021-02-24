# umi
## 路由
constantRoutes
asyncRoutes


# vue-element-admin 分析
## 路由
```
  {
    path: '/guide',
    component: Layout,
    redirect: '/guide/index',
    children: [
      {
        path: 'index',
        name: 'Guide',
        component: () => import('@/views/guide/index'),
        meta: { 
          title: 'Guide', 
          icon: 'guide', 
          noCache: true,
          hideInBread: true,
          hideInMenu: true
        }
      }
    ]
  }
```

## 菜单


## 页签
1. 激活状态
  ```
  route.path === this.$route.path
  ```
2. permission.routes
3. 跳转
  router-link 组件


# iview-admin 分析

## 面包屑
数据来源: this.$store.state.app.breadCrumbList


## 路由
1. 路由监听
在 Layout 中设置监听，动态设置面包屑，设置页签，更新菜单状态
```
 watch: {
  '$route' (newRoute) {
    const { name, query, params, meta } = newRoute
    this.addTag({
      route: { name, query, params, meta },
      type: 'push'
    })
    this.setBreadCrumb(newRoute)
    this.setTagNavList(getNewTagList(this.tagNavList, newRoute))
    this.$refs.sideMenu.updateOpenName(newRoute.name)
  }
}
```

2. 统一处理 beforeClose 事件
```
  function before_close_normal(resolve) {
    Modal.confirm({
      title: '确定要关闭这一页吗',
      onOk: () => {
        resolve(true)
      },
      onCancel: () => {
        resolve(false)
      }
    })
  }
```

## 菜单
数据来源: this.$store.getters.menuList
1. 激活状态 $route.name
  
2. 展开的菜单 
```
  function getOpenedNamesByActiveName (name) {
    return this.$route.matched.map(item => item.name).filter(item => item !== name)
  }

```
3. 点击跳转
```
  // 直接通过 router.push 完整的路由对象跳转
  function turnToPage (route) {
    let { name, params, query } = {}
    if (typeof route === 'string') {
      name = route
    } else {
      name = route.name
      params = route.params
      query = route.query
    }
    if (name.indexOf('isTurnByHref_') > -1) {
      window.open(name.split('_')[1])
      return
    }
    this.$router.push({ name, params, query })
  }
```

## 页签
数据来源: this.$store.state.app.tagNavList
1. 激活状态 $route
  路由信息：name, params, query
  currentRouteObj = {
    name, params, query
  }

2. 点击跳转 
同菜单点击
  


