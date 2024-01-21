// Types
let d:any = 'hello' // Accept all types
let a:number = 12
let b:string = '4'
let c: number | boolean // Union defining

function test(a:number,b:number) {
    // console.log(a/b)
}

// Array 

const arrString = ['test1','test2', 'test3'] // Only string

const arrUnion = [12345, 'test4'] // String or number (union)

const arrMixed = [12345, 'test', true] // Mixed array

// arrString[1] = 45  // Not acceptable

arrMixed[1] = 45

// Tuple

const arrTuple: [number,string,boolean] = [12345, "test", true] // Order is important

// arrTuple[0] = 'test' // Not acceptable, 0-nth element accepts only string type


// Objects

let Jimmy: {name:string,book:number,dead:boolean} = {
    name: "Jimmy",
    book: 1984,
    dead: true
}


// Type aliases

type stringORnumber = string | number
type stringORnumberArray = (string | number)[]

// type or interface
type  Writer = { 
    name: string,
    book?: number, // "?" making optional that property
    dead: boolean
}

let George: Writer = {
    name: "George",
    book: 1984,
    dead: true
}

function helloWriter (writer:Writer) {
    return writer.name
}

// console.log(helloWriter(George))

// Literal types

let constant: "Only me accepted"
// constant = 'new value' // "constant" accepts only "only me accapted" string
let constantUnion: "Banana" | "Apple" | "Kiwi"
// let constantUnion: "Cucumber" // "constantUnion" accepts only one of three values

// Functions

function multiply (a:number,b:number):number {
    return a * b
}

// use void when no need to return something
function voidReturn (message:any):void {
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

function addAll(a:number = 5,b:number,c:number):number {
    return a + b + c
}

// console.log(addAll(1,2,3))
// When set default value to parameter, that parameter must be skipped with "undefined" in function call
// console.log(addAll(undefined,2,3))

// Rest parameters

const sum = (...nums: number[]):number => {
    return nums.reduce((prev,curr) => curr + prev)
}

// console.log(sum(1,2,3,4))

// Type assertion or casting

type One = string
type Two = number | string
type Three = "add"


let r: One = 'Hello'
let m = r as Two
let p = m as Three


let t = <One>'test'
let y = <string>'test323' 

const year = document.getElementById('year') as HTMLSpanElement
const thisYear:string = new Date().getFullYear().toString()
year.setAttribute('datetime', thisYear)
year.textContent = thisYear

