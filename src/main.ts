// Types
let d:any = 'hello' // Accept all types
let a:number = 12
let b:string = '4'
let c: number | boolean // Union defining

function test(a:number,b:number) {
    console.log(a/b)
}

// Array and Objects 

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

console.log(helloWriter(George))

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
    console.log(message)
}
console.log(multiply(5,3))







