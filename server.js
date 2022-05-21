const { response } = require("express");
const express = require("express");
const app = express(); //* инициалищируем express приложение. Создаем экземпляр приложенич
const morgan = require("morgan");
const { router } = require("./booksRouter.js");

const PORT = process.env.PORT || 8081;

app.use(express.json()); //* мидлвар для парса json в запросе. Записывает в req.body
app.use(express.static("public")); //* даем публичный доступ к какому-то файлу на бэке. Без указания пути. Просто имя папки от куда тянуть данные
app.use(morgan("tiny")); //* middleware для логирования запросов
app.use("/api", router); //* подключаем раут,router); //* подключаем раут

app.post("/home", (req, res) => {
  console.log(req.body);
  res.json({ body: req.body });
});

//* когда не срабатывает какой-то запрос - используют метод USE
//* use это мидлвар
app.use((req, res) => {
  res.json({ name: "Tolik" });
});

//* Запускаем порт
app.listen(PORT, (error) => {
  if (error) {
    console.log("Something go bad :(");
  }
  console.log(`Server was started on port ${PORT}`);
});
