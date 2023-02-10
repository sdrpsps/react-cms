import React, { useState } from 'react';
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import Sider from 'antd/es/layout/Sider';

function CustSider() {
  const [collapsed, setCollapsed] = useState(false);

  type MenuItem = Required<MenuProps>['items'][number];

  // eslint-disable-next-line max-params
  function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[]): MenuItem {
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }

  const items: MenuItem[] = [
    getItem('用户管理', 'user', <TeamOutlined />),
    getItem('权限管理', 'permission', <DesktopOutlined />, [
      getItem('角色列表', 'roleList'),
      getItem('权限列表', 'rightList'),
    ]),
    getItem('商品管理', 'good', <UserOutlined />, [
      getItem('商品列表', 'goodsList'),
      getItem('分类参数', 'goodsParam'),
      getItem('商品分类', 'goodsCategory'),
    ]),
  ];
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
      <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    </Sider>
  );
}

export default CustSider;
