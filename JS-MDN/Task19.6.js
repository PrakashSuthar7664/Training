function block(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] == 2) {
        sum += arr.length - 1 - i;
      }
    }
  }

  console.log(sum);
}

block([
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 2],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
]); //➞ 2

// The tall person blocks 2 people behind him thus
// the function returns 2.

block([
  [1, 2, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
]); //➞ 5

// There are 2 tall people that block everyone behind
// them. The first tall person in the first row blocks 3
// people behind him while the second tall person in
// the second row blocks 2 people behind him thus the
// function returns 5.

block([
  [1, 1, 1, 1],
  [2, 1, 1, 2],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
]); //➞ 4

block([
  [1, 1, 1, 1],
  [2, 1, 1, 2],
  [1, 1, 1, 1],
  [1, 1, 2, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
]);

block([
  [1, 1, 1, 1, 1, 1, 2],
  [1, 1, 1, 1, 1, 1, 1],
  [1, 2, 1, 2, 1, 1, 1],
]);
