function combine(user1Income, user2Income) {
	let merge = {...user1Income} ; 
    for( let key in user2Income){
        console.log(key);
        
     merge[key] = (merge[key] || 0 ) + user2Income[key] ;         
     }
return merge     
}

console.log(combine({
    powerPlant: 70000,
    rental: 12000
  } ,{
    teaching: 40000,
    rental: 10000
  }))
  
  
//    becomes ➞ {
//     powerPlant: 70000,
//     teaching: 40000,
//     rental: 22000   // The rental income is added together.
//   }