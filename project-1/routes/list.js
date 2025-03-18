const express = require("express");
const route = express.Router();
const {
  list,
  getAddlist,
  postAddlist,
  deleteList,
  getEdit,
  postEdit,
} = require("../controllers/listController");

function isvalid(req, res, next) {
  if (req.session.userinfo) {
    next();
  } else {
    res.redirect("/login");
  }
}
route.get("/list", isvalid, list);
route.get("/addlist", isvalid, getAddlist);
route.post("/addlist", isvalid, postAddlist);
route.post("/deletelist/:id", isvalid, deleteList);
route.get("/edit/:id", isvalid, getEdit);
route.post("/edit/:id", isvalid, postEdit);

module.exports = route;
