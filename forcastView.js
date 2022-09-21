export const forcastWeather = (data) => {
    const forcastCard = document.querySelector('.forcastCard')
    forcastCard.innerHTML = ''
    data.forEach(item => {
        let x = String.raw`
    <div class='forcastRow'>
        <h1>${item.dt_txt}</h1>
        <img src='http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png' alt="weather img">
        <div class="temp">
            <span class="num">${Math.floor(item.main.temp)}</span>
            <span class="unit">°C</span>
        </div>
    </div>
   
        `
        forcastCard.insertAdjacentHTML('beforeend', x);
    })


}