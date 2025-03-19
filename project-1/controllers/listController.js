const db = require("../server");
const fs = require("fs");
const path = require("path");

const list = (req, res) => {
  const userId = req.session.userinfo[0].idusers;
  const query = "Select * from userlists where userid = ?";
  db.execute(query, [userId], (err, result) => {
    if (err) {
      return res.json({ success: false, message: "Database error" });
    }
    res.render("list", { listdata: result });
  });
};

const getAddlist = (req, res) => {
  res.render("addlist");
};

const postAddlist = (req, res) => {
  const userId = req.session.userinfo[0].idusers;
  const { list } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : null;
  if (req.invalidfile) {
    return res.send(`<script>alert("Only image Accept")
      window.location.href="/addlist"</script>
      `);
  } else {
    if (!list || !image) {
      return res.send(
        `<script>alert("All Fields Require")
           window.location.href='/addlist';</script>`
      );
    }

    const query =
      "insert into userlists (userid , title, image) values (?,?,?)";
    db.execute(query, [userId, list, image], (err) => {
      if (err) {
        return res.json({ success: false, message: "Database error" });
      }
      res.redirect("/list");
    });
  }
};

const deleteList = (req, res) => {
  const { id } = req.params;
  const userId = req.session.userinfo[0].idusers;

  const getimagequery =
    "select image from userlists where userid = ? and id = ? ";
  db.execute(getimagequery, [userId, id], (err, result) => {
    if (err) {
      return res.json({ success: false, message: "Database error" });
    } else {
      const imagepath = path.join(__dirname, "../public", result[0].image);

      fs.unlink(imagepath, (err) => {
        console.log(err);
      });
    }
  });

  const query = "delete from userlists where userid = ? and id = ? ";
  db.execute(query, [userId, id], (err) => {
    if (err) {
      return res.json({ success: false, message: "Database error" });
    }
    res.redirect("/list");
  });
};

const getEdit = (req, res) => {
  const { id } = req.params;
  const userId = req.session.userinfo[0].idusers;
  const query = "select title from userlists where userid = ? and id = ? ";
  db.execute(query, [userId, id], (err, result) => {
    if (err) {
      return res.json({ success: false, message: "Database error" });
    } else {
      let title = result[0].title;
      res.render("edit", { id: id, title });
    }
  });
};

const postEdit = (req, res) => {
  const { id } = req.params;
  const image = req.file ? `/uploads/${req.file.filename}` : null;
  const userId = req.session.userinfo[0].idusers;
  const { editlist } = req.body;
  if (req.invalidfile) {
    return res.send(`<script>alert("Only image Accept")
      window.location.href="/edit/${id}"</script>
      `);
  } else {
    if (!editlist || !image) {
      return res.send(
        `<script>alert("All Fields Require")
           window.location.href="/edit/${id}";</script>`
      );
    }
    const query =
      "update userlists set title = ? , image= ?  where userid = ? and id = ? ";
    db.execute(query, [editlist, image, userId, id], (err) => {
      if (err) {
        return res.json({ success: false, message: "Database error" });
      }
      res.redirect("/list");
    });
  }
};

module.exports = {
  list,
  getAddlist,
  postAddlist,
  deleteList,
  getEdit,
  postEdit,
};
