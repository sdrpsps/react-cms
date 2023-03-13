import {login} from '@/api';
import {LockOutlined, UserOutlined} from '@ant-design/icons';
import {Button, Form, Input, message} from 'antd';
import {useCallback, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

function Login() {
    // 按钮的 loading 状态
    const [btnLoading, setBtnLoading] = useState(false);
    // 路由跳转
    const navigate = useNavigate();
    // 获取登录前的路由
    const location = useLocation();
    // 点击登录按钮触发登录
    const onFinish = useCallback(async (values: any) => {
        setBtnLoading(true);
        try {
            const res = await login(values);
            // 用户信息
            localStorage.setItem('userInfo', JSON.stringify(res.data));
            // 过期时间
            localStorage.setItem('expirationTime', JSON.stringify(new Date().getTime()))
            message.success('登录成功!');
            navigate(location.state?.preURL || '/', {replace: true});
        } finally {
            setBtnLoading(false);
        }
    }, []);

    return (
        <div className="h-screen w-screen bg-login-background">
            <Form
                name="normal_login"
                className="login-form w-96 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                onFinish={onFinish}
            >
                <Form.Item name="username" rules={[{required: true, message: '请填写用户名!'}]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="admin"/>
                </Form.Item>
                <Form.Item name="password" rules={[{required: true, message: '请填写密码!'}]}>
                    <Input prefix={<LockOutlined className="site-form-item-icon"/>} type="password"
                           placeholder="123456"/>
                </Form.Item>

                <Form.Item className="text-center">
                    <Button type="primary" htmlType="submit" className="login-form-button" loading={btnLoading}>
                        登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;
