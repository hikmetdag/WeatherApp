export const renderError = (err) => {
    const weatherContainer=document.querySelector('.weatherContainer')
    weatherContainer.innerHTML = "";
    weatherContainer.innerHTML = `<h1 id='error'>Error 404, a problem with data server</h1>`;
    weatherContainer.style.background = "white !important";
  };