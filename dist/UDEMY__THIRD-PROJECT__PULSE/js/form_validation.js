let closeFormElements = document.querySelectorAll('.modal__close');
let nameFormElements = document.querySelectorAll('[name="name"]');
let phoneFormElements = document.querySelectorAll('[name="phone"]');
let emailFormElements = document.querySelectorAll('[name="email"]');
let regExpName = /^[a-zа-яёЁ]+$/i;
let regExpPhone = /^\+7\(\d{3}\)\d{3}-\d{4}$/;
let regExpEmail = /^[\w._-]+@\w+\.[a-z]{2,4}$/i;


/**
 * Отменяет действие по умолчанию для отправки формы.
 */
function formValidation () {
    document.querySelectorAll('.feed-form').forEach(element => {
        element.addEventListener('submit', function(event) {
            event.preventDefault();
        })
    })
}

formValidation();

/**
 * Когда модульное окно с фомой закрывают, функция очищает поля формы,
 * удаляет элементы с ошибками и классы указывающие на ошибку или правильность ввода в поле.
 */
function clearingForm() {
    closeFormElements.forEach(element => {
        element.addEventListener('click', (event) => {
            nameFormElements.forEach(element => {
                element.value = '';            
            })
            phoneFormElements.forEach(element => {
                element.value = '';
            })
            emailFormElements.forEach(element => {
                element.value = '';
            })
            document.querySelectorAll('.feed-form__error-msg').forEach(element => {
                element.remove();
            })
            document.querySelectorAll('.feed-form__item').forEach(element => {
                element.classList.remove('feed-form__item_invalid');
                element.classList.remove('feed-form__item_valid'); 
            })
        })        
    })      
}

clearingForm();

/**
 * Функция вставляет элемент с описанием ошибки, 
 * в зависимости на каком элементе строка не прошла валидацию и 
 * добавляет класс указывающий на ошибку в поле.
 * @param {оbject} element - получает объект на котором строка не прошла валидацию.
 */
function addElementError(element) {
    if (element.getAttribute('name') === 'name') {
        element.insertAdjacentHTML('afterend', '<div class="feed-form__error-msg">Введите корректное занчение.<br> Латинские Буквы или Кириллицы.<br> Не меньше одного символа.</div>');
        element.classList.add('feed-form__item_invalid');
    } else if (element.getAttribute('name') === 'phone') {
        element.insertAdjacentHTML('afterend', '<div class="feed-form__error-msg">Введите корректное значение.<br> +7(000)000-0000</div>');
        element.classList.add('feed-form__item_invalid');
    } else if (element.getAttribute('name') === 'email') {
        element.insertAdjacentHTML('afterend', '<div class="feed-form__error-msg">Введите корректное значение.<br>example@mail.ru</div>');
        element.classList.add('feed-form__item_invalid');
    }
}

nameFormElements.forEach(element => {
    element.addEventListener('change', event => {
        if ( !regExpName.test(event.target.value) ) { // проверка на соответсвие шаблону.
            if (!event.target.nextElementSibling.classList.contains('feed-form__error-msg')) { // проверка на наличие элемента, указывающий на ошибки в форме, чтобы не дублировался элемент.
                addElementError(event.target);
            }
        } else {
            if (document.querySelector('.feed-form__error-msg')) { // проверка, есть ли элемент с ошибкой на странице (если его нет, метод .querySelector() - возвращает null, в итоге метод .remove() не найдется и код встанет с ошибкой и дальше не пойдет выполнение, нужный функционал не выполнится).
                document.querySelector('.feed-form__error-msg').remove();
            }
            event.target.classList.remove('feed-form__item_invalid');
            event.target.classList.add('feed-form__item_valid');
        }
    })
})

phoneFormElements.forEach(element => {
    element.addEventListener('change', event => {
        if ( !regExpPhone.test(event.target.value) ) { // проверка на соответсвие шаблону.
            if (!event.target.nextElementSibling.classList.contains('feed-form__error-msg')) { // проверка на наличие элемента, указывающий на ошибки в форме, чтобы не дублировался элемент.
                addElementError(event.target);
            }
        } else {
            if (document.querySelector('.feed-form__error-msg')) { // проверка, есть ли элемент с ошибкой на странице (если его нет, метод .querySelector() - возвращает null, в итоге метод .remove() не найдется и код встанет с ошибкой и дальше не пойдет выполнение, нужный функционал не выполнится).
                document.querySelector('.feed-form__error-msg').remove();
            }
            event.target.classList.remove('feed-form__item_invalid');
            event.target.classList.add('feed-form__item_valid');
        }
    })
})

emailFormElements.forEach(element => {
    element.addEventListener('change', event => {
        if ( !regExpEmail.test(event.target.value) ) { // проверка на соответсвие шаблону.
            if (!event.target.nextElementSibling.classList.contains('feed-form__error-msg')) { // проверка на наличие элемента, указывающий на ошибки в форме, чтобы не дублировался элемент.
                addElementError(event.target);
            }
        } else {
            if (document.querySelector('.feed-form__error-msg')) { // проверка, есть ли элемент с ошибкой на странице (если его нет, метод .querySelector() - возвращает null, в итоге метод .remove() не найдется и код встанет с ошибкой и дальше не пойдет выполнение, нужный функционал не выполнится).
                document.querySelector('.feed-form__error-msg').remove();
            }
            event.target.classList.remove('feed-form__item_invalid');
            event.target.classList.add('feed-form__item_valid');
        }
    })
})