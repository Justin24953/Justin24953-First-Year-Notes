// Global Scope (convertFahrenheitToCelsius,temp,otherTemp)
//Local Scope (fahrenheit, celsius)
  // Local Scope (isFreezing)

let convertFahrenheitToCelsius = function (fahrenheit) { // input
  let celsius = (fahrenheit - 32) * 5 / 9 // code

  if (celsius <= 0) {
    let isFreezing = true
  }
   return celsius // output
}

let temp = convertFahrenheitToCelsius(32)
let otherTemp = convertFahrenheitToCelsius(68)

console.log (temp)
console.log (otherTemp)