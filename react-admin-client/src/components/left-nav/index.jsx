import React, { Component } from 'react'
import './index.less'
import { Menu } from 'antd';
//import logojpg from '../../assets/images/bglogo.jpg'
import { Link,withRouter} from 'react-router-dom'
import  menuList from '../../config/menuConfig'
import {
    AntDesignOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class LeftNav extends Component {

    getMenuNodes = (menuList) =>{
        const path = this.props.location.pathname
        return menuList.map(item => {
            if(!item.children){
                 return(
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to = {item.key}>
                            {item.title}
                        </Link>
                    </Menu.Item>
                )
            }
            else{
                if(item.children.find(cItem => path.indexOf(cItem.key)===0)) {
                    this.openKey = item.key
                }
                return (
                    <SubMenu key={item.key} icon={item.icon} title={item.title}>
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                )
            }
        })
    }

componentWillMount(){
    this.menuTable =  this.getMenuNodes(menuList)
}

    render() {

        const selectKey = this.props.location.pathname
        const openKey = this.openKey

        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <AntDesignOutlined className='left-nav-header-logo'/>
                    <h1>管理后台</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={[openKey]}
                    mode="inline"
                    theme="dark"
                    selectedKeys={[selectKey]}
                >
                    {this.menuTable}

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


/*
withRouter: 高阶组件 : 包装非路由组件返回一个包装后的新组件 , 新组件会向被包装组件传递
history/location/match 属性
*/
export default withRouter(LeftNav)