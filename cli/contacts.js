const path = require("path");
const fs = require("fs/promises");
const crypto = require("crypto");

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

async function addContact(name, email, phone) {
  const contacts = await readContacts();
  const newContact = { id: crypto.randomUUID(), name, email, phone };
  contacts.push(newContact);
  await fs.writeFile(
    path.join(__dirname, "contacts.json"),
    JSON.stringify(contacts, null, 2)
  );
  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
