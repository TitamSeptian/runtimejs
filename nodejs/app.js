const http = require('http');

const hostname = '192.168.1.11'
const port = 8001;
const body = {
  message: 'Hello World',
};
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  res.end(JSON.stringify(body));
  console.log(body);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});