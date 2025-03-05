// function sevenBoom(arr) {
//     return arr.some(num => num.toString().includes("7")) ? "Boom!" : "there is no 7 in the array";
// }

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])) //➞ "Boom!"
// // 7 contains the number seven.

// console.log(sevenBoom([8, 6, 33, 100])) //➞ "there is no 7 in the array"
// // None of the items contain 7 within them.

// console.log(sevenBoom([2, 55, 60, 97, 86])) //➞ "Boom!"
// // 97 contains the number seven.

// function towerHanoi(num){
//     console.log(2**num - 1)
// }

// towerHanoi(3) //➞ 7

// towerHanoi(5) //➞ 31

// towerHanoi(0) //➞ 0

// function countBoomerangs(arr){
//     let count = 0
//  arr.map((val ,index)=>{
//     let newi = index + 2 ;
//         if(val == arr[newi]){
//             if(arr[newi-1] != val){
//                 // console.log(arr.slice(index , newi+1))
//                 count ++ ;
//             }
//     }
//  })

//  console.log(count);

// }

// function countBoomerangs(arr){
//  let count = 0 ;
//  for(let i=0 ; i<arr.length -2 ; i++){
//     if(arr[i] === arr[i+2]  &&  arr[i] != arr[i+1]){
//         count++ ;
//     }
// }
// console.log(count)
// }

// countBoomerangs([1, 7, 1, 7, 1, 7, 1]);
// countBoomerangs([5, 6, 6, 7, 6, 3, 9]); //➞ 1
// countBoomerangs([9, 5, 9, 5, 1, 1, 1]); //➞ 2
// countBoomerangs([4, 4, 4, 9, 9, 9, 9]);

// function oddishOrEvenish(num){
// let n = num.toString().split("") ;
// sum = n.reduce((acc , curr) => acc+ +curr , 0 )
// return sum%2 ==0 ? "Evenish" : "Oddish"
// }

// console.log(oddishOrEvenish(43)) //➞ "Oddish"
// // 4 + 3 = 7
// // 7 % 2 = 1

// console.log(oddishOrEvenish(373) )//➞ "Oddish"
// // 3 + 7 + 3 = 13
// // 13 % 2 = 1

// console.log(oddishOrEvenish(4433)) //➞ "Evenish"
// // 4 + 4 + 3 + 3 = 14
// // 14 % 2 = 0

// function getDays(a,b){
//     let oneDay = 1000 * 60 * 60 * 24 ;
//     console.log((b - a )/oneDay);
// }

// getDays(
//     new Date("June 14, 2019"),
//     new Date("June 20, 2019")
//   ) //➞ 6

//   getDays(
//     new Date("December 29, 2018"),
//     new Date("January 1, 2019")
//   ) //➞ 3
//   // Dates may not all be in the same month/year.

//   getDays(
//     new Date("July 20, 2019"),
//     new Date("July 30, 2019")
//   ) //➞ 10

// function getLength(arr){
// let newarr = arr.flat(Infinity)
// console.log(newarr.length);
// }

// function getLength(arr){
// return arr.reduce((acc ,curr) => {
//  return  acc.concat(Array.isArray(curr) ? getLength(curr) : curr) ;
// } ,[])
// }
// console.log(getLength([1, [2, 3]])) //➞ 3

// console.log(getLength([1, [2, [3, 4]]])) //➞ 4

// console.log(getLength([1, [2, [3, [4, [5, 6]]]]])) //➞ 6

// console.log(getLength([1, [2], 1, [2], 1])) //➞ 5
// console.log(getLength([]));

// function invert(str){
//  let newatr = str.split("").reverse();
//  let d = newatr.map(d => d === d.toUpperCase() ? d.toLowerCase() : d.toUpperCase() );
//  console.log(d.join(""));
// }

// invert("dLROW YM sI HsEt") //➞ "TeSh iS my worlD"

// invert("ytInIUgAsnOc") //➞ "CoNSaGuiNiTY"

// invert("step on NO PETS") //➞ "step on NO PETS"

// invert("XeLPMoC YTiReTXeD") //➞ "dExtErIty cOmplEx"

// function numInStr(arr){
//  return arr.filter(val => {
//       return [...val].some(v => !isNaN(v) && v != " ")
//     })
// }

// console.log(numInStr(["1a", "a", "2b", "b"])) //➞ ["1a", "2b"]

// console.log(numInStr(["abc", "abc10"]) )//➞ ["abc10"]

// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])) //➞ ["ab10c", "a10bc"]

// console.log(numInStr(["this is a test", "test1"])) //➞ ["test1"]

// function combinations(...x){
// return x.reduce((acc,curr)=>{
//  return curr == 0 ?  acc : curr*acc ;
// },1)
// }

// console.log(combinations(2, 3)) //➞ 6
// console.log(combinations(3, 7, 4) )//➞ 84
// console.log(combinations(2, 3, 4, 5) )//➞ 120
// console.log(combinations(6, 7, 0));

// function isPositiveDominant(arr) {
//   let s = new Set(arr.filter( val => val>0));
//   let n = new Set(arr.filter( val => val<0));
//   arr.map((val) => {
//     if (val < 0) {
//         n.add(val)
//     } else {
//         s.add(val);
//     }
//   });
//   s.size > n.size ? console.log("true") : console.log("false");
// }
//
// isPositiveDominant([1, 1, 1, 1, -3, -4]); //➞ false
// // There is only 1 unique positive value (1).
// // There are 2 unique negative values (-3, -4).

// isPositiveDominant([5, 99, 832, -3, -4]); //➞ true

// isPositiveDominant([5, 0]); //➞ true

// isPositiveDominant([0, -4, -1]); //➞ false

// function getTotalPrice(arr){
// return parseFloat( arr.reduce((acc ,curr)=>{
//  return curr["price"] * curr["quantity"] + acc  ;
// } , 0 ).toFixed(1))
// }
// function getTotalPrice(arr){
// return parseFloat(arr.reduce((acc ,{price , quantity})=>{
//  return price * quantity + acc  ;
// } , 0 ).toFixed(1))
// }

// 1 bottle of milk:
// console.log(getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 }
//   ])) //➞ 1.5

//   // 1 bottle of milk & 1 box of cereals:
//  console.log( getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Cereals", quantity: 1, price: 2.50 }
//   ])) //➞ 4

//   // 3 bottles of milk:
//   console.log(getTotalPrice([
//     { product: "Milk", quantity: 3, price: 1.50 }
//   ])) //➞ 4.5

//   // Several groceries:
//  console.log( getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.50 },
//     { product: "Eggs", quantity: 12, price: 0.10 },
//     { product: "Bread", quantity: 2, price: 1.60 },
//     { product: "Cheese", quantity: 1, price: 4.50 }
//   ]) )//➞ 10.4

//   // Some cheap candy:
//  console.log( getTotalPrice([
//     { product: "Chocolate", quantity: 1, price: 0.10 },
//     { product: "Lollipop", quantity: 1, price: 0.20 }
//   ])) //➞ 0.3

// function reverseOdd(str){
//      let newArr = str.split(" ") ;
//     //  console.log(newArr);
//     for(let i=0 ; i<newArr.length ; i++){
//         if(newArr[i].length%2 == 0){
//             newArr[i] = newArr[i]
//         }
//         else{
//             let word = newArr[i]
//             let w = word.split("")
//             let f = w.shift()
//             w.push(f)
//             word = w.join("")
//             newArr[i] = word ;
//         }

//     }
//     console.log(newArr.join(" "));
// }

// function reverseOdd(str){
//     let newArr = str.split(" ") ;
//         //  console.log(newArr);
//         for(let i=0 ; i<newArr.length ; i++){
//             if(newArr[i].length%2 !== 0){
//                newArr[i] =  newArr[i].split("").reverse().join("");
//             }
//         }
//         console.log(newArr.join(" "));
// }

// reverseOdd("Bananas") //➞ "sananaB"

// reverseOdd("One two three four") //➞ "enO owt eerht four"

// reverseOdd("Make sure uoy only esrever sdrow of ddo length")
// //➞ "Make sure you only reverse words of odd length"

// function isPandigital(num){
// let d = num.toString()
// let s = new Set(d);
// // let a = Array.from(s)
// if(s.size == 10 && [...s].every(digit => digit >= 0 && digit <= 9)){
//    console.log("true");
// }
// else {
//    console.log("false")
// }
// }
// isPandigital(98140723568910) //➞ true
// isPandigital(90864523148909) //➞ false
// // 7 is missing.
// isPandigital(112233445566778899)// ➞ false

// function getFrequencies(arr){
// let m = new Map() ;
// arr.map((val) => {
//    if(!m.has(val)){
//       m.set(val , 1)
//    }
//    else{
//       m.set(val, m.get(val) + 1)
//    }
// })
// console.log(m);
// }

// getFrequencies(["A", "B", "A", "A", "A"]) //➞ { A: 4, B: 1 }

// getFrequencies([1, 2, 3, 3, 2]) //➞ { "1": 1, "2": 2, "3": 2 }

// getFrequencies([true, false, true, false, false]) //➞ { true: 2, false: 3 }

// getFrequencies([]) //➞ {}

// function colorPatternTimes(arr) {
//   let dr = arr.length;
//   let count = 0;
//   arr.reduce((acc, curr) => {
//     if (acc == curr) {
//       return acc;
//     } else {
//       count++;
//       return curr;
//     }
//   }, arr[0]);
//   console.log(dr * 2 + count);
// }

// colorPatternTimes(["Blue"]); //➞ 2

// colorPatternTimes(["Red", "Yellow", "Green", "Blue"]); //➞ 11

// colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"]); //➞ 13

// function countLayers(rug){
//    r =  [...new Set(rug)]
//    console.log(r.length);
// }

// countLayers([
//    "AAAA",
//    "ABBA",
//    "AAAA"
//  ]) //➞ 2

//  countLayers([
//    "AAAAAAAAA",
//    "ABBBBBBBA",
//    "ABBAAABBA",
//    "ABBBBBBBA",
//    "AAAAAAAAA"
//  ]) //➞ 3

//  countLayers([
//    "AAAAAAAAAAA",
//    "AABBBBBBBAA",
//    "AABCCCCCBAA",
//    "AABCAAACBAA",
//    "AABCADACBAA",
//    "AABCAAACBAA",
//    "AABCCCCCBAA",
//    "AABBBBBBBAA",
//    "AAAAAAAAAAA"
//  ]) //➞ 5

// function hcf(a, b) {
//   while (b != 0) {
//     temp = b;
//     b = a % b;
//     a = temp;
//   }
//   return a;
// }
// function lcm(a, b) {
//   return (a * b) / hcf(a, b);
// }

// console.log(lcm(9, 18)); //➞ 18

// console.log(lcm(8, 5)); //➞ 40

// console.log(lcm(17, 11)); //➞ 187

// function pow(x,y){
//  if(y==1){
//    return x
//  }
//  return x * pow(x , y-1) ;

// }
// // console.log(pow(2,3)) ;

// function shiftToLeft(x,y){
// if(y == 1 ){
//    return x
// }
// return x * pow(2,y) ;
// }
// console.log(shiftToLeft(5, 2)) //➞ 20

// console.log(shiftToLeft(10, 3) )//➞ 80

// console.log(shiftToLeft(-32, 2)) //➞ -128

// shiftToLeft(-6, 5) //➞ -192

// shiftToLeft(12, 4) //➞ 192

// shiftToLeft(46, 6) //➞ 2944

// function minSwaps(s1, s2) {
//   let swap0 = 0;
//   let swap1 = 0;

//   for (let i = 0; i < s1.length; i++) {
//     if (s1[i] !== s2[i]) {
//       if (s1[i] == 0) {
//         swap0++;
//       } else {
//         swap1++;
//       }
//     }
//   }
//   return Math.max(swap0, swap1);
// }

// console.log(minSwaps("1100", "1001")); //➞ 1
// minSwaps("110011", "010111"); //➞ 1
// minSwaps("10011001", "01100110"); //➞ 4

// function uncensor(s , s2){
//    let s1 = s.split("") ;
//  for(let i =0 ; i<s2.length ; i++){
//     for(let j=0 ; j<s1.length ; j++){
//         if(s1[j]=="*"){
//          s1[j] = s2[i] ;
//          break ;
//         }
//     }
//  }
//  console.log(s1.join(""));
// }

// function uncensor(s ,str){
// let index = 0 ;

// console.log(s.split("").map((val)=> val == "*" ? str[index++]: val ).join("") )
// }

// uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") //➞ "Where did my vowels go?"
// uncensor("abcd", "") //➞ "abcd"
// uncensor("*PP*RC*S*", "UEAE") //➞ "UPPERCASE"
// uncensor('Ch**s*, Gr*mm*t -- ch**s*', 'eeeoieee')
// uncensor('*l*ph*nt', 'Eea')

// function isHeteromecic(num){
// for( let i=0 ;i<=num; i++){
//    if(i*(i+1) == num){
//       console.log(i);
//       return true ;
//    }
// }
// return false ;
// }

// console.log(isHeteromecic(0) )//➞ true
// // 0 * (0 + 1) = 0 * 1 = 0

// console.log(isHeteromecic(2))// ➞ true
// // 1 * (1 + 1) = 1 * 2 = 2

// console.log(isHeteromecic(7)) //➞ false

// console.log(isHeteromecic(110) )//➞ true
// // 10 * (10 + 1) = 10 * 11 = 110

// console.log(isHeteromecic(136)) //➞ false

// console.log(isHeteromecic(156)) //➞ true

// function f(obj, num) {
//   for (let [key, value] of Object.entries(obj)) {
//     if (value == num && key[0] == "R") {
//       console.log(key);
//     }
//   }
// }

// f({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 100); //➞ "Rammstein A"
// // number = 100

// f({ whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }, 50); //➞ "Rammstein B"
// // number = 50

// f({ whiskey: 100, "Rammstein A": 100, "Rammstein D": 70, beer: 70 }, 70); //➞ "Rammstein D"
// // number = 70
// function product(a,b){
//   return (x,y)=>{
//    return (p,q)=>{
//         return (a*x*p ) + (b*y*q)
//     }
//   }
// }
// console.log(product(1,2)(1,1)(2,3)) //➞ 8
// // 1 * 1 * 2 + 2 * 1 * 3

// console.log(product(10,2)(5,0)(2,3)) //➞ 100
// // 10 * 5 * 2 + 2 * 0 * 3

// console.log(product(1,2)(2,3)(3,4)) //➞ 30
// // 1 * 2 * 3 + 2 * 3 * 4

// console.log(product(1,2)(0,3)(3,0)) //➞ 0
// // 1 * 0 * 3 + 2 * 3 * 0

// function insertWhitespace(str){
//  let arr = str.split("") ;
//  let a =  arr.map(val => val == val.toUpperCase()  ?  " "+val : val)
//  console.log(a.join("").trim());
// }
 
// insertWhitespace("SheWalksToTheBeach") //➞ "She Walks To The Beach"
// insertWhitespace("MarvinTalksTooMuch") //➞ "Marvin Talks Too Much"
// insertWhitespace("TheGreatestUpsetInHistory") //➞ "The Greatest Upset In History

// function isOdd(num){
//    if((num & 1)){
//       console.log("Yes");
//    }else{
//       console.log("No"); 
//    }
// }

// function isEven(num){
//   let regEx = "^\d*[02468]$"
//   if(num.match(regEx)){
//    console.log("Yes");
//   }else console.log("No")
// }

// isOdd(3) //➞ "Yes"
// // Use Bitwise Operator

// isOdd(58) //➞ "No"
// // Use Bitwise Operator

// isEven("0") //➞ "Yes"
// // Use Regular Expression

// isEven("-99") //➞ "No"
// // Use Regular Expression


// function findBrokenKeys(s1 ,s2){
//    let dif = [] ;
//    for(let i=0 ; i<s1.length ; i++){
//          if(s1[i] !== s2[i]){
//             if(!dif.includes(s1[i])){
//                dif.push(s1[i]) ;
//             }
//          }
//    }
//    console.log(dif);  
// }

// findBrokenKeys("happy birthday", "hawwy birthday") //➞ ["p"]
// findBrokenKeys("starry night", "starrq light") //➞ ["y", "n"]
// findBrokenKeys("beethoven", "affthoif5") //➞ ["b", "e", "v", "n"]
// findBrokenKeys("!!??$$", "$$!!??")
// findBrokenKeys("5678", "4678")


// doubleSwap = (str , a, b)=>{
//    let arr = str.split("") ; 
//   return  (arr.map(val => val == a ? val = b : val === b ? val = a : val )).join("")
// }

// console.log(doubleSwap( "aabbccc", "a", "b")) //➞ "bbaaccc"
// console.log(doubleSwap("random w#rds writt&n h&r&", "#", "&"))
// //➞ "random w&rds writt#n h#r#"
// console.log(doubleSwap("128 895 556 788 999", "8", "9"))
// //➞ "129 985 556 799 888"

// function commonElements(arr , arr2){
//   return arr2.filter(val => arr.includes(val))
// }

// console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])) //➞ [3]

// console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]) )//➞ [1, 3, 4, 7]

// console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5]) )//➞ [1, 2, 4, 5]

// console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15])) //➞ []


function consecutiveCombo(arr1 , arr2){
let newArr = arr1.concat(arr2).sort((a,b)=>a-b);
let l = newArr.length -1

let sum = 0 ;
let sum1 = 0 ; 
for(let i = newArr[0]  ; i<=newArr[l]; i++ ){
   sum += i ;
}
for(let i=0 ; i<newArr.length ; i++){
   sum1+=newArr[i] ;
}
if(sum == sum1 ){
   return true ;
}
else {
   return false ;
}

}


console.log(consecutiveCombo([7, 4, 5, 1], [2, 3, 6]) )//➞ true

console.log(consecutiveCombo([1, 4, 6, 5], [2, 7, 8, 9])) //➞ false

console.log(consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10])) //➞ false

console.log(consecutiveCombo([44, 46], [45])) //➞ true