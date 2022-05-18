const path = require("path");
const fs = require("fs");

console.log(__dirname);
console.log(path.join(__dirname, "contacts.json"));

const contacts = fs.readFile(path.join(__dirname, "contacts.json", "utf8"));

console.log(contacts);
