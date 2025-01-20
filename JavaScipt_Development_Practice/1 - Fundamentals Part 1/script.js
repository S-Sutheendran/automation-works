/**
 * JavaScript Fundamentals - Part 1
// let js = "amazing";
// if (js === "amazing") alert("JavaScript is FUN!");
console.log(40 + 28 + 30 + 10); // It is used to build a connection between the browser and the console.

// Values and Variables
console.log("Jonas");
console.log(23);

let firstName = "John Smith";
console.log(firstName);

Variable name conventions:

1. camelCase: Variable names start with a lowercase letter and every subsequent word starts with a capital letter. Example: myFirstName

2. Variables can only start with a letter, underscore, or dollar sign. They cannot start with a number. Example: _myFirstName, $myFirstName

3. Variables cannot use reserved keywords. Examaple: let, const, var, function, if, else, etc.

// let 3years = 3; // SyntaxError: Unexpected number

// Naming variables clearly and descriptively is very important. It makes the code more readable and understandable.

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);
console.log(myCurrentJob);
*/

/*

// Data Types
// Javascript always runs from top to bottom.
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun); // typeof variable is boolean
console.log(typeof 23);
console.log(typeof "Jonhn");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun); // typeof variable is string

//Undefine Data Type
let year;
console.log(year); // undefined
console.log(typeof year); // undefined

year = 1991;
console.log(typeof year); // number

console.log(typeof null); // object

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

// Logical Operators
// Logical Operators are used to combine multiple conditions. They allow us to write more complex logical conditions.

// AND (&&) Operator: Returns true if all conditions are true.

const hasDriverLicense = true;
