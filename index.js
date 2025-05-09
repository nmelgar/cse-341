require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const {
  getContacts,
  homePage,
  getOneContact,
  postContact,
} = require("./controllers/contactsController");

// create express app
const app = express();
app.use(express.json());

// db, establish Mongoose connection
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));

// get the home page resource
app.get("/", homePage);

// get the /contacts resource
app.get("/contacts", getContacts);

// get /contact/id
app.get("/contacts/:id", getOneContact);

// post/contacts
app.post("/contacts", postContact);

// handle not found
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// define  port | // start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
