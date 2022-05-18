const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8080;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hallo</h1>");
    res.end();
  })
  .listen(PORT, () => {
    console.log(`Server was start on port ${PORT}`);
  });
