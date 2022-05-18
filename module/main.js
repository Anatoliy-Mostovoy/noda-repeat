//* импортируем

const md = require("./module.js");
// const { info, log } = require("./module.js"); //* вторрой вариант импорта

md.info("hi");

console.log(__dirname);
console.log(__filename);

const os = require("os");

console.log(os.cpus().length);
