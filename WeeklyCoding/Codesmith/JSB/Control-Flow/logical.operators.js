// -----Logical Operators-----

// -----Logical && Operator-----

// Logical && evaluates true only if both operands are true

true && true // true
true && false // false
false && true // false
false && false // false

// -----Logical || Operators-----

// Logical || evaluates to true if either operand is true

true || true // true
false || true // true
true || false // true 
false || false // false 

// -----Logical Not ! Operator-----

// The Logical! inverts true to a false or false to a true .

// Only requires one operand

// Practice
const value1 = true && true; // true
const value2 = false && true // false
const value3 = false || false; // false
const value4 = !false; // true

const value5 = true && 'cat' // ???

// -----Truthy/Falsy Values & Boolean Contexts-----

// A boolean context is a piece of code that expects to be given a boolean value (true or false) - like logical operators

//  "Falsy" values include (false,0,-0,"",null,undefined,NaN)
// Everything else is "Truthy"

// -----Logical Operators Actually-----
// Logical AND: If both operands are truthy, it evaluates to the operand on the right, otherwise it evaluates to the first falst operand it comes across.

// Logical OR: if both operands are falsy, it evaluates to the operand on the right, otherwise it evaluates to the first truthy operand it comes across.

// Logical NOT: Evaluates to the inverse of the interpreted boolean value of the operand.

const value11 = true && (true); // true
const value22 = true && 'cat'; // cat
const value33 = 3 || false; // 3
const value44 = !false; // true
const value55 = !'cat'; // false

