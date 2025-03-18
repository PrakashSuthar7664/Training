const express = require("express");
const app = express();
const db = require("./server");
const cookiesession = require("cookie-session");
const homeRoutes = require("./routes/home");
const authRoutes = require("./routes/auth");
const listRoutes = require("./routes/list");

const port = 5001;
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(
  cookiesession({
    name: "session",
    keys: ["secretKeys"],
  })
);
app.set("view engine", "ejs");
app.use("/", homeRoutes);
app.use("/", authRoutes);
app.use("/", listRoutes);

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
