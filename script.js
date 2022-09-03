console.log("Helloo")

const searchButton = document.getElementById('search-btn');
const searchForm = document.getElementsByClassName('search-form');
if (searchButton) {
    searchButton.addEventListener('click', () => {
        searchForm.classList.add('active');
    })
}


const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

console.log('hiiii')