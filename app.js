import { weatherVisual } from './weatherView.js'
import { forcastWeather } from './forcastView.js'

const input = document.querySelector('#inputField')

async function dataTodayWeather(city) {
    const apiKey = '36d04473986fb046e2b40f91d26657b7'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(url)
    const data = await response.json()
    weatherVisual(data)
}

async function dataForcastWeather(city) {
    const apiKey = '36d04473986fb046e2b40f91d26657b7'
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(url)
    const data = await response.json()
    const forcastData =await data.list.filter(element => element.dt_txt.endsWith('06:00:00'))
    forcastWeather(forcastData)
}


input.addEventListener('keyup', e => {
    if (e.key == 'Enter' && input.value != '') {
        dataTodayWeather(input.value)
        dataForcastWeather(input.value)
    }
})
