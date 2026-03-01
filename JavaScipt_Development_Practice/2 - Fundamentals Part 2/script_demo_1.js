'use strict'; // It will detect error and throw them in runtime

/*

let hasDriversLicence = false;
const passTest = true;

if(passTest) {
    hasDriversLicence = true;
}

if(hasDriversLicence) {
    console.log("I can drive");
}

*/

/*

// Functions

// Function definition/Declaration
function logger() {
    console.log("My name is John");
}

logger(); // Function call/Invoking the function
logger();

// apples & oranges are function parameters
function fruitProcessor (apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice; //Returning the value stored in the juice variable
}

const finaJuice = fruitProcessor(5,10); //Arguments passed for apples & oranges
console.log(finaJuice);
console.log(fruitProcessor(5,10)); // Function called again

*/

/*

// Function Declarations vs Expressions

console.log(calcAge1(2000)); //Function can be called and then defined because of hoisting

function calcAge1 (birthYear) {
    return 2026 - birthYear;
}

const currentAge1 = calcAge1(1996);
console.log(currentAge1);

// console.log(calcAge2(2000)); // Function expression can't be called before definition

// Function Expression
const calcAge2 = function (birthYear) {
    return 2026- birthYear;
}

console.log(calcAge2(1998));

*/

/*

// Arrow Functions

const calcAge3 = birthYear => 2026 - birthYear;
console.log(calcAge3(1998));

const yearsUntilRetirement = (firstName, birthYear) => {
    const age = 2026 - birthYear;
    const retirementAge = 65 - age;
    // return retirementAge;
    return `${firstName} retires in ${retirementAge} years.`;
}

console.log(yearsUntilRetirement('John', 1998));
console.log(yearsUntilRetirement('Smith', 1996));

*/

/*

// Functions calling another Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangesPieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apples and ${orangesPieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2,4));

*/

/*

// Reviewing Functions

const calcAge = function(birthYear) {
    return 2026 - birthYear;
}

const yearsUntilRetirement = function (firstName, birthYear) {
    // const age = 2026 - birthYear;
    const age = calcAge(birthYear);
    const retirementAge = 65 - age;
    // return retirementAge;
    if(retirementAge > 0) {
        console.log(`${firstName} retires in ${retirementAge} years.`);
        return retirementAge;
    } else {
        console.log(`${firstName} already retired.`);
        return -1;
    }

    // return `${firstName} retires in ${retirementAge} years.`;
}

console.log(yearsUntilRetirement('John', 1996));
console.log(yearsUntilRetirement('John', 1950));

*/

/*

// Coding Challenge - #4

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is calculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!

// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time

// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores 😉

// GOOD LUCK �


// Test Data 1

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

function checkWinner (avgDolphins, avgKoalas) {    
    if(avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins wins the Game`);
    } else if (2 * avgDolphins <= avgKoalas) {
        console.log(`Koalas wins the game`);
    } else {
        console.log(`No Team wins....`)
    }
}

checkWinner(scoreDolphins, scoreKoalas);

// Test Data 2

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

checkWinner(scoreDolphins, scoreKoalas);

*/

/*

// Intro to Arrays

// Arraays are used to store multiple values in a single variable. It is a non-primitive data type and mutable

const friends = ['John', 'Smith', 'Steve']; // Primitive data types are only immutable. Array is a non-primitive data type
console.log(friends);
console.log(friends[0]);
console.log(friends[2]);

const years = new Array(1991, 1998, 1996, 1997);
console.log(years);
console.log(years.length);

console.log(years[years.length - 1]);


friends[1] = 'Carol';
console.log(friends[1]);

// friends = ['Bob'];

const firstName = 'John';
const userDetails = [firstName, 'Smith', 2026-1996, 'Programmer', friends, years];
console.log(userDetails);
console.log(userDetails.length);

const calcAge = function(birthYear) {
    return 2026 - birthYear;
}

const yearsAge = [1991, 1993, 1995, 1996];
// console.log(calcAge(yearsAge));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);


const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

console.log(years.sort());

years.push(2000);
console.log(years);

years.pop();
console.log(years);

years.unshift(1997);
console.log(years);

years.reverse();
console.log(years);

years.shift();
console.log(years);

console.log(years.indexOf(1996));

console.log(years.includes("2006"));
console.log(years.includes(1996)); // Strict equality for arrays

*/

/* 

// Coding Challenge - #5

// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.

// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44

// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) 😉

// GOOD LUCK �

const calcTip = function (billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips);

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(total);

*/

/*

// Intro to Objects

// Objects to be used for more structured data. It is a collection of key value pairs. It is a non-primitive data type and mutable

// Dot and Bracket Notation

const userDetails = {
    firstName: 'John',
    lastName: 'Smith',
    age: 2026 - 1996,
    job: 'Programmer',
    friends: ['Bob', 'Alice', 'Steve']
}

console.log(userDetails);
console.log(userDetails.firstName); // Dot Notation
console.log(userDetails['lastName']); // Bracket Notation


// This can be done in bracket notation only and is not possible in dot notation
const nameKey = 'Name';
console.log(userDetails['first' + nameKey]); // Using concatenation retriving the first name
console.log(userDetails['last' + nameKey]); // Using concatenation retriving the last name

// const detailsOfUser = prompt("What details you would like to kno?");
// console.log(userDetails.detailsOfUser); // undefined, because the object does not know the property detailsOfUser

// console.log(userDetails[detailsOfUser]); // Bracket notation returns the correct value

// if(userDetails[detailsOfUser]) {
//     console.log(userDetails[detailsOfUser]);
// } else {
//     console.log("Incorrect Request");
// }

userDetails.location = 'India';
console.log(userDetails.location);

console.log(`${userDetails.firstName} has ${userDetails.friends.length} friends, and his best friend is called ${userDetails.friends[1]}`);

*/

/*

// Object Methods

const userDetails = {
    firstName: 'John',
    lastName: 'Smith',
    job: 'Programmer',
    friends: ['Bob', 'Alice', 'Steve'],
    birthYear: 1991,
    hasDriverLicence: true,

    // Function value of the object 
    // calcAge: function(birthYear) {
    //     return 2026 - birthYear;
    // }
    
    // calcAge: function() {
    //     console.log(this); // this = keyword will point to userDetails object
    //     return 2026 - this.birthYear;
    // }

    calcAge: function() {
        // console.log(this); // this = keyword will point to userDetails object
        this.age = 2026 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicence ? 'a' : 'no'} driver's licence.`
    }

};

console.log(userDetails.calcAge());
console.log(userDetails.age);
// console.log(userDetails['calcAge']());

console.log(userDetails.getSummary());

*/

/*

// Coding Challenge - #6

// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)

// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

// GOOD LUCK �


const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2;
        return this.bmi;
    }
}

mark.calcBMI();
john.calcBMI();

if(mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
} else {
    console.log(`${mark.fullName} and ${john.fullName} have the same BMI (${mark.bmi})!`);
}

*/

/*
// The For Loop

// console.log("Lifting weights repetition 1 🏋️‍♂️");
// console.log("Lifting weights repetition 2 🏋️‍♂️");
// console.log("Lifting weights repetition 3 🏋️‍♂️");

for(let rep = 1; rep <= 3; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

*/

/*

// Looping through array - The For Loop

const userDetails = [
    'John',
    'Smith',
    2026 - 1996,
    'Programmer',
    ['Bob', 'Alice', 'Steve']
];

const types = [];

for(let i = 0; i < userDetails.length; i++) {
    console.log(userDetails[i], typeof userDetails[i]);

    types[i] = typeof userDetails[i];
}

console.log(types);

const years = [1991, 1993, 1995, 1996];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2026 - years[i]);
}
console.log(ages);

// Continue and Break Statements

console.log('--- ONLY STRINGS ---');

for(let i = 0; i < userDetails.length; i++) {
    if(typeof userDetails[i] !== 'string') continue;
    console.log(userDetails[i], typeof userDetails[i]);
}

console.log('--- BREAK WITH NUMBER ---');

for(let i = 0; i < userDetails.length; i++) {
    if(typeof userDetails[i] === 'number') break;
    console.log(userDetails[i], typeof userDetails[i]);
}

*/

/*

// Looping Backwards and Loops in Loops

const userDetails = [
    'John',
    'Smith',
    2026 - 1996,
    'Programmer',
    ['Bob', 'Alice', 'Steve']
];

for(let i = userDetails.length - 1; i >= 0; i--) {
    console.log(i, userDetails[i]);
}

for(let exercise = 1; exercise <= 3; exercise++) {
    console.log(`--- Starting Exercise ${exercise} ---`);

    for(let rep = 1; rep <= 5; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♂️`);
    }

}

*/

/*

// The While Loop

let rep = 1;

while(rep <= 10) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while(dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is about to end...');
}

*/

/*

// Coding Challenge - #7

// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!

// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays 😉

// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

// GOOD LUCK �

const calcTip = function (billValue) {
    return billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.20;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for(let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(calcAverage(totals));

*/