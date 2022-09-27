import { weatherVisual } from '../views/weatherView.js'
import { forecastWeather } from '../views/forecastView.js'
import { getDate } from '../views/date.js'
import { unsplashApi } from './unsplashApi.js'
import { createHtmlElement } from '../views/createHtmlElement.js'
import { renderError } from '../views/errorView.js'

async function dataTodayWeather(city) {
    try {
        const apiKey = '36d04473986fb046e2b40f91d26657b7'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Invalid city name')
        }
        const data = await response.json()
        weatherVisual(data)
        unsplashApi(city)
    } catch (error) {
        renderError(error)
    }
}

function dataWeatherByLocation() {
    const apiKey = '36d04473986fb046e2b40f91d26657b7'
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            try {
                long = position.coords.longitude;
                lat = position.coords.latitude;
                const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
                const response = await fetch(url)
                if (response.status === 404) {
                    throw new Error('Something goes wrong with data server')
                }
                const data = await response.json()
                weatherVisual(data)
                unsplashApi(data.name)
            } catch (error) {
                renderError(error)
            }
        }
        )
    }

}

function forecastWeatherByLocation() {
    const apiKey = '36d04473986fb046e2b40f91d26657b7'
    let long;
    let lat;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async position => {
            try {
                long = position.coords.longitude;
                lat = position.coords.latitude;
                const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${apiKey}&units=metric`
                const response = await fetch(url)
                if (response.status === 404) {
                    throw new Error('Something goes wrong with data server')
                }
                const data = await response.json()
                const forecastData = await data.list.filter(element => element.dt_txt.endsWith('06:00:00'))
                forecastWeather(forecastData)

            } catch (error) {
                renderError(error)
            }
        })
    }
}
async function dataForecastWeather(city) {
    try {
        const apiKey = '36d04473986fb046e2b40f91d26657b7'
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error('Invalid city name')
        }
        const data = await response.json()
        const forecastData = await data.list.filter(element => element.dt_txt.endsWith('06:00:00'))
        forecastWeather(forecastData)
    } catch (err) {
        renderError(err)
    }
}

async function main() {
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
