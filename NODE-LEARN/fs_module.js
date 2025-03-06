const fs = require("fs");

// fs.stat("./NODE-LEARN/test.txt", (err, data) => {
//   if (err) return console.log(err);
//   console.log(data);
//   console.log(data.isFile());
//   console.log(data.isDirectory());
//   console.log(data.size);
// });

// fs.open("./NODE-LEARN/test.txt", "r", (err, data) => {
//   if (err) return console.log(err);
//   else console.log(data);
// });

// fs.readFile("./NODE-LEARN/test.txt", "utf8", (err, data) => {
//   if (err) console.log(err);
//   else console.log(data);
// });

// const content = "some text";
// fs.writeFile("./NODE-LEARN/test.txt" , content , (err)=>{
//     if(err) console.log(err)
// })

// const content = "some text";
// fs.writeFile("./NODE-LEARN/test.txt", content, { flag: "a+" }, (err) => {
//   if (err) console.log(err);
// });
// fs.appendFile("./NODE-LEARN/test.txt", content, (err) => {
//   if (err) console.log(err);
// });

// fs.mkdir('./NODE-LEARN/testFolder' ,(err)=>{
//     if(err) console.log(err)
// })

// fs.stat("./NODE-LEARN/testFolder", (err, data) => {
//   if (err) console.log("directory not exsits");
//   if (data.isDirectory()) {
//     console.log("is diractory");
//   }
// });

// fs.readdir("./NODE-LEARN/testFolder", (err, files) => {
//   if (err) console.log(err);
//   console.log(files);
// });

// fs.rm("./NODE-LEARN/testFolder",  { recursive : true, force : true},  (err) => {
//   if (err) console.log(err);
//   console.log("successful");
// });


//streams
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Whats you name ? ", (name) => {
  console.log(`Hello ! ${name}`);
  rl.close();
});
