function sumDigProd(...num) {
  let s = num.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return last(s);
}

function last(l) {
  let n = l.toString().split("");
  if (n.length == 1) {
    return l;
  }
  let mul = n.reduce((acc, curr) => {
    return acc * curr;
  }, 1);
  return last(mul);
}
console.log(sumDigProd(16, 28)); // ➞ 6
// 16 + 28 = 44
// 4 * 4 =  16
// 1 * 6 = 6

console.log(sumDigProd(0)); //➞ 0
console.log(sumDigProd(111111111));
console.log(sumDigProd(999, 999));

console.log(sumDigProd(1, 2, 3, 4, 5, 6)); //➞ 2
