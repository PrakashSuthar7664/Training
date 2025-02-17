// function hasKey(obj , key){
// if(key in obj){
//     return true ;
// }
// else{
//     return false ;
// }
// }
// const user = { name: "Amit", age: 25 };
// console.log(hasKey(user, "name")); // ✅ true
// console.log(hasKey(user, "city")); // ✅ false

// function getKeys(obj){
// return Object.keys(obj) ;
// }
// const user = { name: "Amit", age: 25 };
// console.log(getKeys(user)); // ✅ ["name", "age"]

// function getValues(obj){
//     return Object.values(obj)
// }
// const user = { name: "Amit", age: 25 };
// console.log(getValues(user)); // ✅ ["Amit", 25]

// function objectToPairs(obj){
//     return Object.entries(obj)
// }

// const user = { name: "Amit", age: 25 };
// console.log(objectToPairs(user));
// // ✅ [["name", "Amit"], ["age", 25]]

// function pairsToObject(obj){
//     return Object.fromEntries(obj)
// }
// const pairs = [["name", "Amit"], ["age", 25]];
// console.log(pairsToObject(pairs));
// // ✅ { name: "Amit", age: 25 }

// function mergeObjects(obj1, obj2){
//     // return Object.assign({} , obj1,obj2 );
//     // return {...obj1 ,...obj2}
// }
// const obj1 = { name: "Amit" };
// const obj2 = { age: 25 };
// console.log(mergeObjects(obj1, obj2));
// // ✅ { name: "Amit", age: 25 }

// function removeKey(obj , key ){
//     delete obj[key] ;
//     return obj ;
// }
// const user = { name: "Amit", age: 25 };
// console.log(removeKey(user, "age"));
// // ✅ { name: "Amit" }

// function objectLength(obj){
//     return Object.keys(obj).length
// }
// const user = { name: "Amit", age: 25, city: "Delhi" };
// console.log(objectLength(user)); // ✅ 3

// function cloneObject(obj){
//   let newObj = JSON.parse(JSON.stringify(obj))
//   newObj.age = 30 ;
//   return newObj;

// }
// const user = { name: "Amit", age: 25 };
// const clonedUser = cloneObject(user);
// clonedUser.age = 30;
// console.log(user.age); // ✅ 25 (original should not change)
// console.log(clonedUser.age); // ✅ 30

// function highestScore(obj){
//   return  Object.keys(obj).reduce((acc, curr)=> {
//        return  obj[acc] > obj[curr] ? acc : curr
//     })
// }
// const scores = { Amit: 80, Ravi: 95, Suman: 89 };
// console.log(highestScore(scores)); // ✅ "Ravi"

// const fruits = [
//     {name:"apples", quantity:300},
//     {name:"bananas", quantity:500},
//     {name:"oranges", quantity:200},
//     {name:"kiwi", quantity:150}
//   ];
//   let result = Object.groupBy(fruits , ({quantity})=> {
//     return quantity > 200 ? "low" : "ok" ;
//   })

//   console.log(result.low);

// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     language : "EN",
//     get lang(){
//           return this.language
//     },

//     set lang(name){
//         this.language = name ;
//     }
//   };
//   Object.defineProperty(person ,"language"  ,  {value : "NO"})
//  person.lang = "english"
//  console.log(person.lang);

// function factorial(num) {
//   if (num == 1) {
//     return 1;
//   }
//   return num * factorial(num - 1);
// }

// function fact(num) {
//   let sum = 0;
//   while (num >= 1) {
//     sum += factorial(num);
//     num--;
//   }
//   return sum;
// }

// console.log(fact(5));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Output: { even: [2, 4, 6, 8, 10], odd: [1, 3, 5, 7, 9] }

// let result = numbers.reduce((acc, curr)=>{
//  curr % 2 == 0 ? acc.even.push(curr) : acc.odd.push(curr);
//  return acc
// } , {even : [], odd : []} )
// console.log(result);

// const arr = [45, 12, 78, 34, 89, 23, 67];
// // Output: { max: 89, min: 12 }

// let result = arr.reduce((acc,curr)=>{
//     acc.max > curr ? acc.max : acc.max = curr ;
//     acc.min < curr ? acc.min : acc.min = curr ;
//   return acc
// },{ max : 0, min : Number.MAX_VALUE })
// console.log(result);

// const nums = [1, 2, 2, 3, 4, 4, 5, 6, 7, 7, 8];
// // Output: [1, 2, 3, 4, 5, 6, 7, 8]

// let result = [...new Set(nums)]
// console.log(result);

// const str = "hello";
// Output: "olleh"

// let r = str.split("").reduce((acc,curr)=>curr+acc, "")
// console.log(r);

// function addition(a,b){
//     console.log(a+b);

// }

// addition(3, 2)
// // ➞ 5

// addition(-3, -6)
// // ➞ -9

// addition(7, 3)
// //  ➞ 10

// function remainder(a,b){
//     console.log(a%b);

// }

// remainder(1, 3)
// remainder(3, 4)
// remainder(-9, 45)
// remainder(5, 5)

// function convert(n){
//   return n*60
// }
// console.log(convert(5))

// function matchHouse(n){
// if(n==0 ){
//     return 0 ;
// }
//     return n * 6 - (n-1) ;

// }
// console.log(matchHouse(87));

// function minMax(arr){
//    let min = Math.min(...arr)
//    let max = Math.max(...arr)
//    console.log([min , max ])

// }
// minMax([1, 2, 3, 4, 5])
// minMax([2334454, 5])
// minMax([1])

// function timeForMilkAndCookies(D){
// if(D.getMonth() == 11 && D.getDate()==24){
//     return true ;
// }
// else {
//     return false ;
// }

// }
// console.log(timeForMilkAndCookies(new Date(2013, 11, 24)))
// console.log(timeForMilkAndCookies(new Date(2013, 0, 23)));
// console.log(timeForMilkAndCookies(new Date(3000, 11, 24)) );

// function binary(n){
//    return n.toString(2)
// }
// console.log(binary(5))

// function numberSquares(n) {
//   if (n == 1) {
//     return 1;
//   }
//   let v = numberSquares(n - 1);
//   return n * n + v;
// }
// console.log(numberSquares(3));

// function tuckIn(arr1 ,arr2){
// return [arr1[0] , ...arr2 , arr1[arr1.length -1]]
// }

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]))
// console.log(tuckIn([15,150], [45, 75, 35]));
// console.log(tuckIn([[1, 2], [5, 6]], [[3, 4]]) );
// tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9]) ➞ [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// function potatoes(str){
//   console.log( str.split("potato").length - 1);
// }

// potatoes("potato")
// potatoes("potatopotato")
// potatoes("potatoapple")

// console.log(0xFF.toString(2).padStart(8,"0"));

// console.log([1, 2, "aasf", "1", "123", 123].filter(v => typeof v != "string"))

// function numberSplit(num) {
//   let a = Math.floor(num / 2);
//   let b = num - a;
//   console.log([a, b]);
// }
// numberSplit(4);
// //  ➞ [2, 2]
// numberSplit(10);
// numberSplit(11);
// numberSplit(-9);
// function doubleChar(str){
//     console.log(str.split("").flatMap(x=> [x,x]).join("")) ;
// }
// doubleChar("String")
// doubleChar("Hello World!")
// doubleChar("1234!_ ")


// function sortByLength(arr){
// console.log(arr.sort((a,b)=>a.length - b.length))
// }
// sortByLength(["a", "ccc", "dddd", "bb"])
// sortByLength(["apple", "pie", "shortcake"])
// sortByLength(["may", "april", "september", "august"])
// sortByLength([]) 


// function sumOfCubes(arr){
//     let sum = 0 ;
// arr.flatMap(x=> [x*x*x]).map(val => sum+=val)
// console.log(sum);

// }

// sumOfCubes([1, 5, 9])
// sumOfCubes([3, 4, 5])
// sumOfCubes([2])
// sumOfCubes([])

// let a = Math.PI
// console.log(a.toFixed(15));


// function highestDigit(num){
//    let a =  num.toString().split("")
//    console.log(Math.max(...a))
// }
// highestDigit(379) 
// highestDigit(2)
// highestDigit(377401)
// function getAbsSum(arr){
//     return arr.reduce((acc,curr)=>{        
//       return acc+Math.abs(curr) ;
//     },0)
// }
                
// console.log(getAbsSum([2, -1, 4, 8, 10]))
// console.log(getAbsSum([-3, -4, -10, -2, -3]))
// console.log(getAbsSum([2, 4, 6, 8, 10]))



