const express = require("express");
const app = express();

app.get("/user/:id", (req, res) => {
  res.send(`User ID : ${req.params.id}`);
  console.log(req.baseUrl);
  console.dir(req.fresh);
  console.dir(req.hostname);
  console.dir(req.ip);

});

app.listen(5000);
