let colorElements = document.querySelectorAll('.customize__color-item');
let sizeItemElements = document.querySelectorAll('.customize__size-item');
let sizeSubItemElements = document.querySelectorAll('.customize__size-subitem');
let quantityMinusElement = document.querySelector('.customize__quantity-minus');
let quantityPlusElement = document.querySelector('.customize__quantity-plus');
let quantityNumber = document.querySelector('.customize__quantity-number');
let dollarElement = document.querySelector('.customize__cost-dollar');


/**
 * Функия обходит коллекцию элементов с цветом и ставит на них обработчик события,
 * в обработчике проверяется, есть ли у элемента на котором возникло событие - класс активности, если нет,
 * то в обработчике перебирается  опять вся коллекция элементов(объектов) с цветом, 
 * удаляя класс активности у других элементов(элемента) и добавляя его на целевой элемент.
 */
function customizeColor() {
    colorElements.forEach(element => {
        element.addEventListener('click', event => {
            if (!event.currentTarget.classList.contains('customize__color-item_active')) {
                colorElements.forEach(element => {
                    element.classList.remove('customize__color-item_active');
                })
                event.currentTarget.classList.add('customize__color-item_active');
            }
        })
    })
}

customizeColor();


/**
 * Функия обходит коллекцию элементов с размером и ставит на них обработчик события,
 * в обработчике проверяется, есть ли у элемента на котором возникло событие - класс активности, если нет,
 * то в обработчике перебирается  опять вся коллекция элементов(объектов) с размером, 
 * удаляя класс активности у других элементов(элемента) и добавляя его на целевой элемент.
 * Также есть еще одна проверка, так как есть возможность, что размера нет в наличии, предусмотрен специальный класс - указывающий визуально, что такого размера нет,
 * эта проверка исключает этот элемент для добавления класса активности к нему, так как по логике - размера нет и активным он быть не может. 
 */
function customizeSize() {
    sizeItemElements.forEach(element => {
        element.addEventListener('click', event => {
            if (!event.currentTarget.classList.contains('customize__size-item_active')) {
                if (!event.currentTarget.classList.contains('customize__size-item_no-product')) { // еще одна проверка, чтобы исключить размер которого нет.
                    sizeItemElements.forEach(element => {
                        element.classList.remove('customize__size-item_active');
                        element.firstChild.classList.remove('customize__size-subitem_active');
                    })
                    event.currentTarget.classList.add('customize__size-item_active');
                    event.currentTarget.firstChild.classList.add('customize__size-subitem_active');
                }
            }
        })
    })
}

customizeSize();

/**
 * Функция ставит обработчики событий на кнопки 'plus', 'minus', 
 * обработчик при клике увеличивает или уменьшает значение(если оно не равно 1) на единицу.
 */
function counterGoods() {
    quantityMinusElement.addEventListener('click', event => {
        if (Number(quantityNumber.innerText) !== 1) {
            quantityNumber.innerText--;
            totalSumGoods();
        }
    })

    quantityPlusElement.addEventListener('click', event => {
        quantityNumber.innerText++;
        totalSumGoods();
    })

}

counterGoods();

/**
 * Функция считает общую сумму за конкретное коичество товаров.
 */
function totalSumGoods() {
    dollarElement.innerText = Number(quantityNumber.innerText) * 120;
}