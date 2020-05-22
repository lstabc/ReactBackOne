import React from 'react'
import {
    HomeOutlined,
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    VideoCameraAddOutlined,
    VideoCameraOutlined,
    UserAddOutlined,
    WalletOutlined,
    SecurityScanOutlined,
    SaveOutlined,
    PoundOutlined,
    PictureOutlined
} from '@ant-design/icons';

const menuList = [
    {
        title: '首页', // 菜单标题名称
        key: '/home', // 对应的 path
        icon: <HomeOutlined />, // 图标名称
    },
    {
        title: '数据分析',
        key: '/data-analysis',
        icon: <PieChartOutlined />, // 图标名称
    },
    {
        title: '数据清理',
        key: '/data-cleaning',
        icon: <DesktopOutlined />, // 图标名称
    },

    {
        title: '数据来源',
        key: '/data-sources',
        icon: <ContainerOutlined />, // 图标名称
        children: [ // 子菜单列表
            {
                title: '公安数据',
                key: '/data-sources/police-data',
                icon: <MailOutlined />, // 图标名称
            },
            {
                title: '采集数据',
                key: '/data-sources/data-acquisition',
                icon: <AppstoreOutlined />, // 图标名称

            },
            {
                title: '监控数据',
                key: '/data-sources/network-data',
                icon: <VideoCameraAddOutlined /> ,
            },
            {
                title: '视频数据',
                key: '/data-sources/video-data',
                icon: <VideoCameraOutlined />
            }
        ]
    },
    {
        title: '应用平台',
        key: '/application-system',
        icon: <UserAddOutlined />,
        children: [ // 子菜单列表
            {
                title: '网格系统',
                key: '/application-system/grid-application',
                icon: <WalletOutlined />
            },
            {
                title: 'OA系统',
                key: '/application-system/oa-application',
                icon: <SecurityScanOutlined />

            },
            {
                title: '子系统',
                key: '/application-system/sub-system',
                icon: <SaveOutlined />,
                children: [ // 子菜单列表
                    {
                        title: '图表展示',
                        key: '/application-system/sub-system/data-grid-system',
                        icon: <PoundOutlined />
                    },
                    {
                        title: '自动分析',
                        key: '/application-system/sub-system/data-table-system',
                        icon: <PictureOutlined />

                    }
                ]
            }
        ]
    },
    {
        title: '角色管理',
        key: '/role',
        icon: <UserAddOutlined/>,
    }
]

export default menuList