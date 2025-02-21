function twentyFiveOnOne(obj){

let max = obj.reduce((acc,curr)=> {
    return acc > curr.price ? acc : curr.price
},0)
let s = (max * 75 )/100 ;
let  total = obj.reduce((acc,curr)=> {
 return acc + curr["price"] ;
},0)

console.log((total - max ) + s);

}


twentyFiveOnOne([
    { name: "Iphone 20x", quantity: 1, price: 1350 },
    { name: "Samsung x30", quantity: 1, price: 1225 },
    { name: "Nokia 9250", quantity: 1, price: 800 },
    { name: "Tesla Model Y", quantity: 1, price: 72999 }
  ]) //➞ 58124.25
  
  twentyFiveOnOne([
    { name: "jogging pants", quantity: 1, price: 29.99 },
    { name: "tennis socks", quantity: 2, price: 5.99 },
    { name: "sweat shirt", quantity: 1, price: 59.99 }
  ]) //➞ 86.96
  