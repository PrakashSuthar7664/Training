const fs = require("fs");
// console.log(fs);

function morework() {
  console.log("More Work");
}

//blocking
const readfileWithSync = fs.readFileSync("./NODE-LEARN/test.txt");
console.log(readfileWithSync);
morework();

// Non-blocking

fs.readFile("./NODE-LEARN/test.txt", (err, data) => {
  if (err) console.log(err);
  else console.log(data.toString());
});
morework() ;
