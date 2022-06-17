/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

'use strict';

// Код возьмите из предыдущего домашнего задания


let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "")

while ((numberOfFilms === '') || (numberOfFilms === null) || (numberOfFilms.length > 50)) {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "")
}

// if((numberOfFilms >= 0) && (numberOfFilms <= 10)){
//   alert("Просмотрено довольно мало фильмов")
// } else 
// if ((numberOfFilms > 10) && (numberOfFilms <= 30)) {
//   alert("Вы классический зритель")
// } else 
// if(numberOfFilms > 30) {
//   alert("Вы киноман")
// } else {
//   alert("Произошла ошибка")
// }

switch (true) {
  case (numberOfFilms >= 0) && (numberOfFilms <= 10):             //берем numberOfFilms и проверяем его на кейс - (numberOfFilms >= 0) && (numberOfFilms <= 10), если true, выводим соотв. алерт.
    alert("Просмотрено довольно мало фильмов")
    break;
  case (numberOfFilms > 10) && (numberOfFilms <= 30):
    alert("Вы классический зритель")
    break;
  case (numberOfFilms > 30):
    alert("Вы классический зритель")
    break;

  default:
    alert("Произошла ошибка")
    break;
}


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}


// let Film1 = personalMovieDB.movies[`${prompt("Один из последних просмотренных фильмов?","")}`] = prompt("На сколько оцените его?", "")

// while ((Film1 === '') || (Film1 === null) || (Film1.length > 50)) {
//   Film1 = personalMovieDB.movies[`${prompt("Один из последних просмотренных фильмов?","")}`] = prompt("На сколько оцените его?", "")
// }


// let Film2 = personalMovieDB.movies[`${prompt("Один из последних просмотренных фильмов?","")}`] = prompt("На сколько оцените его?", "")

// while ((Film2 === '') || (Film2 === null) || (Film2.length > 50)) {
//   Film2 = personalMovieDB.movies[`${prompt("Один из последних просмотренных фильмов?","")}`] = prompt("На сколько оцените его?", "")
// }

// // const Film1 = personalMovieDB.movies[`Терминатор`] = 8
// // const Film2 = personalMovieDB.movies[`Матрица`] = 9


for(let i = 0; i < 2; i++){                                          // Производим 2 итерации. Условие (начать с 0, пока i менше 2; i++) - 2 раза выполнить блок кода {}

  let Film = personalMovieDB.movies[`${prompt("Один из последних просмотренных фильмов?","")}`] = prompt("На сколько оцените его?", "")

  while ((Film === '') || (Film === null) || (Film.length > 50)) {
    Film = personalMovieDB.movies[`${prompt("Один из последних просмотренных фильмов?","")}`] = prompt("На сколько оцените его?", "")
  }

}


console.log(personalMovieDB)