const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "007664",
  database : "mydatabase"
});


db.connect((err)=>{
    if(err){
        console.log("connection Fail")
    }else{
        console.log("connected")
    }
})

module.exports = db ; 