const prompt = require("prompt-sync")()

function printInfo () {
  console.log("=========== Contact Management System ============")
  console.log("1. Add Contact")
  console.log("2. Delete a Contact")
  console.log("3. View Contacts")
  console.log("4. Search Contacts")
  console.log("5. Exit")
}

function addContact() {
  const contact = {}
  contact.name = prompt("Enter Name : ")
  contact.phone = prompt("Enter Phone : ")
  contact.email = prompt("Enter Email : ")
  /*
  contact = {
    name : name,
    phone : phone,
    email : email
  }
  */
  contacts.push(contact)
  console.log("Contact added successfully")

}

function deleteContact() {
  for (let i = 0; i < contacts.length; i++){
    console.log(i +1, contacts[i].name)
  }
  const index = prompt("Enter index to delete : ")
  contacts.splice(index - 1, 1)
  console.log("Contact deleted successfully")
}

function viewContacts(contacts) {
  for (let contact of contacts){
    console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
    console.log('Name: ' ,contact.name, 'Phone: ' ,contact.phone, 'Email: ' ,contact.email)
  }
}


function searchContacts() {
  const search = prompt("Search: ")
  const results = []

  for (let contact of contacts){
    if (contact.name.includes(search)) results.push(contact)
  }
  viewContacts(results)
}



const contacts = []


printInfo()

let kmal = true
while(kmal){
  const number = prompt("Enter an operation : ")
  console.log()
  switch(number){
    case "1":
      addContact()
      break;
    case "2":
      deleteContact()
      break;
    case "3":
      viewContacts(contacts)
      break;
    case "4":
      searchContacts()
      break;
    case "5":
      kaml = false;
      break;
    default:
      console.log("Unknown")
      break;
  }
}


