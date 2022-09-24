import { weatherVisual } from './weatherView.js'
import { forecastWeather } from './forecastView.js'
import { getDate } from './date.js'
import { unsplashApi } from './unsplashApi.js'
import { createHtmlElement } from './createHtmlElement.js'

async function dataTodayWeather(city) {
    const apiKey = '36d04473986fb046e2b40f91d26657b7'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(url)
    if (response.ok) {
        const data = await response.json()
        weatherVisual(data)
        unsplashApi(city)
    } else {
        throw new Error('Something goes wrong with Data Server!')
    }

}

function dataWeatherByLocation() {
    const apiKey = '36d04473986fb046e2b40f91d26657b7'
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
            const response = await fetch(url)
            if (response.ok) {
                const data = await response.json()
                weatherVisual(data)
                unsplashApi(data.name)
            } else {
                throw new Error('Something goes wrong with Data Server!')
            }

        })
    }
}

function forecastWeatherByLocation() {
    const apiKey = '36d04473986fb046e2b40f91d26657b7'
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
            const response = await fetch(url)
            const data = await response.json()
            const forecastData = await data.list.filter(element => element.dt_txt.endsWith('06:00:00'))
            forecastWeather(forecastData)
        })
    }
}

async function dataForecastWeather(city) {
    const apiKey = '36d04473986fb046e2b40f91d26657b7'
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
    const response = await fetch(url)
    const data = await response.json()
    const forecastData = await data.list.filter(element => element.dt_txt.endsWith('06:00:00'))
    forecastWeather(forecastData)
}

function main() {
    createHtmlElement()
    getDate()
    const input = document.querySelector('.input-search')
    const button = document.querySelector('.btn-search')

    input.addEventListener('keyup', e => {
        if (e.key == 'Enter' && input.value != '') {
            dataTodayWeather(input.value)
            dataForecastWeather(input.value)
        }
    })

    button.addEventListener('click', () => {
        dataTodayWeather(input.value)
        dataForecastWeather(input.value)
    })

    window.addEventListener('load', () => {
        dataWeatherByLocation()
        forecastWeatherByLocation()

    })

}

main()
