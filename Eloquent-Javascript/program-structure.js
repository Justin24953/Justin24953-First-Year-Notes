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

let one = 1, two = 2;
console.log(one + two);
// → 3

// (While and Do Loops)
function loopNumber (number) {
while (number <= 10) {
  console.log(`The number is ${number}`);
  number = number + 1;
};
};

loopNumber(0)
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
loopNumber(4)

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


let result = 1;
let counter = 0;
while (counter < 10) {
  result = result * 2;
  counter = counter + 1;
}
console.log(result);
// → 1024

// I don't like how this looks.

function counter (number) {
  let iteration = 0
while (number <= 10) {
  number = number + 1

console.log(`This is the ${iteration} iteration `)
}
}

