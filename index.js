const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/status' || req.url === '/health') {
    // Forcer une erreur 500 pour tester le rollback
    res.writeHead(500);
    res.end('ERROR');
  } else {
    res.writeHead(200);
    res.end('Hello from Node.js Docker app!');
  }
});


server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
