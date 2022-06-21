/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

let numberOfFilms

function start() {
  numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "")

  while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
    numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "")
  }
}

start()


function detectPersonalLevel() {
  switch (true) {
    case (numberOfFilms >= 0) && (numberOfFilms <= 10):             //берем numberOfFilms и проверяем его на кейс - (numberOfFilms >= 0) && (numberOfFilms <= 10), если true, выводим соотв. алерт.
      alert("Просмотрено довольно мало фильмов")
      break;
    case (numberOfFilms > 10) && (numberOfFilms <= 30):
      alert("Вы классический зритель")
      break;
    case (numberOfFilms > 30):
      alert("Вы киноман")
      break;
  
    default:
      alert("Произошла ошибка")
      break;
  }
}
detectPersonalLevel()


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}


function rememberMyFilms(){
  let i = 0
  do {
    const filmName = prompt("Один из последних просмотренных фильмов?",""),
          filmRate = prompt("На сколько оцените его?", "");

    ( filmName != '' && filmName != null && filmName.length < 50 && filmRate != '' && filmRate != null && filmRate.length < 50)? personalMovieDB.movies[filmName] = filmRate : i--;

    i++;
  } while (i < 2);
}

rememberMyFilms()

function writeYourGenres(){

  let i=0
  while(i<3){
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`)
    i++
  }
}

writeYourGenres()

function showMyDB(result){
  if(!result){
    console.log(personalMovieDB)
  }
}
showMyDB(personalMovieDB.privat)
