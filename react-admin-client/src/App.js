import React, { Component } from 'react'
import {Button, message} from 'antd'

import Login from './pages/login/login'
import Admin from './pages/admin/admin'

/*
应用的根组件
 */
export default class App extends Component {
  handleClick = () => {
    message.success('成功啦...');
  }
  render() {
    return (
      <Button type='primary' onClick={this.handleClick}>学习</Button>
    )
  }
}