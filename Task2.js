const data = [
  { category: "fruit", name: "Apple" },
  { category: "fruit", name: "Banana" },
  { category: "vegetable", name: "Carrot" },
  { category: "fruit", name: "Orange" },
];

let result = {};

for (let c in data) {
  if (!result[data[c].category]) {
    result[data[c].category] = [];
  }
  result[data[c].category].push(data[c].name);
}

// data.forEach((item) => {
//   let ar = [];
//   console.log(item["category"]);

//   if (item["category"] == "fruit") {

//     ar.push(item["name"]);
//   } else {
//     ar.push(item["name"]);
//   }
//   result[item["category"]] = ar;
// });

console.log(result);
