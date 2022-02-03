const tabsElements = document.querySelectorAll('.tabs__button');
const contentElements = document.querySelectorAll('.projects__content');
const moreElements = document.querySelectorAll('.project__more');
const backElements = document.querySelectorAll('.project__back');

function activeTabs() {
    tabsElements.forEach(element => {
        element.addEventListener('click', event => {
            tabsElements.forEach(element => {
                element.classList.remove('tabs__button_active');
            })
            event.target.classList.add('tabs__button_active');
            activeContent(event.target.id);
        })
    })
}

activeTabs();

function activeContent(idValueTab) {
    contentElements.forEach(element => {
        element.classList.remove('projects__content_active');
    });
    if (idValueTab === 'udemy') {        
        document.querySelector('[data-content="udemy"]').classList.add('projects__content_active');
    } else if (idValueTab === 'geekbrains') {
        document.querySelector('[data-content="geekbrains"]').classList.add('projects__content_active');
    } else if (idValueTab === 'test') {
        document.querySelector('[data-content="test"]').classList.add('projects__content_active');
    }    
}

function changingCardInformation() {
    moreElements.forEach(element => {
        element.addEventListener('click', event => {
            event.target.parentNode.classList.remove('project__generic_active');
            event.target.parentNode.nextSibling.classList.add('project__details_active');
        })
    })
    backElements.forEach(element => {
        element.addEventListener('click', event => {
            event.target.parentNode.classList.remove('project__details_active');
            event.target.parentNode.previousSibling.classList.add('project__generic_active');
        })
    })
}

changingCardInformation();