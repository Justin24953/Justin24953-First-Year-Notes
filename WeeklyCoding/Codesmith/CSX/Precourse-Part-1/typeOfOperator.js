// -----typeof Operator-----

// Quite often in programming, we need to be able to look up what the specific data type of a given operand is. In JavaScript, the typeof operator returns the data type of its operand in the form of a string. Operand can be any object, function or variable.

const favMovie = "Star Wars: Episod IV";
const timesSeen = 732;
const goingToWatchItAgain = true; 

let favMovieType = typeof(favMovie)
let timesSeenType = typeof(timesSeen)
let seeAgainType = typeof(goingToWatchItAgain)

console.log(favMovieType)
console.log(timesSeenType)
console.log(seeAgainType)