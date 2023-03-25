 /* var num = 3;
let name = 'codesmith';
const storeOfInfo = {
  name: 'Codesmith',
  home: ['New York City', 'Los Angeles'],
};

 const randomList = [1,'2',[3], {4:null}];
 let introToJavaScriptisAwesome = true; */
 
/* const myGrade = 75
if (myGrade <= 70) {
console.log(myGrade + ` ` + `is falling.`);
} else if (myGrade < 80) {
console.log (myGrade + `is passing`);
} else {
  console.log(myGrade + `is excellent`);
}

if (myGrade === 100) {
  console.log(`a perfect grade!`);
} */

/* const myGrades = [50, 75, 90]
let sum = 0

for (let i = 0; i < myGrades.length; i++) {
  // what is sum?
  // what is i?
  sum += myGrades[i]
  // now what is sum?
}
// what happens first and why?
let average = sum / myGrades.length
// console.log -> 71.6666666667 */

 const myNums = [50, 75, 90]

for (let i = 0; i < myNums.length; i++) {
const num1 = myNums[i];
for (let j = 0; j < myNums.length; j++){
const num2 = myNums[j]
// what is num2, j and my Nums[j]?
console.log(`Sum:`, num1 + num2)
}
}; 