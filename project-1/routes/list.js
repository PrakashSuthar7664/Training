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

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const filetypes = [".jpeg", ".jpg", ".png", ".gif", ".bmp"];
  const extname = path.extname(file.originalname).toLowerCase();
  console.log(extname);
  const extcheck = filetypes.includes(extname);
  if (extcheck) {
    return cb(null, true);
  } else {
    req.invalidfile = "Only accept image";
    return cb(null, false);
  }
};
const upload = multer({ storage, fileFilter });

function isvalid(req, res, next) {
  if (req.session.userinfo) {
    next();
  } else {
    res.redirect("/login");
  }
}
route.get("/list", isvalid, list);
route.get("/addlist", isvalid, getAddlist);
route.post("/addlist", isvalid, upload.single("image"), postAddlist);
route.post("/deletelist/:id", isvalid, deleteList);
route.get("/edit/:id", isvalid, getEdit);
route.post("/edit/:id", isvalid, upload.single("image"), postEdit);

module.exports = route;
