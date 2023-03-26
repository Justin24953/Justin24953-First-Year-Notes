// Intro To Javascript Functions and Objects

 /* let sum = 0;

const myGrades = [50, 75, 100];

sum = myGrades[0] + myGrades[1] + myGrades[2];

average = sum / myGrades.length;

console.log(average) -> (75) */

/* function averageGrade () {
  let myGrades = [50, 75, 100];
  let sum = 0;
  sum = myGrades[0] + myGrades[1] + myGrades[2]
  let average = sum / myGrades.length
  return average 
 }

 const output = averageGrade();
 const newOutput = averageGrade(); */
     
                     /* parameter */
 function averageGrade (myGrades) {
  let sum = 0;
  sum = myGrades[0] + myGrades[1] +myGrades[2]
  let average = sum / myGrades.length
  return average
 }
                            /* Argument */
 const output = averageGrade([50, 75, 100]) /* 75 */
 const newOutput = averageGrade([100,85,100]) /* 95 */

 
