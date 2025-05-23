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

/**
 * @swagger
 * /contacts:
 *   get:
 *     summary: Get all contacts
 *     responses:
 *       200:
 *         description: A list of all the contacts
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       500:
 *         description: No contacts were found 
 
 * /contacts/{id}:
 *   get:
 *     summary: Get contact by ID
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The ID of the contact
 *     responses:
 *       200:
 *         description: Contact found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *       404:
 *         description: Contact not found
*/

/**
 * @swagger
 * /contacts:
 *   post:
 *     summary: Create a new contact
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - lastName
 *               - email
 *               - favoriteColor
 *               - birthday
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               favoriteColor:
 *                 type: string
 *               birthday:
 *                 type: string
 *                 format: date
 *           example:
 *             firstName: Rafa
 *             lastName: Marquez
 *             email: rafamarquez@gmail.com
 *             favoriteColor: red
 *             birthday: 1980-09-12
 *     responses:
 *       201:
 *         description: Contact created successfully
 *       400:
 *         description: Invalid input

 * /contacts/{id}:
 *   put:
 *     summary: Update an existing contact
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the contact to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               favoriteColor:
 *                 type: string
 *               birthday:
 *                 type: string
 *                 format: date
 *           example:
 *             firstName: Cristiano Updated
 *             lastName: Ronaldo
 *             email: cristianoronaldo@gmail.com
 *             favoriteColor: blue
 *             birthday: 1988-05-19
 *     responses:
 *       200:
 *         description: Contact updated successfully
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Contact not found
*/

/**
 * @swagger
 * /contacts/{id}:
 *   delete:
 *     summary: Delete contact by ID
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        schema:
 *          type: string
 *        description: The ID of the contact
 *     responses:
 *       204:
 *         description: Deleted successfully
 *       404:
 *         description: Contact not found
 *       500:
 *         description: Error deleting the contact
 * */

module.exports = router;
