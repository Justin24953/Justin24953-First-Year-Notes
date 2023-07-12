let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark

//^ An Example Of Attaching The Tentacle Being Binded To Another Variable.

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

let one = 1,
  two = 2;
console.log(one + two);
// → 3

// (While and Do Loops)
function loopNumber(number) {
  while (number <= 10) {
    console.log(`The number is ${number}`);
    number = number + 1;
  }
}

loopNumber(0);
/* ->
The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
The number is 10 */
loopNumber(4);

/* ->
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
The number is 10
*/

// -> The number is 1

/*let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024 */

// ^ Let's Turn this into a function *

function sqauredCount(number) {
  let counter = 0;
  while (counter < 10) {
    number = number * 2;
    counter = counter + 1;

    console.log(
      `This is the ${counter} iteration of the number being sqaured. The result is ${number}`
    );
  }
}

sqauredCount(1);
/* This is the 1 iteration of the number being sqaured. The result is 2
This is the 2 iteration of the number being sqaured. The result is 4
This is the 3 iteration of the number being sqaured. The result is 8
This is the 4 iteration of the number being sqaured. The result is 16
This is the 5 iteration of the number being sqaured. The result is 32
This is the 6 iteration of the number being sqaured. The result is 64
This is the 7 iteration of the number being sqaured. The result is 128
This is the 8 iteration of the number being sqaured. The result is 256
This is the 9 iteration of the number being sqaured. The result is 512
This is the 10 iteration of the number being sqaured. The result is 1024 */

sqauredCount(24);
/* This is the 1 iteration of the number being sqaured. The result is 2
This is the 2 iteration of the number being sqaured. The result is 4
This is the 3 iteration of the number being sqaured. The result is 8
This is the 4 iteration of the number being sqaured. The result is 16
This is the 5 iteration of the number being sqaured. The result is 32
This is the 6 iteration of the number being sqaured. The result is 64
This is the 7 iteration of the number being sqaured. The result is 128
This is the 8 iteration of the number being sqaured. The result is 256
This is the 9 iteration of the number being sqaured. The result is 512
This is the 10 iteration of the number being sqaured. The result is 1024
This is the 1 iteration of the number being sqaured. The result is 48
This is the 2 iteration of the number being sqaured. The result is 96
This is the 3 iteration of the number being sqaured. The result is 192
This is the 4 iteration of the number being sqaured. The result is 384
This is the 5 iteration of the number being sqaured. The result is 768
This is the 6 iteration of the number being sqaured. The result is 1536
This is the 7 iteration of the number being sqaured. The result is 3072
This is the 8 iteration of the number being sqaured. The result is 6144
This is the 9 iteration of the number being sqaured. The result is 12288
This is the 10 iteration of the number being sqaured. The result is 24576 */

/* let yourName;
do {
  yourName = prompt("Who are you?");
} while (!yourName);
console.log(yourName); */

/* This program will force you to enter a name. It will ask again and again until it gets something that is not an empty string. Applying the ! operator will convert a value to Boolean type before negating it, and all strings except "" convert to true. This means the loop continues going round until you provide a non-empty name. */

// For Loop

for (let number = 0; number <= 12; number = number + 2) {
  console.log(number);
}
// → 0
// → 2
//   … etcetera

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
  result = result * 2;
}
console.log(result);
// → 1024

// ^ I wonder if I can referance variables defined in loops. This Will Be A (Test) for Myself After I Finsih This Chapter

for (let current = 20; ; current = current + 1) {
  if (current % 7 == 0) {
    console.log(current);
    break;
  }
}
// → 21

// Interesting way to stop the loop. This not know this break statement would have been helpful to stop infinite loops.

// Updating Bindings Succinctly

// This allows us to shorten our counting example a little more.

for (let number = 0; number <= 12; number += 4) {
  console.log(number);
}
/* →
0
4
8
12
*/
for (let number = 6; number <= 60; number += 6) {
  console.log(number);
}
/* →
6
12
18
24
30
36
42
48
54
60
*/

// Looping A Triangle
/* Write a loop that makes seven calls to console.log to output the following triangle: 
#
##
###
####
#####
######
#######
*/

/*for (let sharp = '#'; !sharp ==  7) {
console.log(sharp)
}
console.log(sharp) */

/* for (i = 0; i < 7; i++) {
let sharp = ('#')
console.log(sharp)
} */

for (let line = "#"; line.length < 8; line += "#") {
  console.log(line);
}

// ^ I forgot about the length property. I got too used to putting all my conditions within functions.

/*  Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those). */

// console.log numbers 1 - 100.
// Exclude numbers that are divisble by 3. ( number% by 3)

/* for (i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    return "FizzBuzz";
  }
  if (i % 3 == 0) {
    return "Fizz";
  } else if (i % 5 == 0) {
    return "Buzz";
  } else {
    return i;
  }
} */

// Nothing is added to the console.log

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
