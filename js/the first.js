"use strict";
let numberFilms;
function start() {
    numberFilms = prompt('How many films have you already watched?').trim();
    while (numberFilms === '' || numberFilms === null || isNaN(numberFilms)) {
        numberFilms = prompt('How many films have you already watched?').trim();
    }
}
start();
const personalMovieDB = {
    count: numberFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}
function writeYourGenres() {
    let FaivoriteGen;
    for (let i = 1; i <= 3; i++) {
        if (FaivoriteGen !== null || FaivoriteGen !== '') {
            FaivoriteGen = prompt(`Your faivorite genres under the number ${[i]}`, '').trim();
            personalMovieDB.genres[i - 1] = FaivoriteGen;
        } else {
            FaivoriteGen = prompt(`Your faivorite genres under the number ${[i]}`);
        }
    }
}
writeYourGenres();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastMovie = prompt('one of the last movies you watched?').trim();
        let rate = prompt('how much would you rate this movie?').trim();
        if (lastMovie !== '' && lastMovie != null && lastMovie.length < 50 && rate !== '' && rate !== null && rate.length < 50) {
            personalMovieDB.movies[lastMovie] = rate;
            console.log('done');
        } else {
            i--;
            console.log('Error');
        }
    }
}
rememberMyFilms();

function comparening() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        console.log('Классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}
comparening();

function showMyBD() {
    if (personalMovieDB.private === false) {
        console.log(personalMovieDB);
    } else {
        console.log('error');
    }
}
showMyBD();
