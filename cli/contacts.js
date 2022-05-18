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

function listContacts() {
  return readContacts();
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
