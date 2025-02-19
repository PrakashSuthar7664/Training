function rearrange(str) {
  let s = str.split(" ");
  let sort = s.map((val) => val.split(""));

  let sortedArr = sort.map((subArr) => {
    let num = subArr.filter((val) => !isNaN(val));
    let l = subArr.filter((val) => isNaN(val));
    return num.concat(l);
  });
  let ss = sortedArr.sort((a, b) => a[0] - b[0]);
  console.log(ss.map((val) => val.join("").slice(1)).join(" "));
}

rearrange("is2 Thi1s T4est 3a"); //➞ "This is a Test"
rearrange("4of Fo1r pe6ople g3ood th5e the2"); //➞ "For the good of the people"
rearrange(" "); //➞ ""
rearrange("h1appy y3all! coding2");
