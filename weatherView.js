export const weatherVisual=(data)=>{
    const weatherCard = document.querySelector('.weatherCard')
    weatherCard.innerHTML = ''

    weatherCard.innerHTML = String.raw` 

<div class="location">${data.name}/${data.sys.country}</div>
<img src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt="weather img">

<p class="currentState">${data.weather[0].main}</p>

<div class="temp">
<i class='fa-solid fa-temperature-full'></i><span class="num">${Math.floor(data.main.temp)}</span>
     <span class="unit">°C</span>
 </div>

 <p  class="humidity"><i class="fa fa-tint" style="font-size:24px;color:blue"></i>${data.main.humidity}%</p>
 <p  class="wind"> <i class='fas fa-wind' style='font-size:24px'></i>${data.wind.speed} m/s</p>

 `}