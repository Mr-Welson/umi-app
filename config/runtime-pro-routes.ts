// @ts-nocheck
import React from 'react';
import { dynamic } from 'E:/workspace/welson/github/umi-app/node_modules/@umijs/runtime';
import LoadingComponent from '@ant-design/pro-layout/es/PageLoading';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: '.umi__plugin-layout__Layout' */'E:/workspace/welson/github/umi-app/src/.umi/plugin-layout/Layout.tsx'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/login",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__login' */'@/pages/login'), loading: LoadingComponent}),
        "name": "登录",
        "layout": false,
        "hideInMenu": true,
        "exact": true
      },
      {
        "path": "/",
        "redirect": "/home",
        "exact": true
      },
      {
        "path": "/home",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__home' */'@/pages/home'), loading: LoadingComponent}),
        "name": "首页",
        "icon": "user",
        "exact": true
      },
      {
        "path": "/about",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__about' */'@/pages/about'), loading: LoadingComponent}),
        "name": "关于",
        "icon": "VideoCameraOutlined",
        "exact": true
      },
      {
        "path": "/post",
        "name": "文章",
        "icon": "smile",
        "routes": [
          {
            "path": "/post",
            "redirect": "/post/frontEnd",
            "exact": true
          },
          {
            "path": "/post/frontEnd/:id?",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__post__frontEnd' */'@/pages/post/frontEnd'), loading: LoadingComponent}),
            "name": "前端",
            "icon": "smile",
            "exact": true
          },
          {
            "path": "/post/backEnd",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__post__backEnd' */'@/pages/post/backEnd'), loading: LoadingComponent}),
            "name": "后端",
            "icon": "user",
            "exact": true
          }
        ]
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'@/pages/404'), loading: LoadingComponent}),
        "exact": true
      }
    ]
  }
];

  return routes;
}
