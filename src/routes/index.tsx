import { RouteObject } from 'react-router-dom';
// antd 的加载动效组件
import { Spin } from 'antd';
// 无须懒加载的组件
import NeedAuth from '@/components/NeedAuth/NeedAuth';
import NotFound from '@/components/NotFound';
// 懒加载的组件
import { lazy, ReactNode, Suspense } from 'react';
const LoginPage = lazy(() => import('@/components/Login'));
const Dashboard = lazy(() => import('@/components/Dashboard'));
const User = lazy(() => import('@/components/User'));
// 自定义懒加载
const lazyLoad = (children: ReactNode) => {
  return <Suspense fallback={<Spin />}>{children}</Suspense>;
};

const route: RouteObject[] = [
  {
    path: '/',
    element: (
      <NeedAuth>
        <Dashboard />
      </NeedAuth>
    ),
    children: [{ path: 'user', element: lazyLoad(<User />) }],
  },
  {
    path: '/login',
    element: lazyLoad(<LoginPage />),
  },
  {
    path: '*',
    element: (
      <NeedAuth>
        <NotFound />
      </NeedAuth>
    ),
  },
];

export default route;
