// variable declaration
var message;

// variable initialization
var nama = "Arif";
console.log(nama);

// redeclare variable
var city = "Jakarta"
var city = "Bandung"
console.log(city)

// reassign
city = "Tangerang"
console.log(city)

// let: non-redeclare, reassign
let age = 30
console.log(age)

age = 20
console.log(age)

// keyword const: non-redeclare, non-reassign

const PI = 3.14
console.log(PI)

// Data Type Primitive
let region = "East Java"; //string
let weight = 100 //number (integer)
let distance = 10.5 //number (float)
const noData = null;
const undefinedData = undefined
const isActive = true //boolean

// Data Type Non-primitive
const products = ["Apel", "Jeruk"] //array
const job = {
    position: "coder",
    salary: 123456,
} // object

// memeriksa data type
console.log(typeof job)