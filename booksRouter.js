const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();

router.get("/books", (req, res) => {
  res.json({ books: "Atlant" });
});

module.exports = {
  router,
};
