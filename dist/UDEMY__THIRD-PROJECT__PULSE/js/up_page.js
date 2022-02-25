const linkUpElement = document.querySelector('.linkup');

/**
 * Функция выполняет функционал для элемента 'up' - который скроллит страницу в начало. 
 * Обработчик события на window для отслеживания высоты прокрутки, чтобы появлялся или исчезал элемент up.
 */
function showUpElement() {
    window.addEventListener('scroll', event => {
        if (window.pageYOffset >= 629) {
            linkUpElement.classList.add('linkup_active');
        } else if (window.pageYOffset < 629) {
            linkUpElement.classList.remove('linkup_active');
        }
    })
}

showUpElement();