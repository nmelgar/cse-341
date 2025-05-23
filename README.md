# Contacts API

A lightweight **RESTful API for managing contacts**, built with **Node.js, Express, and MongoDB**. This API supports full CRUD operations and is ideal for small-scale contact management systems or as a starting point for learning how to build REST APIs.

Users can:

- View all saved contacts
- Retrieve contact details by ID
- Add new contacts
- Update existing contact information
- Delete contacts

> Designed for educational and starter projects.

---

## Features

- 🌐 **RESTful architecture** with GET, POST, PUT, DELETE routes  
- ⚙️ **Express.js** server with middleware handling  
- 💾 **MongoDB** database with Mongoose ODM  
- 🧩 Modular structure: `controllers/`, `models/`, `routes/` folders
- 🧪 **Interactive Swagger API Docs**  
- 🔄 **Live reload** support with `nodemon` for development  
- 📦 Easy environment configuration using `.env` file

---

## 📘 API Documentation (Swagger UI)

Access the live Swagger UI to explore and test the API endpoints:

👉 [https://nefi341-test-name.onrender.com/api-docs/](https://nefi341-test-name.onrender.com/api-docs/)

The Swagger docs describe all available routes, request parameters, response structures, and example calls for easier development and integration.

---

## Project Structure
│
├── controllers/ # Request handlers for each route<br>
├── models/ # Mongoose models for MongoDB collections<br>
├── routes/ # Express route handlers<br>
├── index.js # App entry point<br>
├── .env # Environment variables<br>
├── package.json # Project metadata and dependencies<br>
└── README.md<br>

---

## Development Environment

| Tool / Library | Purpose                       |
|----------------|-------------------------------|
| Node.js        | Runtime environment           |
| Express        | Web framework                 |
| MongoDB        | NoSQL database                |
| Mongoose       | ODM for MongoDB               |
| dotenv         | Load environment variables    |
| nodemon        | Auto-reload during development|
| Swagger UI     | API documentation interface   |

---

## Getting Started

To run this project locally:

```bash
git clone https://github.com/nmelgar/contacts-nodejs-api
cd contacts-nodejs-api
npm install
npm run dev
Create a .env file at the root of the project: MONGODB_URI=your_mongodb_connection_string
Then go to:
http://localhost:3000/api-docs to view the Swagger UI locally.