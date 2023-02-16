// "while" Loops repeat a task over and over until a specific condition is met.

while (somethingIsTruthy) {
  // code to run
};

// The Point Of Loops

// A While loop allows us to do some intruction while a condition is truth

// When Javascript sees the while keyword it starts running some predefined steps.
// Step1: Check condition (if it's true)
// Step 2: Do this (then back to setep 1)

let number = 4;

//Run over while loop to run until we reach 0
while (number > 0) {
  number--;
  console.log(`number just got smaller`);
};

  console.log(number);

// "for" Loop structure with more built-in control statement.

for (let i = 0; i < 4; i++) {
  // code to run
}

// For Loop Anatomy

// * A for loop lets us access each index of a array (one by one) and do something with the element.
// * We get to refer back to our saved data using the label we gave it.

const myArray = [5, 3, 8, 4];
let sum = 0;
 
for (let i = 0; i < myArray.length; i++) {
sum = sum + myArray[i];
};

let average = sum / myArray.length





