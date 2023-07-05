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


