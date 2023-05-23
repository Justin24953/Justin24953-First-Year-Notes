// Multiple arguments
let add = function (a, b) {
  return a + b
}

let result = add(5,6)
console.log(result)

// Default Arguments
// Mulitiplayer video Game Leaderboard (Name and Score and Needed)

let getScoreText = function (name = 'Player 1', score = 0) {
  
  return `(Name: ${name}) (Score: ${score})`
}
let scoreText = getScoreText('John Doe', 54) 
console.log(scoreText)

///Challenge: Tip Calculator 
// total, tipPercent = .2 = 20%

let tipCalc = function (total, tipPercent = .2) {
  return total * tipPercent
}

let getTip = tipCalc(20,undefined)
let getTip2 = tipCalc(30,.3)

console.log(`Your Tip has been calculated $(${getTip})`)
//"Your Tip has been calculated $(4)"
console.log(`Your Tip has been calculated $(${getTip2})`)
//"Your Tip has been calculated $(9)"

// Function Scope
// Global Score (ftc, fTemp, fTemp2)
 // Local Scope (fahrenheit,celsius)
  // Local Scope(isFreezing)

let ftc = function (fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;

  if (celsius <= 0) {
    let isFreezing = true
    }
  return celsius;
};

let fTemp = ftc(32);
// 0
let fTemp2 = ftc(68);
// 20
console.log(fTemp);
console.log(fTemp2);

// Template Strings
let state = 'New Mexico'
let age = 26
console.log(`My my stat is ${state} and my ${age} years old `)

