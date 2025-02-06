function checkSum(arr , n){
    let result=[] ;
    for(let i=0 ; i<arr.length ; i++){
        for(let j=i ; j<arr.length ; j++){
            if(arr[i] == arr[j]){
                continue ;
            }
              else if(arr[i] + arr[j] == n){
                result.push([arr[i],arr[j]])
                
              }
        }
}

return result ;

}


const arr = [1,2,3,4,5,6,7,8] ;
console.log(checkSum(arr ,10))


