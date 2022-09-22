import { getDayName} from './getDayName.js'

export const forecastWeather = (data) => {
    const forecastCard = document.querySelector('.forecastCard')
    forecastCard.innerHTML = ''
    data.forEach(item => {
        let x = String.raw`
    <div class='forecastRow'>
        <h1>${getDayName(item)}</h1>
        <img src='http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png' alt="weather img">
        <div class="tempForecast">
            <span class="num">${Math.floor(item.main.temp)}</span>
            <span class="unit">°C</span>
        </div>
    </div>
   
        `
        forecastCard.insertAdjacentHTML('beforeend', x);
    })


}