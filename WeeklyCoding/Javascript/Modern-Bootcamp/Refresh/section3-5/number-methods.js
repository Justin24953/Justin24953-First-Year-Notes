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
return Math.round(equation)
}

console.log(roundDown(45.56 + 75.69))

// ->121