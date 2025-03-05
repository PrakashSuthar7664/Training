const assert = require("assert");
// console.log(assert);

// AssertionError

// try {
//   assert.strictEqual(10, 20, "Equal nahi h ");
// } catch (error) {
//   if (error instanceof assert.AssertionError) {
//     console.log(error.message);
//     console.log(error.actual);
//     console.log(error.expected);
//     console.log(error.operator);
//   }
// }

//assert.calltracker

// const tracker = new assert.CallTracker()
// function test(){} ;
// const trackedfn  = tracker.calls(test , 4) ;
// trackedfn();
// trackedfn();
// trackedfn();
// trackedfn();
// trackedfn();

// console.log(tracker.verify());
// console.log(tracker.report());

// assert.equal(3,3 , "equal")
// console.log("Pass if equal");

// assert.strictEqual(2, "2" , "Not Equal")
//  console.log("Equal h ");

// assert.deepEqual({ a: 1 }, { a: '1' });
// console.log("pass");

// assert.deepStrictEqual({ a: 1 }, { a: '1' });
// console.log("pass");

// assert.notStrictEqual(2,2)
// console.log("Not Equal");

// assert.ok( false , "Not truthy");
// console.log("Truthy");

// function throwError() {
//     throw new Error("Smothing Wrong")
// }
// assert.throws(throwError, Error, "Error aana chahiye!");

// assert.doesNotThrow(throwError , "Throw Error")

// async function asyncthrowError() {
//   throw new Error("Async error occour");
// }

// assert.rejects(asyncthrowError, Error , "aync error ana chaiye");
// console.log("passs");

// async function asyncNoError() {
//     return "No error!";
// }

// assert.rejects(asyncNoError , "fail hojayega kyu ki error nahi aayi ")

// Ek function likho jo throw new Error("Test Error!") kare aur assert.throws() ka use karke test karo.

// function test(){
//     throw new Error("Test Error!")
// }

// assert.throws(test , Error , "No Error In function")
// console.log("pass");

// Ek async function likho jo Promise.reject("Async Error!") kare aur assert.rejects() ka use karo.

async function test() {
  new Promise.reject("Async Error!");
}

assert.rejects(test, Error, "No async Error in function");
console.log("Pass");
