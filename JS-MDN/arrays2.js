function majorityVote(arr) {
  let map = new Map();
  arr.map((val) => {
    if (!map.has(val)) {
      map.set(val, 1);
    } else {
      map.set(val, map.get(val) + 1);
    }
  });

  let m = Object.fromEntries(map);
  let keys = Object.values(m);
  let max = keys.reduce((acc, curr) => {
    return Math.max(acc, curr);
  }, 0);
  let ar = "";
  for (let [key, value] of Object.entries(m)) {
    if (max == value) {
      ar += key;
    }
  }
  if (ar.length > 1 || ar.length == 0) {
    console.log("null");
  } else {
    console.log(ar);
  }
}

majorityVote(["A", "A", "B"]); //➞ "A"
majorityVote(["A", "A", "A", "B", "C", "A"]); //➞ "A"
majorityVote(["A", "B", "B", "A", "C", "C"]); //➞ null
majorityVote([]);
majorityVote(["A"]);
majorityVote(["A", "B"]);
