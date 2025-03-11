const sql = require("mysql2");
const connection = sql.createConnection({
  host: "localhost",
  user: "root",
  password:"007664",
  database: "mydatabase",
});

connection.connect((err) => {
  if (err) {
    console.log("connection fail", err);
  } else {
    console.log("connected");
  }
});

module.exports = connection;
