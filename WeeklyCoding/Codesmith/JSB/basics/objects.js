// Objects - Are a way of storing similar infromation together (e.g numbers, strings, booleans , even functions) UNDER THE SAME LABEL

// Objects are made up of key-value pairs called properties that are serparated by commas. Keys are strings, but values can be ANY data type.

// We can use dot notation or bracket notation to acces a value for a particular key or add properties to the object.

const car = `Toyota`;
const myCar = {
  make: `Toyota`,
  model: `Prius`,
  hybrid: `true`,
  'average MPG': 51,
  upgrades: ['Roof Rack', 'Leather Seats'],
};

console.log(myCar.make);
console.log(myCar['average MPG']);
console.log(myCar.upgrades[0]);

//Console
//'Toyota'
// 51
// Roof Rack

myCar.color = 'blue';
myCar["keyless entry"] = true;