// CommonJS, every file is a mobule (by default)
// Modules - Encapsulated Code (only share minimum)

const { person1, person2 } = require("./4_names");
const sayHiFN = require("./5_utils").sayHi;
const { singlePersonOBJ } = require("./6_alternativeExport");
require("./7_mindGrenade");

console.log("--------------");
sayHiFN(person1);
sayHiFN(person2);
console.log(singlePersonOBJ);
console.log("--------------");
