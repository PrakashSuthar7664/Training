const express = require("express");
// const db = require('./database')
const app = express();
const admin = express();

admin.get("/", (req, res) => {
  console.log(admin.mountpath);
  res.send("Admin homepage");
});

app.get("/", (req, res) => {
  console.log("parent app");
});
app.use("/admin", admin);
const port = 5000;
app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
