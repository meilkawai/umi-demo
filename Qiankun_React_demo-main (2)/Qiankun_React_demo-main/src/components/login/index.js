import React, { useEffect } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd';
import axios from 'axios';
import { history, connect } from 'umi';
const LoginPages = (props) => {

    // console.log('component props');
    const { dispatch } = props
    // console.log(props);
    if ('payLoad' in props.login) {
        // console.log(1);
        const { login: { payLoad, token } } = props
        if (payLoad.data.code == 200) {
            history.push('/showChildApp')
            // 设置token
        }
        if (payLoad.data.code == 500) {
            alert('登陆失败')
        };
        delete props.login.payLoad
    }

    // console.log("111",props);
    // const {login:{payLoad,token},dispatch} = props
    // console.log(props);

    // if (payLoad.data.code == 200) {
    //         history.push('/showChildApp')
    //         // 设置token
    //     }
    //     if(payLoad.data.code == 500){
    //         alert('登陆失败')
    //     };
    const onFinish = async (values) => {

        // console.log('component onFinish');

        // if ('payLoad' in props.login) {
        //     console.log(2);
        //     const { login: { payLoad, token } } = props
        //     if (payLoad.data.code == 200) {
        //         history.push('/showChildApp')
        //         // 设置token
        //     }
        //     if (payLoad.data.code == 500) {
        //         alert('登陆失败')
        //     };
        // }

        dispatch({
            type: 'login/loginOption',
            payLoad: values
        })


        // 登录逻辑
        // console.log(values);
        // console.log('Received values of form: ', values);
        // let result = await axios.post("http://localhost:8080/admin/login", {
        //     account: values.username,
        //     password: values.password,
        // })
        // if (result.data.code == 200) {
        //     history.push('/showChildApp')
        // }
        // if(result.data.code == 500){
        //     alert('登陆失败')
        // };

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
                <Button type="primary" htmlType="submit" className="login-form-button" >
                    登录
                </Button>
                 &nbsp;&nbsp;&nbsp;&nbsp;<a href="">现在注册!</a>
            </Form.Item>
        </Form>
    );
};
export default connect()(LoginPages);