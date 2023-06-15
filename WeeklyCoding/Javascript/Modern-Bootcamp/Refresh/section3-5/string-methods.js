let name = `John Snow`

// Length Property
console.log(name.length)
// Remember that spaces count in length

// Convert to upper case
console.log (name.toUpperCase())

// So far I've realized that Properties work to recrieve infomation while methods function that allow us to do something to the data. An example of this would be a console.log() or name.toUpperCase()

// Challenge area

// isValidPassword

// length is more than 8 and it doesn't contain the word password.

let isValidPassword = function (password) {
if (password.length > 8 || password.includes(`John`)) {
return `The Password ${password} doesn't meet our requirements`
} else {
  return `Your Password ${password} is valid`
}
}

console.log(isValidPassword('John'))
console.log(isValidPassword('Jonny'))

// result The Password John doesn't meet our requirements
