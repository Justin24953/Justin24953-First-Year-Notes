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

