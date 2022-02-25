let deliveryTitleElement = document.querySelector('.delivery__title');
let returnTitleElement = document.querySelector('.return__title');

deliveryTitleElement.addEventListener('click', event => {
    document.querySelector('.delivery__description').classList.toggle('delivery__description_active');
    event.target.classList.toggle('delivery__title_active');
}) 

returnTitleElement.addEventListener('click', event => {
    document.querySelector('.return__description').classList.toggle('return__description_active');
    event.target.classList.toggle('return__title_active');
}) 