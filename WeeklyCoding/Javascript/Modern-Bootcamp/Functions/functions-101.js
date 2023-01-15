// Function - input (argument), code, output (return value)

let greetUser = function () {
  console.log('Welcome Bozo')
}

greetUser()

//Example
let square = function (num) { // input
  let result = num * num // code
   return result // output

}

let value = square(45)
let otherValue = square(55)

console.log(value)
console.log(otherValue)

//Challenge Area

// convertFahrenheitToCelsius

let convertFahrenheitToCelsius = function (fahrenheit) { // input
  let celsius = (fahrenheit - 32) * 5 / 9 // code
   return celsius // output
}

let temp = convertFahrenheitToCelsius(32)
let otherTemp = convertFahrenheitToCelsius(68)

console.log (temp)
console.log (otherTemp)