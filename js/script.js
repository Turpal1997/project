let numberOFfilms = prompt("Сколько фильмов вы посмотрели.");
let qiestionOne = prompt("Один из последних просмотренных фильмов");
let qiestionTwo = prompt("Насколько оцените его");
let qiestionThree = prompt("Один из последних просмотренных фильмов");
let qiestionFour = prompt("Насколько оцените его");
const personalMovieDB = {
    count: numberOFfilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}
personalMovieDB.movies[qiestionOne] = qiestionTwo;
personalMovieDB.movies[qiestionThree] = qiestionFour;
console.log(personalMovieDB);