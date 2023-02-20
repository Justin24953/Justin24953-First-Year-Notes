// Logging Console Vs Return Values.

// The return keyword allows us to take information,data from our function and pass it to the outer context that invoked it.

// console.log simply prints something to the console. This is known as a side effect. Side effects are anything that happens outside of the function (beyond the curly brackcets.)

function multiplyBy2(num) {
  console.log(num * 2);
};

const output = multiplyBy2(33);
console.log(output)
// what is output? why?

//Global Memory
// multiplyBy2 =
// output = 

//Local Memory 
// num = 33

// 66

