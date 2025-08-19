"use strict"; // Strict mode enables better error checking and prevents certain actions

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) {
  hasDriversLicense = true; // If the test is passed, the driver license is granted
}

if (hasDriversLicense) {
  console.log("I can Drive");
}

// const interface = "Audio";
// const private = 534;
*/

/*
// Functions

// Function Definition
function logger() {
  // Function Body
  console.log("My name is Sutheendran");
}

logger(); // Function call/invoke/running
logger();
logger(10);

// Function receive/returning value/data

// Function with Parameters
function fruitProcessor(apples, oranges) {
  // console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(10, 5); // Assigning values to the function parameters
console.log(appleJuice);

console.log(fruitProcessor(15, 5));

const appleOrangeJuice = fruitProcessor(2, 5);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);
*/

/*

// Function Declaration

const currentAge1 = calcAge1(1996); // Calling function before defining is possible

function calcAge1(bithYear) {
  return 2025 - bithYear;
}

// const currentAge1 = calcAge1(1996);
console.log(currentAge1);

// const currentAge2 = calcAge2(1997); // Calling function before defining is not possible in anonymous function because of hoisting

// Function expression / Anonymous function - This is the recommended way to avoid errors
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};

const currentAge2 = calcAge2(1997);
console.log(currentAge1, currentAge2);

// Arrow Function - Shorter and faster way to declare a function

const calcAge3 = (birthYear) => 2025 - birthYear; //Returns happen implicitly without a return keyword

const currentAge3 = calcAge1(1995);
console.log(currentAge3);

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  // console.log(age);
  const retirement = 60 - age;
  return `${firstName} retires in ${retirement} years`;
};

const currentAge4 = yearsUntilRetirement(1990, "Sutheendran");
console.log(currentAge4);

const currentAge5 = yearsUntilRetirement(1995, "Sutheendran");
console.log(currentAge5);
*/

/*

// Function calling other functions

function fruitCutter(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = fruitCutter(apples); //Function called inside other function
  const orangePieces = fruitCutter(oranges);
  // console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

const processedFruit = fruitProcessor(10, 5);
console.log(processedFruit);

// Incorrect way of writing code which allows repitition - Follow DRY (Don't Repeat Yourself)
function fruitProcessor(apples, oranges) {
  const applePieces = apples * 4;
  const orangePieces = oranges * 4;
  // console.log(apples, oranges);
  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

const processedFruits = fruitProcessor(10, 5);
console.log(processedFruits);
*/

/*
function calcAge(birthYear) {
  return 2025 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
  // console.log(age);
  const currentAge = calcAge(birthYear);
  const retirement = 60 - currentAge;
  if (retirement > 0) {
    return `${firstName} retires in ${retirement} years`;
  } else {
    console.log(`${firstName} already retired`);
    return -1;
  }
};

console.log(yearsUntilRetirement(1996, "Sutheendran"));
console.log(yearsUntilRetirement(1950, "Sutheendran"));
*/

/*
// Coding Challenge - 1

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

console.log(calcAverage(3, 4, 5));


// Test Data - 1
// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// Test Data - 2
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphin has scored ${avgDolphins} and is the winner`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas has scored ${avgKoalas} and is the winner`;
  } else {
    return `Neither team wins (${avgDolphins} vs. ${avgKoalas})`;
  }
}

console.log(checkWinner(scoreDolphins, scoreKoalas));
*/

/*
// Arrays

// const friends1 = "John";
// const friends2 = "Smith";
// const friends3 = "Jack";
// const friends4 = "Jill";

// The above one is hectic if there are more than 10 friends. This is where arrays comes in
const friends = ["John", "Smith", "Jack", "Jill"];
console.log(friends); // Array always starts with 0

const years = new Array(1997, 2000, 2020, 1997);
console.log(years);
console.log(friends.length);
console.log(friends[friends.length - 1]); // 4 - 1 = 3 Which is Jill
console.log(years.length);

console.log(friends[0]);
console.log(friends[3]);

console.log(years[2]);
console.log(years[1]);

friends[2] = "Jay"; // Only primitive values are immutable, array is a non-primitive so it is mutable
console.log(friends);

// friends = ["Bob", "Alice"];

const testData = ["John", 23, 75.5, 2025 - 1997, friends]; // Array can store multiple values of different types
console.log(testData.length);
console.log(testData);

const calcAge = function (birthYear) {
  return 2025 - birthYear;
};

const birth_years = new Array(1997, 2000, 2020, 1997);
console.log(calcAge(birth_years)); // It will return NaN (Not a Number)

const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

const ages = [
  calcAge(years[0]),
  calcAge(years[2]),
  calcAge(years[years.length - 1]),
];
console.log(ages);
*/

/*

// Array Methods

const friends = ["John", "Smith", "Jack", "Jill"];

// Add element at the end of the array
friends.push(23);
console.log(friends);

const newLength = friends.push("Drey");
console.log(newLength);

// Add element at the starting of the array
friends.unshift(12);
console.log(friends);

//Removes the default last elements of the array
console.log(friends.pop());
console.log(friends.pop());
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf("Jack"));
console.log(friends.indexOf(23)); // -1 will be returned if the element is not there

friends.push(23);
console.log(friends.includes("Jack")); // This is new method included in ES6 which will return boolean value
console.log(friends.includes("23")); // Strict type check will be done. So returned false

if (friends.includes("Jack")) {
  console.log("Jack is my friend");
}
*/

/*
//Coding Challenge - 2

const calcTip = function (bill) {
  return bill >= 50 && bill <= 30 ? bill * 0.15 : bill * 0.2;
};

// const calcTip = (bill) => (ill >= 50 && bill <= 30 ? bill * 0.15 : bill * 0.2);

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);
*/

/*
// Intro to Objects
const bio = {
  // Key value pair
  firstName: "Sutheendran",
  lastName: "S",
  age: 2025 - 1996,
  jobTitle: "Teacher",
  friends: ["Bob", "John", "Smith"],
};

console.log(bio);

// Dot VS Bracket Notation
console.log(bio.firstName);
console.log(bio["lastName"]);

const nameKey = "Name";
console.log(bio["first" + nameKey]);
console.log(bio["last" + nameKey]);

// console.log(bio.'last'+nameKey);

const interestedIn = prompt(
  "What do you know about Sutheendran? Choose beween firstName, lastName, age, job, and friends"
);

console.log(bio.interestedIn); // This will display undefined
console.log(bio[interestedIn]);

if (bio[interestedIn]) {
  console.log(bio[interestedIn]);
} else {
  console.log(
    "Wrong Request! Choose between firstName, lastName, age, job, and friends"
  );
}

bio.location = "India";
bio["instagram"] = "@sutheendran";
console.log(bio);

console.log(
  `${bio.firstName} has ${bio.friends.length} friends, and his best friend is called ${bio.friends[0]}`
);
*/

/*
// Object Methods

const bio = {
  // Key value pair
  firstName: "Sutheendran",
  lastName: "S",
  birthYear: 1996,
  jobTitle: "Teacher",
  friends: ["Bob", "John", "Smith"],
  hasDrivingLicense: true,

  // Function expressions are allowed whereas function declaration is not
  // calcAge: function (birthYear) {
  //   return 2025 - birthYear;
  // },

  // calcAge: function () {
  //   // console.log(this);
  //   return 2025 - this.birthYear;
  // },

  calcAge: function () {
    // console.log(this);
    this.age = 2025 - this.birthYear;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.jobTitle
    }, and he has ${this.hasDrivingLicense ? "a" : "no"} driver's license`;
  },
};

console.log(bio.calcAge());
console.log(bio.age);
console.log(bio.age);
console.log(bio.age);

// console.log(bio.calcAge(1996)); // Dot Notation
// console.log(bio["calcAge"](1996)); // Bracket Notation

console.log(bio.getSummary());
*/

/*

// Coding Challenge - 3
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2; // Using exponentiation operator
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2; // Using exponentiation operator
    return this.bmi;
  },
};

console.log(mark.calcBMI());
console.log(john.calcBMI());

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})`
  );
} else if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})`
  );
}

*/

/*

// For Loop

for (let i = 1; i <= 10; i++) {
  console.log(`Lifting weights repetition ${i}`);
}
*/

/*
// Looping Arrays

const testData = ["John", 23, 75.5, 2025 - 1997, [23, 45, 67], true];

const types = [];

for (let i = 0; i < testData.length; i++) {
  console.log(testData[i], typeof testData[i]);
  // types[i] = typeof testData[i];
  types.push(typeof testData[i]);
}

console.log(types);

// Creating an array with different types of values
const years = [1997, 2000, 2020, 1997];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2025 - years[i]);
}
console.log(ages);
// Continue and Break Statements
const testData2 = ["John", 23, 75.5, 2025 - 1997, [23, 45, 67], true];

for (let i = 0; i < testData.length; i++) {
  if (typeof testData[i] !== "string") continue; // Skip the iteration if the type is not string
  console.log(testData[i], typeof testData[i]);
}

for (let i = 0; i < testData.length; i++) {
  if (typeof testData[i] === "number") break; // Stop the iteration if the type is number
  console.log(testData[i], typeof testData[i]);
}

// Looping Backwards and Loops in Loops
const testData3 = ["John", 23, 75.5, 2025 - 1997, [23, 45, 67], true];
for (let i = testData3.length - 1; i >= 0; i--) {
  console.log(i, testData3[i], typeof testData3[i]);
}
// Looping through nested arrays
const nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i < nestedArray.length; i++) {
  for (let j = 0; j < nestedArray[i].length; j++) {
    console.log(nestedArray[i][j]);
  }
}
// The above code will print each element in the nested array
// while the outer loop iterates through each sub-array.
// While Loop

let i = 0;
while (i < 10) {
  console.log(`Lifting weights repetition ${i + 1}`);
  i++;
}
// Rolling a dice until we get a 6
let dice = Math.trunc(Math.random() * 6) + 1; // Generates a random number between 1 and 6
console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1; // Generates a new random number
  if (dice === 6) {
    console.log("You rolled a 6, stopping the loop!");
  }
}

*/

/*
// Coding Challenge - 4
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(bills[i] + tip);
}
console.log(bills, tips, totals);
const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
const averageTip = calcAverage(tips);
const averageTotal = calcAverage(totals);
console.log(`Average Tip: ${averageTip}`);
console.log(`Average Total: ${averageTotal}`);
// The above code calculates the average tip and total from the bills array
// It uses a function to calculate the average by summing up the values and dividing by the length of the array
// It also uses a for loop to iterate through the bills array, calculate the tip for each bill, and store the results in the tips and totals arrays
// Finally, it logs the average tip and total to the console
*/
