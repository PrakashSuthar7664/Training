const express = require("express");
const app = express();
const db = require("./server");
const port = 5001;
app.use(express.json());
app.use(express.urlencoded());

async function checkvalid(email) {
  const query = "SELECT * FROM users where email = ?";
  db.execute(query, [email], (err, result) => {
    if(result.length == 0) {
        console.log("enter")
      return true;
    } 
    if(result[0].email === email) {
      return false;
    } 
    else{
        return true ; 
    }
  });
}

app.post("/register", async(req, res) => {
  const { name, email, password } = req.body;
  console.log(name ,email);
  let check = await checkvalid(email);
  console.log(check,"'JJJJJJJJJJJJJJ")
  if (!name || !email || !password) {
    res.send("name email and password fields required");
  }
  if (check) {
    const query = "insert into users (name,email, password) values (?, ? ,?)";
    db.execute(query, [name, email, password], (err, result) => {
      if (err) {
        res.json({ success: false, message: "Database error" });
      } else {
        res.json({ success: true, message: "Register Successfully" });
      }
    });
  } else {
    res.json({ success: false, message: "Email Already Registered" });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.send("Email and Password fields required");
  }
  const query = `SELECT * FROM users WHERE email = ?`;
  db.execute(query, [email], (err, result) => {
    if (err) {
      res.json({ success: false, message: "Database error" });
    }
    if (result.length === 0) {
      res.json({
        success: false,
        message: "Invalid credentials",
      });
    }
    const user = result[0];
    if (password != user.password) {
      res.json({
        success: false,
        message: "Invalid Password",
      });
    } else {
      res.json({ success: true, message: "Login Successfully" });
    }
  });
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
