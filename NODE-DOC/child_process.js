const { spawn } = require("child_process");

const child = spawn("cmd.exe", ["/c", "dir"]);

child.stdout.on("data", (data) => {
  console.log(`data = ${data}`);
});

child.stderr.on("data", (data) => {
  console.log(`data error ${data}`);
});
