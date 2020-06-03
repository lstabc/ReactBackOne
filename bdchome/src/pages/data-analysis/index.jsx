import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

import ProductHome from './home'
import ProductAddUpdate from './add-update'
import ProductDetail from './detail'
import './data-analysis.less'

/*
管理的商品管理路由组件
*/
export default class DataAnalysis extends Component {
    render() {
        return (
            <Switch>
                <Route path='/data-analysis' exact component={ProductHome} />
                <Route path='/data-analysis/addupdate' component={ProductAddUpdate} />
                <Route path='/data-analysis/detail' component={ProductDetail} />
                <Redirect to='/data-analysis' />
            </Switch>
        )
    }
}