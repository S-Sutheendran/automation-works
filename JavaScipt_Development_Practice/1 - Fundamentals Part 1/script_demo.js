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

