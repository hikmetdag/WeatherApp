export const renderError = (err,message) => {
    const weatherCard=document.querySelector('.weatherCard')
    weatherCard.innerHTML = "";
    weatherCard.innerHTML = `<h3 id='error'>${err.message}</h3>`;
    const forecastCard = document.querySelector('.forecastCard')
    forecastCard.innerHTML = ''
  };