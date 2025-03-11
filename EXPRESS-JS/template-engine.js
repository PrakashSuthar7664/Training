const express = require("express");
const app = express();

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", { title: "Hey", message: "Hello there!" });
});
app.get('/user' , (req,res)=>{
  res.redirect("/send")
})

app.get("/send", (req, res) => {
  res.status(201).json({ name: "Prakash" });
});

app.listen(5000);
