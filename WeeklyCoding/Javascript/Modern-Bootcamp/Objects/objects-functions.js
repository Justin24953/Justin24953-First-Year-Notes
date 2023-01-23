let myBook = {
  title: '1984',
  author: 'George',
  pageCount: 326,
}

let otherBook = {
  title: 'Berserk',
  author: 'Kentaro Miura',
  pageCount: 700,
}

let getSummary = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  }
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary)

// Challenge area
// Create function - take fahrenheit in -return object with all three

//let fahrenheit = 132 

//et celsius = (fahrenheit - 32) * 5 / 9

//let kelvin = (fahrenheit - 32) * 5 / 9 + 273.15

//console.log(celsius)

// console.log(kelvin)

