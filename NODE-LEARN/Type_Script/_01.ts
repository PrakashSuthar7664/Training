// function greet(name: string){
//     console.log(`Hello ${name}`);
// }
// greet("Prakash")


type obj = {
    name : string , 
    age : number 
}

function isvalidAge(user : obj) : boolean {
    return user.age >=18; 
} 

const age = {
    name : "PS" , 
    age  : 20  
}

const checkAge = isvalidAge(age)
console.log(checkAge);

