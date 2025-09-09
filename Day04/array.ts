/**
 * Array: Tipe data yang berisi sekumpulan data.
 *        Data yang disimpan umumnya memiliki tipe yang sama.
 *        Tipe data pada array memiliki alamat index, yang dimulai dari index ke-0.
 * Tujuan: untuk mempermudah pengelolaan data.
 * Aturan penulisan: keywordVariable nameVariable = [data1, data2, ...]
 * - Example: let numbs:number[] = [1,2,3,4];
 * - Example: let abjad:string[] = ["a", "b", "c"];
 * - Example: let student:(string | number)[] = ["Abdi", 20]; // union types
 * - Example: let product:[string, number, number, boolean] = ["TV", 12, 1400000, true]; // tuples type array
 */

// Case without array: mencatat kumpulan nama produk
let baju: string = "Baju";
let topi: string = "Topi";

// With array:
let productName: string[] = ["Baju", "Topi", "Handphone"];
console.log(productName);

// Spesific access
console.log(productName[1]);

// Define array with Array constructor
let productPrice: number[] = new Array(35000, 25000, 15000000);
console.log(productPrice);
console.log(productPrice[1]);

// Mengganti salah satu data array menggunakan konsep re-assign
productPrice[1] = 10000;
console.log(productPrice);

// With loop
for (let index: number = 0; index < 3; index++) {
    console.log(productName[index]);
}

// Exercise
let printList: string = "";

for (let index: number = 0; index < productName.length; index++) {
    printList += `${index + 1}. ${productName[index]} \n`;
}

console.log(printList);

// Array function
// array.push(newData): menambahkan data baru di akhir array
productName.push("Celana");
console.log(productName);

// array.pop(): menghapus data array terakhir
productName.pop();
console.log(productName);

// array.unshift(newData): menambahkan data baru di awal array
productName.unshift("Sandal");
console.log(productName);

// array.shift(): menghapus data array pertama
productName.shift();
console.log(productName);

// array.splice(pilihanIndex, jumlahYangDihapus): untuk menghapus data pada index tertentu
productName.splice(1, 1);
console.log(productName);

// array.indexOf(data): mencari alamat index suatu data khususnya primitive data type
console.log(productName.indexOf("Handphone"));

// array.reverse(): membalikkan urutan data
console.log(productName.reverse());

// array.sort(): mengurutkan data string secara ASC
productName.sort();
console.log(productName);

const abjad: string[] = ["A", "B", "a", "b"];
abjad.sort();
console.log(abjad);

let product: [string, number, number, string, boolean, boolean] = ["abc", 1, 2, "ABC", true, false];
console.log(product);
product.sort();
console.log(product);

// for...of: access value in array without index
for (const value of productName) {
    console.log(value);
}

// Penggabungan array
const studentsA: string[] = ["Andre", "Edo"];
const studentsB: string[] = ["Zafran", "Beni"];
// Cara 1: menggunakan array function concat
const students: string[] = studentsA.concat(studentsB, "Ruben");
console.log(students);

// Cara 2: spread operator
const studentList: string[] = [...studentsA, ...studentsB];
console.log(studentList);

// Data destructure: cara untuk mengeluarkan nilai suatu array untuk menjadi variable yang berdiri sendiri
const productList: [string, number, number] = ["TV", 10, 2000000];
let [namaProduk, stok, harga] = productList;
console.log(namaProduk);
console.log(stok);
console.log(harga);

// Array 2 dimensi: di dalam array ada array
const products: [string, number, number][] = [
    ["Laptop", 12, 10500000],
    ["Printer", 15, 2000000],
    ["Keyboard", 4, 120000],
];

// Cara akses: array[indexArrayLuar][indexArrayDalam]
console.log(products[1][0])

// Exercise
let productPrintList: string = "";
for (let index: number = 0; index < products.length; index++) {
    productPrintList += `${index + 1}. ${products[index][0]} tersedia ${products[index][1]}pcs, Rp ${products[index][2]}\n`
};

console.log(productPrintList);

let productPrintListB: string = "";
for (let index: number = 0; index < products.length; index++) {
    const [name, stok, harga] = products[index];
    productPrintListB += `${index + 1}. ${name} tersedia ${stok}pcs, Rp ${harga.toLocaleString("id-ID")}\n`
};

console.log(productPrintListB);

