import React, { useEffect, useState } from 'react';
import Column from 'antd/es/table/Column';
import { User } from '@/api/user/types';
import { message, Space, Table } from 'antd';
import { roleListDatum } from '@/api/permission/type';
import { getRolesList } from '@/api';
import { omit } from 'lodash';

function RoleTable() {
  // 获取列表时的加载状态
  const [loading, setLoading] = useState(false);
  // 角色列表
  const [roleList, setRoleList] = useState<roleListDatum[]>([]);

  // 获取角色列表，暂时剔除 children
  const getRoleListHandler = async () => {
    setLoading(true);
    const res = await getRolesList();
    try {
      setRoleList(() => res.data.map((item) => omit(item, ['children'])));
    } catch (error) {
      message.error(error!.toString());
    }
    setLoading(false);
  };

  useEffect(() => {
    getRoleListHandler();
  }, []);

  return (
    <Table dataSource={roleList} rowKey={(record) => record.id} loading={loading}>
      <Column title="ID" dataIndex="id" key="id" align="center" />
      <Column title="角色名称" dataIndex="roleName" key="roleName" align="center" />
      <Column title="角色描述" dataIndex="roleDesc" key="roleDesc" align="center" />
      <Column title="操作" key="id" align="center" render={(_: any, record: User) => <Space size="middle"></Space>} />
    </Table>
  );
}

export default RoleTable;
