import React from 'react';
import { Outlet } from 'react-router-dom';
import { Layout } from 'antd';
import { Content } from 'antd/es/layout/layout';
import CustBreadcrumb from './components/Breadcrumb';
import CustHeader from './components/Header';
import CustSider from './components/Sider';

const Dashboard: React.FC = () => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* 拆分侧边栏 */}
      <CustSider />
      <Layout className="site-layout">
        {/* 拆分头部 */}
        <CustHeader />
        <Content style={{ margin: '0 16px' }}>
          {/* 拆分面包屑 */}
          <CustBreadcrumb />
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
