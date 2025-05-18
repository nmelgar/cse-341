require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const {
  getContacts,
  homePage,
  getOneContact,
  postContact,
  updateContact,
  deleteContact,
} = require("./controllers/contactsController");

// create express app
const app = express();
app.use(express.json());
const PORT = 3000;

// db, establish Mongoose connection
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected to database"));
// swagger modules
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

// Swagger definition
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Contacts REST API",
      version: "1.0.0",
      description: "API documentation for contacts project",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Swagger UI route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// get the home page resource
app.get("/", homePage);

// get all contacts with GET
app.get("/contacts", getContacts);

// get a contact with specific ID using GET
app.get("/contacts/:id", getOneContact);

// create a contact using POST
app.post("/contacts", postContact);

// modify a contact using PUT
app.put("/contacts/:id", updateContact);

// delete a contact using DELETE
app.delete("/contacts/:id", deleteContact);

// handle not found
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// define  port | // start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
