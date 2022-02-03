const tabsElements = document.querySelectorAll('.tabs__button');
const contentElements = document.querySelectorAll('.projects__content');

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
    if (idValueTab === 'udemy') {
        contentElements.forEach(element => {
            element.classList.remove('projects__content_active');
        })
        document.querySelector('[data-content="udemy"]').classList.add('projects__content_active');
    } else if (idValueTab === 'geekbrains') {
        contentElements.forEach(element => {
            element.classList.remove('projects__content_active');
        })
        document.querySelector('[data-content="geekbrains"]').classList.add('projects__content_active');
    } else if (idValueTab === 'test') {
        contentElements.forEach(element => {
            element.classList.remove('projects__content_active');
        })
        document.querySelector('[data-content="test"]').classList.add('projects__content_active');
    }    
}