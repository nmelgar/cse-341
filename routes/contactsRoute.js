const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contactsController");

// GET home page
router.get("/", contactsController.homePage);
// GET contacts
router.get("/contacts", contactsController.getContacts);

module.exports = router;
