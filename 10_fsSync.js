// syncronous
// fs ==> file system

const { readFileSync, writeFileSync } = require("fs");

console.log("1. log: start");
// file path + encoding
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

// creates resultSync.txt if it doesn't exist
// Injects the content
writeFileSync(
  `./content/resultSync.txt`,
  `Here is the result: ${first}, ${second}`,
  { flag: "a" }
);
console.log("2. log: done");
console.log("3. log: starting the next one");
