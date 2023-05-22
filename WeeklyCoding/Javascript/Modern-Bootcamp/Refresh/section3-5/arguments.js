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