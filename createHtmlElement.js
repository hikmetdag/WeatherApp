export const createHtmlElement = () => {
    const header=document.createElement('header')
    document.body.appendChild(header)

    const weatherContainer = document.createElement('div')
    weatherContainer.className = 'weatherContainer'
    document.body.appendChild(weatherContainer)

    const weatherCard = document.createElement('div')
    weatherCard.className = 'weatherCard'
    weatherContainer.appendChild(weatherCard)

    const forecastCard = document.createElement('div')
    forecastCard.className = 'forecastCard'
    weatherContainer.appendChild(forecastCard)
}
