import { forwardRef, useCallback, useEffect, useImperativeHandle, useState } from 'react';
import { getUserList } from '@/api';
import { User } from '@/api/user/types';
import type { PaginationProps } from 'antd';
import { Space, Table } from 'antd';
import Column from 'antd/es/table/Column';
import UserDelete from '../UserDelete';

function UserTable(_props: unknown, ref: any) {
  // #region 查询参数
  const [query, setQuery] = useState('');
  const [pagenum, setPagenum] = useState(1);
  // 页码改变时
  const onChange: PaginationProps['onChange'] = useCallback(
    (pageNumber: number) => {
      setPagenum(pageNumber);
    },
    [pagenum],
  );
  const [pagesize, setPagesize] = useState(10);
  // 页量改变时
  const onShowSizeChange: PaginationProps['onShowSizeChange'] = useCallback(
    (pageNumber: number, pageSize: number) => {
      setPagesize(pageSize);
    },
    [pagesize],
  );
  // 用户总数
  const [total, setTotal] = useState(0);
  // 用户总数文案
  const showTotal: PaginationProps['showTotal'] = useCallback((total: number) => `总共有 ${total} 位用户`, [total]);
  // #endregion

  // #region 用户列表
  const [userList, setUserList] = useState<User[]>([]);
  // 请求用户列表数据状态
  const [loading, setLoading] = useState(false);
  // 请求用户列表数据
  const getUserListHandler = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getUserList({ query, pagenum, pagesize });
      setUserList(res.data.users);
      setTotal(res.data.total);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  }, [query, pagenum, pagesize]);
  // #endregion

  useEffect(() => {
    getUserListHandler();
  }, [query, pagenum, pagesize]);

  // 暴露组件方法到父组件
  useImperativeHandle(ref, () => ({
    currentQuery: query,
    setQuery,
    setPagenum,
    getUserListHandler,
  }));

  return (
    <Table
      dataSource={userList}
      rowKey={(record) => record.id}
      pagination={{
        defaultCurrent: 1,
        defaultPageSize: 10,
        current: pagenum,
        pageSize: pagesize,
        pageSizeOptions: [10, 20, 30],
        showSizeChanger: true,
        total,
        showTotal,
        onChange,
        onShowSizeChange,
      }}
      loading={loading}
    >
      <Column title="ID" dataIndex="id" key="id" align="center" />
      <Column title="用户名" dataIndex="username" key="username" align="center" />
      <Column title="邮箱" dataIndex="email" key="email" align="center" />
      <Column title="手机号" dataIndex="mobile" key="mobile" align="center" />
      <Column title="角色" dataIndex="role_name" key="role_name" align="center" />
      <Column
        title="操作"
        key="id"
        align="center"
        render={(_: any, record: User) => (
          <Space size="middle">
            <UserDelete onSuccess={getUserListHandler} userID={record.id} />
          </Space>
        )}
      />
    </Table>
  );
}

export default forwardRef(UserTable);
