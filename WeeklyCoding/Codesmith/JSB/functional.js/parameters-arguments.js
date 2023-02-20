//-----Parameters Vs Arguments-----

// Functions provide us with parameters, which are similar to variables in that are labels for data that  get stored in our function's local memory.

// We can pass function arguments, which is just data we want to be assigned to our parameters (labels).

// Resolving (pairing them) our parameters and arguments are always the first thing we do when running a function

// Parameters : labels listed in a function definition.
function sumTwoNums (num1, num2) {
  const sum = num1 + num2;
  return sum;
};

// Arguments;: values passed into a function when it's invoked.
const result = sumOfFavNums(1, 3);

// Local Memeory
// num1 = 1
// num2 = 3
// sum 4

//Local Execution Context
// 4

function avgNums(nums) {
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
  };
  return sum / nums.length
};

const firstAvg = avgNums ([5, 3, 8 , 4]);
const secondAvg =  avgNums ([10, 20, 30, 40])
