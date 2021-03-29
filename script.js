'use strict';

const numberOfFirlms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFirlms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотреных фильмов', ''),
b = prompt('На сколько его оцените?', ''),
c = prompt('Один из последних просмотреных фильмов', ''),
d = prompt('На сколько его оцените?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
