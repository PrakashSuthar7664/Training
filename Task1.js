let arr = [2,3,4,5,6,8,-1] ; 
// let max = Math.max(...arr);
// let min = Math.min(...arr);
// console.log(max,min);

function maxmin(a){
return a.reduce((acc,curr)=>{
//  acc.min = (acc.min || curr ) < curr  ?  acc.min  : curr ;  
//  acc.max = (acc.max || curr ) > curr  ?  acc.max  : curr ;  
 acc.min = Math.min(acc.min , curr)
 acc.max = Math.min(acc.max , curr)

 return acc ;
}, {min : Infinity , max :-Infinity})
}
console.log(maxmin(arr))