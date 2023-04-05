let castaway1 = {
  name: "Matt Blankinship",
};
let castaway2 = {
  name: "Claire Rafson",
};
let castaway3 = {
  name: "Carolyn Wiger",
};
let castaway4 = {
  name: "Yam Yam",
};
let castaway5 = {
  name: "Lauren Harpe",
};
let castaway6 = {
  name: "Danny Massa",
};
let castaway7 = {
  name: "Heidi",
};
let castaway8 = {
  name: "Carson Garrett",
};
let castaway9 = {
  name: "Maddy Pomilla",
};
let castaway10 = {
  name: "Bruce Perreault",
};
let castaway11 = {
  name: "Sarah Wade",
};
let castaway12 = {
  name: "Matthew Grinstead",
};
let castaway13 = {
  name: "Helen",
};
let castaway14 = {
  name: "Josh",
};
let castaway15 = {
  name: "Jaime",
};
let castaway16 = {
  name: "Kane",
};
let castway17 = {
  name: "Frannie",
};
let castaway18 = {
  name: "Brandon",
};

function addKeyValue(obj, key, value) {
  if (obj.hasOwnProperty(key)) {
    console.log("Key " + key + " already exists in the object.");
  } else {
    obj[key] = value;
  }
}

addKeyValue(castaway10, "bootOrder", 1);
addKeyValue(castaway9, "bootOrder", 2);
addKeyValue(castaway13, "bootOrder", 3);
addKeyValue(castaway2, "bootOrder", 4);
addKeyValue(castaway11, "bootOrder", 5);
addKeyValue(castaway12, "bootOrder", 6);

console.log(castaway10);
