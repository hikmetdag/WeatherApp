export const weatherVisual = (data) => {
    const weatherCard = document.querySelector('.weatherCard')
    weatherCard.innerHTML = ''

    weatherCard.innerHTML = String.raw` 
    <div class="location">${data.name}/${data.sys.country}</div>
    <div class="temp">
        <span class="num">${Math.floor(data.main.temp)}</span>
        <span class="unit">°C</span>
    </div>
    <p class="currentState">${data.weather[0].main}</p>
    <div class='imgBox'> <img class="weatherIcon" src='http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png' alt="weather img"
            width="100" height="100">
    </div>
    <div class='hwDeg'>
        <div class='humidity'>
            <div><i class="fa fa-tint" style="font-size:24px;color:blue"></i></div>
            <div>${data.main.humidity}%</div>
        </div>
        <div class='wind'>
            <div><i class='fas fa-wind' style='font-size:24px'></i></div>
            <div>${Math.floor(data.wind.speed)} m/s</div>
        </div>
    </div>
 `}
