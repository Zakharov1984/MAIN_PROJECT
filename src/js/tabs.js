const tabsElements = document.querySelectorAll('.tabs__button');

function activeTabs() {
    tabsElements.forEach(element => {
        element.addEventListener('click', event => {
            tabsElements.forEach(element => {
                element.classList.remove('tabs__button_active');
            })
            event.target.classList.add('tabs__button_active');
        })
    })
}

activeTabs();