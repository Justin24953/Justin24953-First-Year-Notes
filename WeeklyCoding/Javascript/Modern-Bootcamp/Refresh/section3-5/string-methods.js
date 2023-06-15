let name = `John Snow`;

// Length Property
console.log(name.length);
// Remember that spaces count in length

// Convert to upper case
console.log(name.toUpperCase());

// So far I've realized that Properties work to recrieve infomation while methods function that allow us to do something to the data. An example of this would be a console.log() or name.toUpperCase()

// Challenge area

// isValidPassword

// length is more than 8 and it doesn't contain the word password.

let isValidPassword = function (password) {
  if (password.length >= 8 && !password.includes(`John`)) {
    return `The Password ${password} meets our requirements`;
  } else {
    return `Your Password ${password} is invalid`;
  }
};

console.log(isValidPassword("John"));
// -> Your Password John is invalid
console.log(isValidPassword("Jonny1234"));
// ->  The Password Jonny1234 meets our requirements


// While making this function I questioned myself if this expression could be returned by itself by using a return statement. I played it safe and use an if statement, but next time I'll just test it out.

let isValidPassword2 = function (password) {
  return password.length >= 8 && !password.includes('John')
}

console.log(isValidPassword2('Snow1234'));
// true
console.log(isValidPassword2('John'));
// false
