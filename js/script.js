
const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function () {
        personalMovieDB.count = +prompt('How many films did you watch?');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
        personalMovieDB.count = +prompt('How many films did you watch?');
        }
    },
    remember: function (params) {
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
    },
    check: function () {
        if (personalMovieDB.count  < 10) {
            alert('it watched a little films ');
        }else  if ( personalMovieDB.count > 30 ) {
            alert('Great');
        }else  if ( personalMovieDB.count > 50 ) {
            alert('Super');
        }else {
            alert('Excellent');
        }
    },
    showmydb: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toogle: function () {
        if(personalMovieDB.private) {
            personalMovieDB.private = false;
        }else {
            personalMovieDB.private = true;
        }
    },
    writeYourGenres: function (params) {
        for(let i = 1; i <= 3; i++) {
            let favoriteGenres = prompt(`Ваш любимый жанр N${i}?`);
            if (favoriteGenres != '' && isNaN(favoriteGenres) &&  favoriteGenres != null) {
                console.log('Error!');
                personalMovieDB.genres[i - 1] = favoriteGenres;
            }else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i - 1} - это ${item}`);
        })
    }
    
    
};


