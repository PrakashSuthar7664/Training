// { a: { b: { c: 0, d: 2 } }, e: 3 }
// {a.b.c :0 , a.b.d :2 ,e:3}

function flatobj(obj) {
  let newObj = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      temp = flatobj(obj[key]);
      for (let key2 in temp) {
        newObj[key + "." + key2] = temp[key2];
      }
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

let obj = { a: { b: { c: 0, d: 2 } }, e: 3 };
console.log(flatobj(obj));
