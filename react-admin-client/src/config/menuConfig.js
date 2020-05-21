const menuList = [
    {
        title: '首页', // 菜单标题名称
        key: '/home', // 对应的 path
        icon: 'PieChartOutlined', // 图标名称
    },
    {
        title: '数据分析',
        key: '/data-analysis',
        icon: 'PieChartOutlined',
    },
    {
        title: '数据清理',
        key: '/data-cleaning',
        icon: 'DesktopOutlined',
    },

    {
        title: '数据来源',
        key: '/data-sources',
        icon: 'ContainerOutlined',
        children: [ // 子菜单列表
            {
                title: '公安数据',
                key: '/data-sources/police-data',
                icon: 'bars'
            },
            {
                title: '采集数据',
                key: '/data-sources/data-acquisition',
                icon: 'tool'

            },
            {
                title: '监控数据',
                key: '/data-sources/network-data',
                icon: 'bars'
            },
            {
                title: '视频数据',
                key: '/data-sources/video-data',
                icon: 'bars'
            }
        ]
    },
    {
        title: '应用平台',
        key: '/application-system',
        icon: 'user',
        children: [ // 子菜单列表
            {
                title: '网格系统',
                key: '/application-system/grid-application',
                icon: 'bars'
            },
            {
                title: 'OA系统',
                key: '/application-system/oa-application',
                icon: 'tool'

            },
            {
                title: '子系统',
                key: '/application-system/sub-system',
                icon: 'bars',
                children: [ // 子菜单列表
                    {
                        title: '图表展示',
                        key: '/application-system/sub-system/data-grid-system',
                        icon: 'bars'
                    },
                    {
                        title: '自动分析',
                        key: '/application-system/sub-system/data-table-system',
                        icon: 'tool'

                    }
                ]
            }
        ]
    },
    {
        title: '角色管理',
        key: '/role',
        icon: 'safety',
    }
]

export default menuList