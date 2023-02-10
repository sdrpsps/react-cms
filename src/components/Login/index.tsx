import { useState, useEffect, useCallback } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { login } from '@/api';

function Login() {
  const onFinish = useCallback(async (values: any) => {
    const res = await login(values);
    console.log('res', res);
  }, []);

  return (
    <div className="h-screen w-screen bg-login-background">
      <Form
        name="normal_login"
        className="login-form w-96 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        initialValues={{ username: 'admin' }}
        onFinish={onFinish}
      >
        <Form.Item name="username" rules={[{ required: true, message: '请填写用户名!' }]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="admin" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: '请填写密码!' }]}>
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="123456" />
        </Form.Item>

        <Form.Item className="text-center">
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
