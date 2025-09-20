function plusOne(digits: number[]): number[] {
    let digitToString: string = digits.join("");
    let numPlusOne: bigint = BigInt(digitToString);
    let plusOneString: string = numPlusOne.toString();
    const resultArray: number[] = plusOneString.split("").map(Number);
    return resultArray;

};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));