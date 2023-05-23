

// Grade Calculator
// Arguments (Student Score, Total Possible Score,)
// 15/20 -> You Got A C (75%)
// A 90 - 100, B 80 - 89, C 70 - 79, D 60 -69, f 0 - 59


let gradeCalc = function (total, perfect) {
  let grade = (total/perfect) * 100
if (grade >= 90 && grade <= 100 ) {
  console.log(`You Got An A(${grade})`)
  } else if (grade >= 80 && grade <= 89 ) {
    console.log(`You Got An B(${grade})`)
  }    else if (grade >= 70 && grade <= 79 ) {
    console.log(`You Got An C(${grade})`)
  }     else if (grade >= 60 && grade <= 69 ) {
    console.log(`You Got An D(${grade})`)
  }      else if (grade >= 0 && grade <= 59 ) {
    console.log(`You Got An F(${grade})`)
  } else {console.log(`You skipped the test or Cheated. Your Grade is 0`)}
}

let studentA =  gradeCalc(90,100)
// "You Got An A(90)"

let studentB = gradeCalc(80,100)
// "You Got An B(80)"


let studentZ = gradeCalc(1,20)
// "You Got An F(5)"
