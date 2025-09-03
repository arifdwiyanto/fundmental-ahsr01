let jarak: number = 1000 // integer
let berat: number = 90.5 // float

// Arithmetic
let angkaA: number = 5
let angkaB: number = 6
const result: number = angkaA+angkaB
console.log(result)

// Increment or Decrement
let count: number = 0
count++ // Postfix --> count = count + 1
console.log(count++) // hasil sebelum increment

++count // Prefix --> count
console.log(++count) // hasil setelah increment

count--
console.log(count)

// Math object
const Pi: number = Math.PI
console.log(Pi)

let angkaC: number = 25.9
console.log(Math.round(angkaC))
console.log(Math.ceil(angkaC))
console.log(Math.floor(angkaC))

// Min Max
console.log(Math.min(1, 2, 3))
console.log(Math.max(1, 2, 3))

// Random value
console.log(Math.random())

// Parsing data
let angkaD: string = "1.2345"
console.log(angkaD)
console.log(parseInt(angkaD))
console.log(parseFloat(angkaD))

let price: number = 4500
console.log(price.toString())
console.log(price.toLocaleString("id-ID"))

console.log(
    price.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2
    })
)