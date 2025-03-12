const db = require("../server");
const crypto = require("crypto");

function checkvalid(email) {
  return new Promise((resolve, reject) => {
    const query = "SELECT * FROM users where email = ?";
    db.execute(query, [email], (err, result) => {
      if (result.length == 0) {
        resolve(true);
      } else if (result[0].email === email) {
        resolve(false);
      }
    });
  });
}

exports.getRegister = (req, res) => {
  res.render("register");
};

exports.postRegister = async (req, res) => {
  const { name, email, password } = req.body;

  const check = await checkvalid(email);
  if (!name || !email || !password) {
    return res.send("name email and password fields required");
  }
  let pass = crypto.createHmac("sha256" , email).update(password).digest("hex");
  if (check) {
    const query = "insert into users (name,email, password) values (?, ? ,?)";
    db.execute(query, [name, email, pass], (err, result) => {
      if (err) {
        res.json({ success: false, message: "Database connected error" });
      } else {
        return res.send(
          `<script>alert("Register Successfully")
              window.location.href='/login';
              </script>  
               `
        );
        // res.json({ success: true, message: "Register Successfully" });
      }
    });
  } else {
    // res.json({ success: false, message: "Email Already Registered" });
    return res.send(`<script>alert("Email Already Registered")
            window.location.href='/login';
            </script>`);
  }
};

exports.getLogin = (req, res) => {
  res.render("login");
};

exports.postLogin = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.send("Email and Password fields required");
  }
  
  let pass = crypto.createHmac("sha256" , email).update(password).digest("hex");
  const query = `SELECT * FROM users WHERE email = ?`;
  db.execute(query, [email], (err, result) => {
    if (err) {
      res.json({ success: false, message: "Database connected error" });
    }
    if (result.length === 0) {
      return res.send(
        `<script>alert("Email not found! Please register first.")
            window.location.href='/login';</script></script>
            `
      );

      //   res.json({
      //     success: false,
      //     message: "Invalid credentials",
      //   });
    }
    const user = result[0];
    if (pass != user.password) {
      //   res.json({
      //     success: false,
      //     message: "Invalid Password",
      //   });
      return res.send(
        `<script>alert("Invalid Password")
            window.location.href='/login';</script>`
      );
    } else {
      req.session.userinfo = result;
      //   res.json({ success: true, message: "Login Successfully" });
      req.session.message = "Login Successfully";
      res.redirect("/");
    }
  });
};

exports.getLogout = (req, res) => {
  req.session = null;
  res.redirect("/login");
};
