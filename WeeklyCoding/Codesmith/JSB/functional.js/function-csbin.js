// -----CHALLENGE 1-----
let greetingPt1 = 'Hello'
let greetingPt2 = 'World'

console.log(greetingPt1 + ' ' + greetingPt2)


function greeting () {
 let greetingPt1 = 'Hello'
 let greetingPt2 = 'World'
 return greetingPt1 + ' ' + greetingPt2
};

const welcome = greeting();

console.log(welcome)

// -----CHALLENGE 2-----

function createPartnerGreeting (name) {
 // let partnerName = 'Me, Myslef, and I'
  return `Hey ${name}`
};

let partnerGreeting = createPartnerGreeting('Josh')

console.log(partnerGreeting)

// -----CHALLENGE 3-----
function addTwo(num1,num2) {
  let sumOfTwo = num1 + num2
  return sumOfTwo
}

let sum = addTwo(5, 19)

console.log(sum)




//Uncomment the line below to check your work!
console.log(addTwo(10, 20)); // --> 30
console.log(addTwo(16, 199)); // --> 215