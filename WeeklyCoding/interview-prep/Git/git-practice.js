// write a function that returns the string, "hello, interview unit-1" 

function sayHello() {
  return "hello, interview unit-1"
}

// test
console.log(sayHello())

// run the program (look it up!)
// run git add .
// run git commit -m "interview exercise"
// run git push origin 


// What Is Git? 

/* [Git Is a (Version Control System)] */

// What is a (Version Control System)? 

// [Version Control Is A Way That Programmers Track Our Code Changes.]

// ^  We do this to track down bugs or return back to a previous version of the code.

/* Terms

* Directory -> Folder
*Terminal / Command Line -> Interface for Text Commands
* CLI -> Command Line Interface
*cd -> Change Directory 
* Repository -> Project, or the folder/place where your project is kept.
* Github -> A Website to  host your repositories */

/* Git Commands 

* clone -> Bring a repo that is hosted somewhere like Github into a folder on your local machine

* add -> Track your files and changes in Git

* commit -> Save your files in Git.

* push -> Upload Git Commits to a remote repo like Github

* pull -> Download changes from remote repo to your local machine, the opposite of push.


*/
let testMoney = 6.27;
let bills = {
	hundredDollar: 100.0,
	tenDollar: 10.0,
	fiveDollar: 5.0,
	oneDollar: 1.0,
	quarter: 0.25,
	dime: 0.1,
	nickel: 0.05,
	penny: 0.01
}

let FindingChange = (currency, amount) => {
	let resultBills = {};
	let cashLeftover = amount;

	for (let key in currency)	{
		while (cashLeftover >= currency[key])		{
			if (resultBills[key]) {   
				resultBills[key] += 1;
			}   
			else	{
				resultBills[key] = 1;
			}
			cashLeftover = (cashLeftover - currency[key]).toFixed(2)
		}
	}
	return resultBills;
}

FindingChange(bills, testMoney);