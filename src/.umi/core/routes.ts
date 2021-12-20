// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from '/root/src/v2board-admin/node_modules/umi/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/Loading';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__index' */'@/layouts/index.tsx'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/403",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__403' */'@/pages/403.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/404",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'@/pages/404.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/config/payment",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__config__payment__index' */'@/pages/config/payment/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/config/system",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__config__system__index' */'@/pages/config/system/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/coupon",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__coupon__index' */'@/pages/coupon/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/dashboard",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__dashboard__index' */'@/pages/dashboard/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__index' */'@/pages/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/knowledge",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__knowledge__index' */'@/pages/knowledge/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/login",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__login__index' */'@/pages/login/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/notice",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__notice__index' */'@/pages/notice/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/order",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__order__index' */'@/pages/order/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/plan",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__plan__index' */'@/pages/plan/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/server/group",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__server__group__index' */'@/pages/server/group/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/server/manage",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__server__manage__index' */'@/pages/server/manage/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/ticket",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ticket__index' */'@/pages/ticket/index.tsx'), loading: LoadingComponent})
      },
      {
        "path": "/ticket/:id",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__ticket__id' */'@/pages/ticket/[id].tsx'), loading: LoadingComponent})
      },
      {
        "path": "/user",
        "exact": true,
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__index' */'@/pages/user/index.tsx'), loading: LoadingComponent})
      },
      {
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'@/pages/404.tsx'), loading: LoadingComponent})
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
