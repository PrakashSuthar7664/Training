function getLanguages(obj, num) {
  let total = num;
  let arr = [];
  for (let [key, value] of Object.entries(obj).sort((a, b) => b[1] - a[1])) {
    if (value <= total) {
      arr.push(key);
      total = total - value;
    }
  }
  console.log(arr.sort());
}
const programmingLanguages = {
  "C#": 1,
  "C++": 2,
  Java: 4,
  JavaScript: 8,
  PHP: 16,
  Python: 32,
  Ruby: 64,
  Swift: 128,
};
getLanguages(programmingLanguages, 25); //➞ ["C#", "JavaScript", "PHP"]

getLanguages(programmingLanguages, 100); //➞ ["Java", "Python", "Ruby"]

getLanguages(programmingLanguages, 53); //➞ ["C#", "Java", "PHP", "Python"]
