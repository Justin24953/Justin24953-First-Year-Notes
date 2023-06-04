// Object Basics

let myBook = {
  book: "Blade",
  pageCount: 234,
};

// Temeplate Literals With Obejct Values
console.log(
  `The Name of My book is ${myBook.book} and it has a page count of ${myBook.pageCount}`
);
// "The Name of My book is Blade and it has a page count of 234"

// Reassign Object Values
myBook.pageCount = 26;
console.log(myBook.pageCount);
// 26

// Challenge Area

// name, age, location

// Andrew is 27 and lives in Philadelphia

// Increase age by 1 and print message again

let userProfile = {
  name: "John",
  age: 25,
  location: "New Jersey",
};

userProfile.age = userProfile.age + 1;
// userProfile.age = 25 -> 26

console.log(
  ` ${userProfile.name} is ${userProfile.age} and lives in ${userProfile.location}`
);

// " John is 26 and lives in New Jersey"

// Objects and Functions

let myNovel = {
  title: "Dune",
  authur: "Frank Herbert",
  pageCount: 896,
};

let otherNovel = {
  title: "Harry Potter",
  authur: "J.K.Rowling",
  pageCount: 223,
};
// Returning Objects from functions
let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.authur}`,
    pageCountSummary: `${book.title} has a page count of ${book.pageCount}`,
  };
};

let bookSummary = getSummary(myNovel);
console.log(bookSummary.summary);
// "Dune by Frank Herbert"

let bookSummary2 = getSummary(otherNovel);
console.log(bookSummary2.pageCountSummary);
// "Harry Potter has a page count of 223"

// Challenge: Create A Function That Returns An Object.

// Create Function - take fahrenheit in - return an object with all fahrenheit, celsius, and kelvin

/* 
let fahrenheit =  50
let celsius = (fahrenheit - 32) * 5/9
let kelvin = (fahrenheit + 459.67) * 5/9
*/

// Returning Objects From Functions

let getTemp = function (fahrenheit) {
  return {
    fahrenheit: fahrenheit,
    celsius: ((fahrenheit - 32) * 5) / 9,
    kelvin: ((fahrenheit + 459.67) * 5) / 9,
  };
};



let conversion = getTemp(60);
console.log(conversion.celsius);
// 15.555555555555555
console.log(conversion.kelvin);
// 288.7055555555556
console.log(conversion.fahrenheit);
// 60

/* In general, returning objects from functions can save time and make code more readable by eliminating the need to repeat object creation code in different parts of the program. It can also make it easier to maintain code, since changes to the object construction process can be made in a single place (the function) rather than in multiple places throughout the code. */

// Object Referances

// Expense Manager Application


let myAccount = {
  name: 'John Snow',
  expenses: 0,
  income: 0,
}

let addExpense = function (account, amount) {
account.expenses = account.expenses + amount
}

let accountBalance = addExpense(myAccount,50)
console.log(myAccount)
/*
{
  "name": "John Snow",
  "expenses": 50,
  "income": 0
}
*/



