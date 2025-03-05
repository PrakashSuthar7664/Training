const x = 1 + 2 * 3;
const y = 2 * 3 + 1;

console.log(x,y); //7 7


const z =4 ; 
console.log(-z); //-4


const x1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const a = [x, x, x, x, x];

for (let i = 0, j = 9; i <= j; i++, j--) {
  
  console.log(`a[${i}][${j}]= ${a[i][j]}`);
}

