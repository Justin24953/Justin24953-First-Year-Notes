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

    console.log(`This is the ${counter} iteration of the number being sqaured. The result is ${number}`);
  }
}

sqauredCount(1)
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

sqauredCount(24)
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

