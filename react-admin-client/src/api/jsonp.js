import jsonp from "jsonp";
import CryptoJS from 'crypto-js/crypto-js';

export default function jsonpWeather(city){
    var url = "https://api.thinkpage.cn/v3/weather/now.json?location="+city+"&";
    var time = Math.round(new Date().getTime()/1000);
    var str = "ts=" + time + "&ttl=30&uid=PFASLPhike7Fc1gNb";
    var hash = CryptoJS.HmacSHA1(str, "SoHRJD2otGGPfhLkQ");
    var base = hash.toString(CryptoJS.enc.Base64);
    var sig = encodeURIComponent(base);
    url = url  + str + "&sig=" + sig;
 //   console.log(url)
    return new Promise((resolve, reject) => {
        //console.log("url",url) 
        jsonp(url, { param: 'callback' }, (error, response) => {
          //  console.log("response",response)
          //  console.log("response.results",response.results)
           // console.log("response.results.last_update",response.results[0].last_update)
            if (!error && response.results[0].last_update) {
                const {name} = response.results[0].location
                const {text, temperature} = response.results[0].now 
                const weather = text + "，温度" + temperature + "度"
                const date = response.results[0].last_update.split('T')[0]
                const currentCity = name
                const dayPictureUrl = ''
                const wind = ''

                resolve({date, currentCity, dayPictureUrl, weather, wind }) 
            } else{ 
                  //  alert('获取天气信息失败') 
                } 
        }) 
    }) 
}



// // 关联DOM，显示天气数据
// var showWeather = function (data) {
//     document.getElementById('wtxt').innerHTML = data.text;
//     document.getElementById('loca').innerHTML = data.location;
//     document.getElementById('temp').innerHTML = data.temperature;
//     document.getElementById('weather').style.background 
//             = '#00A6FF url("../' + data.code + '.png") 10px 0 no-repeat';
// }
// // 将jsonp返回的复杂对象精简为只包含所需信息的对象，并存入cookie（假设页面无其他cookie内容）
// var convertWeatherObj = function (data) {
//     var weather = {
//         'location': data.results[0].location.name,
//         'code': data.results[0].now.code,
//         'text': data.results[0].now.text,
//         'temperature': data.results[0].now.temperature
//     };
//     showWeather(weather);
//     document.cookie="weather="+ JSON.stringify(weather) +"; path=/;";
// }

// 构造验证参数字符串，发送jsonp请求（需要引用CryptoJS插件进行编码）
// var getWeather = function () {
//     var time = Math.round(new Date().getTime()/1000);
//     var str = "ts=" + time + "&ttl=30&uid=UB93202969";
//     var hash = CryptoJS.HmacSHA1(str, "vvjmsobm15dhmwcw");
//     var base = hash.toString(CryptoJS.enc.Base64);
//     var sig = encodeURIComponent(base);
//     var url = "https://api.thinkpage.cn/v3/weather/now.json?location=ip&callback=convertWeatherObj&" + str + "&sig=" + sig;
//     var script = document.createElement('script');
//     script.setAttribute('src', url);
//     document.getElementsByTagName('body')[0].appendChild(script);
// }
// // 当前页面有cookie，则不再发送请求
// if (document.cookie != '') {
//     var objStr = document.cookie.substring(8);
//     var weatherObj = JSON.parse(objStr);
//     showWeather(weatherObj);
// } else {
//     getWeather();
// }