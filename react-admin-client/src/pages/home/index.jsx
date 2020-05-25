import React, { Component } from 'react'
import './index.less'
import { Card,Table } from 'antd';
import reqwest from 'reqwest';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
      render: name => `${name.first} ${name.last}`,
      width: '20%',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      filters: [
        { text: 'Male', value: 'male' },
        { text: 'Female', value: 'female' },
      ],
      width: '20%',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];
  
  const getRandomuserParams = params => {
    return {
      results: params.pagination.pageSize,
      page: params.pagination.current,
      ...params,
    };
  };
  
export default class Home extends Component {

    state = {
        data: [],
        pagination: {
          current: 1,
          pageSize: 10,
        },
        loading: false,
      };
    
      componentDidMount() {
        const { pagination } = this.state;
        this.fetch({ pagination });
      }
    
      handleTableChange = (pagination, filters, sorter) => {
        this.fetch({
          sortField: sorter.field,
          sortOrder: sorter.order,
          pagination,
          ...filters,
        });
      };
    
      fetch = (params = {}) => {
        this.setState({ loading: true });
        reqwest({
          url: 'https://randomuser.me/api',
          method: 'get',
          type: 'json',
          data: getRandomuserParams(params),
        }).then(data => {
          console.log(data);
          this.setState({
            loading: false,
            data: data.results,
            pagination: {
              ...params.pagination,
              total: 200,
              // 200 is mock data, you should read it from server
              // total: data.totalCount,
            },
          });
        })
    }

    render() {
        return (
            <div className="home">
                <Card className='card' title="Card-title" bordered={false}>
                    <Table
                        columns={columns}
                        rowKey={record => record.login.uuid}
                        dataSource={this.state.data}
                        pagination={this.state.pagination}
                        loading={this.state.loading}
                        onChange={this.handleTableChange}
                    />
                </Card>
            </div>
        )
    }
}