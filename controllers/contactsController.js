const Contacts = require("../models/contacts.js");

// home page controller
const homePage = async (req, res) => {
  try {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the home page");
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// contacts controller
const getContacts = async (req, res) => {
  try {
    const contacts = await Contacts.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET contact by id
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
    name: req.body.name,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  });
  try {
    const newContact = await contact.save();
    res.status(200).json(newContact);
  } catch (err) {
    res.status(400).json({ message: "Error adding the new contact" });
  }
};

module.exports = {
  homePage: homePage,
  getContacts: getContacts,
  getOneContact: getOneContact,
  postContact: postContact,
};
