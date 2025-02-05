function square(num){
    return num*num ;
}
function cubeRoot(num){
    return Math.cbrt(num) ;
}

function circumferenceOfcircle(num){
    return 2 * Math.PI * num ;
}

let value = prompt('Enter a number') ;

if(isNaN(value)){
    console.log("Enter a valid number");
}
else{
    console.log(`square ${square(value)}`);
    console.log(`cube ${cubeRoot(value)}`);
    console.log(`circumference of circle ${circumferenceOfcircle(value)}`);
}
    
    


