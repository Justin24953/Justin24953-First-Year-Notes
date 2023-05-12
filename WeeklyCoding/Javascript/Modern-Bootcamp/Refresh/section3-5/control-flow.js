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
  console.log(`This is True`)
} else if (!isAccountLocked) {
console.log(`This is false`)
}