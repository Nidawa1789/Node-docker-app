const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/status') {
    res.writeHead(200);
    res.end('OK');
  } else if (req.url === '/health') {
    res.writeHead(200);
    res.end('OK');
  } else {
    res.writeHead(200);
    res.end('Hello from Node.js Docker app!');
  }
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
