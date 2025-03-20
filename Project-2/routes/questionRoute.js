const express = require("express");
const route = express.Router();
const {
  getQuestion,
  postQuestion,
} = require("../controllers/questionsController");

route.get("/questions/:index", getQuestion);

route.post("/questions/:index", postQuestion);

module.exports = route;
