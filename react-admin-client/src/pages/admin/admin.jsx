import React, { Component } from 'react'
import { Redirect,Route, Switch } from 'react-router-dom'
import memeoryUtils from '../../utils/memoryUtils'
import { Layout } from 'antd';
import './admin.less'
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
import Home from '../home'
import DataAnalysis  from '../data-analysis'
import DataCleaning from '../data-cleaning'
import DataAcquisition from '../data-sources/data-acquisition'
import NetworkData from '../data-sources/network-data'
import PoliceData from '../data-sources/police-data'
import VideoData from '../data-sources/video-data'
import GridApplication from '../application-system/grid-application'
import OaApplication from '../application-system/oa-application'
import VideoSystem from '../application-system/video-system'
import DataGridSystem from '../application-system/sub-system/data-grid-system'
import DataTableSystem from '../application-system/sub-system/data-table-system'


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
              <Switch>
                <Route path='/home' component={Home}/>
                <Route path='/data-analysis' component={DataAnalysis}/>
                <Route path='/data-cleaning' component={DataCleaning}/>
                <Route path='/data-sources/data-acquisition' component={DataAcquisition}/>
                <Route path='/data-sources/network-data' component={NetworkData}/>
                <Route path='/data-sources/police-data' component={PoliceData}/>
                <Route path='/data-sources/video-data' component={VideoData}/>
                <Route path='/application-system/grid-application' component={GridApplication}/>
                <Route path='/application-system/oa-application' component={OaApplication}/>
                <Route path='/application-system/video-system' component={VideoSystem}/>
                <Route path='/application-system/sub-system/data-grid-system' component={DataGridSystem}/>
                <Route path='/application-system/sub-system/data-table-system' component={DataTableSystem}/>
                <Redirect to='/home' />
              </Switch>
            </Content>
            <Footer style={{textAlign:"center",color:'#666666'}}>湘潭经开区大数据中心 版权所有Copyright 2006-2020  All Rights Reserved </Footer>
          </Layout>
        </Layout>
      </div>
    )
  }
}