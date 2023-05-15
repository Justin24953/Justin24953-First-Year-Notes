//Structure of if Statements
let temp = 32
let isFreezing = temp <=32

if (isFreezing) {
  console.log('It is freezing outside')
}

//Conditions Can be Set Inside
if (temp <= 32) {
console(`It's freezing outside`)
}

//Advanced if statements.
let isAccountLocked = true

if(isAccountLocked) {
  console.log(`Account is Locked`)
} else if (!isAccountLocked) {
console.log(`Account is Not Locked`)
} else {
  console.log(`Account doesn't hae a status.`)
}

// Logical And Operator
// && Both Side have to be True. False otherwise
//Example
temp = 65
 
if (temp >= 60 && temp <= 90) {
console.log(`it is pretty nice out`)
}

// Logical Or Operator 
// || Only One side has to be true for the code to Pass
if (temp <= 0 || temp >= 120) {
  console.log(`Do not Go outside`)
}

// Advanced If Statement With && and ||
if (temp>=60 && temp <= 90) {
  console(`It's a Pretty Good Day Today`)
} else if (temp <= 0 || temp >= 100) {
  console(`Stay Inside`)
} else {
  console(`Go Out Into The Unknown`)
}

// Variable Scope 
//Global Scope
  //Local Scope
    //Local Scope
  //Local Scope
let varOne = `varOne`

if (true) {
  console.log(varOne)
  let varTwo = `varTwo`
  console.log(varTwo)
  
  if (true) {
    let varThree = 'varThree'
    console.log(varThree)
  }
}

if (true) {
  let varFour = 'varFour'
  console.log(varFour)
}

// Variable Scope Part 2

 //Global Scope
  //Local Scope
    //Local Scope
  //Local Scope

  if (true) {
    if (true) {

    }
  }

  if (true) {

  }
