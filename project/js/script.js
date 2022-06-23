/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Kига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1)

const adv = document.getElementsByClassName('promo__adv')
const genre = document.getElementsByClassName('promo__genre')
const promo_bg = document.getElementsByClassName('promo__bg')
const listOfFilms = document.querySelector('.promo__interactive-list')
console.log(listOfFilms)

// 1)
adv[0].remove();
// 2)
genre[0].textContent = 'ДРАМА'
// 3)
promo_bg[0].style.cssText = 'background-image: url(img/bg.jpg)'
// 4)
movieDB.movies.sort()


listOfFilms.innerHTML = "";

movieDB.movies.forEach( (el, i) => {
    listOfFilms.innerHTML += `
    <li class="promo__interactive-item">№${i+1} ${el}
        <div class="delete"></div>
    </li>`
});