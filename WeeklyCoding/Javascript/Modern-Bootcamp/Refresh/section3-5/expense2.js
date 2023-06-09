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
  let balance = account.income - account.expense
  return  `${account.name} has an income of ${account.income} and ${account.expense} in expenses. This leaves you a balance of ${balance} `
};

let resetAccount = function (account, reset) {
  account.expense = reset;
  account.income = reset;
};
let firstReset = resetAccount(myAccount, 0);

let firstSum = accountSummary(myAccount);
console.log(firstSum);
// John Snow has an income of 0 and 0 in expenses. This leaves you a balance of 0 


let secondPay = addIncome(myAccount, 400);
let secondExpense = addExpense(myAccount, 200);
let secondSum = accountSummary(myAccount);
console.log(secondSum);
// John Snow has an income of 400 and 200 in expenses. This leaves you a balance of 200 
