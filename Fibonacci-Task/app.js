const readline = require("readline");
const fs = require("fs");

function genrateFibonacci(n) {
  fs.readFile("./fibonacci.csv", "utf8", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      let datafile = data.trim().split("\n");
      let newlengthdata = datafile.map((e) => {
        return e.split(",").length;
      });
      if (newlengthdata.includes(n)) {
        return datafile.filter((e) => {
          if (e.split(",").length === n) {
            return e;
          }
        });
      }
    }
  });

  if (n == 1 || n == 0) {
    return [0];
  }
  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
async function askQuestion() {
  rl.question("Enter the number : ", (number) => {
    num = parseInt(number);
    const fibseries = genrateFibonacci(num).join(",");
    console.log(fibseries);
    fs.readFile("./fibonacci.csv", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      } else {
        let datafile = data.trim().split("\n");
        if (!datafile.includes(fibseries)) {
          fs.appendFile("./fibonacci.csv", fibseries + "\n", (err) => {
            if (err) {
              console.log(err);
            }
          });
        }
      }
    });

    askQuestion();
  });
}
askQuestion();
