let myAccount = {
  name: "John Snow",
  expense: 0,
  income: 0,
};

let addIncome = function (account, total) {
  account.income = account.income + total;
};
let pay = addIncome(myAccount, 60);

let addExpense = function (account, total) {
  account.expense = account.expense + total;
};

let tacoPrice = addExpense(myAccount, 50);

let accountSummary = function (account) {
  let balance = account.income - account.expense;
  return {
    summary: `${myAccount.name} has an income of ${myAccount.income} and ${myAccount.expense} in expenses. ${balance}`,
  };
};

let resetAccount = function (account, reset) {
  account.expense = reset;
  account.income = reset;
};
let firstReset = resetAccount(myAccount, 0);

let firstSum = accountSummary();
console.log(firstSum);

let secondPay = addIncome(myAccount, 400);
let secondExpense = addExpense(myAccount, 200);
let secondSum = accountSummary();
console.log(secondSum);
