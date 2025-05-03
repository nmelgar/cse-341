require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const {
  getContacts,
  homePage,
  getOneContact,
} = require("./controllers/contactsController");

// create express app
const app = express();
app.use(express.json());

// db, establish Mongoose connection
const MONGODB_URI = process.env.MONGODB_URI;
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("MongoDB connected via Mongoose"))
  .catch((err) => console.error("Mongoose connection error:", err));

// get the home page resource
app.get("/", homePage);

// get the /contacts resource
app.get("/contacts", getContacts);

// get /contact/id
app.get("/contacts/:id", getOneContact);

// handle not found
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// define  port | // start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
