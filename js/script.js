"use strict"
const numberFilms = prompt('How many films have you already watched?');
const personalMovieDB = {
    count: numberFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
}


console.log(personalMovieDB);
for (let i = 0; i < 2; i++) {
    let lastMovie = prompt('one of the last movies you watched?');
    let rate = prompt('how much would you rate this movie?');
    if (lastMovie !== '' && lastMovie !== null && lastMovie.length < 50 && rate !== '' && rate !== null && rate.length < 50) {
        personalMovieDB.movies[lastMovie] = rate;
        console.log('done');
    } else {
        i--;
        console.log('Error');
    }
}
if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
    console.log('Классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('вы киноман');
} else {
    console.log('Произошла ошибка');
}