let leftArrowElement = document.querySelector('.arrow-left'),
rightArrowElement = document.querySelector('.arrow-right'),
sliderTotalElement = document.querySelector('.slider__total');


function Slider(number, id, title, description) {
    this.number = number;
    this.id = id;
    this.title = title;
    this.description = description;
}

let sliderArray = [
    new Slider(1, 0, 'Light coat' ,'More cotton, more freedom'),
    new Slider(2, 1, 'Sandy longsleeve', 'More cotton, more freedom'),
    new Slider(3, 2, 'Lime jacket', 'More cotton, more freedom'),
]

sliderTotalElement.querySelector('span').innerHTML = sliderArray.length;

leftArrowElement.addEventListener('click', event => {
    if (document.querySelector('.slider__item_active').id !== 1) {
        let nexElement = document.querySelector(`[id="${document.querySelector('.slider__item_active').id - 1}"]`);
        nexElement.classList.add('slider__item_active');
        setTimeout(() => {
            document.querySelector('.slider__order span').innerHTML =  nexElement.id;
        }, 900);
        nexElement.nextSibling.classList.remove('slider__item_active');
    } else {
        event.preventDefault();
    }
})

rightArrowElement.addEventListener('click', event => {
    if (document.querySelector('.slider__item_active').id !== 3) {
        let nexElement = document.querySelector(`[id="${Number(document.querySelector('.slider__item_active').id) + 1}"]`);
        nexElement.classList.add('slider__item_active');
        setTimeout(() => {
            document.querySelector('.slider__order span').innerHTML =  nexElement.id;
        }, 900);
        nexElement.previousSibling.classList.remove('slider__item_active');
    } else {
        event.preventDefault();
    }
})