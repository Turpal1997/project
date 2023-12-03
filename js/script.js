"use strict";
function getCoupeNumber(number) {
    let Figer;
    if (number > 0 && number < 36 && Number.isInteger(number)) {
        for (let i = 1; i < 36; i++) {
            if (number > 0 && number <= 4) {
                Figer = 1;
            } else if (number > 4 && number <= 8) {
                Figer = 2;
            } else if (number > 8 && number <= 12) {
                Figer = 3;
            } else if (number > 12 && number <= 16) {
                Figer = 4;
            } else if (number > 16 && number <= 20) {
                Figer = 5;
            } else if (number > 20 && number <= 24) {
                Figer = 6;
            } else if (number > 24 && number <= 28) {
                Figer = 7;
            } else if (number > 28 && number <= 32) {
                Figer = 8;
            } else if (number > 32 && number <= 36) {
                Figer = 9;
            }
            return Figer;
        }
    } else if (typeof (number) !== 'number' || number < 0 || !Number.isInteger(number)) {
        console.log("Ошибка. Проверьте правильность введенного номера места");
    } else {
        console.log("Таких мест в вагоне не существует");
    }
}
let answer = getCoupeNumber('sa');
console.log(answer);
let top1 = 'sdsad'
console.log(top1.indexOf('s'));
let data1 = 'I was born in 1997.'
console.log(data1.slice(0, 10));
parseInt();
Math.round();

function call(arg, callback) {
    console.log(`I learn ${arg}`);
    callback();
}
function done() {
    console.log('I passet this course');
}
call('JAVASCRIPT', done);

const obj = {
    name: 'Turpal',
    colors: {
        border: 'red',
        bg: 'black'
    },
    type: 'Cool',
    height: 1500
}
console.log(Object.keys(obj).length);
const { border, bg } = obj.colors;
console.log(bg);
for (let key in obj) {
    if (typeof (obj[key]) === 'object') {
        for (let i in obj[key]) {
            console.log(` Свойство ${i} means ${obj[key][i]}`);
        }
    } else {
        console.log(` Свойство ${key} means ${obj[key]}`);
    }
}
const arr = [1, 2, 3, 4, 5, 6];
arr.push(11);
console.log(arr);
arr.forEach(function (item, i, arr) {
    console.log(`${i} - ${item} : ${arr}`);
})
const str = prompt("", "");
const prod = str.split("- ");
console.log(prod.join(' - '));