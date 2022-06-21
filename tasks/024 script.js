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

// function start() {
//   numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "")

//   while (numberOfFilms === '' || numberOfFilms === null || isNaN(numberOfFilms)) {
//     numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "")
//   }
// }




// function detectPersonalLevel() {
//   switch (true) {
//     case (numberOfFilms >= 0) && (numberOfFilms <= 10):
//       alert("Просмотрено довольно мало фильмов")
//       break;
//     case (numberOfFilms > 10) && (numberOfFilms <= 30):
//       alert("Вы классический зритель")
//       break;
//     case (numberOfFilms > 30):
//       alert("Вы киноман")
//       break;
  
//     default:
//       alert("Произошла ошибка")
//       break;
//   }
// }



const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function() {
      this.count = prompt("Сколько фильмов вы уже посмотрели?", "")
    
      while (this.count === '' || this.count === null || isNaN(this.count)) {
        this.count = prompt("Сколько фильмов вы уже посмотрели?", "")
      }
    },
    detectPersonalLevel: function() {
      switch (true) {
        case (this.count >= 0) && (this.count <= 10):
          alert("Просмотрено довольно мало фильмов")
          break;
        case (this.count > 10) && (this.count <= 30):
          alert("Вы классический зритель")
          break;
        case (this.count > 30):
          alert("Вы киноман")
          break;
      
        default:
          alert("Произошла ошибка")
          break;
      }
    },
    rememberMyFilms:function rememberMyFilms() {
      let i = 0
      do {
        const filmName = prompt("Один из последних просмотренных фильмов?",""),
              filmRate = prompt("На сколько оцените его?", "");
    
        ( filmName != '' && filmName != null && filmName.length < 50 && filmRate != '' && filmRate != null && filmRate.length < 50)? this.movies[filmName] = filmRate : i--;
    
        i++;
      } while (i < 2);
    },
    writeYourGenres: function() {

      let i=0
      while(i<3){
        this.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`)
        
        this.genres[i] === null || this.genres[i] === '' ? this.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`) : i++
      }
    },
    showMyDB: function(result){
      if(!result){
        console.log(this)
      }
    },
    toggleVisibleMyDB: function(){
      this.privat === false?  this.privat = true : this.privat = false
    },
    showMyGanres: function(){
      this.genres.forEach(el => {
        console.log(`Любимый жанр # ${ this.genres.indexOf(el)+1} - это ${this.genres[this.genres.indexOf(el)]}`)
      });
    }
}

personalMovieDB.start()
personalMovieDB.detectPersonalLevel()
personalMovieDB.rememberMyFilms()
personalMovieDB.writeYourGenres()
personalMovieDB.toggleVisibleMyDB()
personalMovieDB.showMyDB(personalMovieDB.privat)
personalMovieDB.showMyGanres()



// function rememberMyFilms(){
//   let i = 0
//   do {
//     const filmName = prompt("Один из последних просмотренных фильмов?",""),
//           filmRate = prompt("На сколько оцените его?", "");

//     ( filmName != '' && filmName != null && filmName.length < 50 && filmRate != '' && filmRate != null && filmRate.length < 50)? personalMovieDB.movies[filmName] = filmRate : i--;

//     i++;
//   } while (i < 2);
// }



// function writeYourGenres(){

//   let i=0
//   while(i<3){
//     personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`)
//     i++
//   }
// }



// function showMyDB(result){
//   if(!result){
//     console.log(personalMovieDB)
//   }
// }

