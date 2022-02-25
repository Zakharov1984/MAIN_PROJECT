let inputNameElement = document.querySelector('.subscribe__form-input[name="name"]');
let inputEmailElement = document.querySelector('.subscribe__form-input[name="email"]');
let formElement = document.querySelector('subscribe__form');
let regExpName = /^[a-z]+$/i;
let regExpEmail = /^[\w._-]+@\w+\.[a-z]{2,4}$/i;

inputNameElement.addEventListener('change', event => {
    if ( !regExpName.test(event.target.value) ) {
        if (!event.target.nextElementSibling.classList.contains('subscribe__form-error')) { // вторая проверка на наличие элемента указывающего на ошибку в значении.
            addElementError(event.target);
        }   
    } else {
        if (document.querySelector('.subscribe__form-error')) {
            event.target.nextElementSibling.remove();
        }
    }
})

inputEmailElement.addEventListener('change', event => {
    if ( !regExpEmail.test(event.target.value) ) {
        if (!event.target.nextElementSibling.classList.contains('subscribe__form-error')) { // вторая проверка на наличие элемента указывающего на ошибку в значении.
            addElementError(event.target);
        }        
    } else {
        if (document.querySelector('.subscribe__form-error')) {
            event.target.nextElementSibling.remove();
        }
    }
})

/**
 * Функция вставляет элемент с описанием ошибки, 
 * в зависимости на каком элементе строка не прошла валидацию.
 * @param {*} object - получает объект на котором строка не прошла валидацию. 
 */
function addElementError(object) {
    if (object.getAttribute('name') === 'name') {
        object.insertAdjacentHTML('afterend', `<div class="subscribe__form-error">Please enter latin letters.<br> At least one character.</div>`);
    } else if (object.getAttribute('name') === 'email') {
        object.insertAdjacentHTML('afterend', `<div class="subscribe__form-error">Please enter a valid postal address</div>`);
    }
}

formElement.addEventListener('submit', event => {
    event.preventDefault();
})