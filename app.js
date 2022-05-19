//TODO Создаем сервер

// const http = require("http");
// const fs = require("fs/promises");
// const path = require("path");

// const PORT = process.env.PORT || 8081;

// const requestHandler = async (req, res) => {
//   const content = await fs.readFile(path.join(__dirname, "index.html"));
//   res.writeHead(200, { "Content-type": "text/html" });
//   res.end(content);
// };

// const server = http.createServer(requestHandler);
// server.listen(PORT, (error) => {
//   if (error) {
//     return console.log("Something go wrong");
//   }
//   console.log(`Server was start ${PORT}`);
// });
