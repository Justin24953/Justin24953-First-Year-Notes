// -----Challenge: Booleans-----

let iHaveChanged = false;

iHaveChanged = true;
	let iLoveCoding = true;
		let codingIsTooHard = false;

// -----Challenge: Booleans: Comparison Operators-----

// < - Less than
// > - Greater than
// <= - Less than or equal to
// >= - Greater than or equal to
// == - Is loosely equal to
// === - Is strictly equal to
// != - Is not loosely equal to
// !== - Is not strictly equal to

// 1. Compare small and large using the < operator. Assign the result to a variable called isSmaller.

// 2. Compare num and string. First, use the == operator to compare the two variables, and assign the result to a variable calledisLooselyEqual. Second, use the === operator to compare the variables; assign the result to a variable called isStrictlyEqual.

// 3. Compare isTrue and isFalse using the !== operator. Assign the result to a variable called isTrueNotFalse.

// 1.
const small = 2;
const large = 5342;
// ADD CODE BELOW (isSmaller)
let isSmaller = small < large

// 2.
const num = 45;
const string = "45";
// ADD CODE BELOW (isLooselyEqual and isStrictlyEqual)
let isLooselyEqual = num == string
let isStrictlyEqual = num === string


// 3.
const isTrue = true;
const isFalse = false;
let isTrueNotFalse = isTrue !== isFalse
// ADD CODE BELOW (isTrueNotFalse)



 console.log('Is 2 < 5342?');
 console.log(isSmaller);
 console.log('Is 45 loosely equal to "45"?'); 
 console.log(isLooselyEqual);
 console.log('Is 45 strictly equal to "45"?');
 console.log(isStrictlyEqual);
 console.log('Is true not equal to false?');
 console.log(isTrueNotFalse);