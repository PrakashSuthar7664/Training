function validateSwaps(arr, str) {
  let validator = str.split("");
 return  arr.map((val) => {
    let validate = val.split("");
    let count = 0 ; 
    for(let i= 0  ; i<validate.length ;i++){
        if( validate[i] !== validator[i]){            
            if(count == 2){
                return false ;
            }
            count++ ;
        }
    }
    return true ; 
  });
}

console.log(validateSwaps(["BACDE", "EBCDA", "BCDEA", "ACBED"], "ABCDE"));
//➞ [true, true, false, false]

// Swap "A" and "B" from "ABCDE" to get "BACDE".
// Swap "A" and "E" from "ABCDE" to get "EBCDA".
// Both "BCDEA" and "ACBED" cannot be formed from "ABCDE" using only a single swap.

console.log(validateSwaps(["32145", "12354", "15342", "12543"], "12345"));
//➞ [true, true, true, true]

console.log(validateSwaps(["9786", "9788", "97865", "7689"], "9768"));
//➞ [true, false, false, false]
