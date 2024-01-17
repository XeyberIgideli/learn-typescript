"use strict";
// Types
let d = 'hello'; // Accept all types
let a = 12;
let b = '4';
let c; // Union defining
function test(a, b) {
    console.log(a / b);
}
// Array and Objects 
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
console.log(helloWriter(George));
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
    console.log(message);
}
console.log(multiply(5, 3));
