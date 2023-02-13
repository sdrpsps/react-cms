import { delUser } from '@/api';
import { Button, message, Popconfirm } from 'antd';
import { useCallback, useState } from 'react';

interface propsType {
  onSuccess: () => void;
  userID: number;
}

function UserDelete(props: propsType) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  // 点击确认
  const handleOk = useCallback(async () => {
    setConfirmLoading(true);
    try {
      await delUser({ id: props.userID });
      message.success('删除成功');
      props.onSuccess();
      setOpen(false);
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
      open={open}
      onConfirm={handleOk}
      okButtonProps={{ loading: confirmLoading }}
      onCancel={() => setOpen(false)}
    >
      <Button type="primary" danger onClick={() => setOpen(true)}>
        删除
      </Button>
    </Popconfirm>
  );
}

export default UserDelete;
