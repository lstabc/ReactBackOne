import React, { Component } from 'react'
import { Form, Input, Button, Checkbox, message } from 'antd';
import logo from './images/logo.png'
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less'
import { reqLogin } from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'

const Item = Form.Item
/*
登陆路由组件
*/

class Login extends Component {

//自定义验证表单数据
  validator = (rule, value) => {
/*
用户名/密码的的合法性要求
1). 必须输入
2). 必须大于等于 4 位
3). 必须小于等于 12 位
4). 必须是英文、数字或下划线组成
*/
    if (!value)
      return Promise.reject("用户名不能为空")
    else if (value.length < 4)
      return Promise.reject("用户名长度最小为4位")
    else if (value.length > 16)
      return Promise.reject("用户名长度最大为16位")
    else if (!/^[a-zA-Z0-9_]+$/.test(value))
      return Promise.reject("密码必须是英文、数组或下划线组成")
    else
      return Promise.resolve()
  }

  render() {

    const user = storageUtils.getUser()
    if(user && user._id){
      this.props.history.replace('/')
    }

    const onFinish = async values => {
      //从表单数据values中提取username, password
      const { username, password } = values
      // console.log('提交登陆的ajax 请求', values)
      const result = await reqLogin(username, password)
      if (result.status === 0) {
        // 提示登录成功
        message.success('登录成功', 2)
        // 保存用户登录信息
        memoryUtils.user = result.data
        storageUtils.saveUser(result.data)
        // 跳转到主页面
        this.props.history.replace('/')
      } else {
        // 登录失败, 提示错误
        message.error(result.msg)
      }
      // console.log('Received values of form: ', values);
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