//let temp = 100
// Logical And Operator = &&. If both sides are true than it passes.
// Logical Or Operator = ||. If one side is true it passes
// if (temp >= 60 && temp <= 90) {
//console.log('Go Outside Lazy!')
//} else if(temp <= 0 || temp >= 120) {
//  console.log("Weather is too extreame ")
//} else {
//console.log('Whatever.')
//}

//Challenge
let isGuestVegan =  false
let isGuestVegan2 = true

if (isGuestVegan && isGuestVegan2) {
console.log('Here is the vegan Menu')
} else if (isGuestVegan || isGuestVegan2) {
console.log('We have vegan options for your friend')
}else {
  console.log('Here is our regular Menu')
}