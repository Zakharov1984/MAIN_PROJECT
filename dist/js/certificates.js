let arrowLeftElement = document.querySelector('.certificates__arrow_left');
let arrowRightElement = document.querySelector('.certificates__arrow_right');
let sliderWrapperElement = document.querySelector('.certificates__item-wrapper');
let sliderImgElements = document.querySelectorAll('.certificates__item-img');
let certificatesWrapperElement = document.querySelector('.certificates__wrapper');
let WidthsliderWrapperElement = certificatesWrapperElement.offsetWidth - 30; // значение шириниы родителя(certificates__wrapper) без учета педдингов. далее в эту переменную будет записыаться значение при динамическом измененении ширины.
let imgWidth = certificatesWrapperElement.offsetWidth - 30; // изначально ставим размер img в рамер обертки(с отступами), чтобы , если изменения размера окна не быо у нас была начальная ширина.
let SliderCounter = 0;
let offset = 0;


window.addEventListener('resize', event => { // остлеживаем изменение размера окна, чтобы обновлять ширину imgWidth.(ширина элемента img не может подстраиваться под размеры родителя(с рамками), так как внутри есть еще одна обертка для содержания всех элементов img и ширина этого контейнера равна ширине всех элементов плюс проавый отсутп , а не ширине родителя с рамками, из за этого мы не можем сделать зависимость в процентах.
    WidthsliderWrapperElement = certificatesWrapperElement.offsetWidth - 30; // получение шарины родителя родителя без педдингов(для адаптации).
    imgWidth = WidthsliderWrapperElement; // размер родителя присваеиваем размеру слайдера.
    sliderImgElements.forEach(element => {
        element.style.width = `${imgWidth}px`;
    })

})

arrowRightElement.addEventListener('click', event => {
    if (SliderCounter !== sliderImgElements.length -1) {
        offset = offset - imgWidth - 15;
        sliderWrapperElement.style.transform = `translateX(${offset}px)`;
        SliderCounter++;
        
    }
})

arrowLeftElement.addEventListener('click', event => {
    if (SliderCounter !== 0) {
        offset = offset + imgWidth + 15;
        sliderWrapperElement.style.transform = `translateX(${offset}px)`;
        SliderCounter--;
    }
})



/* let arrowLeftElement = document.querySelector('.certificates__arrow_left');
let arrowRightElement = document.querySelector('.certificates__arrow_right');
let sliderWrapperElement = document.querySelector('.certificates__item-wrapper');
let sliderImgElements = document.querySelectorAll('.certificates__item-img');
let certificatesWrapperElement = document.querySelector('.certificates__wrapper');
let SliderCounter = 0;
let offset = 0;
let WidthsliderWrapperElement = 0;
let sliderWidth = 0;


window.addEventListener('resize', event => {
    WidthsliderWrapperElement = certificatesWrapperElement.clientWidth - 30; // получение шарины родителя родителя без педдингов(для адаптации).
    sliderWidth = WidthsliderWrapperElement; // размер родителя присваеиваем размеру слайдера.

})


arrowRightElement.addEventListener('click', event => {
    if (SliderCounter !== sliderImgElements.length -1) {
        offset = offset - sliderWidth - 15;
        sliderWrapperElement.style.transform = `translateX(${offset}px)`;
        SliderCounter++;
        
    }
})

arrowLeftElement.addEventListener('click', event => {
    if (SliderCounter !== 0) {
        offset = offset + sliderWidth + 15;
        sliderWrapperElement.style.transform = `translateX(${offset}px)`;
        SliderCounter--;
    }
}) */