const express = require("express");
const app = express();
const compression = require('compression')

app.use(compression())

app.get('/data', (req, res) => {
    let largeData = "Hello, this is a compressed response!".repeat(10000)
    res.send(largeData);
});

const port = 5000 ;
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
