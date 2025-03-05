const cluster = require("cluster");
const http = require("http");
const os = require("os");
const numCPU = os.cpus().length;
// const numCPU = os.availableParallelism();

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  for (let i = 0; i < numCPU; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
}
else{

    http
    .createServer((req, res) => {
        res.writeHead(200);
        res.end("hello world\n");
    })
    .listen(8000);
    
    console.log(`Worker ${process.pid} started`);
}
