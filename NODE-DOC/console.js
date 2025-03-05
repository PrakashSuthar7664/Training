// const consolemodule = require('console')
// // console.log(console);
// let myconsole = new consolemodule.Console(process.stdout)
// myconsole.log("ye custome console h ");

console.error("Ye ek error message hai");
console.warn("Ye ek warning hai");
console.info("Information: Server Running!");

const users = [
  { id: 1, name: "Amit", age: 25 },
  { id: 2, name: "Rahul", age: 28 },
  { id: 2, name: "Ana", age: 23 },
];
console.table(users);

console.time("Loop Execution Time");
for (let i = 0; i < 1000000; i++) {} // Dummy loop
console.timeEnd("Loop Execution Time");

function test() {
  console.count("Function called");
}

test();
test();
test();
test();
test();

console.clear() 

console.dir(users ,{colors : true} )
