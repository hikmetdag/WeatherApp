export const getDate = () => {
    const header = document.querySelector('header')
    const date = new Date().toDateString('en-US');
    header.innerHTML = String.raw` 
        <div class="appName"><i class="fa fa-rocket"></i><h2>HD Weather App</h2></div>
        <label class="search-box">
            <input type="text" class="input-search" placeholder="Search...">
            <button class="btn-search"><i class="fas fa-search"></i></button>
        </label>
        <div class="date">${date}</div>`
}


