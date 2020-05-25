import React,{Component} from 'react'
import bgjpg from './images/bg.png'

export default class UserManagement extends Component{
    render(){
        return(
        <div className='user-management'>
            <img src={bgjpg} alt="背景图片"/>
        </div>
        )
    }
}