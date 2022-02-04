const menuElements = document.querySelectorAll('.menu__item');
const navMenuElement = document.querySelector('.header__nav');

function showMenu() {
    document.querySelector('.header__button-menu').addEventListener('click', event => {
        navMenuElement.classList.toggle('header__nav_active');
    })

    menuElements.forEach(element => {
        element.addEventListener('click', event => {
            navMenuElement.classList.remove('header__nav_active');
        })
    })
}

showMenu();