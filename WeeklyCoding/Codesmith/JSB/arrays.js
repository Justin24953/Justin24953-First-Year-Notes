// Arrays have an index(postion) asspciated with each element in the list that  starts at 0 (known as as zero indexed)

//We can use bracket notation to access a value for a particular index

// Arrays have length property that allows you to see how many elements are in that array. (always 1 more than the last index)

// (Global Memory)
// groceryList:[`eggs`, `milk`, `bread`]
// randomItems: [75, true, null, `Codesmith`]
// 

const groceryList = [`eggs`, `milk`, `bread`];

console.log (groceryList);
console.log (groceryList[2]);
console.log (groceryList.length)

const randomItems = [75, true, null, `Codesmith`]

console.log(randomItems);
console.log(randomItems[3]);
console.log(randomItems.length)

// (Console)
// [`eggs`, `milk`, `bread`]
// bread
// 3
// [75, true, null, `Codesmith`]
// Codesmith
// 4