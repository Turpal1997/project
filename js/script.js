"use strict";

function decidethis() {
    let num = 89;
    return num;
}
const Num = decidethis();
console.log(typeof (Num));
const Eurcurr = 80;
function exchange(amount, curr) {
    let Answer = amount * curr;
    return Answer;
}
let Numone = exchange(600, Eurcurr);
console.log(Numone);
function getMathResult(data, number) {
    let part = '';
    if (typeof (number) !== 'number' || number <= 0) {
        return data;
    } else {
        for (let i = 1; i <= number; i++) {
            if (i === number) {
                part += `${data * [i]}`
            } else {
                part += `${data * [i]}---`
            }
        }
        return part
    }
}
let top1 = 'sdsad'
let pol = getMathResult(5, 3);
console.log(pol);
console.log(top1.indexOf('s'));
let data1 = 'I was born in 1997.'
console.log(data1.slice(0, 10));
parseInt();
Math.round();