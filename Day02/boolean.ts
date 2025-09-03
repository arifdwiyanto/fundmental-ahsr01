// Boolean: data yang memiliki dua nilai, true atau false
let isActive: boolean = true;
let isDeleted: boolean = false;

// Menghasilkan nilai boolean
// 1. Berdasarkan tipe data lain
// TRUTHLY
console.log(Boolean("A"));
console.log(Boolean(" "));
console.log(Boolean(-1));
console.log(Boolean(true));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean({name: "Arif"}))

// FALSY
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));

// 2. Comparison operator: >, <, >=, <=, ==, ===
let valueA: number = 10;
let valueB: number = 5;
console.log(valueA < valueB);
console.log(valueA >= valueB);
console.log(valueB === 5);

// 3. Logical operator : AND (&&), OR(||), NOT(!)
// AND: akan menghasilkan nilai true jika nilai yang dibandingkan semua true
console.log(Boolean("ABC") && Boolean(2));

// OR: akan menghasilkan nilai true jika salah satu data bernilai true
console.log(Boolean("") || Boolean(1));

// NOT: membalikkan nilai
console.log(!Boolean(valueA))