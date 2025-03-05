function happy(num){
  if(num == 1){
    return true ;
  }  
let s = String(num);
let str = s.split("");
let square =  str.map((val) => {
    return val * val
})
let sum =0 ;
  square.forEach(val => sum +=val )
  if(sum > num){
    return false ;
  }
 return happy(sum) ;
}

console.log(happy(203)) //➞ true
console.log(happy(11)) //➞ false
console.log(happy(107)) //➞ false


