let categoriaCardStore = [
    { img: '0', name: 'Luka 1', price: '240$', description: 'Баскетбольные кроссовки', raiting: '4.9', category: 'woman', BasketButtonText: 'Добавить в корзину', BasketButtonClass: '' },
    { img: '1', name: 'Phantom GX Pro', price: '180$', description: 'Футбольные бутсы для игры на твердом грунте', raiting: '4.2', category: 'boots', BasketButtonText: 'Добавить в корзину', BasketButtonClass: '' },
    { img: '2', name: 'Nike Air Max Plus', price: '240$', description: 'Мужские универсальные кросовки', raiting: '4.9', category: 'man', BasketButtonText: 'Добавить в корзину', BasketButtonClass: '' },
    { img: '3', name: 'LeBron XXI ‘Freshwater’', price: '210$', description: 'Баскетбольные кроссовки', raiting: '4.9', category: 'woman', BasketButtonText: 'Добавить в корзину', BasketButtonClass: '' },
    { img: '4', name: 'Phantom GX Pro', price: '160$', description: 'Низкие бутсы для искусственного покрытия', raiting: '4.0', category: 'boots', BasketButtonText: 'Добавить в корзину', BasketButtonClass: '' },
    { img: '5', name: 'Phantom GX Academy', price: '79$', description: 'Низкие бутсы для мягкого грунта', raiting: '4.9', category: 'boots', BasketButtonText: 'Добавить в корзину', BasketButtonClass: '' },
    { img: '6', name: 'Luka 2 ‘Trick Shot’', price: '230$', description: 'Баскетбольные кроссовки', raiting: '4.9', category: 'man', BasketButtonText: 'Добавить в корзину', BasketButtonClass: '' },
    { img: '7', name: 'Mercurial Superfly', price: '210$', description: 'Футбольные бутсы для игры на твердом грунте', raiting: '4.9', category: 'boots', BasketButtonText: 'Добавить в корзину', BasketButtonClass: '' },
    { img: '8', name: 'Zion 2', price: '410$', description: 'Баскетбольные кроссовки', raiting: '4.9', category: 'man', BasketButtonText: 'Добавить в корзину', BasketButtonClass: '' },
    { img: '9', name: 'Pegasus Trail 4', price: '290$', description: 'Водонепроницаемые  женские кроссовки для бега', raiting: '4.9', category: 'woman', BasketButtonText: 'Добавить в корзину', BasketButtonClass: '' },
    { img: '10', name: 'Alphafly 3 Proto', price: '210$', description: 'Женская обувь для шоссейных гонок', raiting: '4.9', category: 'woman', BasketButtonText: 'Добавить в корзину', BasketButtonClass: '' },
    { img: '11', name: 'Nike Air Max 270', price: '210$', description: 'Мужские универсальные кросовки', raiting: '4.9', category: 'man', BasketButtonText: 'Добавить в корзину', BasketButtonClass: '' },
];

let newModelsCardStore = [
    { img: '0', name: 'Jumpman', description: 'Мужские беговые кросовки', raiting: '4.9', BasketButtonText: 'В корзину', BasketButtonClass: 'new-models-card__button', color: '#B7A997' },
    { img: '1', name: 'AIR-MAX', description: 'Женские городские кросовки', raiting: '4.9', BasketButtonText: 'В корзину', BasketButtonClass: 'new-models-card__button', color: '#D6B895' },
    { img: '2', name: 'CityMax', description: 'Мужские городские кросовки', raiting: '3.6', BasketButtonText: 'В корзину', BasketButtonClass: 'new-models-card__button', color: '#7DB3B9' },
    { img: '3', name: 'K-Swiss', description: 'Мужские городские кросовки', raiting: '4.4', BasketButtonText: 'В корзину', BasketButtonClass: 'new-models-card__button', color: '#DD7916' },
]


document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav__links');
    const navButtons = document.querySelector('.nav__buttons');
    const navLogo = document.querySelector('.nav__logo');
    // Функция закрытия меню
    function closeMenu() {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
        navLogo.classList.remove('active');
        navButtons.classList.remove('active');
    }

    // Открытие/закрытие меню при клике на гамбургер
    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        navLogo.classList.toggle('active');
        navButtons.classList.toggle('active');
    });

    // Закрытие при клике на ссылки
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Закрытие при клике на кнопки
    navButtons.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', closeMenu);
    });

    navLogo.addEventListener('click', closeMenu);

});


//преключение между категориями 
const allCategotiaButtons = document.querySelectorAll(".categoria__buttons button");
for (let i = 0; i < 4; i++) {
    allCategotiaButtons[i].onclick = function () {
        document.querySelector(".categoria__buttons .active").classList.remove("active");
        allCategotiaButtons[i].classList.add("active");
        categoryCardRender(allCategotiaButtons[i].id);
    }
}

function categoryCardRender(category) {
    const categoryListDiv = document.querySelector(".sneakers-list");
    categoryListDiv.innerHTML = "";
    for (let i = 0; i < categoriaCardStore.length; i++) {
        if (categoriaCardStore[i].category == category || category == 'all') {
            const cardDiv = document.createElement("div");
            cardDiv.className = "sneakers-card";

            cardDiv.innerHTML = `
            <div class="sneakers-card__img">
                <img src="./img/category/${categoriaCardStore[i].img}.png" alt="">
            </div>
            <div class="sneakers-card__text">
                <div class="sneakers-card__info">
                    <div class="sneakers-card__name">
                        <h3>${categoriaCardStore[i].name}</h3>
                        <span>${categoriaCardStore[i].price}</span>
                    </div>
                    <p>
                    ${categoriaCardStore[i].description}
                    </p>
                    <div class="sneakers-card__rating">
                        <span>${categoriaCardStore[i].raiting}</span>
                        <hr>
                        <div class="stars"> 
                            <i class="fa-solid fa-star"></i>
                        </div>
                    </div>
                </div>
                <button class='${categoriaCardStore[i].BasketButtonClass}'>${categoriaCardStore[i].BasketButtonText}</button>
            </div>
            `;
            cardDiv.querySelector('button').addEventListener('click', function () {
                console.log(categoriaCardStore[i].name);
                cardDiv.querySelector('button').classList.toggle('active');
                if (cardDiv.querySelector('button').classList.contains('active')) {
                    categoriaCardStore[i].BasketButtonClass = 'active';
                    categoriaCardStore[i].BasketButtonText = 'Удалить из корзины';
                    cardDiv.querySelector('button').innerText = categoriaCardStore[i].BasketButtonText;
                } else {
                    categoriaCardStore[i].BasketButtonClass = '';
                    categoriaCardStore[i].BasketButtonText = 'Добавить в корзину';
                    cardDiv.querySelector('button').innerText = categoriaCardStore[i].BasketButtonText;
                }
            })
            categoryListDiv.appendChild(cardDiv)
        }

    }
}
categoryCardRender('all')

function newModelsCardRender() {
    const newModelsCardList = document.querySelector(".new-models__list");
    newModelsCardList.innerHTML = "";
    for (let i = 0; i < newModelsCardStore.length; i++) {
        const cardDiv = document.createElement("div");
        cardDiv.className = "new-models-card";
        cardDiv.innerHTML = `
        <div class="new-models-card__bg" style="background-color: ${newModelsCardStore[i].color}">
            <img src="./img/newModel/${newModelsCardStore[i].img}.png" alt="">
            <div class="new-models-card__info">
                <h3>${newModelsCardStore[i].name}</h3>
                <p>${newModelsCardStore[i].description}</p>
                <div class="new-models-card__raiting">
                    <span>${newModelsCardStore[i].raiting}</span>
                    <hr>
                    <i class="fa-solid fa-star"></i>
                </div>
            </div>
            <button class="${newModelsCardStore[i].BasketButtonClass}" style="color: ${newModelsCardStore[i].color}">${newModelsCardStore[i].BasketButtonText}</button>
        </div>
        `;
        cardDiv.querySelector('button').addEventListener('click', function () {
            console.log(newModelsCardStore[i].name);
            cardDiv.querySelector('button').classList.toggle('active');
            newModelsCardStore[i].BasketButtonClass = cardDiv.querySelector('button').className;
            if (cardDiv.querySelector('button').classList.contains('active')) {
                newModelsCardStore[i].BasketButtonText = 'Добавлено';
                cardDiv.querySelector('button').innerText = newModelsCardStore[i].BasketButtonText; 
            } else {
                newModelsCardStore[i].BasketButtonText = 'В корзину';
                cardDiv.querySelector('button').innerText = newModelsCardStore[i].BasketButtonText; 
            }
        })
        newModelsCardList.appendChild(cardDiv);
    }
}
newModelsCardRender();