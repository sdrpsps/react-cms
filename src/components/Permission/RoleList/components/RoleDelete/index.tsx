import React, { useCallback, useState } from 'react';
import { Button, message, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteRole } from '@/api';

interface RoleProps {
  id: number;
  onSuccess: () => void;
}

function RoleDelete(props: RoleProps) {
  const [confirmLoading, setConfirmLoading] = useState(false);

  // 点击确认
  const onConfirm = useCallback(async () => {
    setConfirmLoading(true);
    try {
      await deleteRole({ id: props.id });
      message.success('删除成功');
      props.onSuccess();
    } catch (error) {
      message.error(error!.toString());
    }
    setConfirmLoading(false);
  }, []);

  return (
    <Popconfirm
      title="删除角色"
      description="请确认是否删除角色，该操作不能撤回！"
      onConfirm={onConfirm}
      okButtonProps={{ loading: confirmLoading }}
    >
      <Button type="primary" danger icon={<DeleteOutlined />}>
        删除
      </Button>
    </Popconfirm>
  );
}

export default RoleDelete;
