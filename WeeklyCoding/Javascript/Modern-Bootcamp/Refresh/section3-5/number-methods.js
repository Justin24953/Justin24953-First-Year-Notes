// Exploring Number Methods

let num = 43.48;

console.log(num.toFixed(0));

// -> 43;

let num1 = 43.48;

console.log(num1.toFixed(2));

// -> 43.48;

let num2 = 43.48;

// console.log(num2.toFixed(-1));

// -> RangeError: toFixed() digits argument must be between 0 and 100

let roundDown = function (equation) {
  return Math.round(equation);
};

console.log(roundDown(45.56 + 75.69));

// ->121

// While trying to create a fucntion that rounds a equation I came across an error. (TypeError: equation.round is not a function). My first thought was that I misspelled something. I didn't realize that certain methods can only be used by classes. I later found out that these are call Static Methods.

// A static method is a method that belongs to a class rather than an instance of a class. This means you can call a static method without creating an object of the class. Static methods are sometimes called class methods.

// For example: Math.roundDown(); // Math is the name of class and roundDown is a method. A static method is also known as class method in java because it belongs to a class rather than an individual instance of a class.

// Formula For Creating random Whole Numbers. (Just Change In the Min and Max)

let max = 40;

let min = 30;

let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNum);

// Challenge
// Take In A Guess Between A Certain Range
// 1-5 true if correct -  false if not correct .

let makeGuess = function (guess) {
  let max = 0;

  let min = 6;

  let digit = Math.floor(Math.random() * (max - min + 1)) + min;

  let call = guess === digit;

  return `Your guess ${guess} was ${call}. The real answer was ${digit}.`
};

console.log(makeGuess(1));

// -> Your guess 1 was false. The real answer was 4.

// -> Your guess 1 was true. The real answer was 1.