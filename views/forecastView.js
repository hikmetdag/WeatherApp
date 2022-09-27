import { getDayName } from '../utils/getDayNamePage.js'

export const forecastWeather = (data) => {
    const forecastCard = document.querySelector('.forecastCard')
    forecastCard.innerHTML = ''
    data.forEach(item => {
        let futureWeather = String.raw`
    <div class='forecastRow'>
        <h1 class='futureDay'>${getDayName(item)}</h1>
        <div class='imgBox'>
            <img src='http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png' alt="weather img">
        </div>
        <div class="tempForecast">
            <span class="num">${Math.floor(item.main.temp)}</span>
            <span class="unit">°C</span>
        </div>
    </div>
   
        `
        forecastCard.insertAdjacentHTML('beforeend', futureWeather);
    })


}