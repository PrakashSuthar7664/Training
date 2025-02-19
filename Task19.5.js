function zeroesToEnd(arr) {

let zeros = arr.filter(val => val == 0 );
let withoutZeros = arr.filter(val => val !== 0 );
console.log([...withoutZeros , ...zeros]);
}

zeroesToEnd([1, 2, 0, 0, 4, 0, 5]); //➞ [1, 2, 4, 5, 0, 0, 0]
zeroesToEnd([0, 0, 2, 0, 5]); //➞ [2, 5, 0, 0, 0]
zeroesToEnd([4, 4, 5]); //➞ [4, 4, 5]
zeroesToEnd([0, 0]); //➞ [0, 0]
