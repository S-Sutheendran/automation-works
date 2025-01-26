"use strict"; // Strict mode, helps to write secure code. It helps to avoid bugs and errors.

/*

// Variables
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriverLicense = true; //hasDriversLicense is not defined, so it will throw an error. This will happen because of strict mode.

if (passTest) hasDriversLicense = true; // If passTest is true, then hasDriversLicense will be true.
if (hasDriversLicense) console.log("I can drive!"); // If hasDriversLicense is true, then it will print "I can drive!".

// Reserved Keywords, these are the words that are reserved by JavaScript and cannot be used as variable names. This will throw an error in strict mode.

// const interface = "Audio"; // interface is a reserved keyword in JavaScript, so it will throw an error.

// const private = "Audio"; // This will throw an error in strict mode, because private is a reserved keyword in JavaScript.

*/

/*

// Functions

// Functions is used to write reusable code. It is a block of code that can be called whenever needed.

function logger() {
  console.log("My name is John Smith!");
}

// Calling / Running / Invoking function
logger(); // This will print "My name is John Smith!".

function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0); // This will print 5 0 and return "Juice with 5 apples and 0 oranges."

console.log(appleJuice); // This will print "Juice with 5 apples and 0 oranges."

console.log(fruitProcessor(5, 0)); // This will print 5 0 and return "Juice with 5 apples and 0 oranges."

const appleOrangeJuice = fruitProcessor(2, 4); // This will print 2 4 and return "Juice with 2 apples and 4 oranges."

console.log(appleOrangeJuice); // This will print "Juice with 2 apples and 4 oranges."

function myDetails(name, age, country) {
  const details = `My Name is ${name}, I am ${age} years old, and I am coming from ${country}`;
  return details;
}

const myInfo = myDetails("John Smith", 25, "India");
console.log(myInfo);

*/

/*

// Function Declarations vs Expressions

// Function Declaration

function calcAge1(birthYear) {
  return 2024 - birthYear;
}

const age1 = calcAge1(1996);
console.log(age1);

// Function Expression

// Function Expression is a function that is stored in a variable. It is a function value. It is a function that is defined by an expression.
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};

const age2 = calcAge2(1996);
console.log(age2);

// Arrow Functions

// Arrow Functions are a modern way of writing functions. It is a shorter way of writing functions.

const calcAge3 = (birthYear) => 2024 - birthYear; // return keyword is not needed in arrow functions. It will be implicitly returned.
const age3 = calcAge3(1996);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilRetirement(1996, "John Smith"));

*/

/*

// Functions Calling Other Functions

function cutFruitPieces(fruit) {
  return fruit * 4; // Any changes in this function will reflect in the fruitProcessor function.
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples); // This will call cutFruitPieces function and pass apples as an argument.
  const orangePieces = cutFruitPieces(oranges); // This will call cutFruitPieces function and pass oranges as an argument.

  const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`; // This will return the juice with apple pieces and orange pieces.
  return juice;
}

console.log(fruitProcessor(2, 3));

*/

/*

// Reviewing Functions

const calcAge = (birthYear) => 2024 - birthYear; // This is an arrow function that calculates the age. It takes birthYear as an argument and returns the age.

// This function calculates the years until retirement. It takes birthYear and firstName as arguments and returns the years until retirement.
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;

  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years.`;
  } else {
    return `${firstName} has already retired.`;
  }
};

console.log(yearsUntilRetirement(1996, "John Smith")); // This will call the yearsUntilRetirement function and pass 1996 and John Smith as arguments.
console.log(yearsUntilRetirement(1950, "Mike"));

*/
