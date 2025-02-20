function removeLastVowel(str) {
  let s = str.split(" ");
  let vowel = "aeiou";
  let newArr = s.map(val => {
    for(let i=val.length ; i>=0 ; i--){
       if(vowel.includes(val[i])){
         return  val.slice(0,i) + val.slice(i+1) 
       }
    }
    return val ;
   
  });

  console.log(newArr.join(" "));
}

removeLastVowel("Those who dare to fail miserably can achieve greatly.");
// ➞ "Thos wh dar t fal miserbly cn achiev gretly."
removeLastVowel("Love is a serious mental disease.")
// ➞ "Lov s  serios mentl diseas"
removeLastVowel("Get busy living or get busy dying.")
// ➞ "Gt bsy livng r gt bsy dyng"
