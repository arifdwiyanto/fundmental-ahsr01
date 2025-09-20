/**
 * CALLBACK FUNCTION: Sebuah fungsi yang dijalankan di dalam fungsi lain yang dimasukkan melalui parameter
 * 
 * Aturan penulisan:
 * 1. Callback dibuat dulu, baru kemudian dimasukkan lewat parameter ke function lain
 * 
 * function cb(){
 *      // taskcode
 * }
 * 
 * function main(callback){
 *      callback(); // menjalankan callback params
 * }
 * 
 * ketika dijalankan:
 * main(cb);
 * 
 * 2. Callback func, langsung dibuat di dalam parameter, ketika fungsi utamanya dijalankan
 * 
 * function main(callback){
 *      callback()
 * }
 * 
 * Ketika dijalankan:
 * main (function(){
 *      // taskcode
 * })
 * 
 * note:
 * - parameter callback: diisi dengan function yang dibutuhkan
 */

// Create main function: Function to display calculation result
// mainFunction:
function displayCalculation(callback: any) {
    const result: number = callback();

    return `Hasil perhitungan fungsi callback adalah ${result}`
}

// callbackFn
function add() {
    let angkaA: number = 12;
    let angkaB: number = 10;

    return angkaA + angkaB;
}

// execute function
console.log(displayCalculation(add));

console.log(displayCalculation(function () {
    return 7 - 5;
}));

// mainFunction with value for callback params:
function displayCalculationV2(callback: any) {
    const angkaA: number = 34;
    const angkaB: number = 10;
    const result: number = callback(angkaA, angkaB);

    return `Hasil perhitungan fungsi callback adalah ${result}`;
}

console.log(displayCalculationV2(function (angkaA: number, angkaB: number) {
    return angkaA * angkaB;
}));

// Array function with callback: forEach, map, filter
// array.forEach(callback): sebagai pilihan lain untuk mengakses isi data ...
const students: string[] = ["Abdi", "Edi", "Aldo"];

// for loop
for (let index = 0; index < students.length; index++) {
    const value = students[index];
    console.log(index);
    console.log(value)
}
// forEach
students.forEach(function (value: string, index: number) {
    console.log(index);
    console.log(value);
});

// Duplikasi cara kerja array.forEach
function duplicateForEach(arrayData: any[], callbackFn: any) {
    for (let index = 0; index < arrayData.length; index++) {
        const value = arrayData[index];
        callbackFn(value, index);
    }
}

duplicateForEach(["Pepaya", "Melon", "Jeruk"], (value: any, index: number) => {
    console.log(index);
    console.log(value);
})

// array.map(callbackFn): untuk merubah seluruh data array menjadi data array yang baru
// [1, 2, 3] ==> ["1", "2", "3"]
// ["Abdi", "Edi", "Aldo"] ==> ["Nama saya Abdi", "Nama saya Edi", "Nama saya Aldo"]
// [1, 2, 3] ==> ["Ganjil", "Genap", "Ganjil"]

const newStudents = students.map(function (value: string, index: number) {
    return `Nama saya ${value}`;
})

console.log(students);
console.log(newStudents);

function duplicateMap(arrayData: any[], callbackFn: any) {
    const result: any[] = [];
    for (let index = 0; index < arrayData.length; index++) {
        result.push(callbackFn(arrayData[index], index));
    }

    return result;
}

const arrayMultipleTwo = duplicateMap([1, 2, 3, 4], function (value: any) {
    return value * 2;
})

console.log(arrayMultipleTwo);

// array.filter(callbackFn): digunakan untuk memberikan data array baru sesuai condition filter yang diberikan
const angkaC: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const genap: number[] = angkaC.filter(function (value: number) {
    return value % 2 === 0;
});

console.log(genap);

function duplicateFilter(arrayData: any[], callbackFn: any) {
    const result: any[] = [];
    for (let index = 0; index < arrayData.length; index++) {
        const value = arrayData[index];
        if (callbackFn(value)) {
            result.push(value);
        }
    }

    return result;
}

const ganjil = duplicateFilter(angkaC, function (value: any) {
    return value % 2 !== 0;
});

console.log(ganjil);