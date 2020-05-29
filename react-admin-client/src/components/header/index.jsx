import React, { Component } from 'react'
import './index.less'
import {
    UserOutlined,
    SlackOutlined,
    SettingOutlined,
    ToolOutlined,
} from '@ant-design/icons';
import memoryUtils from '../../utils/memoryUtils'
import storageUtils from '../../utils/storageUtils'
import { withRouter } from 'react-router-dom'
import { Modal } from 'antd'
//import LinkButton from '../link-button'
import {formateDate} from '../../utils/dateUtils'
import { reqWeather } from '../../api'


class Header extends Component {

    state = {
        date: '',
        currentCity: '',
        dayPictureUrl: '',
        weather: '',
        wind: '',
        sysTime: '',
    }


    /*
    退出登陆
    */
    logout = () => {
        Modal.confirm({
            content: '确定退出吗?',
            okText: '确定',
            // okType: 'danger',
            cancelText: '取消',
            onOk: () => {
                console.log('OK')
                // 移除保存的user
                storageUtils.removeUser()
                memoryUtils.user = {}
                // 跳转到login
                this.props.history.replace('/login')
            },
            onCancel() {
                console.log('Cancel')
            },
        })
    }
    /*
    发异步 ajax 获取天气数据并更新状态
    */
    getWeather = async (city) => {
        const { date, currentCity, dayPictureUrl, weather, wind } = await reqWeather(city)
        this.setState({
            date: date,
            currentCity: currentCity,
            dayPictureUrl: dayPictureUrl,
            weather: weather,
            wind: wind,
        })
    }

    /*
    启动循环定时器, 每隔 1s 更新一次 sysTime
    */
    getSysTime = () => {
        this.intervalId = setInterval(() => {
            this.setState({
                sysTime: formateDate(Date.now())
            })
        }, 1000)

    }

    componentDidMount() {
        this.getWeather('xiangtan')
        this.getSysTime()
    }
    componentWillUnMount = () => {
        // //1.ajax请求
        // $.ajax.abort()
        //2.定时器
        clearTimeout(this.intervalId)
    }

    render() {

        return (
            <div className='header' >
                <div className='header-top'>
                    <div className='header-top-left'>
                        <UserOutlined className='header-top-UserOutlined' />
                        <span>系统管理员，欢迎您！</span>
                        {/* <LinkButton onClick={this.logout}>退出登录</LinkButton> */}
                        <a href="scripts:" onClick={this.logout}>退出登录</a>
                    </div>
                    <div className='header-top-right'>
                        <h3>{this.state.sysTime}</h3>
                        {/* <img src={this.state.dayPictureUrl} alt="天气" /> */}
                        <span>今天是{this.state.date}&nbsp;&nbsp;&nbsp;{this.state.currentCity}&nbsp;&nbsp;&nbsp;天气：{this.state.weather}</span>
                    </div>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>
                        <SlackOutlined className='header-bottom-left-SlackOutlined' />
                        <h1>湘潭经开区大数据中心管理平台（XT-JHDBCenter）</h1>
                    </div>
                    <div className='header-bottom-right'>
                        <div className='header-bottom-right-set'>
                            <SettingOutlined className='header-bottom-right-set-logo' />
                            <span>系统设置</span>
                        </div>
                        <div className='header-bottom-right-tool'>
                            <ToolOutlined className='header-bottom-right-tool-logo' />
                            <span>管理工具</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header)