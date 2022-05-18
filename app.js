//TODO Создаем сервер

const http = require("http");
const fs = require("fs/promises"); //!! обязательно для работы с асинхронными запросами
const path = require("path");

const PORT = process.env.PORT || 8081;

http
  .createServer(async (req, res) => {
    const content = await fs.readFile(path.join(__dirname, "index.html"));
    res.writeHead(200, { "Content-type": "text/html" });
    res.end(content);
  })
  .listen(PORT, () => {
    console.log(`Server was start on port ${PORT}`);
  });
