import jsonp from "jsonp";

export default function jsonpWeather(url){
    return new Promise((resolve, reject) => {
        //console.log("url",url) 
        jsonp(url, { param: 'callback' }, (error, response) => {
            if (!error && response.status === 'success') {
                const {currentCity} = response.results[0]
                const {date,dayPictureUrl, weather,wind} = response.results[0].weather_data[0] 
                resolve({date,currentCity,dayPictureUrl, weather,wind}) 
            } else{ 
                    alert('获取天气信息失败') 
                } 
        }) 
    }) 
}




