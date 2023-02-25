// Functions allows us to bundle frequently used code , allowing us to make our code more generalized and prevent repeating ourselves

// The execution context is where we are when the code is executed. When we invoke a function, we get a local execution context with it's own local memory.

// Function Anatomy

function addTwo (num) {
  return num +2;
};
addTwo(3);
// 5

// How can we execute code over and over again without writing it more than once?

// We can bundle a set of intruction, save them under a label and when we ant to use that functionality we refer to it's label and add parentheses to say 'GO!'

// When we run a funtion we get a new (Local Excution Content) and (Local Memory) to store data.

// We use the (Call Stack) and the (Thread of Excution) to keep track of whoich execution context we are currently in

function addMyNums() {
  const favNum = 12;
  const secondFavNum = 7;
  return favNum + secondFavNum 
};

const sumOfFavNums = addMyNums(); // sumOfFavNums = 19
