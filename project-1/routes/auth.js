const express = require("express");
const route = express.Router();
// const db = require("../server");
// const cookiesession = require("cookie-session");
const {
  getRegister,
  postLogin,
  postRegister,
  getLogin,
  getLogout,
} = require("../controllers/authController");

route.get("/register", getRegister);
route.post("/register", postRegister);
route.get("/login", getLogin);
route.post("/login", postLogin);
route.get("/logout", getLogout);

module.exports = route;
