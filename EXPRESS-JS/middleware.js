const express = require("express");
const router = express.Router();
const app = express();

// const mylogger = function (req, res, next) {
//   console.log("logged");
//   next();
// };
// const requestTime = function (req, res, next) {
//   req.requestTime = Date.now();
//   next();
// };
// app.use(mylogger);
// app.use(requestTime);

// app.use(
//   "/user/:id",
//   (req, res, next) => {
//     console.log(req.originalUrl);
//     next();
//   },
//   (req, res, next) => {
//     console.log(req.method);
//     next();
//   },
//   (req, res, next) => {
//     res.send(req.params.id);
//     next();
//   }
// );

router.use((req, res, next) => {
  console.log("middleware for router");
  next();
});

router.get("/profile", (req, res) => {
  res.send("user Profile");
});

router.get("/setting", (req, res) => {
  res.send("User setting");
});

app.use("/user", router);

app.get("/user/:id", (req, res, next) => {
    if (req.params.id === "admin") {
      next();
    } else {
      next("route");
    }
  },
  (req, res, next) => {
    res.send("admin page");
  }
);

// app.get("/user/:id", (req, res) => {
//   res.send("Welcome User");
// });
app.get("/", (req, res) => {
  res.send(`<h4>${req.requestTime}<h4/>`);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});
