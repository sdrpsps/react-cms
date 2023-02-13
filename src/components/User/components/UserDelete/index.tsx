import { delUser } from '@/api';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, message, Popconfirm } from 'antd';
import { useCallback, useState } from 'react';

interface propsType {
  onSuccess: () => void;
  userID: number;
}

function UserDelete(props: propsType) {
  const [confirmLoading, setConfirmLoading] = useState(false);

  // 点击确认
  const onConfirm = useCallback(async () => {
    setConfirmLoading(true);
    try {
      await delUser({ id: props.userID });
      message.success('删除成功');
      props.onSuccess();
    } catch (error) {
      console.log('error', error);
    } finally {
      setConfirmLoading(false);
    }
  }, []);

  return (
    <Popconfirm
      title="删除用户"
      description="请确认是否删除用户，该操作不能撤回！"
      onConfirm={onConfirm}
      okButtonProps={{ loading: confirmLoading }}
    >
      <Button type="primary" danger icon={<DeleteOutlined />}>
        删除
      </Button>
    </Popconfirm>
  );
}

export default UserDelete;
