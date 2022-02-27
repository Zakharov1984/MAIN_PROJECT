const formElement = document.querySelector('.contact__form');
const nameFormElement = document.querySelector('.contact__form-input[id="name"]');
const EmailFormElement = document.querySelector('.contact__form-input[id="email"]');
const contentFormElement = document.querySelector('.contact__content[id="contentForm"]')
const closeFormElement = document.querySelector('.form-error__close');
const regExpNameForm = /^[a-zа-яёЁ]{1,15}$/i;
const regExpEmailForm = /^[\w._-]+@\w+\.[a-z]{2,4}$/i;

formElement.addEventListener('submit', event => {
    event.preventDefault();
})



nameFormElement.addEventListener('change', event => {
    if (!regExpNameForm.test(event.target.value)) {
        addedMarkupError(event.target);
    }
})

EmailFormElement.addEventListener('change', event => {
    if (!regExpEmailForm.test(event.target.value)) {
        addedMarkupError(event.target);
    }
})



function addedMarkupError(item) {
    if (item.id == 'name') {
        if (!item.nextElementSibling.classList.contains('form-error')) {
            contentFormElement.insertAdjacentHTML('afterbegin', '<div class="form-error">Пожалуйста, введите корректное имя.<br>От 1 до 15 символов, допускаются буквы кириллицы и латинские символы.<div class="form-error__close"></div></div>');
            const closeFormElement = document.querySelector('.form-error__close');
            closeFormElement.addEventListener('click', event => {
                document.querySelector('.form-error').remove();
                item.value = '';
            })
        }    
    } else if (item.id == 'email') {
        if (!item.nextElementSibling.classList.contains('form-error')) {
            contentFormElement.insertAdjacentHTML('afterbegin', '<div class="form-error">Пожалуйста, введите корректный адрес почты.<div class="form-error__close"></div></div>');
            const closeFormElement = document.querySelector('.form-error__close');
            closeFormElement.addEventListener('click', event => {
                document.querySelector('.form-error').remove();
                item.value = '';
            })
        }    
    }
}


