// let arr = [1,2,3,4,5];
// let sum = arr.reduce((acc,current)=> {
//     return acc+current
// },0)
// console.log(sum);

// const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];

// let sum = objects.reduce((acc,curr)=>{
//   return {x:acc.x+curr.x}

// },{x:0})

// console.log(sum);

// let arr = [1,2,[3,4,[5,6]]];

// let flate =  arr.reduce((acc,current)=>{
//     return acc.concat(Array.isArray(current) ? current.flat(Infinity) : current)
// },[])

// console.log(flate);

// let arr = [1,2,3,2,1,2,5,6,7] ;
// let unique = arr.reduce((acc,cur)=>{
//      return acc.includes(cur) ? acc :[...acc , cur]
// },[])
// console.log(unique);

// const numbers = [10, 5, 8, 20, 3,343];
// // Output: 20

// let max = numbers.reduce((acc,cur)=>{
//     return acc < cur ? cur : acc
// },0)

// console.log(max);

// const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
// // Output: { apple: 3, banana: 2, orange: 1 }

// let count = words.reduce((acc,curr)=>{
//  acc[curr] = (acc[curr] || 0) + 1
//  return acc
// },{})

// console.log(count);

// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// // Output: [1, 2, 3, 4, 5, 6]

// let v = nestedArray.reduce((acc,current)=>{
//     console.log(current);
//   return acc.concat(current)

// },[])

// console.log(v);

// const students = [
//     { name: "Amit", subject: "Math", score: 85 },
//     { name: "Ravi", subject: "Science", score: 90 },
//     { name: "Amit", subject: "Science", score: 80 },
//     { name: "Ravi", subject: "Math", score: 88 }
//   ];
// Output:
// {
//   Math: [{ name: "Amit", score: 85 }, { name: "Ravi", score: 88 }],
//   Science: [{ name: "Ravi", score: 90 }, { name: "Amit", score: 80 }]
// }

//   let v = Object.groupBy(students , ({subject})=>subject)
//   console.log(v);
//  let v = students.reduce((acc,curr)=>{
//     acc[curr.subject] = acc[curr.subject]  || [] ;
//     acc[curr.subject].push({name : curr.name  ,score : curr.score})
//     return acc
//  },{})

//  console.log(v);

// const orders = [
//     { item: "Apple", qty: 3 },
//     { item: "Banana", qty: 2 },
//     { item: "Apple", qty: 5 },
//     { item: "Orange", qty: 4 }
//   ];
//   // Output: { Apple: 8, Banana: 2, Orange: 4 }

//   let v = orders.reduce((acc,curr)=>{
//      acc[curr.item] = (acc[curr.item] ||  0 ) + curr.qty
//      return acc
//   },{})
//   console.log(v);

// const data = [
//   "apple",
//   "banana",
//   "apple",
//   "orange",
//   "banana",
//   "apple",
//   "banana",
// ];
// // Output: "apple"

// let v = data.reduce((acc, curr) => {
//   acc[curr] = (acc[curr] || 0) + 1;
//   return acc;
// }, {});
// console.log(v);
// console.log(v["apple"]);

// let mf = Object.keys(v)

// // .reduce((acc, curr) => {
// //   return v[acc] > v[curr] ? acc : curr;
// // }, 0);

// console.log(mf);
// const users = [
//     { id: 1, name: "Amit", age: 25 },
//     { id: 2, name: "Ravi", age: 28 },
//     { id: 3, name: "Suman", age: 22 }
//   ];
// Output:
// {
//   1: { id: 1, name: "Amit", age: 25 },
//   2: { id: 2, name: "Ravi", age: 28 },
//   3: { id: 3, name: "Suman", age: 22 }
// }

//   let v= users.reduce((acc,curr)=>{
//    acc[curr.id] = curr
//    return acc
//   },{})
//   console.log(v);

// const arr1 = [
//   { id: 1, value: 10 },
//   { id: 2, value: 20 },
// ];
// const arr2 = [
//   { id: 1, value: 5 },
//   { id: 2, value: 15 },
//   { id: 3, value: 30 },
// ];
// // Output: [{ id: 1, value: 15 }, { id: 2, value: 35 }, { id: 3, value: 30 }]
// let newArr = arr1.concat(arr2);

// let v = newArr.reduce((acc, curr) => {
//   acc[curr.id] = acc[curr.id]
//     ? { id: curr.id, value: acc[curr.id].value + curr.value }
//     : curr;
//   return acc;
// }, []);

// console.log(v);


// const arr = [[1, 2], [3, 4], [5, 6]];
// // Output: [1, 2, 3, 4, 5, 6]
// const result = arr.flatMap(x=>x);
// console.log(result);


// const orders = [
//     { id: 1, items: ["apple", "banana"] },
//     { id: 2, items: ["orange", "mango"] }
//   ];
//   // Output: ["apple", "banana", "orange", "mango"]
  
//   let result = orders.flatMap(x => x.items);
//   console.log(result);


// const nums = [1, 2, 3];
// // Output: [1, 1, 2, 2, 3, 3]


// let result = nums.flatMap(x=>[x,x])
//   console.log(result);
  

// const arr = [1, 2, null, 3, undefined, 4];
// // Output: [1, 2, 3, 4]
// let result = arr.flatMap(x=> x != null ? [x] : [])
// console.log(result);


// const sentences = ["hello world", "flatMap is cool"];
// // Output: ["hello", "world", "flatMap", "is", "cool"]

// let result = sentences.flatMap(x=> x.split(" "))
// console.log(result);


// const sentences = ["hello world", "hello again", "world is big"];
// // Output: ["hello", "world", "again", "is", "big"]


// let r = [...new Set(sentences.flatMap(x=>x.split(" ")))]
// console.log(r);


// const users = [
//     { id: 1, roles: ["admin", "editor"] },
//     { id: 2, roles: ["editor", "viewer"] },
//     { id: 3, roles: ["admin", "viewer"] }
//   ];
//   // Output: ["admin", "editor", "viewer"]
  
// //   let r = users.flatMap(x=>[...new Set(x.roles)])
//   let r = [... new Set(users.flatMap(x=> x.roles))]
//   console.log(r);
  

// const pairs = [["name", "Amit"], ["age", 25], ["city", "Delhi"]];
// // Output: { name: "Amit", age: 25, city: "Delhi" }

// let r = Object.fromEntries(pairs)
// console.log(r);


// const user = { name: "Amit", age: null, city: "Delhi", country: undefined };
// let r = Object.entries(user).filter(([key,value])=> value!=null) ;
// console.log(r);


// const keys = ["name", "age", "city"];
// const values = ["Amit", 25, "Delhi"];

// let r =  Object.fromEntries(keys.map((v,k)=> [v , values[k]]))
// console.log(r);


// let arr = [1,2,3,9,30,23]
// console.log(arr.findLast(x=>x>2));

// console.log(arr.sort((a,b)=>b-a));

// const cars = [
//     {type:"Volvo", year:2016},
//     {type:"Saab", year:2001},
//     {type:"BMW", year:2010}
//   ];

//   console.log(cars.sort((a,b)=>b.year - a.year));
  

// const numbers = [1, 2, 3, 4, 5];
// // Output: [2, 4, 6, 8, 10]

// let r = numbers.map(x=>x*2);
// console.log(r);

// const fruits = ["apple", "banana", "cherry"];
// // Output: ["APPLE", "BANANA", "CHERRY"]

// let r = fruits.map(value => value.toUpperCase());
// console.log(r);


// const users = [
//     { id: 1, name: "Amit", age: 25 },
//     { id: 2, name: "Ravi", age: 28 },
//     { id: 3, name: "Suman", age: 22 }
//   ];
//   // Output: ["Amit", "Ravi", "Suman"]

//   let r = users.map(value => value.name)
//   console.log(r);

// const users = [
//     { id: 1, name: "Amit", age: 25 },
//     { id: 2, name: "Ravi", age: 28 },
//     { id: 3, name: "Suman", age: 22 }
//   ];
//   // Output:
//   // [
//   //   { id: 1, name: "Amit", age: 26 },
//   //   { id: 2, name: "Ravi", age: 29 },
//   //   { id: 3, name: "Suman", age: 23 }
//   // ]

  
//   let r = users.map(value => ({...value , age: value.age + 1 }))
//   console.log(r);
  

// const users = [
//     { id: 1, name: "Amit" },
//     { id: 2, name: "Ravi" },
//     { id: 3, name: "Suman" }
//   ];
//   // Output:
//   // {
//   //   1: { id: 1, name: "Amit" },
//   //   2: { id: 2, name: "Ravi" },
//   //   3: { id: 3, name: "Suman" }
//   // }
  
// let r = Object.fromEntries(users.map(value=> [value.id ,value]))
// console.log(r);
// const numbers = [1, 2, 3, 4, 5];
// // Output: [1, 4, 3, 8, 5]

// let r = numbers.map(value => value%2==0 ? value*2 : value)
// console.log(r);


// const users = [
//     { id: 1, name: "Amit" },
//     { id: 2, name: "Ravi" }
//   ];

  // Output:
  // [
  //   { label: "Amit", value: 1 },
  //   { label: "Ravi", value: 2 }
  // ]
  

// let r = users.map(value=> ({label: value.name , value:value.id}) );
// console.log(r);

// const nestedArray = [[1, 2], [3, 4], [5]];
// // Output: [1, 2, 3, 4, 5]
// let r = nestedArray.flatMap(value=>value)
// console.log(r);
 

// const numbers = [1, 2, 3, 4, 5, 6];
// // Output: [2, 4, 6]

// let x = numbers.filter(value=>value%2==0)
// console.log(x);
// const words = ["apple", "bat", "banana", "cat", "mango"];
// // Output: ["apple", "banana", "mango"]
// let x = words.filter(value => value.length >= 5)
// console.log(x);

// const users = [
//     { name: "Amit", age: 25 },
//     { name: "Ravi", age: 28 },
//     { name: "Suman", age: 22 }
//   ];
//   // Output: [{ name: "Ravi", age: 28 }]
  
//   let x =  users.filter(v => v.age > 25)
//   console.log(x);


// const values = [0, "apple", "", null, "banana", undefined, "mango"];
// // Output: ["apple", "banana", "mango"]

//   let x = values.filter(value => (Boolean(value) == true))
//   console.log(x);

// const products = [
//     { name: "Shoes", price: 800 },
//     { name: "T-shirt", price: 400 },
//     { name: "Jeans", price: 700 }
//   ];
//   // Output: [{ name: "T-shirt", price: 400 }]

  
//   let x = products.filter(value => value.price< 500);
//   console.log(x);
  
  

// const orders = [
//     { orderId: 2, items: [{ name: "Apple", qty: 3 }, { name: "Orange", qty: 4 }] },
//     { orderId: 1, items: [{ name: "Apple", qty: 5 }, { name: "Banana", qty: 2 }] },
//     { orderId: 3, items: [{ name: "Banana", qty: 3 }, { name: "Apple", qty: 2 }] },
//     { orderId: 4, items: [{ name: "Orange", qty: 1 }, { name: "Banana", qty: 5 }] },
//   ];
  // output:
  // [
  //   { name: "Apple", totalQty: 10 },
  //   { name: "Banana", totalQty: 10 },
  //   { name: "Orange", totalQty: 5 }
  // ]

  // let a = orders.flatMap(value =>value.items)
  // console.log(a);
  
  // let af = a.reduce((acc,curr)=>{    
  //    acc[curr.name] =( acc[curr.name] || 0 ) + curr.qty ;
  //    return acc
  // },[])
  
//   let final = Object.keys(af).map((value)=> ({name : value , total : af[value]}))
//   console.log(final);


// const str = "I love coding in JavaScript! ";

// console.log(str.indexOf("python") == -1 ) ;


// const sentence = "JavaScript is great. JavaScript is powerful. JavaScript is popular.";
// let word = sentence.split(" ")
// let s = "JavaScript"
// let count = 0 ; 
// for(let i of word){
//    if(i == s){
//     count++;
//    }
// }
// console.log(count);






