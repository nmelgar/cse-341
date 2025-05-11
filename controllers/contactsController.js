const Contacts = require("../models/contacts.js");

// return the home page
const homePage = async (req, res) => {
  try {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the home page");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET | get all contacts
const getContacts = async (req, res) => {
  try {
    const contacts = await Contacts.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET | get a contact by id
const getOneContact = async (req, res) => {
  try {
    const contact = await Contacts.findById(req.params.id);
    res.json(contact);
  } catch (err) {
    res.status(500).json({ message: "Contact with specified id doesnt exist" });
  }
};

// POST  | create new contact
const postContact = async (req, res) => {
  const contact = new Contacts({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  });
  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: "Error adding the new contact" });
  }
};

// PUT | update a contact using ID
const updateContact = async (req, res) => {
  try {
    const contact = await Contacts.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }

    const updatedContact = await Contacts.updateOne(
      { _id: req.params.id },
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        favoriteColor: req.body.favoriteColor,
        birthday: req.body.birthday,
      }
    );

    res.json(updatedContact);
  } catch (err) {
    res.status(400).json({ message: "Error updating the contact" });
  }
};

// DELETE | delete a contact using ID
// const deleteContact = async (req, res) => {
// };

module.exports = {
  homePage: homePage,
  getContacts: getContacts,
  getOneContact: getOneContact,
  postContact: postContact,
  updateContact: updateContact,
  // deleteContact: deleteContact,
};
