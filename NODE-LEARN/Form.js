const http = require("http");
const fs = require("fs");
const { response } = require("express");
const server = http.createServer((req, res) => {
  console.log(req.method, req.url);

  if (req.url === "/user") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>");
    res.write("This is form ");
    res.write("</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h4>This is user Page</h4>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/product") {
    console.log(req.method, req.url);

    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head>");
    res.write("<title>");
    res.write("This is form ");
    res.write("</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<h4>This is product Page</h4>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url.toLowerCase() === "/form-submit" && req.method == "POST") {
    console.log(req.method, req.url);
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      let bufferbody = Buffer.concat(body).toString();
      console.log(bufferbody);
      let validbuffer = new URLSearchParams(bufferbody);
      console.log(validbuffer);
      let bodyObject = Object.fromEntries(validbuffer);
      console.log(bodyObject);

      fs.writeFile(
        "./NODE-LEARN/user.txt",
        JSON.stringify(bodyObject),
        (err) => {
          if (err) {
            console.log(err);
            res.end();
            return;
          }
          res.statusCode = 302;
          res.setHeader("Location", "/form");
          res.end();
        }
      );
    });
  } else if (req.url === "/form") {
    res.setHeader("Content-Type", "text/html");
    res.write(`
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <form action="/form-submit" method="post">
      <input type="text" placeholder="User name" name="username">
      <br>
      <label for="gender">gender : </label>
      <input type="radio" name="gender" value="male">
      <label for="male">male</label>
      <input type="radio" name="gender" value="female">
      <label for="male">female</label>
      <br/>
      <input value="submit" type="submit"/>
    </form>
  </body>
</html>
        `);
    res.end();
  } else {
    res.write("<html>");
    res.write("<head>");
    res.write("<title>");
    res.write("This is form ");
    res.write("</title>");
    res.write("</head>");
    res.write("</html>");
    res.end();
  }
});

server.listen("8001", () => {
  console.log("server running on http://localhost:8001");
});
