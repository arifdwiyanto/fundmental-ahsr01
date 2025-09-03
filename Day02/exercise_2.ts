// 1. Check whether the number is odd or even
// Use formula number % 2 === 0
// Define input number variable
let numberToCheck: number = 7

// Define condition statement, check whether the remainder of number % 2.
// If the remainder is 0 then the number is even
// If the remainder is not 0 then the number is odd
let numberCheckResult: string = "";

if (numberToCheck % 2 === 0) {
    numberCheckResult = `${numberToCheck} is even number`;
} else {
    numberCheckResult = `${numberToCheck} is odd number`
}

console.log(numberCheckResult)

// 2. Check whether the number is prime or not
// Define variable: isPrime is boolean to check whether the number is prime or not
numberToCheck = 4
let isPrime: boolean = true;

// Use FOR loop statement to check if numberToCheck % i === 0 then isPrime is false
for (let i: number = 2; i < numberToCheck; i++) {
    if (numberToCheck % i === 0) {
        isPrime = false
    }
    console.log(i)
    console.log(numberToCheck % i)
}

console.log(`${numberToCheck} is ${isPrime ? "prime number" : "not prime number"}`)

// 3. Find sum of the numbers 1 to N
// Define variable: N as input & sumResult is for the result
let N: number = 5;
let sumResult: number = 0;

// Use formula sumResult = sumResult + 1 inside FOR loop statement
for (let i: number = 1; i <= N; i++) {
    sumResult = sumResult + i
}
console.log(`Sum of numbers 1 to ${N} is ${sumResult}`)

// 4. Find factorial of a number
// Define variable factorial
numberToCheck = 6
let factorial: number = 1;

// Use formula factorial = factorial x 1 inside FOR loop statement
for (let i: number = numberToCheck; i >= 1; i--) {
    factorial = factorial * i;
}
console.log(`${numberToCheck}! is ${factorial}`);

// 5. Print the first N fibonacci numbers
/**
 * Define variable:
 * num1 = First fibonacci number, F(N-2)
 * num2 = Second fibonacci number, F(N-1)
 * num3 = F(N)
 */
N = 5
let num1: number = 0;
let num2: number = 1;
let num3: number;
let fibonacciNumber: number = 0;

// For loop from 0 to N
for (let i = 0; i <= N; i++) {
    // Get the N fibonacci number
    if (i === N) {
        fibonacciNumber = num1;
        console.log(fibonacciNumber);
    }
    num3 = num1 + num2;
    console.log(num3);
    num1 = num2;
    num2 = num3;
}

console.log(`The first N fibonacci numbers of 15 is ${fibonacciNumber}`)