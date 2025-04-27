// Import the 'http' module
const http = require('http');

// import the controller
const { getName } = require('./controllers/controllers');

// create server
const server = http.createServer((req, res) => {
    if (req.url === '/' && req.method === 'GET') {
        // return name when user goes to home page
        getName(req, res);
    } else {
        // not found
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Page not found');
    }
});

// port
const PORT = 3000;

// start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
