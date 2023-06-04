//Expense Tracker
let myAccount = {
  name: 'John Snow',
  expense: 0,
  income: 0,
}

let addExpense = function (account,total) {
 account.expense = account.expense + total
}

let tacoPrice = addExpense(myAccount,50)
console.log(myAccount)
console.log(myAccount.expense)

// addIncome

// resetAccount

//getAccountSummary
// Account For Andrew has $900. $100 income, $100 in expenses.

// (Order Of Testing)
// 0 addIncome
// 1 addExpense
// 2 getAccountSummary
// 3 resetAccount
// 4 getAccountSummary




