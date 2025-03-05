function isAutobiographical(num){
 let arr = num.toString().split("") ; 
 let check = [] ;
 arr.map((val,idx)=>{
    let n = arr.filter(val => val == idx).length ;
    check.push(n)
 })
 console.log(parseFloat(check.join("")) === num);
 
}
isAutobiographical(6210001000) //➞ true

isAutobiographical(12345) //➞ false

isAutobiographical(1210) //➞ true
// one 0, two 1's, one 2, zero 3's

isAutobiographical(638) //➞ false

isAutobiographical(0) //➞ false
// claims no zeroes, however zero is the first digit
