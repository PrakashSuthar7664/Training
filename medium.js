// function countTrue(arr){
// console.log(
//     arr.reduce((acc,curr)=>{
//       return  curr == true ? acc+1 : acc ;
//     } ,0)
// );
// }
// countTrue([true, false, false, true, false]);

// function redundant(name){
// return () => {
//     console.log(name);
// }
// }
// // redundant("apple")
// const f1 = redundant("apple")
// f1()

// const f2 = redundant("pear")
// f2()
// const f3 = redundant("")
// f3()

// function shiftToRight(x ,y){
//     console.log(Math.floor(x/2**y));
// }
// shiftToRight(80, 3)
// shiftToRight(-24, 2)
// shiftToRight(-5, 1)
// shiftToRight(4666, 6)
// shiftToRight(3777, 6)
// shiftToRight(-512, 10)

// function perimeter(str, num) {
//   return str == "s" ? 4 * num : Math.PI * 2 * num;
// }

// console.log(perimeter("s", 7));
// console.log(perimeter("c", 4).toFixed(2));
// console.log(perimeter("c", 9).toFixed(2));

// function num_of_digits(num){
// let n = num ;
// count = 1 ;
// while(n>2){
//    let lastdigit = n/10 ;
//     n = lastdigit ;
//     count++;
// }
// console.log(count);
// console.log(num.toString().split("").length)
// }
// num_of_digits(1000)
// num_of_digits(12)
// num_of_digits(1305981031)
// num_of_digits(0)

// function addName(obj ,name , num){
//     return {...obj , [name] : num }
// }
// console.log(addName({}, "Brutus", 300))
// console.log(addName({ piano: 500 }, "Brutus", 400));
// console.log(addName({ piano: 500, stereo: 300 }, "Caligula", 440));

// function derivative(x,y){
//     return x * Math.pow(y , x-1)
// }

// console.log(derivative(1, 4))
// console.log(derivative(3, -2))
// console.log(derivative(4, -3)
// )

// function tetra(n){
//     console.log((n * (n + 1) * (n + 2)) / 6);
// }

// tetra(2)
// tetra(5)
// tetra(6)

// function compact(arr){
// //    return arr.reduce((acc,curr)=>{
// //        typeof curr == "false" ? acc : acc.push(curr)
// //        return acc
// //    },[])
// return arr.filter(x=>x!=false)
// }
// console.log(compact([0, 1, false, 2, "", 3]));

// function makePlusFunction(num) {
//   let n = num;
//   return (k) => {
//     console.log(k + n);
//   };
// }

// const plusFive = makePlusFunction(5);

// plusFive(2);
// // ➞ 7

// plusFive(-8);
// // ➞ -3

// const plusTen = makePlusFunction(10)

// plusTen(0)

// plusTen(188)

// plusFive(plusTen(0))

// function add(num){
//     let hn = num ;
//    return (n)=>{
//       console.log(n+hn);

//     }

// }

// add(10)(20)

// add(0)(20)

// add(-30)(80)

// function toArray(obj){
// console.log(Object.entries(obj))
// }

// toArray({ a: 1, b: 2 })
// // ➞ [["a", 1], ["b", 2]]
// toArray({ shrimp: 15, tots: 12 })
// // ➞ [["shrimp", 15], ["tots", 12]]
// toArray({})
// //  ➞ []

// function concat(...arr){
//  console.log(arr.flat());
// }

// concat([1, 2, 3], [4, 5], [6, 7])
// // ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7])
// // ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4])
// //  ➞ [1, 2, 3, 4]

// concat([4, 4, 4, 4, 4])
// //  ➞ [4, 4, 4, 4, 4]

// function add_suffix(str){
//   let n = str.split("") ;
//     return (s) => {
//         console.log([...s , ...n].join(""));
//     }
// }

// add_ly = add_suffix("ly")

// add_ly("hopeless")
// // ➞ "hopelessly"
// add_ly("total")
// // ➞ "totally"

// add_less = add_suffix("less")

// add_less("fear")
// // ➞ "fearless"
// add_less("ruth")
// // ➞ "ruthless"

// function triangle(n){
// console.log((n*(n+1)/2));

// }

// triangle(1)
// // ➞ 1
// triangle(6)
// //  ➞ 21
// triangle(215)
//  ➞ 23220

// class Circle {
//     constructor(n){
//        this.redius = n ;
//     }

//     getArea(){
//         console.log(Math.PI * Math.pow(this.redius,2))
//     }

//     getPerimeter(){
//         console.log(2 * Math.PI * this.redius);

//     }

// }

// // let circy = new Circle(11)
// // circy.getArea()

// // Should return 380.132711084365
// let circy = new Circle(4.44)
// circy.getPerimeter()

// Should return 27.897342763877365

// function changeEnough(arr, num){

//     [ a ,b ,c , d ] = arr

//      a1 = a *0.25
//      b1 = b *0.10
//      c1 = c *0.05
//      d1 = d *0.01
//     sum = a1+b1+c1+d1

//      sum  >= num ? console.log("true") :console.log("false") ;

// }

// changeEnough([2, 100, 0, 0], 14.11)// ➞ false

// changeEnough([0, 0, 20, 5], 0.75) //➞ true

// changeEnough([30, 40, 20, 5], 12.55) //➞ true

// changeEnough([10, 0, 0, 50], 3.85) //➞ false

// changeEnough([1, 0, 5, 219], 19.99) //➞ false

// function arrayOfMultiples(m, n) {
//   let newArr = [];
//   for (let i = 1; i <= n; i++) {
//     newArr.push(m * i);
//   }
//   console.log(newArr);
// }
// arrayOfMultiples(7, 5); //➞ [7, 14, 21, 28, 35]
// arrayOfMultiples(12, 10); //➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// arrayOfMultiples(17, 6); //➞ [17, 34, 51, 68, 85, 102]

// function keysAndValues(obj){
//     let key = Object.keys(obj);
//     let value = Object.values(obj)
//    console.log([key],[value])
// }
// keysAndValues({ a: 1, b: 2, c: 3 })
// // ➞ [["a", "b", "c"], [1, 2, 3]]

// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
// // ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

// keysAndValues({ key1: true, key2: false, key3: undefined })
// // ➞ [["key1", "key2", "key3"], [true, false, undefined]]

// function isRepdigit(num){
//     // n = num ;
//     // let lastdigit = n%10;
//     // n = Math.floor(n/10)
//     // console.log(n == lastdigit);

// }

// isRepdigit(66) //➞ true

// isRepdigit(0) //➞ true

// isRepdigit(-11) //➞ false

// let n = 0;
// while (n <= 1000) {
//   if (n < 10) {
//     console.log(n);
//     n++;
//   } else {
//     let check = n.toString().split("");
//     if (check.every((digit) => digit === check[0])) {
//       console.log(check.join(""));
//     }
//     n++;
//   }
// }

// function sortIt(arr){
//     let a = arr.sort((a,b)=>a-b)
//     console.log(a);
// }

// sortIt([4, 1, 3])
// sortIt([[4], [1], [3]])
// sortIt([4, [1], 3])
// sortIt([[4], 1, [3]])
// sortIt([[3], 4, [2], [5], 1, 6])

// function removeLeadingTrailing(num){
//   console.log(parseFloat(num));

// }
// removeLeadingTrailing("230.000") // ➞ "230"
// removeLeadingTrailing("00402")// ➞ "402"
// removeLeadingTrailing("03.1400")// ➞ "3.14"
// removeLeadingTrailing("30") //➞ "30"

// function checkEquals(arr1, arr2) {
//     if (arr1.join("") === arr2.join("")) {
//        console.log("true")
//      } else {
//     console.log("false")
//      }
//     }

//     checkEquals([1, 2], [1, 3]) //➞ false
// Good so far...

// checkEquals([1, 2], [1, 2])// ➞ false
// // Yikes! What happened?

// checkEquals([1, 2], [1, 3])// ➞ false

// checkEquals([1, 2], [1, 2]) //➞ true

// checkEquals([4, 5, 6], [4, 5, 6]) //➞ true

// checkEquals([4, 7, 6], [4, 5, 6]) //➞ false

// checkEquals([4, 7, 6], [4, 6, 7])// ➞ false

// function flatten(arr) {
//     let arr2 = [];
//     for (let i = 0; i < arr.length; i++) {
//      arr2 =  arr2.concat(arr[i]);
//     }
//     console.log(arr2);
// }
//   flatten([[1, 2], [3, 4]])
// // Expected: [1, 2, 3, 4]

// flatten([["a", "b"], ["c", "d"]])
// // Expected: ["a", "b", "c", "d"]

// flatten([[true, false], [false, false]])
// // Expected: [true, false, false, false]

// function factorial(num){
//    if(num==1){
//     return 1 ;
//    }
//     return  num * factorial(num-1) ;
// }

// function paths(n){
//     let v =  factorial(n-1);
//     console.log(v/2);

// }

// paths(12);

// function secondLargest(arr){
//   let newArr = arr.sort((a,b)=>b-a)
//   console.log(newArr[1]);
// }

// secondLargest([10, 40, 30, 20, 50])// ➞ 40

// secondLargest([25, 143, 89, 13, 105]) //➞ 105

// secondLargest([54, 23, 11, 17, 10]) //➞ 23

// function squareDigits(num){
// let a = num.toString().split("") ;
// let b  = a.map(val=> val*val)
//    console.log(b.join(""));

// }

// squareDigits(9119)   //➞ 811181

// squareDigits(2483)  //➞ 416649

// squareDigits(3212) //➞ 9414

// function clone(arr) {
// 	 let newArr = [...arr , arr]
//      console.log(newArr);

// }
// clone([1, 1])

// function testJackpot(arr){
//    return arr.every(digit => digit == arr[0])
// }

// console.log(testJackpot(["@", "@", "@", "@"]) )//➞ true

// console.log(testJackpot(["abc", "abc", "abc", "abc"]) )// ➞ true

// console.log(testJackpot(["SS", "SS", "SS", "SS"]) )// ➞ true

// console.log(testJackpot(["&&", "&", "&&&", "&&&&"]) ) //➞ false

// console.log(testJackpot(["SS", "SS", "SS", "Ss"]) )//➞ false

// function findNemo(str){
// let s = str.split(" ");
// for(let i=0;i<s.length ; i++){
//     if("Nemo" == s[i]){
//         return `"I found Nemo at ${i+1}!"`
//     }
// }
// }

// console.log(findNemo("I am finding Nemo !") ) //➞ "I found Nemo at 4!"

// console.log(findNemo("Nemo is me") )//➞ "I found Nemo at 1!"

// console.log(findNemo("I Nemo am") )//➞ "I found Nemo at 2!"

// function capToFront(str){
// let s = str.split("");
// let upper = s.filter(capital => capital == capital.toUpperCase()).join("");
// let small = s.filter(small => small == small.toLowerCase()).join("");
// console.log(upper,small);
// }
// capToFront("hApPy") //➞ "APhpy"
// capToFront("moveMENT") //➞ "MENTmove"
// capToFront("shOrtCAKE") //➞ "OCAKEshrt"

// function isObject(x){
//     console.log(x instanceof Object)
// }

// isObject(function add(x,y) {return x + y}) //➞ true

// isObject(new RegExp('^[a-zA-Z0-9]+$', 'g')) //➞ true

// isObject(null)// ➞ false

// isObject("") // ➞ false

// function totalVolume(...arr){
//     let sum = 0 ;
//   for(let i=0 ; i<arr.length ; i++){
//     let f = arr[i].reduce((acc,curr)=>{
//      return  acc * curr
//     },1)
//      sum += f ;
//   }
//   console.log(sum);
// }
// totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]) //➞ 63
// totalVolume([2, 2, 2], [2, 1, 1]) //➞ 10
// totalVolume([1, 1, 1]) //➞ 1

// function indexMultiplier(arr) {
//   let sum = 0;
//   arr.forEach((value, index) => {
//     let v = value * index;
//     sum += v;
//   });

//   console.log(sum);
// }

// indexMultiplier([1, 2, 3, 4, 5]); // ➞ 40
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)
// indexMultiplier([-3, 0, 8, -6]); //➞ -2

// function isSpecialArray(arr){
//     let bool = true ;
// for(let i=0 ; i<arr.length ; i++){
// if(( i%2 == 0 && arr[i]%2 ==0 ) || (i%2 != 0 && arr[i]%2 !=0)){
//         bool =true ;

//  }
//  else{
//         bool = false ;
//         return false ;

//  }

// }

// console.log(bool);

// }

// isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) //➞ true
// // Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

// console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])) //➞ false
// // Index 2 has an odd number 9.

// console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) )// ➞ false
// // Index 3 has an even number 8.

// function jazzify(arr){
//   console.log( arr.map(v=> v.split("").findLast(x=> x== 7) ? v :  `${v}7`))
// }

// jazzify(["G", "F", "C"]) //➞ ["G7", "F7", "C7"]

// jazzify(["Dm", "G", "E", "A"]) //➞ ["Dm7", "G7", "E7", "A7"]

// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) //➞ ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]

// jazzify([]) // ➞ []
// function reverseWords(str){
// //   console.log(str.split(" ").reverse().join(" "));
//   let l = str.split(" ").reduce((acc,curr)=>{
//        return curr + " "+ acc+ " " ;
//   } )
//   console.log(l);
// }
// reverseWords(" the sky is blue") //➞ "blue is sky the"
// reverseWords("hello world!") //➞ "world! hello"
// reverseWords("a good example") // ➞ "example good a"

// function millionsRounding(arr){
// for(let i=0 ; i<arr.length ; i++ ){
//   arr[i][1] =  Math.round(arr[i][1]/1000000)*1000000
// }
// console.log(arr);
// }
// millionsRounding([
//     ["Nice", 942208],
//     ["Abu Dhabi", 1482816],
//     ["Naples", 2186853],
//     ["Vatican City", 572]
//   ])

// function countOnes(n){
//    let b = n.toString(2);
//   //  let b = n.toString(2).split("1") ;
//    let count = 0 ;
//    console.log(b);

//   //  b.split("").forEach(val => {
//   //   if(val == 1){
//   //     count++ ;
//   //   }
//   //  })
//    console.log(count);
//   }

// countOnes(0)

// countOnes(100)

// countOnes(999)

// function rev(num){
//   // console.log(num.toString().split("").reverse().join(""));
//   let n = Math.abs(num) ;

//   let reverse = 0 ;

//   while(n>=1){
//         let lastdigit = n%10 ;
//      reverse = reverse * 10 + lastdigit
//     n = Math.floor(n/10) ;
//   }
//     console.log(reverse);

// }

// rev(5121) // ➞ "1215"
// rev(69) //➞ "96"
// rev(-122157) // ➞ "751221"

// function getBudgets(obj){
// return obj.reduce((acc,curr)=>{
//    return  acc + curr["budget"]
// },0)
// }

// console.log(getBudgets([
//   { name: "John", age: 21, budget: 23000 },
//   { name: "Steve",  age: 32, budget: 40000 },
//   { name: "Martin",  age: 16, budget: 2700 }
// ])) //➞ 65700

// console.log(getBudgets([
//   { name: "John",  age: 21, budget: 29000 },
//   { name: "Steve",  age: 32, budget: 32000 },
//   { name: "Martin",  age: 16, budget: 1600 }
// ])) //➞ 62600

// function multiply(arr){
//   let a = arr ;
//   return (x) => {
//     return a.map(val => val * x )
//   }
// }

// console.log(multiply([1, 2, 3])(2)) //➞ [2, 4, 6]

// console.log(multiply([4, 6, 5])(10)) //➞ [40, 60, 50]

// console.log(multiply([1, 2, 3])(0)) //➞ [0, 0, 0]

// function matchLastItem(arr){
//   let a = "" ;
//   for(let i =0 ; i<arr.length -1 ; i++){
//     a += arr[i]
//   }
//   if(a == arr[arr.length -1] ){
//     return true ;
//   }  else{
//     return false ;
//   }
// }

// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])) //➞ true
// // The last item is the rest joined.

// console.log(matchLastItem([1, 1, 1, "11"]))  //➞ false
// // The last item should be "111".

// console.log(matchLastItem([8, "thunder", true, "8thundertrue"]) )// ➞ true

// HCM AND LCM

// function hcm(a,b){
//   while(b!=0){
//     temp = b ;
//     b = a%b;
//     a = temp ;
//   }
//   return a ;
// }

// function lcm(a,b){
// return (a*b) / hcm(a,b)
// }

// console.log(hcm(12,18))
// console.log(lcm(12,18))

// function ascDesNone(arr,str){
//   if(str == "None"){
//     return arr;
//   }
//    return str == "Asc" ? arr.sort((a,b)=>a-b) : arr.sort((a,b)=>b-a) ;
// }

// console.log(ascDesNone([4, 3, 2, 1], "Asc" )) // ➞ [1, 2, 3, 4]
// console.log(ascDesNone([7, 8, 11, 66], "Des")) //➞ [66, 11, 8, 7]
// console.log(ascDesNone([1, 2, 3, 4], "None")) //➞ [1, 2, 3, 4]

// function calculateLoss(obj){

//   let v = Object.values(obj)
//   if(v.length == 0 ){
//     return "Lucky you!"
//   }
//   return v.reduce((acc , curr) => {
//      return acc+curr
//    } , 0 )
//   }

// console.log(calculateLoss({
//   tv: 30,
//   skate: 20,
//   stereo: 50,
// }))
// console.log(calculateLoss({
//   painting: 20000,

// }))
// console.log(calculateLoss({
// }))

// function rectangles(n){
//    console.log((n * (n+1) / 2 ) ** 2 );
//   }

// // ((n(n+1))/2)^2

// rectangles(1) //➞ 1

// rectangles(2) //➞ 9

// rectangles(3) //➞ 36

// function removeDups(arr){
//   console.log([...new Set(arr)]);

// }

// removeDups([1, 0, 1, 0]) //➞ [1, 0]

// removeDups(["The", "big", "cat"]) //➞ ["The", "big", "cat"]

// removeDups(["John", "Taylor", "John"]) //➞ ["John", "Taylor"]

// function greetingMaker(str){
//    return function(newStr){
//       console.log(str,newStr);

//    }
// }
// const greeting = greetingMaker("Hello")
// greeting("James")  //➞ "Hello,James"

// function numbersSum(arr){
//  return arr.reduce((acc , curr)=> {
//    return  typeof curr == "number" ?  acc+curr : acc ;
//   // console.log(typeof curr);
// } , 0)
// }

// console.log(numbersSum([1, 2, "13", "4", "645"]) )// ➞ 3

// console.log(numbersSum([true, false, "123", "75"]))// ➞ 0

// console.log(numbersSum([1, 2, 3, 4, 5, true]))//➞ 15

// function reverseAndNot(num){
//   console.log(num.toString().split("").reverse().join("") + num);
// }

// reverseAndNot(123) //➞ 321123
// reverseAndNot(152) //➞ 251152
// reverseAndNot(123456789) //➞ 987654321123456789

// function factorChain(arr){
//   return arr.slice(1).every((detail , index)=> detail % arr[index] == 0 )
// }

// console.log(factorChain([1, 2, 4, 8, 16, 32])) //➞ true
// console.log(factorChain([1, 1, 1, 1, 1, 1]) )//➞ true
// console.log(factorChain([2, 4, 6, 7, 12])) //➞ false
// console.log(factorChain([10, 1]))// ➞ false

// function multiplyNums(str) {
//   let newArray = str.split(",");
//   return newArray.reduce((acc, curr) => {
//     return acc * curr;
//   }, 1);
// }
// console.log(multiplyNums("1, 2, 3, 4")); //➞ 24
// console.log(multiplyNums("2, 3")); //➞ 6
// console.log(multiplyNums("54, 75, 453, 0")); //➞ 0
// console.log(multiplyNums("10, -2")); // ➞ -20

// function progressDays(arr) {
//   count = 0;

//   arr.forEach((val, index) => {
//     if (val < arr[index + 1]) {
//       count++;
//     }
//   });
//   console.log(count);
// }

// progressDays([3, 4, 1, 2]); //➞ 2
// // There are two progress days, (3->4) and (1->2)

// progressDays([10, 11, 12, 9, 10]); //➞ 3

// progressDays([6, 5, 4, 3, 2, 9]); //➞ 1

// progressDays([9, 9]); //➞ 0

// function uniqueSort(arr){
// console.log([... new Set(arr.sort((a,b)=>a-b))])
// }

// uniqueSort([1, 2, 4, 3]) //➞ [1, 2, 3, 4]

// uniqueSort([1, 4, 4, 4, 4, 4, 3, 2, 1, 2]) //➞ [1, 2, 3, 4]

// uniqueSort([6, 7, 3, 2, 1]) //➞ [1, 2, 3, 6, 7]

// function trace(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i][i];
//   }
//   console.log(sum);
// }

// trace([
//   [1, 4],
//   [4, 1],
// ]);

// // 1 + 1 = 2

// trace([
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]);

// // 1 + 5 + 9 = 15

// trace([
//   [1, 0, 1, 0],
//   [0, 2, 0, 2],
//   [3, 0, 3, 0],
//   [0, 4, 0, 4],
// ]);

// // 1 + 2 + 3 + 4 = 10

// function reverseArr(num){
//  console.log(num.toString().split("").reverse())
// }

// reverseArr(1485979) //➞ [9, 7, 9, 5, 8, 4, 1]

// reverseArr(623478) //➞ [8, 7, 4, 3, 2, 6]

// reverseArr(12345) //➞ [5, 4, 3, 2, 1]

// function XO(str) {
//   let arr = str.toLowerCase().split("");
//   xCount = 0;
//   yCount = 0;
//   if (!arr.includes("x" && "o")) {
//     return true;
//   }

//   for (let i of arr) {
//     if (i == "x") {
//       xCount++;
//     }
//     if (i == "o") {
//       yCount++;
//     }
//   }

//   if (xCount == yCount) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(XO("ooxx")); //➞ true
// console.log(XO("xooxx")); //➞ false
// console.log(XO("ooxXm")); // ➞ true
// // // Case insensitive.
// console.log(XO("zpzpzpp")); //➞ true
// // // Returns true if no x and o.
// console.log(XO("zzoo")); //➞ false

// function mean(num){
//   let n = num.toString().split("");
//   let l = n.length ;
//    sum =  n.reduce((acc,curr) => {
//      return  acc + Number(curr)
//   }, 0)

//   console.log(sum/ l)

// }

// mean(42) //➞ 3

// mean(12345) //➞ 3

// mean(666) //➞ 6

// function missingNum(arr){
//   let sum = 0 ;
//   let l= 55 ;
//  arr.forEach((val)=>{
//    sum+=val
//  })
// console.log(l-sum)
// }

// missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]) //➞ 5

// missingNum([7, 2, 3, 6, 5, 9, 1, 4, 8]) //➞ 10

// missingNum([10, 5, 1, 2, 4, 6, 8, 3, 9]) //➞ 7

// function inBox(arr){
//   for(let i=1 ; i<arr.length-1 ; i++){
//     for( let j=1 ; j<arr.length-1 ; j++){
//         if(arr[i][j].includes("*")){
//           return true
//         }
//     }
//     return false ;
//   }
// }

// console.log(inBox([
//   "###",
//   "#*#",
//   "###"
// ]) )//➞ true

// console.log(inBox([
//   "####",
//   "#* #",
//   "#  #",
//   "####"
// ])) //➞ true

// console.log(inBox([
//   "*####",
//   "# #",
//   "#  #*",
//   "####"
// ])) //➞ false

// console.log(inBox([
//   "#####",
//   "#   #",
//   "#   #",
//   "#   #",
//   "#####"
// ]) )//➞ false

// function makeTitle(str){
// let arr = str.split(" ")
// for(let i=0 ; i<arr.length; i++){
//     let char = arr[i].split("")
//     char[0] = char[0].toUpperCase();
//     char = char.join("")
//     arr[i] = char+" "
//   }
// console.log(arr.join(""))
// }


// makeTitle("This is a title") //➞ "This Is A Title"
// makeTitle("capitalize every word") //➞ "Capitalize Every Word"
// makeTitle("I Like Pizza") //➞ "I Like Pizza"
// makeTitle("PIZZA PIZZA PIZZA") //➞ "PIZZA PIZZA PIZZA"

// function equal(x, y, z) {
//   if (x == y && y == z) {
//     return 3;
//   }
//   if (x == y || y == z || x == z) {
//     return 2;
//   } else {
//     return 0;
//   }
// }

// console.log(equal(3, 4, 3)); //➞ 2

// console.log(equal(1, 1, 1)); // ➞ 3

// console.log(equal(2, 3, 4)); //➞ 0
// console.log(equal(7, 3, 7)); //➞ 0
// console.log(equal(4, 4, 4)); //➞ 0
// console.log(equal(7, 3, 4)); //➞ 0
// console.log(equal(3, 3, 6)); //➞ 0
// console.log(equal(1, 1, 1)); //➞ 0
// console.log(equal(1, 7, 6));
// console.log(equal(7, 7, 7));

// function specialReverse(str , key ){
// let arr = str.split(" ")
// for( let i =0 ; i<arr.length ; i++){
//    let word = arr[i] ;
//    if(word[0]==key ){
//      word = word.split("").reverse().join("")
//    }
//    arr[i] = word+" " ;
// }
// console.log(arr.join(""));
// }

// specialReverse("word searches are super fun", "s")
// //➞ "word sehcraes are repus fun"

// specialReverse("first man to walk on the moon", "m")
// // //➞ "first nam to walk on the noom"

// specialReverse("peter piper picked pickled peppers", "p")
// // //➞ "retep repip dekcip delkcip sreppep"

// function hackerSpeak(str) {
//   let multireplce = { a: 4, e: 3, i: 1, o: 0, s: 5 };
//   for (let [key, value] of Object.entries(multireplce)) {
//     str = str.replaceAll(key, value);
//   }
//   console.log(str);
// }
// hackerSpeak("javascript is cool"); //➞ "j4v45cr1pt 15 c00l"

// hackerSpeak("programming is fun"); //➞ "pr0gr4mm1ng 15 fun"

// hackerSpeak("become a coder"); //➞ "b3c0m3 4 c0d3r"

// let arr = "";
// for(let i =0 ; i<6 ; i++){
//   let r  = Math.floor(Math.random() * 10 )
//   arr += r ; 
// }
// console.log(arr);


// function capMe(arr){
//   for(let i=0 ; i<arr.length; i++){
//     let word = arr[i] ;
//     let ch = word.split("");
//     ch[0] = ch[0].toUpperCase();
//     word = ch.join("");
//     arr[i] = word ;
//   }
//   console.log(arr);
// }



// function capMe(arr){
//  return arr.map(val => val.charAt(0).toUpperCase() + val.slice(1).toLowerCase());
// }

// console.log(capMe(["mavis", "senaida", "letty"])) //➞ ["Mavis", "Senaida", "Letty"]

// console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"])) //➞ ["Samuel", "Mabelle", "Letitia", "Meridith"]

// console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"])) //➞ ["Slyvia", "Kristal", "Sharilyn", "Calista"]



// function lineLength(arr1 , arr2){
//    let x  = arr2[0] - arr1[0] ;
//    let y  = arr2[1] - arr1[1] ;
//    console.log(Math.hypot(x,y).toFixed(2))
// }

// lineLength([15, 7], [22, 11]) //➞ 8.06

// lineLength([0, 0], [0, 0]) //➞ 0

// lineLength([0, 0], [1, 1]) //➞ 1.41
