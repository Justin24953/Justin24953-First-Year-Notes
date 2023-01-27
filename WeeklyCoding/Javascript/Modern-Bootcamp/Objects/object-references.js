let myAccount = {
  name: 'Jake',
  expenses: 0,
  income: 0,
}

let addExpense = function (account, amount) {
   
   account.expenses = account.expenses + amount
    console.log(account)
}

//addIncome


//reset Account

//getAccountSummary




addExpense(myAccount, 2.50)
console.log(myAccount)

