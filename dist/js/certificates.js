let arrowLeftElement = document.querySelector('.certificates__arrow_left');
let arrowRightElement = document.querySelector('.certificates__arrow_right');
let sliderWrapperElement = document.querySelector('.certificates__item-wrapper');
let sliderImgElements = document.querySelectorAll('.certificates__item-img');
let certificatesWrapperElement = document.querySelector('.certificates__wrapper');
let WidthsliderWrapperElement = certificatesWrapperElement.offsetWidth - 30; // значение шириниы родителя(certificates__wrapper) без учета педдингов. далее в эту переменную будет записыаться значение при динамическом измененении ширины.
let imgWidth = certificatesWrapperElement.offsetWidth - 30; // изначально ставим размер img в рамер обертки(certificates__wrapper), чтобы , если изменения размера окна не быо у нас была начальная ширина.
let SliderCounter = 0;
let offset = 0;


window.addEventListener('resize', event => { // остлеживаем изменение размера окна, чтобы обновлять ширину imgWidth.(ширина элемента img не может подстраиваться под размеры родителя(с рамками), так как внутри есть еще одна обертка для содержания всех элементов img и ширина этого контейнера равна ширине всех элементов плюс проавый отсутп , а не ширине родителя с рамками, из за этого мы не можем сделать зависимость в процентах.
    WidthsliderWrapperElement = certificatesWrapperElement.offsetWidth - 30; // получение шарины родителя родителя без бордера(для адаптации).
    imgWidth = WidthsliderWrapperElement; // размер родителя присваеиваем размеру слайдера.
    sliderImgElements.forEach(element => {
        element.style.width = `${imgWidth}px`;
    })
    /**
     * Проверка для размера ширины окна просмотра. При динамическом изменении окна просмотра возникает проблема с адаптивностью.
     * Счетчик offset остается со старым значение, когда он рассчитывался относительно размера img - элемента, 
     * который в свою очередь рассчитывался относительно элемента certificates__wrapper(обертка с бордером).
     * При изменении размеров размеров окна просмотра, если ширина становится меньше 991 , то certificates__wrapper(обертка с бордером) - меняет свой размер,
     * соответственно, img - элемент, принимает значение этого родителя, но offset - счетчик, отается с размером, 
     * который генерировался относительно старых размеров img-элемента, когда ширина окна была боьше 991. соответсвенно и certificates__wrapper(обертка с бордером) был больше.
     * Идет зависимсоть от certificates__wrapper(обертка с бордером) для адаптивности.
     * При < 991 мы обновляем счетчик offset и счетчик SliderCounter, обновляем значение свойства transform, чтобы все корректно отрабатывало.
     */
    if (window.innerWidth < 991) { 
        offset = 0;
        SliderCounter = 0;
        sliderWrapperElement.style.transform = `translateX(${offset}px)`;
        console.log(1);
    }
    
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


