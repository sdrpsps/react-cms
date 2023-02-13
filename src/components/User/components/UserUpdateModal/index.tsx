import { Button, Form, Input, message, Modal } from 'antd';
import { useCallback, useState } from 'react';
import { User } from '@/api/user/types';
import { updateUser } from '@/api';
import { EditOutlined } from '@ant-design/icons';

interface propsType {
  userInfo: User;
  onUpdate: () => void;
}

function UserUpdateModal(props: propsType) {
  const [open, setOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  // 显示模态框
  const showModal = useCallback(() => {
    setOpen(true);
  }, []);
  // 关闭模态框
  const onCancel = useCallback(() => {
    setOpen(false);
  }, []);
  // 表单实例
  const [form] = Form.useForm();
  // 提交
  const onFinish = async (values: any) => {
    setConfirmLoading(true);
    try {
      await updateUser({ ...values, id: props.userInfo.id });
      message.success('修改成功');
      props.onUpdate();
      onCancel();
    } catch (error) {
      console.log('error', error);
    } finally {
      setConfirmLoading(false);
    }
  };
  return (
    <>
      <Button type="primary" onClick={showModal} icon={<EditOutlined />}>
        修改
      </Button>
      <Modal
        title="修改用户"
        open={open}
        onCancel={onCancel}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
        destroyOnClose={true}
      >
        <Form
          labelCol={{ span: 4 }}
          form={form}
          name="update"
          style={{ maxWidth: 600 }}
          scrollToFirstError
          onFinish={onFinish}
          preserve={false}
          initialValues={{
            username: props.userInfo.username,
            email: props.userInfo.email,
            mobile: props.userInfo.mobile,
          }}
        >
          <Form.Item name="username" label="用户名">
            <Input disabled />
          </Form.Item>
          <Form.Item
            name="email"
            label="邮箱"
            rules={[
              {
                type: 'email',
                message: '邮箱格式不正确!',
              },
              {
                required: true,
                message: '请输入邮箱!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="mobile" label="手机号" rules={[{ required: true, message: '请输入手机号!' }]}>
            <Input style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item className="flex justify-end">
            <Button type="primary" danger onClick={onCancel} className="mr-4">
              取消
            </Button>
            <Button type="primary" htmlType="submit" loading={confirmLoading}>
              提交
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default UserUpdateModal;
