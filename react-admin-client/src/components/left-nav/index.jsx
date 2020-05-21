import React, { Component } from 'react'
import './index.less'
import { Menu,Icon } from 'antd';
import {
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';
import logojpg from '../../assets/images/bglogo.jpg'
import { Link } from 'react-router-dom'
import  menuList from '../../config/menuConfig'

const { SubMenu } = Menu;

export default class LeftNav extends Component {

    
    getMenuNodes = (menuList) =>{
        return menuList.map(item => {
            if(!item.children){
                 return(
                //     <Menu.Item key="3" icon={<ContainerOutlined />}>
                //         数据清理
                //     </Menu.Item>
                    <Menu.Item key={item.key} icon={<item.icon />}>  
                        {item.title}
                    </Menu.Item>
                )
            }
            else{
                return (
                    <SubMenu key={item.key} icon={<item.icon />} title={item.title}>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )

            }
        })
    }

    render() {

        
        console.log(this.getMenuNodes(menuList))

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
                >

                {this.getMenuNodes(menuList)}
{/*                    
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
*/}
                </Menu>
            </div>
        )
    }


}