const express = require("express");
const userRoute = require('./router'); 

const app = express();
const port = 8001;

app.use(express.static("public"));
app.use('/users' , userRoute) ; 

app.get("/", (req, res) => {
  console.log(req.method);
  //   res.send("hello");
  res.download("/EXPRESS-JS/public/index.html");
  res.sendFile("_dirname", "/EXPRESS-JS/public/index.html");
});

app.post("/post_testing", (req, res) => {
  res.send("Post method test");
});

app.put("/put_testing", (req, res) => {
  res.send("Put method test");
});

app.delete("/delete_testing", (req, res) => {
  res.send("delete method test");
});

app.all("/secret", (req, res, next) => {
  res.send("Accessing the secret section");
  next();
});

// app.get("/ab?cd", (req, res) => {
//   res.send("ab?cd")
// });
// app.get("/ab+cd", (req, res) => {
//   res.send("ab+cd")
// });
app.get("/ab*cd", (req, res) => {
  res.send("ab*cd");
});

app.get("/user/:name/:age/:userId", (req, res) => {
  res.send(req.params);
});

function c0(req, res, next) {
  console.log("c0");
  next();
}
function c1(req, res, next) {
  console.log("c1");
  next();
}
function c2(req, res, next) {
  console.log("c2");
}
app.get("/example/c", [c0, c1, c2]);

app
  .route("/route")
  .get((req, res) => {
    res.send("get a book");
  })
  .post((req, res) => {
    res.send("send a book");
  })
  .put((req, res) => {
    res.send("update a book");
  });

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
