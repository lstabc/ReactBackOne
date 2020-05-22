import React,{Component} from 'react'
import './index.less'
import {
    UserOutlined,
    SlackOutlined,
    SettingOutlined,
    ToolOutlined,
} from '@ant-design/icons';
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'


export default class Header extends Component{


    render(){

        const logout = () => {
            console.log("memoryUtils")
            storageUtils.saveUser({})
            memoryUtils.user = {}
        } 

        return(
        <div className='header'>
            <div className='header-top'>
                <div className='header-top-left'>
                    <UserOutlined className='header-top-UserOutlined' /><span>系统管理员，欢迎您！</span><a href="login" onClick = {logout}>退出登录</a>
                 </div>
                 <div className='header-top-right'>
                    <span>今天是 2020 年 5 月 22 日  星期五</span>
                 </div>
            </div>
            <div className='header-bottom'>
                <div className='header-bottom-left'>
                    <SlackOutlined  className='header-bottom-left-SlackOutlined'/>
                    <h1>湘潭经开区大数据中心管理平台（XT-JHDBCenter）</h1>
                </div>
                <div className='header-bottom-right'>
                    <div className='header-bottom-right-set'>
                        <SettingOutlined className='header-bottom-right-set-logo'/>
                        <span>系统设置</span>
                    </div>
                    <div className='header-bottom-right-tool'>
                        <ToolOutlined className = 'header-bottom-right-tool-logo'/>
                        <span>管理工具</span>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}