// -----Conditional Statements-----

// * if 
// * else if
// * else

// We create and use control flow blocks (difeerent lines of code that will execute based on defined conditions) using 'if', "else if",  and else conditions

// We have the ability to chain these keywords togetehr (connect one after the other) to have a more granular control of the flow of our code

if (somethingIsTruthy) {
// run some code
}

// -----if Conditional Statements-----

// Every "if" conditional statement will be evaluted.

// if a "if" conditional evaluates to truthy it's code block will execute.

// Each "if" keyword will be considered the start of a new control flow block.

// When multiple operators are on the same line we generally evaluate left to right in this order - arithmetic, then comparison, then logical operators.

const num = 2;
if (4 + 4 === 8) { // truthy
  console.log("1st code block ran");
}

if (1 * 10 === 5 * 2) { //truthy
  console.log ("2nd code block ran")
}

if (!num) { // falsy
console.log()
}

// ----- "else if" Conditional Statements-----
// * else if statments are add-ons to our "if" control flow block.
// * Add on additional conditions to the control flow block using "else if" conditional statements
// We can add any number of these statements to a single control flow block
// if one "if" or "else if" statements evaluates to truthy the remainder of the cotnrol flow block is not executed.

const num2 = 2;

if ( num2 && false) {  // falsy
console('The start'); 
} else if (4 > 1 || 18) {
  console.log ('2nd conditional ran'); //truthy
} else if ('cat' && "cat") {
  console.log ('3rd conditional ran'); // Javascript skips 
}

// -----"else" Conditional Statements-----
const testScore = 65;
let grade;

if (testScore >= 90) {
  grade = 'A';
}
else if (testScore >= 80) {
  grade = 'B';
}
else if (testScore >= 70) {
  grade = 'C'
}
else {
  grade = 'You Failed'
}


 

 
