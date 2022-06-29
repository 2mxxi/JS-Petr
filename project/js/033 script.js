/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Kига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
    ],
  };

  const adv = document.getElementsByClassName("promo__adv");
  const genre = document.getElementsByClassName("promo__genre");
  const promo_bg = document.getElementsByClassName("promo__bg");
  const listOfFilms = document.querySelector(".promo__interactive-list");
  // console.log(listOfFilms)

  // Решение 033

  const btn = document.getElementsByTagName("button");
  const input = document.querySelector(".adding__input");
  let del = document.getElementsByClassName("delete");
  console.log(del);
  const check = document.getElementsByTagName("input");

  input.addEventListener("input", (event) => {
    //Больше 21 символа в момент ввода, заменяется ...
    event.preventDefault();
    if (input.value.length > 21) {
      input.value = input.value.slice(0, 20) + `...`;
    }
  });

  btn[0].addEventListener("click", (event) => {
    event.preventDefault();
    // if(input.value.length > 21){                                  //Вариант с вводом текста полностью, но записывать будет с ...
    //   input.value = input.value.slice(0, 20) + `...`
    // }
    movieDB.movies.push(input.value);
    console.log(movieDB);

    movieDB.movies.sort();

    listOfFilms.innerHTML = "";

    movieDB.movies.forEach((el, i) => {
      listOfFilms.innerHTML += `
    <li class="promo__interactive-item">№${i + 1} ${el}
        <div class="delete"></div>
    </li>`;
    });
  });

  // [].forEach.call(del, function(el){
  //   el.addEventListener('click', (e) => {
  //    e.preventDefault();
  //    delete movieDB.movies[del.indexOf(el)];
  //    console.log(movieDB.movies)

  //   })
  // });

  [...del].forEach(function (el) {
    el.addEventListener("click", function () {
      movieDB.movies[2].remove();
      console.log(movieDB.movies);
    });
  });

  let value = 0;

  if (value == 0) {
    console.log("Добавьте фильм в любимый");
  }
  check[2].addEventListener("click", () => {
    if ("click" && value == 0) {
      console.log("Добавляем любимый фильм");
      value = 1;
      console.log(value);
    }
  });

  adv[0].remove();

  genre[0].textContent = "ДРАМА";

  promo_bg[0].style.cssText = "background-image: url(img/bg.jpg)";

  movieDB.movies.sort();

  listOfFilms.innerHTML = "";

  movieDB.movies.forEach((el, i) => {
    listOfFilms.innerHTML += `
    <li class="promo__interactive-item">№${i + 1} ${el}
        <div class="delete"></div>
    </li>`;
  });
});
