// This is single line comment
/* This is a multiline comment */

/* let js = "amazing";
if (js === "amazing") alert("JavaScript is FUN!");

40 + 28 + 30 + 10; // This will not show in console, because the program does not instruct to show in console

console.log(40 + 28 + 30 + 10);
*/

/*
// Values & Variables

// Values are the small unit of info in JS and can be stored in variables

console.log("Jonas");
console.log(23);

*/

/* 
1. Jonas is stored in variable name firstName. Variables are used to reuse them multiple times
2. It is recommended to use Camel case like firstName
3. Also underscore & dollar ($) is recommended like first_name
4. Variables should not start with numbers
5. Variables should not contain keywords
6. Constants should go with capital letters
7. Varibles should not start with capital letters
8. Variables also should be descriptive & self explained
*/

/*
let firstName = "Smith";
console.log(firstName);
console.log(firstName);
console.log(firstName);

// let 3years = 3; This will throw syntax error and will be shown in console
// let first&name = "John"; underscore & dollar ($) only allowed
// let new = 27; Reserved keywords is not allowed
// let FirstName = "Smith"; This is not recommended even though it is not error

let first_name = "John";
let $func = 27;

let PI = 3.1415; // Constants should go with capital letters

// This is best way to decalre variable names
let myFirstJob = "Engineer";
let myCurrentJob = "Teacher";

// This is not recommended
let job1 = "Engineer";
let job2 = "Teacher";

console.log(myFirstJob);
console.log(myCurrentJob);
*/

/* 
Data Types
1. Numbers - Floating point numbers
2. Strings - Sequence of characters - Should go with quotes
3. Boolean - Either true or false
4. Undefined - Variable not declared with value - let children
5. Null - It means empty value
6. Symbol - Introduced in ED2015 - Value that is unique and can't be changed
7. Bigint - Introduced in ES202 - Larger integers then number type

JS hasdynamic typing - No need to manually define the data type of the variable and are determined dynamically

A new value can be assigned to existing variable which is both boon and ban
*/

/*

console.log(true);

let javaScriptIsFun = true; // Declaration should always happen before definition as JS runs from top to bottom
console.log(javaScriptIsFun);

console.log(typeof javaScriptIsFun);
// console.log(typeof "Jonas");
// console.log(typeof 23.5);

// Dynamic Typing

// let javaScriptIsFun = "John"; // Only first time let to be used

javaScriptIsFun = "Smith";
console.log(javaScriptIsFun);
console.log(typeof javaScriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1996;
console.log(year);

console.log(typeof null); // This will show as object but this is a bug
*/

/*

// let, const, var - Let & Const are used to declare variables in modern JavaScript. Whereas var is used in old JavaScript.

// Let should be used in program only when the value of the variable is going to change in the future. Otherwise usage of const is recommended.

let age = 30;
// In below case using let we are mutating the value of age variable.
age = 31; // We can change the value of a variable declared using let.

const birthYear = 1991;
// birthYear = 1990; // TypeError: Assignment to constant variable.

// const job; // SyntaxError: Missing initializer in const declaration. They are immutable.

var job = "programmer";
job = "teacher"; // We can change the value of a variable declared using var.

// let is block-scoped, whereas var is function-scoped.

// variable name without data type is allowed in JavaScript. However, it is not recommended to use it.
lastName = "Smith";
console.log(lastName);

*/

/*

// Basic Operators
// Operators allows us to transform and combine values.

// Arithmetic Operators
const now = 2024;
const ageSmith = now - 1996;
const ageSarah = now - 2018;
console.log(ageSmith, ageSarah);

console.log(ageSmith * 2, ageSmith / 10, 2 ** 3); // 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

// String Concatenation
const firstName = "John";
const lastName = "Smith";
console.log(firstName + " " + lastName); // John Smith

// Java Operations always happens from left to right.

// Assignment Operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
console.log(x);
x *= 4; // x = x * 4 = 100
console.log(x);
x++; // x = x + 1 = 101
console.log(x);
x--; // x = x - 1 = 100
console.log(x);

// Comparison Operators
console.log(ageSmith, ageSarah); // 28, 6
console.log(ageSmith > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18); // true
console.log(ageSmith < ageSarah); // false
console.log(ageSmith <= 18); // false

const isFullAge = ageSmith >= 18; // true
console.log(isFullAge);

console.log(now - 1996 > now - 2024); // true

*/

/*

// MDN Documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
const now = 2024;
const ageSmith = now - 1996;
const ageSarah = now - 2018;
console.log(ageSmith, ageSarah);

console.log(25 - 10 - 5); // Left to Right

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y); // 10 10

const averageAge = (ageSmith + ageSarah) / 2;
console.log(ageSmith, ageSarah, averageAge); // 28 6 17

*/

/*

// Coding Challenge #1

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
-> Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall. 
-> Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.

// Test Data 1
// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;

// Test Data 2
const massMark = 95;
const heightMark = 1.88;

const massJohn = 85;
const heightJohn = 1.76;

// BMI = mass / height ** 2 = mass / (height * height)
const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

*/

/*

// Strings and Template Literals
const firstName = "John";
const job = "teacher";
const birthYear = 1996;

const john =
  "I'm " + firstName + ", a " + (2024 - birthYear) + " years old " + job + "!"; // Old way of writing strings. It is not recommended.
console.log(john);

const johnNew = `I'm ${firstName}, a ${2024 - birthYear} years old ${job}!`; // Template Literals, it is recommended.

console.log(johnNew);

console.log(`Just a regular string...`); // Many times we use backticks for writing strings.

console.log(
  "String with \n\
multiple \n\
lines"
); // Old way of writing strings with multiple lines.

console.log(`String
multiple
lines`); // Template Literals for writing strings with multiple lines.

*/

/*

// Taking Decisions: if / else Statements

const age = 16;
// const isOldEnough = age >= 18;

// This is a control structure. It is used to take decisions in the program.
if (age >= 18) {
  console.log("John can start driving license 🚗"); // Windows + . used for emoji
} else {
  const yearsLeft = 18 - age;
  console.log(`John is too young. Wait another ${yearsLeft} years 😊`);
}

const birthYear = 1996;
let century; // Variable declaration outside the if/else block.
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

*/

/*

// Coding Challenge #2

//Use the BMI example from Challenge #1, and the code you already wrote, and improve it.

//Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
// Hint: Use an if/else statement 😉

// Test Data 1
const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);

if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}

*/

/*

// Type Conversion and Coercion
// Type Conversion: Manually convert from one type to another.

// JavaScript converts from string to number automatically, number to string automatically, and boolean to number automatically.

const inputYear = "1991";
console.log(inputYear + 18); // 199118. It is a string concatenation.
console.log(Number(inputYear), inputYear); // Convert string to number
console.log(Number(inputYear) + 18); // 2009

// Type Coercion: JavaScript automatically converts types behind the scenes for us.
console.log(Number("John")); // NaN (Not a Number)
console.log(typeof NaN); // number. It is an invalid number.

console.log(String(23), 23); // Convert number to string

// Type Coercion in JavaScript
console.log("I am " + 23 + " years old"); // I am 23 years old
console.log("23" - "10" - 3); // 10. JavaScript converts strings to numbers.
console.log("23" + "10" + 3); // 23103. This is a string concatenation.
console.log("23" * "2"); // 46
console.log("23" / "2"); // 11.5
console.log("23" > "18"); // true. JavaScript converts strings to numbers.

let n = "1" + 1; // 11
n = n - 1; // 10
console.log(n);

*/

/*

// Falsy Values: 0, '', undefined, null, NaN - When used in a boolean context, they will become false.
// Truthy Values: All values that are not falsy values.

console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("John")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

// Type Coercion in If/Else Statements - JavaScript converts the values to boolean values.

const money = 0;
if (money) {
  console.log("Don't spend it all 😉");
} else {
  console.log("You should get a job! 😊");
}

let height; // undefined
// JavaScript converts undefined to false
if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is UNDEFINED!");
}

height = 0; // 0 is a falsy value in JavaScript
// JavaScript converts 0 to false
if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is UNDEFINED!");
}

height = 1; // 1 is a truthy value in JavaScript
// JavaScript converts 1 to true
if (height) {
  console.log("YAY! Height is defined!");
} else {
  console.log("Height is UNDEFINED!");
}

*/

/*

// Equality Operators: == vs. ===
const age = 18;

// === is a strict equality operator. It does not perform type coercion. It compares values and their types. It is recommended to use === in JavaScript.
if (age === 18) console.log("You just became an adult! 😀 (strict)"); // It is a strict equality operator

// == is a loose equality operator. It performs type coercion. It converts the values to the same type before making the comparison. It is not recommended to use == in JavaScript.
if (age == "18") console.log("You just became an adult! 😀 (Loose)"); // It is a loose equality operator

const favourite = Number(prompt("What's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number!");
} else if (favourite === 9) {
  console.log("9 is also a cool number!");
} else {
  console.log("Number is not 23 or 7 or 9!");
}

if (favourite !== 23) console.log("Why not 23?");

*/

/*

// Logical Operators
// Logical Operators are used to combine multiple conditions. They allow us to write more complex logical conditions.

// AND (&&) Operator: Returns true if all conditions are true.

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision); // true

console.log(hasDriverLicense && !hasGoodVision); // false

// OR (||) Operator: Returns true if at least one condition is true.

console.log(hasDriverLicense || hasGoodVision); // true

console.log(!hasDriverLicense || hasGoodVision); // true

// NOT (!) Operator: Inverts true to false and false to true.

const shouldDrive = hasDriverLicense && hasGoodVision;

if (shouldDrive) {
  console.log("John is able to drive! 🚗");
} else {
  console.log("Someone else should drive... 🚗");
}

const isTired = false;
console.log(hasDriverLicense && hasGoodVision && isTired); // false

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("John is able to drive! 🚗");
} else {
  console.log("Someone else should drive... 🚗");
}

*/

/*

// Coding Challenge #3

//There are two gymnastics teams: Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

//Your tasks:

//1. Calculate the average score for each team, using the test data included below. 
The average score for Dolphins should be assigned to the scoreDolphins variable, and the average score of Koalas should be assigned to the scoreKoalas variable.

//2. Compare the team's average scores to determine the winner of the competition, and print to the console:

//"Dolphins win the trophy" if Dolphins win, or

//"Koalas win the trophy" if Koalas win, or

//"Both win the trophy" if their average scores are equal.

TEST DATA: Dolphins scored 96, 108, and 89. Koalas scored 88, 91, and 110.

const dolphinsAverageScore = (96 + 108 + 89) / 3;
const koalasAverageScore = (88 + 91 + 110) / 3;

console.log(dolphinsAverageScore, koalasAverageScore);

if (dolphinsAverageScore > koalasAverageScore && dolphinsAverageScore >= 100) {
  console.log("Dolphins win the trophy! 🏆");
} else if (
  koalasAverageScore > dolphinsAverageScore &&
  koalasAverageScore >= 100
) {
  console.log("Koalas win the trophy! 🏆");
} else if (
  dolphinsAverageScore === koalasAverageScore &&
  dolphinsAverageScore >= 100 &&
  koalasAverageScore >= 100
) {
  console.log("Both teams win the trophy! 🏆");
} else {
  console.log("No one wins the trophy! 😭");
}

*/

/*

// Switch Statement

const day = "monday";

switch (day) {
  case "monday": // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day!");
}

if (day === "monday") {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code examples");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day!");
}

*/

/*

// Statements and Expressions

// Expression: A piece of code that produces a value. It is something that produces a value. It is like a piece of a sentence.

3 + 4;
1991;
true && false && !false;

// Statement: A bigger piece of code that is executed and does not produce a value by itself. It is like a full sentence.

if (23 > 10) {
  const str = "23 is bigger";
} // It is a statement

const me = "John";
console.log(`I'm ${2037 - 1991} years old ${me}`); // It is an expression

// The Conditional (Ternary) Operator
// It is used for writing simple if/else statements in one line. It is a conditional operator.

const age = 23;
// age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink water 💧");

const drink = age >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}

console.log(drink2);
console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

*/

// Coding Challenge #4

//Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant.
//In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

//Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this.
//It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// HINT: To calculate 20% of a value, simply multiply it by 20/100 = 0.2

// HINT 2: Value X is between 50 and 300, if it's >= 50 && <= 300 😉

/*

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}.`
);

*/
