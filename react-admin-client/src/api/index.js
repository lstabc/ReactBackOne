/*
包含 n 个接口请求函数的模块
每个函数返回 promise
*/
import ajax from './ajax'
import jsonpWeather from './jsonp'

// 登陆
export const reqLogin = (username, password) => ajax('/login', {username, password},'POST')
export const reqWeather = (city) => jsonpWeather('http://api.map.baidu.com/telematics/v3/weather?location='+city+'&output=json&ak=3p49MVra6urFRGOT9s8UBWr2')

