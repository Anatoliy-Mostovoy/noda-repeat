const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./contacts.js");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторить
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts()
        .then((contacts) => {
          console.log("Add new contact");
          console.table(contacts);
        })
        .catch((error) => {
          console.log(error);
        });

      break;

    case "get":
      getContactById(id)
        .then((contact) => {
          console.log(contact);
        })
        .catch((error) => {
          error;
        });
      break;

    case "add":
      addContact(name, email, phone)
        .then((contact) => {
          console.table(contact);
        })
        .catch((error) => {
          console.log(error);
        });
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
