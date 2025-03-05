function getNotesDistribution(arr) {
  let newArr = arr.flatMap((val) => val.notes);
  let map = new Map();
    newArr.map((val)=>{
      if(val>0  && val < 6){
          if (!map.has(val)) {
              map.set(val, 1);
          } else {
              map.set(val, map.get(val) + 1);
          }
      }
  }
  )
  console.log(Object.fromEntries(map));
}

getNotesDistribution(
  [
    {
      name: "Steve",
      notes: [5, 5, 3, -1, 6],
    },
    {
      name: "John",
      notes: [3, 2, 5, 0, -3],
    },
  ] //➞ {
  //     5: 3,
  //     3: 2,
  //     2: 1
  //   }
);
