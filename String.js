
const tagline = "MDN - Resources for developers, by developers";

const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence);      //20
console.log(secondOccurrence);    //35
console.log(tagline.indexOf("x")); //-1 //if not present

