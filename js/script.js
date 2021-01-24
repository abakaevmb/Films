// "use strict";

const numberOfFilms = +prompt("Склько фильмов вы уже посмотрели?", "");

let personalMovieDB = {
  count  : numberOfFilms,
  movies : {}, /**создали свойство и поместили в него пустой объект */
  actors : {}, /**создали свойство и поместили в него пустой объект */
  genres : [], /**создали свойство и поместили в него пустой массив */
  privat : false,
};
45
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);