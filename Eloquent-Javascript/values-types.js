/* "Below the surface of the machine, the program moves. Without effort, it expands and contracts. In great harmony, electrons scatter and regroup. The forms on the monitor are but ripples on the water. The essence stays invisibly below."

- Master Yuan-Ma, The Book of Programming */

/* NaN stands for “not a number”

^ You’ll get this result when you, for example, try to calculate 0 / 0 (zero divided by zero), Infinity - Infinity, or any number of other numeric operations that don’t yield a meaningful result. */

let ifNan = 0 / -0

console.log(ifNan)

let forwardSlash =  'This is the first line \nThis is the second line'

console.log(forwardSlash)

function logString(string) {
 return console.log(string)
}

logString('d')

logString("First Test Case.\nSecond Line ")

logString(`Backtic Test Case.\nSecond Line`)
