// function final(someinput, callback) {
//   callback(`${someinput},terminate by callback`);
// }

// function middleware(someInput, callback) {
//   return final(`${someInput} touched by middleware `, callback);
// }

// function initial() {
//   const sometext = "Hello This is a function";
//   middleware(sometext, function (result) {
//     console.log(result);
//   });
// }

// initial()

function init(s, callback) {
  callback(s);
}

init("Hello", function (result) {
  console.log(result);
});
