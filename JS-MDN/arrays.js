function charAtPos(arr, h) {
  if (typeof arr == "string") {
    arr = arr.split("");
  }

  return arr.filter((_, index) => {
    if (arr.length % 2 == 0) {
      return h == "odd" ? index % 2 != 0 : index % 2 == 0;
    } else {
      return h == "even" ? index % 2 != 0 : index % 2 == 0;
    }
  });
}

console.log(charAtPos([2, 4, 6, 8, 10], "even")); //➞ [4, 8]

console.log(charAtPos("EDABIT", "odd")); //➞ "DBT"

console.log(
  charAtPos([")", "(", "*", "&", "^", "%", "$", "#", "@", "!"], "odd")
); 

console.log(charAtPos(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "odd"));

