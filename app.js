//TODO Создаем сервер

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8080;

http
  .createServer(async (req, res) => {
    const content = await fs.readFile(path.join(__dirname, "index.html"));
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(content);
    res.end();
  })
  .listen(PORT, () => {
    console.log(`Server was start on port ${PORT}`);
  });
