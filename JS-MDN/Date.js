let D = new Date();

let hours = D.getHours();
console.log(hours % 12 ); 


const cats = ["Dusty", "Misty", "Twiggy"];
console.log(cats.length); // 3

cats.length = 3;
console.log(cats);


// const a1 = ["a", "b", "c"];
// const a2 = a1.flatMap((item) => [item.toUpperCase() , item.toLowerCase()]);
// console.log(a2);  // [ 'A', 'a', 'B', 'b', 'C', 'c' ]

const a1 = ["a", "b", "c"];
const a2 = a1.map((item) => [item.toUpperCase() , item.toLowerCase()]);
console.log(a2);   //

const inventory = [
    { name: "asparagus", type: "vegetables" },
    { name: "bananas", type: "fruit" },
    { name: "goat", type: "meat" },
    { name: "cherries", type: "fruit" },
    { name: "fish", type: "meat" },
  ];

  
  const result = Object.groupBy(inventory, ({ type }) => type);  //ES2023 function
  console.log(result);
  