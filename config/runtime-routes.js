// @ts-nocheck
import React from 'react';
import { dynamic } from 'E:/workspace/welson/github/umi-app/node_modules/@umijs/runtime';
import LoadingComponent from '@ant-design/pro-layout/es/PageLoading';

export function getRoutes() {
  const routes = [
  {
    "path": "/login",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__login' */'@/pages/login'), loading: LoadingComponent}),
    "name": "login",
    "meta": {
      "title": "登录",
      "hideInMenu": true
    },
    "exact": true
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__basic' */'@/layouts/basic'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/",
        "exact": true,
        "redirect": "/home"
      },
      {
        "path": "/home",
        "name": "home",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__home' */'@/pages/home'), loading: LoadingComponent}),
        "meta": {
          "title": "首页",
          "icon": "UserOutlined"
        },
        "exact": true
      },
      {
        "path": "/about",
        "name": "about",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__about' */'@/pages/about'), loading: LoadingComponent}),
        "meta": {
          "title": "关于",
          "icon": "VideoCameraOutlined"
        },
        "exact": true
      },
      {
        "path": "/post",
        "name": "post",
        "meta": {
          "title": "文章",
          "icon": "UploadOutlined"
        },
        "routes": [
          {
            "path": "/post",
            "exact": true,
            "redirect": "/post/frontEnd"
          },
          {
            "path": "/post/frontEnd",
            "name": "postFrontEnd",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__post__frontEnd' */'@/pages/post/frontEnd'), loading: LoadingComponent}),
            "meta": {
              "title": "前端",
              "icon": "VideoCameraOutlined",
              "parentName": [
                "post"
              ]
            },
            "routes": [
              {
                "path": "/post/frontEnd/test",
                "name": "frontEndTest",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__post__frontEnd__detail' */'@/pages/post/frontEnd/detail'), loading: LoadingComponent}),
                "meta": {
                  "title": "三级路由",
                  "icon": "VideoCameraOutlined",
                  "hideInMenu": false,
                  "parentName": [
                    "post",
                    "postFrontEnd"
                  ]
                },
                "exact": true
              }
            ]
          },
          {
            "path": "/post/backEnd",
            "name": "postBackEnd",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__post__backEnd' */'@/pages/post/backEnd'), loading: LoadingComponent}),
            "meta": {
              "title": "后端",
              "icon": "VideoCameraOutlined",
              "parentName": [
                "post"
              ]
            },
            "exact": true
          },
          {
            "path": "/post/frontTest/Detail/:id?",
            "name": "frontEndDetail",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__post__frontEnd__detail' */'@/pages/post/frontEnd/detail'), loading: LoadingComponent}),
            "meta": {
              "title": "前端详情页",
              "icon": "VideoCameraOutlined",
              "hideInMenu": true,
              "parentName": [
                "post",
                "postFrontEnd"
              ]
            },
            "exact": true
          }
        ]
      },
      {
        "path": "/test",
        "name": "test",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__test' */'@/pages/test'), loading: LoadingComponent}),
        "meta": {
          "title": "测试",
          "isLocal": true,
          "icon": "VideoCameraOutlined"
        },
        "exact": true
      },
      {
        "path": "/hide",
        "name": "hideRoute",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__test' */'@/pages/test'), loading: LoadingComponent}),
        "meta": {
          "title": "隐藏路由",
          "hideInMenu": true,
          "icon": "VideoCameraOutlined"
        },
        "exact": true
      },
      {
        "name": "404",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'@/pages/404'), loading: LoadingComponent}),
        "meta": {
          "hideInMenu": true
        },
        "exact": true
      }
    ]
  }
];

  return routes;
}
