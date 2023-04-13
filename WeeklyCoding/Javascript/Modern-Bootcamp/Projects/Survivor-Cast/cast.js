const castaway1 = {
  name: "Matt Blankinship",
};
const castaway2 = {
  name: "Claire Rafson",
};
const castaway3 = {
  name: "Carolyn Wiger",
};
const castaway4 = {
  name: "Yam Yam",
};
const castaway5 = {
  name: "Lauren Harpe",
};
const castaway6 = {
  name: "Danny Massa",
};
const castaway7 = {
  name: "Heidi",
};
const castaway8 = {
  name: "Carson Garrett",
};
const castaway9 = {
  name: "Maddy Pomilla",
};
const castaway10 = {
  name: "Bruce Perreault",
};
const castaway11 = {
  name: "Sarah Wade",
};
const castaway12 = {
  name: "Matthew Grinstead",
};
const castaway13 = {
  name: "Helen",
};
const castaway14 = {
  name: "Josh",
};
const castaway15 = {
  name: "Jaime",
};
const castaway16 = {
  name: "Kane",
};
const castway17 = {
  name: "Frannie",
};
const castaway18 = {
  name: "Brandon",
};




// Targets an already created object and creates a key-value pair
function addKeyValue(obj, key, value) {
  if (obj.hasOwnProperty(key)) {
    console.log("Key " + key + " already exists in the object.");
  } else {
    obj[key] = value;
  }
}

// Might Change this
function createStandAloneObject(key, value) {
  return {
    [key]: value,
  };
}

// Creates New Object
function addCastaway() {
  return {};
}

const castaway19 = addCastaway();
castaway19['name'] = 'Tyson'

addKeyValue(castaway10, "bootOrder", 1);
addKeyValue(castaway9, "bootOrder", 2);
addKeyValue(castaway13, "bootOrder", 3);
addKeyValue(castaway2, "bootOrder", 4);
addKeyValue(castaway11, "bootOrder", 5);
addKeyValue(castaway12, "bootOrder", 6);



console.log(castaway10);
console.log(castaway19)

