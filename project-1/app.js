const express = require("express");
const app = express();
const db = require("./server");
const port = 5001;
app.use(express.json());
app.use(express.urlencoded());

app.post("/register", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.send("name and email required");
  }

  const query = "insert into users (name,email) values (?, ?)";
  db.execute(query, [name, email], (err, result) => {
    if (err) {
      res.send("databse error");
    } else {
      res.json({ success: true, message: "register successfully" });
    }
  });
});

app.post("/login", (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    res.send("name and email required");
  }
  const query = `SELECT * FROM users WHERE email = ?`;
  db.execute(query, [email], (err, result) => {
    if (err) {
      res.json({ error: "Database error" });
    }
    if (result.length === 0) {
      res.json({
        "success ": false,
        message: "user not find",
      });
    }
    const user = result[0];
    if (name != user.name) {
      res.json({
        message: "name not match",
      });
    } else {
      res.json(result);
    }
  });
});

app.post("/logout", (req, res) => {});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
