const express = require("express");
const router = express.Router();
const contactsController = require("../controllers/contactsController");

// GET home page
router.get("/", contactsController.homePage);
// GET contacts
router.get("/contacts", contactsController.getContacts);
// GET contact by id
router.get("/contacts/:id", contactsController.getOneContact);

// POST new contact
router.post("/contacts", contactsController.postContact);

// modify a contact using PUT
router.put("/contacts/:id", updateContact);

// delete a contact using DELETE
router.delete("/contacts/:id", deleteContact);

module.exports = router;
