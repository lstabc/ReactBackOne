import React, { Component } from 'react'
import { Layout, Menu, Card , Form, message } from 'antd';//, Input, Button, Checkbox

//import {MailOutlined, UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.less'
import { reqLogin } from '../../api'
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import home from './images/home.png'
import logo from './images/logo.png'

const { Header, Footer, Content } = Layout;
const Item = Form.Item
const gridStyle = {
  width: '20%',
  height:'200px',
  textAlign: 'center',
};
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
    if (user && user._id) {
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
        <Layout className="login-layout">
          <Header className="login-layout-header">
            <div className="login-layout-header-top">
              <div className="login-layout-header-logo">
                <img src={logo} alt="logo" />
                <div className="login-layout-header-logo-text">
                  <h1>湘潭经济技术开发区大数据中心</h1>
                  <h2>BD-Center.xtetdz(jiuhua)</h2>
                </div>
              </div>
              <Menu className='login-layout-header-menu' mode="horizontal" defaultSelectedKeys={['2']} >
                <Menu.Item key="home" icon={<img style={{ width: 30, height: 30, textAlign: "center" }} src={home} alt='home' />}><a href='#'>首页</a></Menu.Item>
                <span>|</span>
                <Menu.Item key="2"><a target='_blank' href='http://xtjkq.xiangtan.gov.cn/index.html'>经开区官网</a></Menu.Item>
                <span>|</span>
                <Menu.Item key="3"><a target='_blank' href='http://zwfw-new.hunan.gov.cn/hnzwfw/1/5/33891/index.htm'>办事服务</a></Menu.Item>
              </Menu>
            </div>
            <div className='login-layout-header-bottom' />
          </Header>
          <Content className='login-content' style={{ padding: '0 50px' }}>
            <div className="site-layout-content">
              <Card title="经开区办公网址导航">
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
                <Card.Grid style={gridStyle}>Content</Card.Grid>
              </Card>
            </div>
          </Content>
          <Footer className='footer'>
            <h1>XTETDZ DB-Center Design ©2018 Created by 湘潭经开区大数据中心</h1>
            <h1>地址：湘潭经开区创新创业中心5楼  &nbsp;&nbsp; 联系电话：（0731）57512345</h1>
          </Footer>
        </Layout>,
      </div>
    )
  }
}
export default Login