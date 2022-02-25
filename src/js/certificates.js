let arrowLeftElement = document.querySelector('.certificates__arrow_left');
let arrowRightElement = document.querySelector('.certificates__arrow_right');
let sliderWrapperElement = document.querySelector('.certificates__item-wrapper');
let sliderImgElements = document.querySelectorAll('.certificates__item-img');
let SliderCounter = 0;
let offset = 0;

arrowRightElement.addEventListener('click', event => {
    if (SliderCounter !== sliderImgElements.length -1) {
        offset = offset - sliderImgElements[0].offsetWidth - 15;
        sliderWrapperElement.style.transform = `translateX(${offset}px)`;
        SliderCounter++;
        
    }
})

arrowLeftElement.addEventListener('click', event => {
    if (SliderCounter !== 0) {
        offset = offset + sliderImgElements[0].offsetWidth + 15;
        sliderWrapperElement.style.transform = `translateX(${offset}px)`;
        SliderCounter--;
    }
})