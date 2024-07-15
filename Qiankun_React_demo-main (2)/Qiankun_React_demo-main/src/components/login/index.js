import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import axios  from 'axios';
import { history } from 'umi';

const LoginPages = () => {
    const onFinish = async (values) => {
        // 登录逻辑
        // console.log('Received values of form: ', values);
        let result = await axios.post("/admin/login", {
            account: values.username,
            password: values.password,
        })
        console.log(result.status);
        if (result.status == 200) {
            // history.push('/categoryList')
            history.push('/showChildApp')
        };
    }
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: '请输入用户名!',
                    },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: '请输入密码!',
                    },
                ]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>记住我</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    忘记密码
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>
                Or <a href="">现在注册!</a>
            </Form.Item>
        </Form>
    );
};
export default LoginPages;