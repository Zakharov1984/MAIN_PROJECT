let menu = document.querySelector('.menu');
let buttonMenu = document.querySelector('.menu-button');
buttonMenu.addEventListener('click', event => {
        menu.classList.toggle('menu_active');
        buttonMenu.classList.toggle('menu-button_active');
    })

menu.addEventListener('click', event => {
    menu.classList.toggle('menu_active');
    buttonMenu.classList.toggle('menu-button_active');
})                  