function isShuffledWell(arr) {
  for (let i = 0; i < arr.length - 3; i++) {
    let firstChar = arr[i];
    if (firstChar == arr[i + 1] - 1 && arr[i + 1] - 1 == arr[i + 2] - 2) {
      return false;
    }
    if (firstChar == arr[i + 1] + 1 && arr[i + 1] + 1 == arr[i + 2] + 2) {
      return false;
    }
  }
  return true;
}

console.log(isShuffledWell([1, 2, 3, 5, 8, 6, 9, 10, 7, 4])); //➞ false
// 1, 2, 3 appear consecutively
console.log(isShuffledWell([3, 5, 1, 9, 8, 7, 6, 4, 2, 10])); //➞ false
// 9, 8, 7, 6 appear consecutively
console.log(isShuffledWell([1, 5, 3, 8, 10, 2, 7, 6, 4, 9])); //➞ true
// No consecutive numbers appear
console.log(isShuffledWell([1, 3, 5, 7, 9, 2, 4, 6, 8, 10])); //➞ true
console.log(isShuffledWell([8, 4, 9, 5, 6, 3, 1, 10, 7, 2]));
console.log(isShuffledWell([10, 1, 9, 4, 3, 2, 7, 8, 6, 5]));


// No consecutive numbers appear
