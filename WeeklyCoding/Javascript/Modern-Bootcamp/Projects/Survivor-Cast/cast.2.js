let castaways = [
  { name: "Matt Blankinship" },
  { name: "Claire Rafson" },
  { name: "Carolyn Wiger" },
  { name: "Yam Yam" },
  { name: "Lauren Harpe" },
  { name: "Danny Massa" },
  { name: "Heidi" },
  { name: "Carson Garrett" },
  { name: "Maddy Pomilla" },
  { name: "Bruce Perreault" },
  { name: "Sarah Wade" },
  { name: "Matthew Grinstead" },
  { name: "Helen" },
  { name: "Josh" },
  { name: "Jaime" },
  { name: "Kane" },
  { name: "Frannie" },
  { name: "Brandon" },
];

let ratuTribe = [
  { name: "Brandon" },
  { name: "Kane" },
  { name: "Matthew Grinstead" },
  { name: "Jaime" },
  { name: "Lauren Harpe" },
  { name: "Maddy Pomilla" },
];

let sokaTribe = [
  { name: "Claire Rafson" },
  { name: "Frannie" },
  { name: "Heidi" },
  { name: "Danny Massa" },
  { name: "Josh" },
  { name: "Matthew Grinstead" },
];

let tikaTribe = [
  { name: "Carolyn Wiger" },
  { name: "Helen" },
  { name: "Sarah Wade" },
  { name: "Bruce Perreault" },
  { name: "Carson Garrett" },
  { name: "Yam Yam" },
];

//CRUD (Use the standard JavaScript functions for creating, reading, updating, and deleting objects and array elements.)
// 1. I need a fucntion that creates an Array
// 2. I need a function that creates an object within an array
// 3. I need a function that updates existing arrays.
// 4. I need a function that updates existing objects.
// 5. I need to be able to delete Array
// 6. I need to be able to delete an object within an array.
// 7. I need to bel able to read my Arrays.
// 8. I need to be able to search for my objects within arrays.

//1.  I might need to create function that's able to create multiple arrays.

function makeEmptyArray() {
  return [];
}

const emptyArray = makeEmptyArray();

console.log(emptyArray);

//2.
function addObjectToArray(array, object) {
  array.push(object);
}

const finTribe = [];
const survivorObject = {
  name: "John Doe",
};

addObjectToArray(finTribe, survivorObject);

console.log(finTribe);
