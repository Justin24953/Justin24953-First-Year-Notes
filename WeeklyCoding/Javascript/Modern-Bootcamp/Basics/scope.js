// Lexical Scope (Static Scope)
// Global Scope -  Everything outside code blocks.
// Local Scope - Things defined inisde a code block.
// In a scope you can access variables defined in that scope or, paret or ancestor scope.

// Global SCope (varOne)
// Local Scope (varTwo)
// Local Scope (varFour)
// Local Scope (varThree)
let varOne = 'varOne'

if (true) {
 console.log(varOne)
 let varTwo = 'varTwo'
 console.log(varTwo)

 if (true) {
  let varFour = 'varFour'
 }
}

if (true) {
  let varThree = 'varThree'
}
console.log('varTwo')