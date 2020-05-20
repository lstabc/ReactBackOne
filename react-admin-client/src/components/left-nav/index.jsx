import React, { Component } from 'react'
import './index.less'
import { Menu } from 'antd';
import {
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import logojpg from '../../assets/images/bglogo.jpg'
import { Link } from 'react-router-dom'

const { SubMenu } = Menu;

export default class LeftNav extends Component {

    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    render() {
        return (
            <div to='/' className='left-nav'>
                <Link className='left-nav-header'>
                    <img src={logojpg} alt='logojpg'></img>
                    <h1>管理后台</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="1" icon={<PieChartOutlined />}>
                        首页
                    </Menu.Item>
                    <Menu.Item key="2" icon={<DesktopOutlined />}>
                        数据分析
                    </Menu.Item>
                    <Menu.Item key="3" icon={<ContainerOutlined />}>
                        数据清理
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<MailOutlined />} title="数据来源">
                        <Menu.Item key="5">公安数据</Menu.Item>
                        <Menu.Item key="6">采集数据</Menu.Item>
                        <Menu.Item key="7">监控数据</Menu.Item>
                        <Menu.Item key="8">视频数据</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<AppstoreOutlined />} title="应用平台">
                        <Menu.Item key="9">网格系统</Menu.Item>
                        <Menu.Item key="10">OA系统</Menu.Item>
                        <SubMenu key="sub3" title="子系统">
                            <Menu.Item key="11">图表展示</Menu.Item>
                            <Menu.Item key="12">自动分析</Menu.Item>
                        </SubMenu>
                    </SubMenu>
                </Menu>
            </div>
        )
    }


}