let main = () =>
{

    let cityName = document.getElementById("inp").value;
    let url = `https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&cnt=1&appid=12f6fe030d9ea2e1373700b39c04eeb2`;
//tesst
    fetch(url).then((response) =>{
    return response.json();
    }).then((data)=>
    {
        document.getElementsByClassName("info").innerHTML = "";
        console.log(data);
        
        let icon = data.weather[0].icon;
        let windSpeed = data.wind.speed;
        let sunrise = data.sys.sunrise;
        let sunset = data.sys.sunset;
        let sunriseDate = new Date(sunrise * 1000);
        let sunsetDate = new Date(sunset * 1000);
        let sunriseHours = sunriseDate.getHours();
        let sunriseMinutes = sunriseDate.getMinutes();
        let sunsetHours = sunsetDate.getHours();
        let sunsetMinutes = sunsetDate.getMinutes();
        let humidity = data.main.humidity;
        let pressure = data.main.pressure;
        let desc = data.weather[0].description;
        let cityName = data.name;
        let temp = data.main.temp;
        let weather = 
        {
            icon:icon,
            windSpeed:windSpeed,
            cityName : cityName,
            temp:temp,
            desc: desc,
            humidity:humidity,
            pressure:pressure,
            sunriseTime : showSunriseTime(sunriseHours,sunriseMinutes),
            sunsetTime : showSunsetTime(sunsetHours,sunsetMinutes),
        }
        return weather;
    }).then((weather)=>{
        showWeather(weather);
        
    });
}
function showWeather(weather){
    console.log(weather); 
    document.getElementById("icon").innerHTML = `<img src = "http://openweathermap.org/img/w/${weather.icon}.png">`
    document.getElementById("name").innerHTML = weather.cityName;
    document.getElementById("temp").innerHTML = weather.temp;
    document.getElementById("humidity").innerHTML = weather.humidity;
    document.getElementById("pressure").innerHTML = weather.pressure;
    document.getElementById("wind").innerHTML = weather.windSpeed;
    document.getElementById("sunrise").innerHTML = weather.sunriseTime;
    document.getElementById("sunset").innerHTML = weather.sunsetTime;
    document.getElementById("description").innerHTML = weather.desc;

}
function showSunriseTime(sunriseHours,sunriseMinutes)
{
    return `${sunriseHours}:${sunriseMinutes} am`;
}
function showSunsetTime(sunsetHours,sunsetMinutes)
{
    return `${sunsetHours - 12}:${sunsetMinutes} pm`;
}
    
    
    
    