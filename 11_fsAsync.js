// async

const { readFile, writeFile } = require("fs");

// retrieving file content
// path, encoding, callback fn
// ==> callback hell

console.log("1. log: start");

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log("Uh oh, something is wrong with first");
    return;
  }
  const first = result;
  console.log(first);
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log("Uh oh, something is wrong with second");
      return;
    }
    const second = result;
    console.log(second);

    writeFile(
      "./content/resultAsync.txt",
      `Here is the async result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log("Uh oh, something is wrong with writeFile");
          return;
        }
        console.log("2. log: done");
      }
    );
  });
});

console.log("3. log: start next task");
