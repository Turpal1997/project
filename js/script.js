"use strict"
let num = 90;
while (num <= 150) {
    console.log(num);
    num++;
}
for (let i = 1; i <= 8; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}
let result = '';
for (let i = 1; i <= 8; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';
}
console.log(result);
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
    console.log(i);
}
for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}
let num1 = 2;
while (num1 < 16) {
    num1++;
    if (num1 % 2 === 0) {
        continue;
    } else {
        console.log(num1);
    }
}
let arrayOfNumbers = [];
for (let i = 5; i <= 10; i++) {
    arrayOfNumbers[i - 5] = i;
}
console.log(arrayOfNumbers);
const arr = [3, 5, 8, 16, 20, 23, 50];
const result1 = [];
for (let i = 0; i <= arr.length - 1; i++) {
    result1[i] = arr[i];
}
console.log(result1);
const data = [5, 10, 'Shopping', 20, 'Homework'];
const result12 = [];
let rat = [];
for (let i = data.length - 1; i >= 0; i--) {
    result12.push(data[i]);
    console.log(result12);
}
