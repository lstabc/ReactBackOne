import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import logo from './images/logo.png'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less'
const Item = Form.Item
/*
登陆路由组件
*/

class Login extends Component {

  validator = (rule, value) => {
    if (!value)
      return Promise.reject("用户名不能为空")
    else if (value.length < 4)
      return Promise.reject("用户名长度最小为4位")
    else
      return Promise.resolve()
  }

  render() {

    const onFinish = values => {
      console.log('Received values of form: ', values);
    }
    return (
      <div className='login'>
        <header className='login-header'>
          <img src={logo} alt="logo" />
          <h1>湘潭经开区大数据中心</h1>
          <h3>----XTETDZ-Big Data Center</h3>
        </header>
        <section className='login-content'>
          <h3>用户登陆</h3>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
              username: "admin"
            }}
            onFinish={onFinish}
          >
            <Item
              name="username"
              rules={[
                { validator: this.validator }
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
            </Item>
            <Item
              name="password"
              rules={
                [
                  { required: true, message: '请输入密码！' },
                  { min: 4, message: '密码至少为4位' },
                  { max: 16, message: '密码最长为16位' },
                  { pattern: /^[a-zA-Z0-9_]+$/, message: '密码为字母数字和下划线组成' }
                ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Item>
            <Item>
              <Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>记住密码</Checkbox>
              </Item>
              <a className="login-form-forgot" href="123">忘记密码</a>
            </Item>
            <Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                登  陆
        </Button>
              <a href="阿道夫">点击注册</a>
            </Item>
          </Form>
        </section>
      </div>
    )
  }
}
export default Login