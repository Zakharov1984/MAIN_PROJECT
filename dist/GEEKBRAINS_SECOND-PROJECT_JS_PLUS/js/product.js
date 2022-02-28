/**
 * Функция - конструктор, генерирует объекты - товары.
 * @param {number} id уникальный индетификатор товара
 * @param {string} image название файла с картинкой
 * @param {string} name имя персонажа
 * @param {string} description описание персонажа 
 * @param {number} price цена персонажа
 */
function Product(id, image, name, description, price) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.description = description;
    this.price = price;
    this.counter = 0;
    this.sumTotal = 0;
}

const products = [
    new Product(
        0,
        'Rick.jpg',
        'Rick',
        'БЕЗУМНЫЙ УЧЕНЫЙ, БЫСТРО АДАПТИРУЕТСЯ В НОВОЙ СИТУАЦИИ, ОПРЕДЕЛЯЯ СИЛЬНЫЕ И СЛАБЫЕ СТОРОНЫ ВРАГА. СПОСОБЕН НА ЛЮБЫЕ ТРАНСФОРМАЦИИ СУЩЕСТВУЮЩИХ ОБЪЕКТОВ И СОЗДАНИЮ ВЫСОКОТЕХНОЛОГИЧНОГО ОРУЖИЯ ПРАКТИЧЕСКИ ИЗ ЛЮБЫХ МАТЕРИАЛОВ.',
        6000
    ),
    new Product(
        1,
        'Morty.jpg',
        'Morty',
        'ДОБРОДУШНЫЙ И ВПЕЧАТЛИТЕЛЬНЫЙ, ЮНЫЙ МАЛЬЧИК, ОЧЕНЬ РАНИМЫЙ И ЛЕГКО ПОДВЕРЖЕННЫЙ ЧУЖОМУ ВЛИЯНИЮ, КАК ВСЕ ПОДРОСТКИ В ЕГО ВОЗРАСТЕ. ПАРЕНЬ НЕ ОТЛИЧАЕТСЯ БОЛЬШИМ УМОМ.',
        5000
    ),
    new Product(
        2,
        'Summer.jpg',
        'Summer',
        'ипичная американская девочка-подросток. Хочет хорошо выглядеть и быть популярной в школе.',
        4000
    ),
    new Product(
        3,
        'Snuffles.jpg',
        'Snuffles',
        'император Снежок обладает превосходным обонянием и слухом, а также сверхчеловеческой выносливостью. Снафлс обладает роботическим костюмом — это массивный высокотехнологичный экзоскелет.',
        3000
    ),
    new Product(
        4,
        'Meeseeks.jpg',
        'Meeseeks',
        'милые инопланетные существа, желающие исполнить любое поручение человека.',
        2000
    ),
    new Product(
        5,
        'Shleemypants.jpg',
        'Shleemypants',
        'бессмертный инопланетянин, способный путешествовать во времени.',
        1000
    ),

]

function getProductMarkup(product) {
    return  `
            <div class="item" id="${product.id}">
                <div class="item__wrapper">
                    <img src="img/${product.image}" alt="${product.name}" class="item__img">
                    <div class="item__info">
                        <div class="item__info-name">Name: <br> 
                            <span class="name">${product.name}</span>
                        </div>
                        <div class="item__info-description">Description: <br>
                            <span class="description">
                                ${product.description}
                            </span>
                        </div>
                        <div class="item__info-price">Price:
                            <span class="price">${product.price}</span>$
                        </div>
                    </div>
                </div>
                <button class="item__added" data-productId="${product.id}">добавить</button>
            </div>\n
            `
}

function insertProductsIntoPage(products) {
    let itemsBox = document.querySelector('.main__wrapper-row');
    let totalString = '';
    for (product of products) {
        totalString = totalString + getProductMarkup(product);
    }
    itemsBox.innerHTML = totalString;
}

insertProductsIntoPage(products);