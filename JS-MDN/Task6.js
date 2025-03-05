// const sentence = "apple banana apple orange banana apple orange orange";

// output:
// { apple: 3, banana: 2, orange: 3 }


function a(sentence){
let map = new Map();
let words = sentence.split(" ");
console.log(words);
for(let i of words){
  if(!map.has(i)){
      map.set(i ,1)
    }else{
      map.set(i, map.get(i)+1)
  }
}
console.log(map);

}

const sentence = "apple banana apple orange banana apple orange orange";
a(sentence)