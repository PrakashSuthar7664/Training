function ungroupStudents(arr){
    return  arr.flatMap(({teacher,data})=>
     data.map(val => ({ teacher , ...val}))
    );
}
console.log(ungroupStudents([{
    teacher: "Ms. Car",
    data: [{
       name: "James",
       emergenceNumber: "617-771-1082",
    }, {
       name: "Alice",
       alergies: ["nuts", "carrots"],
    }],
  }, {
    teacher: "Mr. Lamb",
    data: [{
      name: "Aaron",
      age: 3
    }]
  }]) )//➞ [{
//     teacher: "Ms. Car",
//     name: "James",
//     emergencyNumber: "617-771-1082",
//   }, {
//     teacher: "Ms. Car",
//     name: "Alice",
//     alergies: ["nuts", "carrots"],
//   }, {
//     teacher: "Mr. Lamb",
//     name: "Aaron",
//     age: 3,
//   }]