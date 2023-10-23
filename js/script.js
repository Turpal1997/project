/*let numberofFilms;
function film(params) {
    numberofFilms = +prompt('How many films did you watch?');
    while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
        numberofFilms = +prompt('How many films did you watch?');
    }
}
film();
const personalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
function remember(params) {
    for(let i = 0; i < 2; i++) {
        const ad = prompt('one of the last movies you watched?', '').trim();
        const bd = prompt('how much would you rate this movie?', '').trim();
        if(ad != null && bd != null && ad != '' && bd != '' &&  ad.length < 50 ) {
            personalMovieDB.movies[ad] = bd;
            console.log('done');
        }else {
            console.log('error');
            i--;
        }
    
    }
}
remember();
function check(params) {
    if (personalMovieDB.count  < 10) {
        alert('it watched a little films ');
    }else  if ( personalMovieDB.count > 30 ) {
        alert('Great');
    }else  if ( personalMovieDB.count > 50 ) {
        alert('Super');
    }else {
        alert('Excellent');
    }
}
check();
function showmyDB(params) {
    if (personalMovieDB.private === false) {
        console.log(personalMovieDB);
    }
}
showmyDB();;
function writeYourGenres(params) {
    for(let i = 1; i <= 3; i++) {
        let favoriteGenres = prompt(`Ваш любимый жанр N${i}?`);
        if (favoriteGenres != '' && isNaN(favoriteGenres) &&  favoriteGenres != null) {
            personalMovieDB.genres[i - 1] = favoriteGenres;
        }else {
            i--;
        }
   }
}
writeYourGenres();


console.log(personalMovieDB);*/
function calculateVolumeAndArea(number) {
    let c;
    if(typeof(number) != typeof(String()) && number > 0 && Number.isInteger(number)) {
        let a = Math.pow(number, 3);
        let B = (number*number) * 6;
         c = `Объем куба: ${a} площадь всей поверхности: ${B}`;
    }else {
       c = 'При вычислении произошла ошибка';

    }
    return c;
}
let code = calculateVolumeAndArea(15);
console.log(code);
function getCoupeNumber(figer) {
    let a;
    let b = '';
    if (typeof(figer) == typeof(String()) || figer < 0 || !Number.isInteger(figer)) {
        a = 'Ошибка. Проверьте правильность введенного номера места';
        }else if(figer > 0 && figer < 5) {
           a = 1;
       }else if (figer > 4 && figer <= 8) {
           a = 2;
       }else if(figer > 8 && figer <= 12) {
          a = 3;
       }else if(figer > 12 && figer <= 16) {
          a = 4;
       }else if(figer >= 17 && figer <= 20) {
          a = 5;
       }else if(figer >= 21 && figer <= 24) {
          a = 6;
       }else if(figer >= 25 && figer <= 28) {
          a = 7;
       }else if(figer >= 29 && figer <= 32) {
          a = 8;
       }else if(figer >= 33 && figer <= 36) {
          a = 9;
       }else if(figer === 0 || figer > 36) {
          a = 'Таких мест в вагоне не существует';
       }
        return a;

}
let edf = getCoupeNumber(1.5);
console.log(edf);

