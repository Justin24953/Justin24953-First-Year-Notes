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
console.log(bookSummary.summary)
// "Dune by Frank Herbert"


let bookSummary2 = getSummary(otherNovel);
console.log(bookSummary2.pageCountSummary)
// "Harry Potter has a page count of 223"


// Challenge: Create A Function That Returns An Object.

// Create Function - take fahrenheit in - return an object with all fahrenheit, celsius, and kelvin

/* 
let fahrenheit =  50
let celsius = (fahrenheit - 32) * 5/9
let kelvin = (fahrenheit + 459.67) * 5/9
*/


let tempConversions = {
  kelvin:  (fahrenheit + 459.67) * 5 / 9,
}

let getTemp = function(fahrenheit) {
  return {
    fahrenheit: `The temperature is ${fahrenheit} in fahrenheit `,
    celsius: `The temperature is ${fahrenheit} in celsius`,
    kelvin:`The temperatrue is ${fahrenheit} in kelvin`
  }
}

let ftc =  getTemp(tempConversions.kelvin)
console.log()