


  
  const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];
  
  const upperCats = cats.map((v)=>v.toUpperCase());
  const strWithL = cats.filter((v)=>v.startsWith("L"));
  
  console.log(upperCats);
  console.log(strWithL);

const catss = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

for (const cat of cats) {
  myFavoriteCats +=`${cat} ` ;
}

console.log(myFavoriteCats);

  

