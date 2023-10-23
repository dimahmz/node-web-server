const http = require("http");
const fs = require("fs");
const port = process.env.PORT;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./index.html", (error, html) => {
      if (error) {
        res.write(error);
        res.end();
      } else {
        res.write(html);
        res.end();
      }
    });
    return;
  }

  if (!req.url.startsWith("/files/")) {
    res.write("this file doesn't exist");
    res.end();
    return;
  }

  fs.readFile("./" + req.url, (error, file) => {
    if (error) {
      res.write("this file doesn't exist");
      res.end();
      console.log(error);
    } else {
      res.write(file);
      res.end();
    }
  });

  // console.log("new connection");
});

server.listen(port);

console.log(`server is running on ${port} port`);
