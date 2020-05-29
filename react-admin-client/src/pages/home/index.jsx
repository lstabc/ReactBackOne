import React, { Component } from 'react'
import './index.less'
import { Card, Table, Button, Modal, message } from 'antd';
//import reqwest from 'reqwest';
import { reqCategorys, reqAddCategory,reqDelCategory } from '../../api'
import LinkButton from '../../components/link-button';
import {
  PlusOutlined,
} from '@ant-design/icons';
import UpdateForm from './update-form'
import AddForm from './add-form'


export default class Home extends Component {
  

  viewSubCategorys = (category)=>{
    this.setState({
      parentId:category._id,
    })
    this.reqCategorysdata(category._id)
  }

  state = {
    categorys: [],
    pagination: {
      current: 1,
      pageSize: 10,
    },
    loading: false,
    parentId: "0",
    showStatus: 0,// 是否显示对话框 0: 都不显示, 1: 显示添加, 2: 显示更新
  };

  reqCategorysdata = async (parentId) => {
    const result = await reqCategorys(parentId)
    // console.log(result)
    this.setState({
      categorys: result.data,
    })

  }

  componentDidMount() {
    this.reqCategorysdata(this.state.parentId)
    this.columns = [
      {
        title: '分类名称',
        dataIndex: 'name',
      },
      {
        title: '操作',
        width: 350,
        render: (category) => (
          <span>
            <LinkButton >修改分类</LinkButton>
            <LinkButton onClick = {()=>{this.viewSubCategorys(category)}}>查看子分类</LinkButton>
            <LinkButton onClick = {()=>{this.delCategorys(category)}}>删除分类</LinkButton>
          </span>
    
        )
      }
    ];

  }

  handleTableChange = (pagination, filters, sorter) => {
    this.setState({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };
  showCategorys = () => {
    this.setState({
      showStatus: 1
    })
  }
  addCategory = async () => {
    this.setState({
      showStatus: 0
    })
    if(!this.getFormValue)
    {return}
    const {parentId,categoryName} = this.getFormValue
    if (!(parentId==="") && !(categoryName==="")) {
 //     console.log("parentId, categoryName is ", parentId, categoryName)
      const result = await reqAddCategory(parentId, categoryName)
      if (result.status === 0) {
        this.reqCategorysdata(parentId)
      } else {
        message.error("增加列表失败")
      }
    }else{
      message.error("所属分类和分类名称不能为空！")
    }
  }

  delCategorys = async (category) =>{
    const result = await reqDelCategory(category._id)
    if (result.status === 0) {
      message.success("删除成功！")
      this.reqCategorysdata(category.parentId)
    } else {
      message.error(result.msg)
    }
  }

  render() {

    const title = (
      <span>
        一级分类列表
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
            columns={this.columns}
            rowKey={record => record._id}
            dataSource={this.state.categorys}
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
              categorys={this.state.categorys}
              parentId={'0'}
              getFormValue={(getFormValue) => this.getFormValue = getFormValue}
            />
          </Modal>

          <Modal
            title="修改分类"
            visible={this.state.showStatus === 2}
            onOk={() => { }}
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