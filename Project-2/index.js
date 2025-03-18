const express = require("express");
const app = express();
const homeRoute = require("./routes/homeRoute");
const questionRoute = require("./routes/questionRoute");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", homeRoute);
app.use("/", questionRoute);

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
