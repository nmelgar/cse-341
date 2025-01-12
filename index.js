// Import the 'http' module
const http = require('http');

// Create a server
const server = http.createServer((req, res) => {
    // Set the response HTTP header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // Send a response
    res.end('Nefi M');
});

// Define a port
const PORT = 3000;

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
