// 1. Display multiplication table of a given number
// Define variable mNumber as input
let mNumber: number = 9;

// Add FOR loop statement to print multiplication table
for (let i: number = 1; i <= 10; i++) {
    console.log(`${mNumber} x ${i}`);
}

// 2. Check whether a string is a palindrom or not
// Define variable checkName as input
let checkName: string = "madam";

// Reverse name using split, reverse, and join function
let reverseName: string = checkName.split("").reverse().join("");

// Check whether chechName is same as reverseName or not
if (checkName === reverseName) {
    console.log(`${checkName} is palindrom name`);
} else {
    console.log(`${checkName} is not palindrom name`);
}

// 3. Convert centimeter to kilometer
// Define variable centimeter as input
let centimeter: number = 100000;

// Define variable kilometer = centimeter / 100000
let kilometer: number = centimeter / 100000;
console.log(`${centimeter} cm is equal to ${kilometer} km`);

// 4. Format number as currency (IDR)
// Reassign mNumber
mNumber = 1000;

// convert mNumber to string currency IDR
let currency: string = mNumber.toLocaleString("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 2

});

console.log(currency);

// 5. Remove the first occurrence of a give "search string" from a string
// Define variable phrase, searchString as input string, and resultPhrase for the output
let phrase: string = "Hello world";
let searchString: string = "ell";
let resultPhrase: string;

// Check if phrase include searchString
if (phrase.includes(searchString)) {
    // Remove searchString from phrase
    resultPhrase = phrase.replaceAll(searchString, "");
} else {
    resultPhrase = `${phrase} does not include ${searchString}`
}

console.log(resultPhrase);

// 6. Capitalize the first letter of each word in a string
phrase = "hello world";

// Define splitPhrase variable to split each words
let splitPhrase: string[] = phrase.split(" ");

let capitalizedPhrase: string;

// Use charAt(0) then toUpperCase to make first letter uppercase and substring to extract the rest string
for (let i: number = 0; i < splitPhrase.length; i++) {
    splitPhrase[i] = splitPhrase[i].charAt(0).toUpperCase() + splitPhrase[i].substring(1);
}

// Join earch words to become one string
capitalizedPhrase = splitPhrase.join(" ");
console.log(capitalizedPhrase);

// 7. Swap the case of each character from string
// reassign phrase variable and define empty string swapPhraseResult
phrase = "The QuiCk BrOwN Fox";
let swapPhraseResult: string = "";

// Use FOR loop to check each character, if the character is uppercase then make it to lowercase else make it to uppercase
for (let i: number = 0; i < phrase.length; i++) {
    console.log(phrase[i]);
    if (phrase[i] === phrase[i].toUpperCase()) {
        swapPhraseResult = swapPhraseResult + phrase[i].toLowerCase();
    } else {
        swapPhraseResult = swapPhraseResult + phrase[i].toUpperCase();
    }
}

console.log(swapPhraseResult);

