import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import memeoryUtils from '../../utils/memoryUtils'
import { Layout } from 'antd';
import './admin.less'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

const {  Footer, Sider, Content } = Layout;

/*
后台管理的路由组件
 */
export default class Admin extends Component {

  render() {
    //判断是否已经登录
    const user = memeoryUtils.user
    if (!user._id) {
      return <Redirect to='/login' />//未登录则转到登录界面
    }

    return (
      <div className='admin'>
        <Layout style={{height:'100%'}}>
          <Sider>
            <LeftNav/>
          </Sider>
          <Layout>
            <Header>
              <Header/>
            </Header>
            <Content style={{backgroundColor:'#fff'}}>
              Content
            </Content>
            <Footer style={{textAlign:"center",color:'#666666'}}>湘潭经开区大数据中心 版权所有Copyright 2006-2020  All Rights Reserved </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}