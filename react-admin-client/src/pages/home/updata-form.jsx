import React, { Component } from 'react'
import { Form,  Input } from 'antd'
import PropTypes from 'prop-types'

const Item = Form.Item
//const Option = Select.Option

/*
添加分类的 Form 组件
*/
class UpdataForm extends Component {

    static propTypes = {
        categoryId: PropTypes.string.isRequired,
        categoryName:PropTypes.string.isRequired,
        getFormValue: PropTypes.func.isRequired,
      //  resetFields: PropTypes.func.isRequired,
    }

    render() {

        const {categoryId,categoryName,getFormValue} = this.props

        const saveFiled = (changedValues, allValues) => {
            //console.log("allValues",allValues);
            getFormValue({categoryId,allValues});
            
        }
        return (
            <Form 
             onValuesChange={saveFiled}
            >
                <Item 
                initialValue={categoryName}
                name = "categoryName" 
                label='分类名称'
                rules={
                    [
                      { required: true, message: '请输入分类名称' },
                    ]}
                >
                    <Input  placeholder='请输入分类名称'/>
                </Item>
            </Form>

        )

    }

}

export default UpdataForm //= Form.create()(AddForm)