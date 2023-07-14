/*  Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */

// console.log numbers 1 - 100.
// Exclude numbers that are divisble by 3. 

// My Orginal Solution
function callFizzBuzz() {
  
  for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("FizzBuzz");
    }
    if (i % 3 == 0) {
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log(callFizzBuzz())


// Write a function that starts FizzBuzz
// Remember That console.log() is for testing your code. Remember to use returns.
// Question? Is FizzBuzz Loop going to within the function?
// Question? If FizzBuzz Loop isn't in the function then how would that work?

// Book Solution
for (let n = 1; n <= 100; n++) {
  let output = "";
  if (n % 3 == 0) output += "Fizz";
  if (n % 5 == 0) output += "Buzz";
  console.log(output || n);
}

// ^ Throughout the book it's keep that reiterating can be variables attached to different values. This solutions uses the full power of the (for) loop and the (let) keyword.

function callFizz () {
  for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
  }
}

callFizz()