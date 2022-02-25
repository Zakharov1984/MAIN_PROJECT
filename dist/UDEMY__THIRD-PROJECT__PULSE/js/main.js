$(document).ready(function(){
    $('.slider__box').slick({
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="/img/slider/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/img/slider/arrow_right.png"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});

/**
 * Функция обеспечивает правильную работу с вкладками продуктов, 
 * добавляя классы активности для активного элемента и удаляя для всех остальных.
 */
function activeTabs() {
    let tabs = document.querySelectorAll('.tabs__item');
    let childrenTabs = document.querySelectorAll('.tabs__link');
    for (let tab of tabs) {
        tab.addEventListener('click', (event) => {
            for (let tab of tabs) {
                tab.classList.remove('tabs__item_active');
            }

            for (let childTabs of childrenTabs) {
                childTabs.classList.remove('tabs__link_active');
            }

            if (!event.currentTarget.classList.contains('tabs__item_active')) {
                event.currentTarget.classList.add('tabs__item_active');
                event.target.classList.add('tabs__link_active');
            }
        });
    }
}

activeTabs();

/**
 * Функция отображает нужный блок с продуктами, в зависимости, какая вкладка активна.
 */
function showContent() {
    let tabs = document.querySelectorAll('.tabs__item');
    let catalogBoxes = document.querySelectorAll('.catalog__box');
    for (let tab of tabs) {
        tab.addEventListener('click', (event) => {
            if (event.currentTarget.id == 'fitness') {
                for (let catalogBox of catalogBoxes) {
                    catalogBox.classList.remove('catalog__box_active');
                }
                document.querySelector("[data-utensils='fitness']").classList.add('catalog__box_active');
            } else if (event.currentTarget.id == 'run') {
                for (let catalogBox of catalogBoxes) {
                    catalogBox.classList.remove('catalog__box_active');
                }
                document.querySelector("[data-utensils='run']").classList.add('catalog__box_active');
            } else if (event.currentTarget.id == 'triathlon') {
                for (let catalogBox of catalogBoxes) {
                    catalogBox.classList.remove('catalog__box_active');
                }
                document.querySelector("[data-utensils='triathlon']").classList.add('catalog__box_active');
            }
        })
    }
}

showContent();

/**
 * Функция предназначена для показа блока описания прордукта, возврата на блок с изображением.
 */
function showSubstrate() {
    let itemMoreItems = document.querySelectorAll('.catalog__item-more');
    let buttoBackEtems = document.querySelectorAll('.button-back');
    for (let itemMoreItem of itemMoreItems) {
        itemMoreItem.addEventListener('click', event => {
            event.target.parentNode.classList.remove('catalog__item-supmenu_active');
            event.target.parentNode.nextElementSibling.classList.add('item-substrate_active');
        })
    }

    for (let buttoBackEtem of buttoBackEtems) {
        buttoBackEtem.addEventListener('click', event => {
            event.target.parentNode.classList.remove('item-substrate_active');
            event.target.parentNode.previousElementSibling.classList.add('catalog__item-supmenu_active');
        })
    }
}

showSubstrate();


/**
 * Функция показывает модальные окна, в зависимости на каком элементе сработало событие.
 */
function showModal() {
    document.querySelectorAll('[data-modal="consultation"]').forEach(element => {
        element.addEventListener('click', (event) => {
            document.querySelector('.overlay').classList.add('overlay_active');
            document.querySelector('#consultation').classList.add('modal_active');       
        })
    })

    document.querySelectorAll('.catalog__button-buy').forEach(element => {
        element.addEventListener('click', event => {
            document.querySelector('[data-modal="order"] .modal__description').innerText =
            event.target.parentNode.parentNode.querySelector('.catalog__item-name').textContent;
            document.querySelector('.overlay').classList.add('overlay_active');
            document.querySelector('[data-modal="order"]').classList.add('modal_active');

        })
    })

    /**
     * Функция закрывает модальное окно.
     */
    function closeModal() {
        document.querySelectorAll('.modal__close').forEach(element => {
            element.addEventListener('click', event => {
                document.querySelector('.overlay').classList.remove('overlay_active');
                document.querySelector('[data-modal="consultation"]').classList.remove('modal_active');
                document.querySelector('[data-modal="order"]').classList.remove('modal_active');

            })
        })
    }

    closeModal();
}

showModal();
