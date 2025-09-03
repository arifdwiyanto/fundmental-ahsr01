// 1. Find area of rectangle
// Define variable length of rectangle
let recLength: number = 5
// Define variable width of rectangle
let recWidth: number = 3
// Area of rectangle = length x width
const recArea: number = recLength * recWidth
console.log(recArea)

// 2. Find perimeter of rectangle
// Perimeter of rectangle = (2 x length) + (2 x width)
const recPerimeter: number = (2 * recLength) + (2 * recWidth)
console.log(recPerimeter)

// 3. Find diameter, circumference and area of circle
// Define variable radius of circle
let circleRadius: number = 5
// Diameter of circle = 2 x r
const circleDiameter: number = 2 * circleRadius
console.log(circleDiameter)

// Circumference of circle = Pi x d
const circleCircumference: number = Math.PI * circleDiameter
console.log(circleCircumference)

// Area of circle = Pi x r x r
const circleArea: number = Math.PI * circleRadius * circleRadius
console.log(circleArea)

// 4. Find angles of triangle if two angles if given
// Define variable of two angles
let triangleAngleA: number = 80
let triangleAngleB: number = 65

// Formula to find third angle: Angle C = 180 - (Angle A + Angle B)
const triangleAngleC: number = 180 - (triangleAngleA + triangleAngleB)
console.log(triangleAngleC)

// 5. Convert days to years
// Assuming 1 years = 365 days and 1 month = 30 days
// Define number of days variable as input
let numberOfDays: number = 400

// Get years by deviding 365
const years: number = Math.floor(numberOfDays / 365)
console.log(years)

// Get months by deviding 30 from the remainder of modulo
const months: number = Math.floor((numberOfDays % 365) / 30)
console.log(months)

// Get days from the remainder of modulo 365 and 30
const days: number = Math.floor((numberOfDays % 365) % 30)
console.log(days)

// Put years, months and days into string variable
const convertedDays: string = `${years} year, ${months} month, ${days} days`
console.log(`${numberOfDays} days is equal to ${convertedDays}`)

// 6. Get difference between dates and days
// Input format date: yyyy-mm-dd
// Define variable date1
let date1: Date = new Date("2022-01-20")

// Define variable date2
let date2: Date = new Date("2022-01-22")

// Convert date1 and date2 to miliseconds time
const msDate1: number = date1.getTime()
console.log(msDate1)
const msDate2: number = date2.getTime()
console.log(msDate2)

// Substract msDate1 and msDate2
const msDifference: number = msDate2 - msDate1
console.log(msDifference)

// Convert ms time to number of days
const daysDifference: number = msDifference / 1000 / 60 / 60 / 24
console.log(daysDifference)