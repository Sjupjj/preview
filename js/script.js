"use strict";

let numberOfFilms = +prompt('Сколько фильмов просмотрели? ', '');

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

let movie = prompt('Один из последних просмотренных фильмов? ', '');
let raiting = +prompt('На сколько вы его оцениете? ', '');

personalMovieDB.movies[movie] = raiting;

console.log(personalMovieDB);