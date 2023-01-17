// student score, total possible score
// 15/20 --> You a C (72%)
// A 90-100, B 80 -89, c 70-79, D 60-69, F 0-59

let score = function (studentScore, possibleScore) {
  return studentScore / possibleScore * 100
}

let grade = score(null)

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

