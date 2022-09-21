export const getDate = () => {
    const dateField = document.querySelector('.date')
    const date = new Date().toDateString('en-US');
    return dateField.innerHTML = `<h3>${date}</h3>`
}


