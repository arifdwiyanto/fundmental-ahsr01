// Conditional statement: code yang ditujukan untuk memberikan pilihan eksekusi
//                        program sesuai kondisi yang diberikan
/**
 * - if: untuk satu kondisi
 * - if...else: untuk dua kondisi
 * - if...else if...else: untuk tiga kondisi atau lebih
 * - switch...case: pengkondisian dalam bentuk validasi kecocokan data
 */

// Contoh data:
let nama: string = "arif";
let usia: number = 20;
let email: string = "arif@example.com";

// IF statement
/**
 * Aturan penulisan:
 * if(condition){
 *     // taskcode
 * }
 * node:
 * - condition: kondisi yang diinginkan berdasarkan nilai boolean yang didapatkan dari
 *              TRUTHLY/FALSY/COMPARISON/LOGICAL
 * - taskcode: kumpulan baris program yang ingin dijalankan ketika condition terpenuhi (nilainya true)
 */

// case: memvalidasi batas usia
let result: string = "";
if (usia > 17) {
    result = "Verifikasi usia anda berhasil";
}
console.log(result);

// IF...ELSE statement
/**
 * Aturan penulisan:
 * if(condition){
 *     // taskcode
 * }else{
 *     // tascode
 * }
 */

usia = 14;
if (usia > 17){
    result = "Verifikasi usia anda berhasil";
} else {
    result = "Verifikasi usia anda gagal, belum cukup umur";
}

console.log(result);

// case: memeriksa data variable email apakah benar itu email
email = "apel@ss.com"
if (email.includes("@") && email.endsWith(".com")) {
    result = "Email benar"
} else {
    result = "Email salah"
}

console.log(result)

// IF...ELSE IF...ELSE
/**
 * Aturan penulisan
 * if(condition){
 *     // taskcode
 * } else if(condition) {
 *     // taskcode
 * } else {
 *     // taskcode
 * }
 */
let examValue: number = 70;
let examResult: string = "";
if (examValue >= 90) {
    examResult = "A";
} else if (examValue >= 80 && examValue < 90) {
    examResult = "B";
} else if (examValue >= 70 && examValue < 80) {
    examResult = "C";
} else {
    examResult = "F";
}

console.log(examResult);

// Switch case
/**
 * Aturan penulisan
 * Switch(variableOfValue){
 *     case "A":
 *         - taskcode
 *     case "B":
 *         - taskcode
 *     default:
 *         - taskcode
 * }
 */

let job: string = "Coder";

switch (job) {
    case "Doctor":
        console.log("Memeriksa pasien");
        break;
    case "Coder":
        console.log("Membuat aplikasi");
        break;
    default:
        console.log("Tidak diketahui");
}

// Ternary operator: operator yang merepresentasikan pengkondisian
/**
 * Aturan penulisan
 * let value:string = condition ? mainValue : optionValue;
 */

// Verifikasi usia
usia = 17
// cara 1
let resultTernary: string = usia > 17 ? "Verifikasi usia berhasil" : "Verifikasi usia gagal"
console.log(resultTernary);

// cara 2
resultTernary = `Verifikasi usia ${usia > 16 ? "berhasil" : "gagal"}`
console.log(resultTernary)