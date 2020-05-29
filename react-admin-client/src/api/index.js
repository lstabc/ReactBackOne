/*
包含 n 个接口请求函数的模块
每个函数返回 promise
*/
import ajax from './ajax'
import jsonpWeather from './jsonp'

// 登陆
export const reqLogin = (username, password) => ajax('/login', { username, password }, 'POST')
//export const reqWeather = (city) => jsonpWeather('http://api.map.baidu.com/weather/v1/?district_id=430300&data_type=all&ak=MvOUZiqP5stQWVOzGSihrI2y6HSfLSeG')
export const reqWeather = (city) => jsonpWeather(city)
// 获取一级或某个二级分类列表
export const reqCategorys = (parentId) => ajax('/manage/category/list', { parentId })

// 添加分类
export const reqAddCategory = (parentId, categoryName) => ajax('/manage/category/add',
    {
        parentId,
        categoryName
    }, 'POST')

// 更新品类名称
export const reqUpdateCategory = ({ categoryId, categoryName }) =>
    ajax('/manage/category/update', {
        categoryId,
        categoryName
    }, 'POST')