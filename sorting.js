function getHashTags(str) {
  let s = str.split(" ").sort((a, b) => b.length - a.length);
  newarr = [];
  for (let i = 0; i < s.length; i++) {
    if (i < 3) {
      newarr.push(`#${s[i]}`);
    }
  }
  console.log(newarr);
}
getHashTags("How the Avocado Became the Fruit of the Global Trade");
//➞ ["#avocado", "#became", "#global"]

getHashTags("Why You Will Probably Pay More for Your Christmas Tree This Year");
//➞ ["#christmas", "#probably", "#will"]

getHashTags("Hey Parents, Surprise, Fruit Juice Is Not Fruit");
//➞ ["#surprise", "#parents", "#fruit"]

getHashTags("Visualizing Science");
//➞ ["#visualizing", "#science"]
