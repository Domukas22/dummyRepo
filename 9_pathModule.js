//

const path = require("path");

console.log(path.sep); // separator key of the system
console.log("------------------------");

const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);
console.log("------------------------");

const base = path.basename(filePath);
console.log(base);
console.log("------------------------");

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
