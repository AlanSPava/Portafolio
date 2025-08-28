const hamburguesa = document.querySelector('#hamburger')
const enlaces = document.querySelector('#nav-links')

hamburguesa.addEventListener('click', () => {
    enlaces.classList.toggle('show')
})