import React, { Component } from 'react'
import './index.less'
import { Card, Table, Button,Modal } from 'antd';
//import reqwest from 'reqwest';
import { reqCategorys } from '../../api'
import LinkButton from '../../components/link-button';
import {
  PlusOutlined,
} from '@ant-design/icons';
import UpdateForm from './update-form'
import AddForm from './add-form'

const columns = [
  {
    title: '分类名称',
    dataIndex: 'name',
  },
  {
    title: '操作',
    width: 300,
    render: (category) => (
      <span>
        <LinkButton >修改分类</LinkButton>
        <LinkButton >查看子分类</LinkButton>
      </span>

    )
  }
];

export default class Home extends Component {

  state = {
    data: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
    showStatus:0,// 是否显示对话框 0: 都不显示, 1: 显示添加, 2: 显示更新
  };

  reqCategorysdata = async (parentId) => {
    const result = await reqCategorys(parentId)
    console.log(result)
    this.setState({
      data: result.data,
    })

  }

  componentDidMount() {
    this.reqCategorysdata('0')

  }

  handleTableChange = (pagination, filters, sorter) => {
    this.setState({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };
  showCategorys = () =>{
    this.setState({
      showStatus : 1
    })
  } 
  addCategory = () => {
    const asd = this.getFormValue
    console.log("asd is ",asd)
  }

  render() {

    const title = (
      <span>
        分类列表
      </span>
    )
    // Card 的右侧 button
    const extra = (
      <Button type='primary' onClick={this.showCategorys}>
        <PlusOutlined />&nbsp;&nbsp; 添加
      </Button>
    )


    return (
      <div className="home">
        <Card className='card' title={title} extra={extra} bordered={false}>
          <Table
            columns={columns}
            rowKey={record => record._id}
            dataSource={this.state.data}
            pagination={this.state.pagination}
            loading={this.state.loading}
            onChange={this.handleTableChange}
          />

          <Modal
            title="添加分类"
            visible={this.state.showStatus === 1}
            onOk={this.addCategory}
            onCancel={() => this.setState({ showStatus: 0 })}
          >
            <AddForm
              categorys={["categorys","asfdasdf"]}
              parentId={'0'}
              getFormValue={getFormValue => this.getFormValue = getFormValue}
            />
          </Modal>

          <Modal
            title="修改分类"
            visible={this.state.showStatus === 2}
            onOk={()=>{}}
            onCancel={() => {
              this.setState({ showStatus: 0 })
              this.form.resetFields()
            }}
          >
            <UpdateForm
              categoryName={"category.name"}
              //setForm={form => this.form = form}
            />
          </Modal>

        </Card>
      </div>
    )
  }
}