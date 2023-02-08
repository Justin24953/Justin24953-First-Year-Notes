// -----Challenge: Type Coercion-----

// What happened is type coercion, an important concept in JavaScript. We can't add a string value and a number value together; instead, JavaScript "coerces" (changes) the number into a string and treats the + operator as an instruction to concatenate strings.

console.log(10 + 5);
 console.log("10" + 5);
 console.log(5 + "10");

 