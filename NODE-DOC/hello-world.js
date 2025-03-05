const http = require("http");
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end("Hello, world !");
});

server.listen(port, () => {
  console.log("server running on port 3001");
});
