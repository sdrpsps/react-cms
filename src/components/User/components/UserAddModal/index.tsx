import { addUser } from '@/api';
import { UserAddOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal } from 'antd';
import { useCallback, useState } from 'react';

interface propsType {
  onUpdate: () => void;
}

function UserAddModal(props: propsType) {
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
      await addUser(values);
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
      <Button type="primary" icon={<UserAddOutlined />} onClick={showModal}>
        添加用户
      </Button>
      <Modal
        title="添加用户"
        open={open}
        onCancel={onCancel}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
        destroyOnClose={true}
      >
        <Form
          labelCol={{ span: 4 }}
          form={form}
          name="register"
          style={{ maxWidth: 600 }}
          scrollToFirstError
          onFinish={onFinish}
          preserve={false}
        >
          <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: '请输入用户名!', whitespace: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="password"
            label="密码"
            rules={[
              {
                required: true,
                message: '请输入密码!',
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            name="confirm"
            label="确认密码"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: '请确认密码!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('两次密码不一致!'));
                },
              }),
            ]}
          >
            <Input.Password />
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

export default UserAddModal;
