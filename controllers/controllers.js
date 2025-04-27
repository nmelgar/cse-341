function getName(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Mateo');
}

module.exports = { getName };