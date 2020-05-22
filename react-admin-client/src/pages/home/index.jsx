import React,{Component} from 'react'
import bgjpg from './images/bg.png'
import './index.less'

export default class Home extends Component{
    render(){
        return(
        <div className='home'>
            <img src={bgjpg} alt="背景图片"/>
        </div>
        )
    }
}