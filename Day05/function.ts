/**
 * Function: sekumpulan program yang dibungkus menjadi satu untuk mengerjakan proses tertentu.
 *           selain itu, function juga ditujukan untuk mempermudah penggunaan kode berulang.
 *           untuk menggunakan suatu function, pastikan function sudah dibuat.
 * Kategori function: Built-in function dan user-defined function.
 * Aturan penulisan user-defined function:
 *      - Nama function mengikuti aturan nama variable.
 *      - Function bisa menerima nilai dinamis dari luar function melalui parameter/argument untuk diolah di dalam functionnya.
 *      - Jenis penulisan function ada 3, yaitu: Declarative Function, Function Expression, dan Arrow Function.
 *      - Function biasanya menghasilkan nilai output yang dikeluarkan melalui "return"
 */

// Without function
// Case: membuat kode penjumlahan
// INPUT: dua variable yang menampung data untuk dijumlahkan
let angkaA: number = 10;
let angkaB: number = 12;
// PROCESS: menentukan rumus penjumlahan
const hasil: number = angkaA + angkaB;
// OUTPUT: menghasilkan nilai dari process penjumlahan, yang kemudian ditampilkan pada log 
console.log(hasil);

// Convert to function
/**
 * Declarative function
 * Aturan penulisan tanpa parameter:
 * function namaFunc(){
 *      // taskcode
 * }
 * 
 * Aturan penulisan dengan parameter:
 * function namaFunc(paramA,paramB,...){
 *      // taskcode
 * }
 */

// Function without params
// Create function
function penjumlahan() {
    // input
    let angkaA: number = 15;
    let angkaB: number = 3;

    // process
    const hasil: number = angkaA + angkaB;

    // output
    console.log(hasil);
    return hasil;
}


// Call function
penjumlahan;

// Execute function
penjumlahan();

// Menampilkan hasil dari function
const hasilFunction = penjumlahan();
console.log(hasilFunction);

// Function with params
function penjumlahanParam(_angkaA: number = 0, _angkaB?: number) {
    if (_angkaA && _angkaB) {
        const hasil: number = _angkaA + _angkaB;
        return hasil;
    } else {
        return "Ada parameter yang kosong";
    }
}

// Execute in log
console.log(penjumlahanParam(1, 2));
console.log(penjumlahanParam(7, 5));

// Exercise: Buat function calculator, yang setiap kali diexecute angka dan operasi perhitungannya berbeda-beda

function calculator(_angkaA: number, _angkaB: number, _operator: string) {
    let hasil: number = 0;
    
    if (_operator === "+") {
        hasil = _angkaA + _angkaB;
    } else if (_operator === "-") {
        hasil = _angkaA - _angkaB;
    } else if (_operator === "*") {
        hasil = _angkaA * _angkaB;
    } else if (_operator === "/") {
        hasil = _angkaA / _angkaB;
    } else {
        return "Invalid operator";
    }

    return hasil;
}

console.log(calculator(10, 2, "/"));