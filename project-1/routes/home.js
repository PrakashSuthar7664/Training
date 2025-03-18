const express = require("express");
const { getHome } = require("../controllers/homeController");
const route = express.Router();

route.get("/", getHome);

module.exports = route;
