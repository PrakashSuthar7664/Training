function allPairs(arr, target) {

  let ar = [];
  for (let i = 0; i < arr.length -1  ; i++) {
    for (let j = i; j < arr.length  ; j++) {
      if (arr[i] + arr[j] == target) {
            ar.push([arr[i], arr[j]].sort());
      }
    }
  }

  console.log(ar.sort((a, b) => a[0] - b[0]));
}

allPairs([2, 4, 5, 3], 7); //➞ [[2, 5], [3, 4]]
// 2 + 5 = 7, 3 + 4 = 7

allPairs([5, 3, 9, 2, 1], 3); //➞ [[1, 2]]

allPairs([4, 5, 1, 3, 6, 8], 9); //➞ [[1, 8], [3, 6], [4, 5]]
// Sorted: 1 < 3 < 4; each pair is ordered [smaller, larger]

