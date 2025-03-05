function admirable(num) {
  if (checkperfact(num)) {
    return "perfact";
  }
  if (adm(num)) {
    console.log("Admirable");
  }
}

function checkperfact(n) {
    let sum =0 ;
  for (let i = 1; i < n; i++) {
    if(n%i==0){
        sum+= i
    }
  }
  return sum == n ;
}

function adm(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (sum < 12) {
      if (n % i == 0) {
        sum += i;
      }
    }
  }
  console.log(n-sum);
  
}

console.log(admirable(6)); //➞ "Perfect"
admirable(12); //➞ 2
console.log(admirable(50)) //➞ "Neither"
