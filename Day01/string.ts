// String: data yang terdiri dari karakter huruf, symbol, atau angka
let namaToko: string = "SPORT STATION"
// namaToko = 20 -> tidak bisa karena hanya boleh string
let alamat: string = "Jalan Pemuda"

// menggabungkan data
// cara 1: menggunakan operator +
let printToko: string = namaToko + " " + alamat
console.log(printToko)

// cara 2: menggunakan template literal
printToko = `${namaToko} ${alamat}`
console.log(printToko)

let greeting: string = "Hallo Gengs"
console.log(greeting.length)
console.log(greeting.toLowerCase())
console.log(greeting.toUpperCase())

console.log(greeting.includes("llo"))
console.log(greeting.includes("qwerty"))

console.log(greeting.split(" "))
console.log(greeting.replace("Hallo", "Halo"))
