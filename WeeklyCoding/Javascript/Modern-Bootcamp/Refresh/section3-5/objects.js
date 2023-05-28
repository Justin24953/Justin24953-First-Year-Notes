// Object Basics


console.log(myBook.key)
// 'value'

let myBook = {
  book:'Blade',
  pageCount: 234,
}

// Temeplate Literals With Obejct Values
console.log(`The Name of My book is ${myBook.book} and it has a page count of ${myBook.pageCount}`)
// "The Name of My book is Blade and it has a page count of 234"

// Reassign Object Values
myBook.pageCount = 26
console.log(myBook.pageCount)
// 26

// Challenge Area

// name, age, location

// Andrew is 27 and lives in Philadelphia

// Increase age by 1 and print message again 

let userProfile = {
  name: 'John',
  age: 25,
  location: 'New Jersey'
}

userProfile.age = userProfile.age + 1;
// userProfile.age = 25 -> 26

console.log(` ${userProfile.name} is ${userProfile.age} and lives in ${userProfile.location}`)

// " John is 26 and lives in New Jersey"