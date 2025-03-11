const express = require("express");
// const cookieParser = require("cookie-parser");
// const cookiesession = require("cookie-session");
const morgan = require('morgan');
const app = express();

// app.use(cookieParser());

// app.get("/", (req, res) => {
//   console.log(req.cookies);
//   res.send("Cookie parsed");
// });
// app.get("/set-cookie", (req, res) => {
//   res.cookie("name", "prakash");
//   res.cookie("theam", "dark");
//   res.send("Cookie set Successfully");
// });

// app.get("/delete-cookie", (req, res) => {
//   res.clearCookie("name");
//   res.send("cookie clear");
// });



// app.use(
//   cookiesession({
//     name: "session",
//     keys: ["secretkey"],
//   })
// );

// app.get("/", (req, res) => {
//   req.session.views = (req.session.views || 0) + 1;
//   res.send(`You have visited this page ${req.session.views} times`);
// });


// app.use(morgan('dev'))
// app.get('/' ,(req,res)=>{
//     res.send("Morgan")
// })



app.listen(8001);
