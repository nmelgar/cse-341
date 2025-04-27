// mport express
const express = require('express');
// import controller
const { getName } = require('./controllers/controllers');

// create express app
const app = express();

// define route for the home page '/'
app.get('/', getName);

// handle not found
app.use((req, res) => {
    res.status(404).send('Page not found');
});

// define a port
const PORT = 3000;

// start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
