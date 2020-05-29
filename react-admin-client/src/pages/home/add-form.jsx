import React, { Component } from 'react'
import { Form, Select, Input } from 'antd'
import PropTypes from 'prop-types'

const Item = Form.Item
const Option = Select.Option

/*
添加分类的 Form 组件
*/
class AddForm extends Component {

    static propTypes = {
        categorys: PropTypes.array.isRequired,
        parentId: PropTypes.string.isRequired,
        getFormValue: PropTypes.func.isRequired,
    }

    render() {

        const {parentId,getFormValue} = this.props

        const saveFiled = (changedValues, allValues) => {
            //console.log("allValues",allValues);
            getFormValue(allValues);
        }

        const { categorys } = this.props
        return (
            <Form 
             onValuesChange={saveFiled}
            >
                <Item 
                    name="parentId" 
                    initialValue = {parentId} 
                    label='所属分类'
                    rules={
                        [
                          { required: true, message: '请输入ID' },
                        ]}
                >
                    <Select>
                        <Option key='0' value='0'>一级分类</Option>
                        {categorys.map(c => <Option key={c._id} value={c._id}>{c.name}</Option>)}
                    </Select>
                </Item>
                <Item 
                name = "categoryName" 
                label='分类名称'
                rules={
                    [
                      { required: true, message: '请输入分类名称' },
                    ]}
                >
                    <Input placeholder='请输入分类名称'/>
                </Item>
            </Form>

        )

    }

}

export default AddForm //= Form.create()(AddForm)