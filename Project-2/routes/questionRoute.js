const express = require("express");
const route = express.Router();
const {
  getQuestions,
  postQuestions,
} = require("../controllers/questionsController");

route.get("/questions/:index", getQuestions);

route.post("/questions/:index", postQuestions);

module.exports = route;
