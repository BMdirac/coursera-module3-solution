const openMenu = document.querySelector('.open-menu');
const navLink = document.querySelector('.navbar-nav');
const closeMenu = document.querySelector('.close-menu');

openMenu.addEventListener('click', () => {
    navLink.style.display = 'block'
    openMenu.style.display = 'none'
})

closeMenu.addEventListener('click', () => {
    openMenu.style.display = 'block'
    navLink.style.display = 'none'
})

