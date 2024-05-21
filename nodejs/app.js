const http = require('http');
const hostname = '192.168.100.183';
const port = 8001;
const server = http.createServer((req, res) => {
  const body = {
    method: req.method,
    url: req.url,
    headers: req.headers,
    message: 'Hello World!',
  };
  if (req.method === 'GET') {
    // Handle GET request
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(body));
  } else if (req.method === 'POST') {
    // Handle POST request
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(body));
  } else if (req.method === 'PUT') {
    // Handle PUT request
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(body));
  } else if (req.method === 'DELETE') {
    // Handle DELETE request
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(body));
  } else {
    // Handle unsupported methods
    res.statusCode = 405; // Method Not Allowed
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ message: 'Unsupported method' }));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});