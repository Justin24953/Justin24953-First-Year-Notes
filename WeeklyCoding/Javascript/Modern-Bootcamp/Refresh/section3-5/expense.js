//Expense Tracker
let myAccount = {
  name: "John Snow",
  expense: 0,
  income: 0,
};

// addIncome

// resetAccount

//getAccountSummary
// Account For Andrew has $900. $100 income, $100 in expenses.

// Order Of Testing
// addIncome
let addIncome = function (account, total) {
  account.income = account.income + total;
};
let pay = addIncome(myAccount, 60);

// addExpense
let addExpense = function (account, total) {
  account.expense = account.expense + total;
};

let tacoPrice = addExpense(myAccount, 50);

// getAccountSummary
let accountSummary = function (account) {
  return {
    summary: `${myAccount.name} has an income of ${myAccount.income} and ${myAccount.expense} in expenses`,
  };
};

// resetAccount
let resetAccount = function (account, reset) {
  account.expense = reset;
  account.income = reset;
};
let firstReset = resetAccount(myAccount, 0);

// getAccountSummary

let firstSum = accountSummary();
console.log(firstSum);
//   "summary": "John Snow has an income of 0 and 0 in expenses"
