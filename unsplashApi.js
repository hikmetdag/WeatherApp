export const unsplashApi = async (query) => {
    const apiKey = 'QHjPKy4UD4VvX3bSmNloqRCnHiIaYwfvbbDTVjmp2zI'
    const url = `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=${query}`
    const response= await fetch(url)
    const data = await response.json()
    if(data.results[0].urls.regular)
    {document.body.style.backgroundImage = `url('${data.results[0].urls.regular}')`}
    else{
        document.body.style.background='yellow'
    }
}