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
