// let js = 'amazing';
// if(js === 'amazing')
//     alert('JavaScript is fun!');

// 40 + 8 + 23+10; // It will not display message in console

// console.log(40 + 8 + 23+10); // This will display the value in the console

/*

// Values and Variables

console.log('John');
console.log(23);

let firstName = "John"; // firstName is a varible name

console.log(firstName);
console.log(firstName);
console.log(firstName);

*/

/*

// Variable Naming Convention

let first = 'John'; // It is valid but should be descriptive
// let 1first = 45; // Variable name should not start with number
// let firstName = 'Smith'; // Duplicate Var cannot be assigned
// let first&lastName = 'Carol' // & should not be used
let first_last_Name = 'Carol' // _ is allowed as variable name
// let new = 10; Reserved keywords like new, function should not be used as variable
let FirstName = 'Christ' // It is allowed but do not use uppercase as it is reserved for consts
let PI = 3.1415; 

// Descriptive variable name
let myFirstJob = 'Programmer';
let currentJob = 'Teacher';

// Generalized variable name
let job1 = 'Programmer';
let job2 = 'Teacher'

console.log(myFirstJob);
console.log(currentJob);

*/

/*

// Data Types

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof(javascriptIsFun));
console.log(typeof(true));
console.log(typeof(23));
console.log(typeof(23.5));
console.log(typeof("23.5"));

// Dynamic Typing
javascriptIsFun = 'John'; // New value for existing variable is assigned
console.log(javascriptIsFun);

let year;
console.log(year);
console.log(typeof(year));

year = 1991;
console.log(year);
console.log(typeof(year));

year = null;
console.log(year);
console.log(typeof(year)); // This is an error in JavaScript as type shows as Object

*/

/*

// let, const, var


// let = value assigned can be changed
// const = value assigned can't be changed - recommended to use whenever is needed by default
// var = used in legacy, but should be avoided in use
// let = block scope & var = function scope


let age = 30;
console.log(age);

age = 31; // Mutate or reassign value to age variable
console.log(age); 

const birthYear = 1991;
console.log(birthYear);

// birthYear = 1996;
// console.log(birthYear); // TypeError will be thrown as value cannot be changed

// const firstName; // Error as const variables need some values initially

var firstJob = 'Programmer';
console.log(firstJob);

firstJob = 'Teacher';
console.log(firstJob);

lastName = 'Smith';
firstName = 'John';
console.log(lastName, firstName); // Variable can be created without data type, but not recommended

*/

/*

// Operators Basic

// Arithmetic Operators

const currentYear = 2026;

const ageUser = currentYear - 1996;
console.log(ageUser);

const ageSara = currentYear - 1998;
console.log(ageSara);

console.log(ageUser, ageSara);

console.log(ageSara * 3); // Multiplication
console.log(ageUser / 2); // Division
console.log(ageSara % 3); // Modulus which returns reminder
console.log(ageSara ** 2); // Exponention or power

console.log(40 + 23 - 10 / 2 * 3 ** 4); // This executes from left to right

// Concatenation

const firstName = 'John';
const lastName = 'Smith';
console.log(firstName + ' ' + lastName);

// Assignment Operators

let a = 10 + 5;
console.log(a);

a += 10; // a = a + 10 (15+10=25)
console.log(a);

a *= 2; // a = a * 2
console.log(a);

a++; // a = a + 1
console.log(a);

a--; // a = a - 1;
console.log(a);

// Comparison Operators

// > , < , <= , >= , ==, ===

console.log(ageSara > ageUser);
console.log(ageSara > ageSara); // This has no meaning
console.log(ageSara >= 20);

let middleName = 'Carol';

console.log(firstName == middleName);

middleName = 'Smith';
console.log(middleName === lastName);
console.log(middleName == lastName);

// Operator Precendence

console.log(currentYear - 1991 > currentYear - 1996); // JS executed from left to right based on precedence

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

// Arithmetic operators takes more precedence and gets executed first

let x,y;
x = y = 25 - 10 - 5;
console.log(x,y);

const averageAgeBeforePrecedence = ageSara + ageUser / 2;
console.log(ageSara, ageUser, averageAgeBeforePrecedence);

const averageAgeAfterPrecedence = (ageSara + ageUser) / 2;
console.log(ageSara, ageUser, averageAgeAfterPrecedence);

*/

/*

// Coding Challenge #1

/*

Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

GOOD LUCK

*/

/*

// Test data - 1

const markWeight1 = 78;
const johnWeight1 = 92

const markHeight1 = 1.69;
const johnHeight1 = 1.95;

const markBMI1 = markWeight1 / markHeight1 ** 2;
const johnBMI1 = johnWeight1 / johnHeight1 ** 2;

console.log("BMI of Mark is " + markBMI1 + " and BMI of John is " + johnBMI1);

const markHigherBMI1 = markBMI1 > johnBMI1;
console.log(markHigherBMI1);

// Test data - 2

const markWeight2 = 95;
const johnWeight2 = 85

const markHeight2 = 1.88;
const johnHeight2 = 1.76;

const markBMI2 = markWeight2 / markHeight2 ** 2;
const johnBMI2 = johnWeight2 / johnHeight2 ** 2;

console.log("BMI of Mark is " + markBMI2 + " and BMI of John is " + johnBMI2);

const markHigherBMI2 = markBMI2 > johnBMI2;
console.log(markHigherBMI2);

*/

/*

// Strings & Template Literals

const firstName = 'John';
const lastName = 'Smith';
const birthYear = 1996;
const currentYear = 2026;

const myDetails = "I'am " + firstName + ' ' + lastName + ' and my age is ' + (currentYear - birthYear);
console.log(myDetails);

// Same sentence using Template literals introduced in ES6
const myNewDetails = `I'am ${firstName} ${lastName} and my age is ${currentYear-birthYear}`;
console.log(myNewDetails);

console.log(`This is a regular string`); //Recommended to use so to insert variables whenever needed

//Multi Line String
console.log(`This is a 
    Multi
    Line
    `);

*/

/*

// if-else Statement
const age = 17;
// const isOldEnough = age >= 18;
// console.log(isOldEnough);

if(age >= 18) {
    console.log(`John can start driving 😊`)
}
else {
    const yearsLeft = 18 - age;
    console.log(`John is not eligible for driving 😔, years left ${yearsLeft} year(s)`);
}

const birthYear = 1979;
let century;

if(birthYear <= 2000 && birthYear >=1980) {
    century = 20;
    console.log(`The person is born in ${century}th Century`);
}
else if (birthYear >= 2000){
    century = 21;
    console.log(`The person is born in ${century}st Century`);
}
else {
    century = 80;
    console.log(`The person is born in ${century}th Century`)
}

*/

/*

// Coding Challenge - #2

// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.

// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

// Hint: Use an if/else statement 😉

// GOOD LUCK 😀 

// Test data - 1

const markWeight1 = 78;
const johnWeight1 = 92

const markHeight1 = 1.69;
const johnHeight1 = 1.95;

const markBMI1 = markWeight1 / markHeight1 ** 2;
const johnBMI1 = johnWeight1 / johnHeight1 ** 2;

console.log("BMI of Mark is " + markBMI1 + " and BMI of John is " + johnBMI1);

if(markBMI1 > johnBMI1) {
    console.log(`${markBMI1} BMI is greater than ${johnBMI1} BMI`);
} else {
    console.log(`${johnBMI1} BMI is greater than ${markBMI1} BMI`);
}

// Test data - 2

const markWeight2 = 95;
const johnWeight2 = 85

const markHeight2 = 1.88;
const johnHeight2 = 1.76;

const markBMI2 = markWeight2 / markHeight2 ** 2;
const johnBMI2 = johnWeight2 / johnHeight2 ** 2;

console.log("BMI of Mark is " + markBMI2 + " and BMI of John is " + johnBMI2);

if(markBMI2 > johnBMI2) {
    console.log(`${markBMI2} BMI is greater than ${johnBMI2} BMI`);
} else {
    console.log(`${johnBMI2} BMI is greater than ${markBMI2} BMI`);
}

*/

/*

// Type conversion & coercion

const inputYear = '1991';
console.log(inputYear);
console.log(typeof(inputYear));
console.log(inputYear + 18); // Type coercion as JS automatically takes it as string and concatenate
console.log(Number(inputYear), inputYear);

console.log(Number('Smith'));
console.log(typeof(NaN));

console.log(typeof(String(23)));

// Type Coercion
console.log('I am ' + 23 + ' Years old.');
console.log('I am ' + String(23) + ' Years old.');

console.log('23' - '10' - '3');

let n = '1' + 1;
n = n - 1;
console.log(n);

console.log('10' - '4' - '3' - 2 + '5');

*/

/*

// Truthy ^ Falsy Values

// 5 values = 0, '', undefined, null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('John'));
console.log(Boolean({})); // Empty Object
console.log(Boolean(NaN));
console.log(Boolean(''));

const money = 0;

if(money){
    console.log("Money is available");
} else {
    console.log("Money is not available");
}

let height = 0;

if(height) {
    console.log("Height is defined");
} else {
    console.log("Height is not defined");
}

*/

/*

// Equality Operators

// === - Strict equality, does not perform type coersion - Recommended for usage
// == - Performs type coercion
// !== - Strict not equal
// != - Not Strict equal

const age = 18;

if(age === 18){
    console.log(`Person age is : ${age}`);
} else {
    console.log("Person is not adult yet");
}

if('18' == 18){
    console.log("True");
} else {
    console.log("False");
}

if('18' === 18){
    console.log("True");
} else {
    console.log("False");
}

const myAge = prompt("What's your age?");
// const myAge = Number(prompt("What's your age?"));

console.log(myAge);
console.log(typeof myAge);

if(myAge == 18){
    console.log("The value is 18");
} else {
    console.log("The value is not 18");
}

if(myAge === 18){
    console.log("The value is 18");
} else if (myAge === 19) {
    console.log("The value is 19");
} else {
    console.log("The value is not 18");
}

if(myAge !== 18) {
    console.log("Value is 18");
} else {
    console.log("The value is not 18");
}

*/

/*

// Boolean Logic/Logical Operators

// AND, OR and NOT

const hasDriverLicence = true;
const hasGoodVision = true;

console.log(hasDriverLicence && hasGoodVision);
console.log(hasDriverLicence || hasGoodVision);
console.log(!hasDriverLicence);
console.log(!hasGoodVision);

if(hasDriverLicence && hasGoodVision) {
    console.log("User is able to drive");
} else {
    console.log("User not eligible to drive");
}

const isTired = false;

if(hasDriverLicence && hasGoodVision && !isTired) {
    console.log("User able to drive and not tired");
} else {
    console.log("User is not able to drive and is tired");
}

*/

/* 

// Coding Challenge - #3

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks 😉
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// GOOD LUCK �

// Test Data 1 - Bonus 1

const averageDolphins1 = Math.round((96 + 108 + 89) / 3);
const averageKoalas1 = Math.round((88 + 91 + 110) / 3);
console.log(averageDolphins1, averageKoalas1);

if (averageDolphins1 > averageKoalas1){
    console.log(`Dolphins win the game 🏆`);
} else if (averageKoalas1 > averageDolphins1) {
    console.log(`Koalas win the game 🏆`);
} else if (averageDolphins1 === averageKoalas1) {
    console.log(`${averageDolphins1} Score is same as ${averageKoalas1} and Both win the Trophy`);
}

// Test Data 2 - Bonus 2

const averageDolphins2 = Math.round((97 + 112 + 101) / 3);
const averageKoalas2 = Math.round((109 + 95 + 123) / 3);
console.log(averageDolphins2, averageKoalas2);


if (averageDolphins2 > averageKoalas2 && averageDolphins2 >= 100){
    console.log(`Dolphins win the game 🏆`);
} else if (averageKoalas2 > averageDolphins2 && averageKoalas2 >= 100) {
    console.log(`Koalas win the game 🏆`);
} else if (averageDolphins2 === averageKoalas2 && averageDolphins2 >= 100 && averageKoalas2 >= 100) {
    console.log(`${averageDolphins2} Score is same as ${averageKoalas2} and Both win the Trophy`);
} else {
    console.log("No one Wins the Trophy");
}


// Test Data 3 - Bonus 2

const averageDolphins3 = Math.round((97 + 112 + 101) / 3);
const averageKoalas3 = Math.round((109 + 95 + 106) / 3);
console.log(averageDolphins3, averageKoalas3);


if (averageDolphins3 > averageKoalas3 && averageKoalas3 >= 100){
    console.log(`Dolphins win the game 🏆`);
} else if (averageKoalas3 > averageDolphins3) {
    console.log(`Koalas win the game 🏆`);
} else if (averageDolphins3 === averageKoalas3 && averageDolphins2 >= 100 && averageKoalas2 >= 100) {
    console.log(`${averageDolphins3} Score is same as ${averageKoalas3} and Both win the Trophy`);
} else {
    console.log("No one Wins the Trophy");
}

*/

/*

// Switch Statement

const day = "";

switch(day) {
    case "Sunday": 
        console.log(`This is a ${day}`);
        console.log(`It is a start of the week`);
        break;
    case "Tuesday": 
        console.log(`This is a ${day}`);
        break;
    case "Monday": 
        console.log(`This is a ${day}`);
        break;
    case "Wednesday": 
        console.log(`This is a ${day}`);
        break;
    default:
        console.log("Not a valid day");
}

*/

/*

// Statements & Expressions

// Expressions = 3 + 4 - One which produce a value is expressions 
// Statements = if(23>30) console.log("This is statement");

// Conditional/Ternary Operator

const age = 15;
age >= 18 ? console.log("I like to drink wine") : console.log("I like to drink water");

const drink = age >= 18 ? "Wine" : "Water";
console.log(drink); 

console.log(`I like to drink ${age>=18?"Wine":"Water"}`);

*/

/*

// Coding Challenge - #4

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”

// Test data:
// § Data 1: Test for bill values 275, 40 and 430

// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 😉

// GOOD LUCK �

// Test Data 1

const bill1 = 275;
const tip1 = (bill1>=50 && bill1<=300) ? bill1 * 0.15 : bill1 * 0.20;

console.log(`The bill was ${bill1}, the tip was ${tip1}, and the total value ${bill1 + tip1}`);

// Test Data 2

const bill2 = 40;
const tip2 = (bill2>=50 && bill2<=300) ? bill2 * 0.15 : bill2 * 0.20;

console.log(`The bill was ${bill2}, the tip was ${tip2}, and the total value ${bill2 + tip2}`);

// Test Data 3

const bill3 = 430;
const tip3 = (bill3>=50 && bill3<=300) ? bill3 * 0.15 : bill3 * 0.20;

console.log(`The bill was ${bill3}, the tip was ${tip3}, and the total value ${bill3 + tip3}`);

*/