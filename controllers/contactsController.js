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

module.exports = {
  homePage: homePage,
  getContacts: getContacts,
  getOneContact: getOneContact,
};
