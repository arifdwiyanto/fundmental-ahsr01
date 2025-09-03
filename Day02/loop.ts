// Looping: code yang ditujukan untuk menjalankan program secara berulan

/**
 * FOR LOOP: perulangan yang digunakan ketika batas looping diketahui dari awal
 * Aturan penulisan:
 * for(statement1;statement2;statement3){
 *      - loop taskcode
 * }
 * statement1: kondisi yang mendefinisikan nilai awal dari hitungan batas looping
 * statement2: kondisi yang diinginkan untuk mengakhiri looping berdasarkan statement1
 * statement3: berisi perhitungan increment atau decrement dari statement1 untuk mencapai batas statement2
 */

// case: menjalankan console.log sebanyak 5 kali
for (let i: number = 0; i < 5; i++) {
    console.log(`Loop i=${i}`)
}

/**
 * WHILE LOOP: secara umum digunakan untuk proses loopoing yang batasnya tidak pasti
 * Aturan penulisan
 * while(condition){
 *     - loop taskcode
 * }
 */

while (true) {
    let random: number = Math.round(Math.random() * 10);
    console.log(`random ${random}`);

    if (!Boolean(random)) {
        break;
    }
}

// while loop predictable
let count2: number = 0;
while (count2 < 5) {
    console.log(`Loop count=${count2}`);
    count2++;
}

/**
 * DO WHILE: sama dengan while, tetapi do while pasti akan jalan minimal satu kali
 * Aturan penulisan:
 * do {
 *   - taskcode
 * } while (condition)
 */

let counter: number = 0;
do {
    console.log(counter);
    if (counter === 3) {
        break;
    }
    counter++;
} while (counter < 5);

