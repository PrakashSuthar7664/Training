function nearestChapter(obj , num){
    // let arr = []
    let a =null ;
    let difference = Infinity ; 

 for(let [key,value] of Object.entries(obj)){
   let diff =  Math.abs(num - value)
//    arr.push(diff)
     if(diff < difference || (diff === difference && value > num  ) ){
        difference = diff ;
        a = key ; 

     }
 }

 return a ; 
//  let min = Math.min(...arr) ;
 
//  for(let [key,value] of Object.entries(obj)){
//        let diff = num > value ? num -value :  value - num  ;
//        if(diff == min){
//         return key 
//        }
//  }

}


console.log(nearestChapter({
    "Chapter 1" : 1,
    "Chapter 2" : 15,
    "Chapter 3" : 37
  }, 10)) //➞ "Chapter 2"
  
  
 console.log( nearestChapter({
    "New Beginnings" : 1,
    "Strange Developments" : 62,
    "The End?" : 194,
    "The True Ending" : 460
  }, 200)) //➞ "The End?"
  
  
console.log(  nearestChapter({
    "Chapter 1a" : 1,
    "Chapter 1b" : 5
  }, 3) )//➞ "Chapter 1b"
console.log(  nearestChapter(
    {"Chapter Four": 46, "Chapter Five": 54}, 50
  ) )