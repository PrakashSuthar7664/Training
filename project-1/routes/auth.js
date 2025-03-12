const express = require("express");
const route = express.Router();
// const db = require("../server");
// const cookiesession = require("cookie-session");
const authcontroller = require('../controllers/authController')

route.get("/register", authcontroller.getRegister);

route.post("/register", authcontroller.postRegister);

route.get("/login", authcontroller.getLogin);

route.post("/login", authcontroller.postLogin);

route.get("/logout", authcontroller.getLogout );

module.exports = route;
