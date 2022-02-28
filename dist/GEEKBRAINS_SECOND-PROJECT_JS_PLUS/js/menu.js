function showMenu() {
    document.querySelector('.menu-button').addEventListener('click', function() {
        document.querySelector('.nav').classList.toggle('nav_active');
    })
    document.querySelector('.nav').addEventListener('click', function() {
        document.querySelector('.nav').classList.toggle('nav_active');
    })
}

showMenu();