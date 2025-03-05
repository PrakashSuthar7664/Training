function getBestStudent(obj){
    let max = 0 ;
  for(let[key,value] of Object.entries(obj)){
    let sum = 0 ;
       value.forEach((val) => {
          sum += val; 
       })
       let avg = sum/value.length ; 
       
  }

  
}

getBestStudent({
    John: [100, 90, 80],
    Bob: [100, 70, 80]
  }) //➞ "John"
  
  // John's avg = 90
  // Bob's avg = 83.33
  
//   getBestStudent({
//     Susan: [67, 84, 75, 63],
//     Mike: [87, 98, 64, 71],
//     Jim: [90, 58, 73, 86]
//   }) //➞ "Mike"