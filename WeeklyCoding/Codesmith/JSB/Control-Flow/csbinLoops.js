// -----CHALLENGE 1-----

//Create a variable counter and set it equal to the number 0.

// Next, increment that counter variable from 0 to 1. You can do this a few different ways, but try using the JavaScript increment operator. If you are unfamiliar with this operator try checking these MDN docs: Javascript Increment Operator 😊.

// Finally, on the next lines continue to increment the counter variable by 1 until it reaches 10 and then log the counter to your console to check your work

let counter = 0;

counter++;
counter++;
counter++;
counter++;
counter++;
counter++;
counter++;
counter++;
counter++;
counter++;
console.log(counter)



let anotherCounter = 0;

while (anotherCounter < 10) {
  anotherCounter++;
};

console.log(anotherCounter)

// -----CHALLENGE 2-----

// Create a while loop that decrements bigNumber until it is the same as smallNumber. Once complete, log the value of bigNumber and smallNumber to the console. They should be the same.

let bigNumber = 100;
let smallNumber = 5

while (bigNumber > smallNumber) {
  bigNumber--
};

console.log(bigNumber)

// -----CHALLENGE 3-----

let fundsAvailable = 100;

let giftPrice = 15;

let numberOfGiftsPurchashed = 0;

let overBudget = false

while (overBudget !== true) {
  
  numberOfGiftsPurchashed++;
  
  fundsAvailable -= giftPrice
  if (fundsAvailable < giftPrice) {
    overBudget = true
  }
  
}

// -----Challenge 4-----
console.log(fundsAvailable)
console.log(numberOfGiftsPurchashed)

// Challenge 4
let myArray = [1, 7, 3, 8]

let tracker = 0;

while (tracker < myArray.length) {
console.log(myArray[tracker])
  tracker++
}

// -----Challenge 5-----

let anotherArray = [86,75,30,9]

for (let i = 0; i < anotherArray.length; i++) {
console.log(anotherArray[i])
}

// -----CHALLENGE 6-----
let randomNums = [12, 14, 16, 18, 20, 22, 24, 26, 28, 30]

let overFive = 0

for (let i = 0; i < randomNums.length; i++) {
 if (randomNums[i] > 5) {
  overFive++;
 }
}

// -----CHALLENGE 7-----

let favLanguage = 'Javascript'

let aTotal = 0

for (let i = 0; i < favLanguage.length; i++) {
  if (favLanguage[i] === 'a') {
    aTotal++;
  }
}

console.log(aTotal)
console.log(favLanguage.length)

// -----CHALLENGE 8-----
const messyMessage = [6, 3,'j',1, 3, 's', 5, 9, 2,'b', ' ', 3, 3, 'i', 's', 7, 0, ' ', 2, 'f', 1, 1, 1, 'u', 'n', 4, '!'];

let cleanMessage = '';

for (let i = 0; i < messyMessage.length; i++) {
  if (typeof messyMessage[i]=== 'string') {
    cleanMessage += messyMessage[i];

  }
};

console.log(cleanMessage)