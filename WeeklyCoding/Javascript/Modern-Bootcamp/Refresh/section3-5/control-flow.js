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
let tem = 65
 
if (tem >= 60 && tem <= 90) {
console.log(`it is pretty nice out`)
}

// Logical Or Operator 
// || Only One side has to be true for the code to Pass
if (tem <= 0 || temp >= 120) {
  console.log(`Do not Go outside`)
}
