let messageTitle = document.querySelector('.message__title');
let messageDescr = document.querySelector('.message__description');
let messageMoreElement = document.querySelector('.message__more img');
let aboutMeElement = document.querySelector('.aboutMe');
let messageElement = document.querySelector('.message');

messageTitle.addEventListener('click', event => {
    messageDescr.classList.toggle('message__description_active');

    if ( messageDescr.classList.contains('message__description_active') ) {
        messageMoreElement.setAttribute('src', 'icons/message/minus.svg');
    } else {
        messageMoreElement.setAttribute('src', 'icons/message/plus.svg');
    }

    if (window.innerWidth <= 990) {
        if ( messageDescr.classList.contains('message__description_active') ) {
            aboutMeElement.classList.add('aboutMe_img-none');
        } else {
            aboutMeElement.classList.remove('aboutMe_img-none');
        }
    }

    if (window.innerWidth <= 575) {
        if ( messageDescr.classList.contains('message__description_active') ) {
            messageElement.classList.add('message_width-100');
        } else {
            messageElement.classList.remove('message_width-100');
        }
    }
})

window.addEventListener('resize', event => {
    if (window.innerWidth <= 990) {
        if ( messageDescr.classList.contains('message__description_active') ) {
            aboutMeElement.classList.add('aboutMe_img-none');
        }
    } else {
        aboutMeElement.classList.remove('aboutMe_img-none');
    }
})

window.addEventListener('resize', event => {
    if (window.innerWidth > 575) {
        if ( messageDescr.classList.contains('message__description_active') ) {
            messageElement.classList.add('message_width-100');
        }
    } else {
        messageElement.classList.remove('aboutMe_img-none');
    }
})

