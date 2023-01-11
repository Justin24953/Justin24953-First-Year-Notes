// Lexical Scope (Static Scope)
// Global Scope -  Everything outside code blocks.
// Local Scope - Things defined inisde a code block.
// In a scope you can access variables defined in that scope or, paret or ancestor scope.
let varOne = 'varOne'

if (true) {
 console.log(varOne)
 let varTwo = 'varTwo'
}

console.log('varTwo')