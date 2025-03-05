function sentence(arr){
    let vowel = "aeiou"
return (arr.map((val ,index) =>{
 if(index == 0){
   let v =  val.split("")[0] ; 
     if(vowel.match(v)){
        return `An ${val}`
     }else{
        return `A ${val}`

     }
 }
  if(index == arr.length -1 ){
    let v =  val.split("")[0] ;
    if(vowel.match(v)){
        return ` and an ${val}`
     } else{
        return ` and a ${val}`

     }
  }
  let v =  val.split("")[0] ;
  if(vowel.match(v)){
    return `, an ${val}`
 } else{
    return `, a ${val}`
 }
}
  
)).join("")
}

console.log(sentence(["orange", "apple", "pear"]) )//➞ "An orange, an apple and a pear."

console.log(sentence(["keyboard", "mouse"]) )//➞ "A keyboard and a mouse."

console.log(sentence(["car", "plane", "truck", "boat"])) //➞ "A car, a plane, a truck and a boat."

console.log(sentence(["aa", "ee", "ii", "oo", "uu", "vv", "tt", "qw", "zz"]));
