const path = require("path");
const fs = require("fs/promises");

// console.log(__dirname);
// console.log(path.join(__dirname, "contacts.json")); //* правильное обращение к файлу

const readContacts = async () => {
  const response = await fs.readFile(
    path.join(__dirname, "contacts.json"),
    "utf8"
  );
  try {
    const contacts = JSON.parse(response);
    return contacts;
  } catch (error) {
    console.log("Error in try...cath");
  }
};

console.log(
  readContacts().then((data) => {
    console.table(data);
  })
);
