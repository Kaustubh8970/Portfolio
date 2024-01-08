// ===================================NAV TOGGLE

const navMenu = document.querySelector('.nav_menu')
const navOpenBtn = document.querySelector('.nav__toggle-open')
const navCloseBtn = document.querySelector('.nav_toggle-close')

const openNavHandler = () =>{
    navMenu.style.display = 'flex';
    navOpenBtn.style.display = 'none';
    navCloseBtn.style.display = 'inline-block';
}

const closeNavHandler = () =>{
    navMenu.style.display = 'none';
    navOpenBtn.style.display = 'inline-block';
    navCloseBtn.style.display = 'none';
}

navOpenBtn.addEventListener('click',openNavHandler)
navCloseBtn.addEventListener('click',closeNavHandler)



