// Function Basics

// Function - input(argument) , code, output(return)

let greetUser = function () {
  console.log("Hi");
};

greetUser();
// "Hi"

// How to Call A fucntion/ How to Add An Argument/ How to called a return statment.

let sqaure = function (num) {
  let result = num * num;
  return result;
};

let value = sqaure(3);

console.log(value);

// Convert Fahrenheit to Celsius

// (30 -> 0) (68 -> 20)

let ftc = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
};

let fTemp = ftc(32);
// 0
let fTemp2 = ftc(68);
// 20
console.log(fTemp);
console.log(fTemp2);

// Undefined and Null

// Undefined for variable
let name;

if (name === undefined) {
  console.log("name is unknown");
} else {
  console.log(name);
}

// Undefined for function arguments
// Undefined as fucntion default return value

let sqaured = function (num) {
  console.log(num);
};
// -> undefiend

let result = sqaured();
console.log(result);
// -> undefined

// Null as assigned value
let age = 27;
age = null;

console.log(age);
