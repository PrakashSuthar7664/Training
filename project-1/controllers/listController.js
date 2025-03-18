const db = require("../server");

const list = (req, res) => {
  const userId = req.session.userinfo[0].idusers;
  const query = "Select * from userlists where userid = ?";
  db.execute(query, [userId], (err, result) => {
    if (err) {
      return res.json({ success: false, message: "Database error h" });
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
  if (!list) {
    return res.send(
      `<script>alert("List Field Empty")
           window.location.href='/list';</script>`
    );
  }

  const query = "insert into userlists (userid , title) values (?,?)";
  db.execute(query, [userId, list], (err) => {
    if (err) {
      return res.json({ success: false, message: "Database error" });
    }
    res.redirect("/list");
  });
};

const deleteList = (req, res) => {
  const { id } = req.params;
  const userId = req.session.userinfo[0].idusers;
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
  const query = "select title from userlists where userid = ? and id = ? "
  db.execute(query, [userId , id ] , (err,result)=>{
    if(err){
        return res.json({ success: false, message: "Database error" });
    }
    else{
        let title = result[0].title ; 
        res.render("edit", { id: id , title});
    }
  })

};

const postEdit = (req, res) => {
  const { id } = req.params;
  const userId = req.session.userinfo[0].idusers;
  const { editlist } = req.body;
  if (!editlist) {
    return res.send(
      `<script>alert("List Field Empty")
           window.location.href='/list';</script>`
    );
  }
  const query = "update userlists set title = ?  where userid = ? and id = ? ";
  db.execute(query, [editlist, userId, id], (err) => {
    if (err) {
      return res.json({ success: false, message: "Database error" });
    }
    res.redirect("/list");
  });
};

module.exports = {
  list,
  getAddlist,
  postAddlist,
  deleteList,
  getEdit,
  postEdit,
};
