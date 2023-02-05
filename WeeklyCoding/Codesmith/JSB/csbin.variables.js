// -----CHALLENGE 1-----

// Step 1: Create a single line comment that says "This is a comment that won't be executed like regular Javascript code".


console.log(`This is a comment that won't be executed like regular Javascript code`)

// Step 2: Create a multiline comment that says "This is a multiline comment that also won't be executed like regular Javascript code!!!"

console.log(`This is a multiline comment that also won't be excuted like regular Javascript code!!!`)


// -----CHALLENGE 2-----

//Step 1

// Start off by creating a const variable called eyeColor and set it equal to the string of your eye color.
// Next, create a let variable called hairColor and set it equal to the string of your hair color.

//Lastly, log the eyeColor and hairColor variables to the console.

const eyeColor = 'black'
let hairColor = 'black'

console.log(eyeColor)
console.log(hairColor)

// Step 2

// Try to reassign the hairColor variable to a different color and then log it to the console.

// Next, try to reassign the eyeColor to a different color and log it to the console

hairColor = 'red';
console.log(hairColor);

//eyeColor = 'green
//console.log(eyeColor)

// -----CHALLENGE 3-----

//Step 1:

// Create a variable fName and set it equal to your first name.

// Create a variable lName and set it equal to your last name.

//Create a variable favShow and set it equal to your favorite TV show.

// Log the previous 3 variables to the console to check your work.

const fName = 'Life';
const lName = 'Saver';
let favShow = 'Death Note';

console.log(fName);
console.log(lName);
console.log(favShow);

//Step 2: 

// Declare a variable greeting, but don't set it equal to a value

//On another line of code, set your greeting variable to a greeting. Use the "+" to concatenate your string fName and lName variables from step 1 together with some additional text to form a greeting (e.g. "Hi, Phillip Troutman!")

let greeting;
	greeting = 'Hi, ' + fName + ' ' + lName;
		console.log(greeting);

//Step 3 

// Lastly, declare a variable fancyGreeting.

// On another line of code, set your fancyGreeting variable to another greeting (e.g "Good evening to you, Phillip Troutman!"). This time though, see if you can use backticks and something called template literals to more easily concatenate your fName and lName variables from Step 1

let fancyGreeting;
fancyGreeting = `Good evening to you, ${fName} ${lName}`
console.log(fancyGreeting)

// -----CHALLENGE 4-----

// STEP 1
let favNumber = 25;
let randomNumber = 13;

  // STEP 2
let sum = favNumber + randomNumber
	let product = favNumber * randomNumber
  	let difference = favNumber - randomNumber
    
    console.log(sum)
			console.log(product)
				console.log(difference)


  // STEP 3 (Bonus Step)
let remainder = favNumber % randomNumber

// -----CHALLENGE 5-----

  // STEP 1
let favSnacks = ['fries','pizza','cookies','chips']
console.log(favSnacks)
console.log(favSnacks.length)
console.log(favSnacks[1])
  // STEP 2
let favAnimals = ['Owl','Frog','Cat','Dog']
console.log(favAnimals)
console.log(favAnimals.length)
console.log(favAnimals[0])
  // STEP 3 (Bonus Step)
console.log(favAnimals[favAnimals.length - 1])

// -----CHALLENGE 6-----


  // STEP 1
let person = {
  fName: 'Star'
  
}

console.log(person)
	
  // STEP 2
	person.color = 'Green'
  	console.log(person)

  // STEP 3 
person['likes to code'] = false
console.log(person['likes to code'])
person['likes to code'] = true
console.log(person['likes to code'])
  
  // STEP 4 (Bonus Step)
let family = {
  brothers: 0,
  sisters: 0,
}

person.siblings =  family

console.log(family.brothers)
console.log(family.sisters)
