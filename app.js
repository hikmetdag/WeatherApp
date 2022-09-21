import {weatherVisual} from './weatherView.js'

const input = document.querySelector('#inputField')

async function dataWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=36d04473986fb046e2b40f91d26657b7&units=metric`)
    return response.json()
}

const putDataToWeb = async (city) => {
    const data = await dataWeather(city)
    weatherVisual(data)
}

input.addEventListener('keyup', e => {
    if (e.key == 'Enter' && input.value != '') {
        putDataToWeb(input.value)
    }
})
