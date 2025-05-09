const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contactsController");

// GET home page
router.get("/", contactsController.homePage);
// GET contacts
router.get("/contacts", contactsController.getContacts);
// GET contact by id
router.get("/contacts/:id", contactsController.getOneContact);
module.exports = router;
// POST new contact
router.post("/contacts", contactsController.postContact);
