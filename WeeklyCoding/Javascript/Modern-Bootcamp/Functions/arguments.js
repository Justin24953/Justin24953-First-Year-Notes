// Multiple arguments
let add = function(a, b, c) {
  return a + b + c

}

let result = add(10, 1, 45)
console.log(result)

//Default Arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
return 'Name: ' + name + ' Score ' + score
}

let scoreText = getScoreText ()
console.log(scoreText)

// Challenge Area
// total, tipPercent

let getTipPercentage = function (total, tipPercent = 0.15) {
  return  total * tipPercent
  
}

let tip = getTipPercentage(40, .25)
console.log(tip)