
// const tagline = "MDN - Resources for developers, by developers";

// const firstOccurrence = tagline.indexOf("developers");
// const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

// console.log(firstOccurrence);      //20
// console.log(secondOccurrence);    //35
// console.log(tagline.indexOf("x")); //-1 //if not present

let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let [first , second , ...rest ] = arr ;

console.log(first, second, rest);