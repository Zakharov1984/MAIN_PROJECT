let messageTitle = document.querySelector('.message__title');
let messageDescr = document.querySelector('.message__description');

messageTitle.addEventListener('click', event => {
    messageDescr.classList.toggle('message__description_active');
})