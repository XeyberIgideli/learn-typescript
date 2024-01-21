"use strict";
// Types
let d = 'hello'; // Accept all types
let a = 12;
let b = '4';
let c; // Union defining
function test(a, b) {
    // console.log(a/b)
}
// Array 
const arrString = ['test1', 'test2', 'test3']; // Only string
const arrUnion = [12345, 'test4']; // String or number (union)
const arrMixed = [12345, 'test', true]; // Mixed array
// arrString[1] = 45  // Not acceptable
arrMixed[1] = 45;
// Tuple
const arrTuple = [12345, "test", true]; // Order is important
// arrTuple[0] = 'test' // Not acceptable, 0-nth element accepts only string type
// Objects
let Jimmy = {
    name: "Jimmy",
    book: 1984,
    dead: true
};
let George = {
    name: "George",
    book: 1984,
    dead: true
};
function helloWriter(writer) {
    return writer.name;
}
// console.log(helloWriter(George))
// Literal types
let constant;
// constant = 'new value' // "constant" accepts only "only me accapted" string
let constantUnion;
// let constantUnion: "Cucumber" // "constantUnion" accepts only one of three values
// Functions
function multiply(a, b) {
    return a * b;
}
// use void when no need to return something
function voidReturn(message) {
    // console.log(message)
}
// console.log(multiply(5,3))
// Making parameter optional with "?"
// Optional parameter must be in the end of parameter list in function
// function addAll(a:number,b:number,c?:number):number {
//     if(typeof c !== 'undefined') {
//         return a + b + c
//     } 
//     return a + b
// }
function addAll(a = 5, b, c) {
    return a + b + c;
}
// console.log(addAll(1,2,3))
// When set default value to parameter, that parameter must be skipped with "undefined" in function call
// console.log(addAll(undefined,2,3))
// Rest parameters
const sum = (...nums) => {
    return nums.reduce((prev, curr) => curr + prev);
};
let r = 'Hello';
let m = r;
let p = m;
let t = 'test';
let y = 'test323';
const year = document.getElementById('year');
const thisYear = new Date().getFullYear().toString();
year.setAttribute('datetime', thisYear);
year.textContent = thisYear;
