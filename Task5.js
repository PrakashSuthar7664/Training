function a(str, ans = "") {
  let result = [];
  if (str.length === 0) {
    console.log(ans);
    return;
  }

  let len = str.length;
  for (let i = 0; i < len; i++) {
    let fc = str[i];
    let remaining = str.slice(0, i) + str.slice(i + 1);
    a(remaining, ans + fc);
  }
}

a("abc");
