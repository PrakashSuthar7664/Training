const path = require("path");
let notes = "/NODE-LEARN/test.txt";
console.log(path.basename(notes));
console.log(path.dirname(notes));
console.log(path.extname(notes));

console.log(path.basename(notes, path.extname(notes)));

const name = "prakash";

console.log(path.join("/", "user", name, "details.txt"));
console.log(path.resolve("test.txt"));
console.log(path.resolve("NODE-LEARN", "test.txt"));
console.log(path.resolve("/NODE-LEARN", "test.txt"));

