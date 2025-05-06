const http = require('http');
const fs   = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/status') {
    res.writeHead(200); return res.end('OK');
  }
  if (req.url === '/health') {
    res.writeHead(200); return res.end('OK');
  }

  // Sert index.html quand on va sur '/' ou '/index.html'
  if (req.url === '/' || req.url === '/index.html') {
    const filePath = path.join(__dirname, 'public', 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Erreur interne');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
    return;
  }

  // Autres routes : message générique
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello from Node.js Docker app!');
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
