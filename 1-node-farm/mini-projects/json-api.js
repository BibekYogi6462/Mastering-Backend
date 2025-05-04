const http = require('http');
const data = {
  name: "Bibek",
  tech: "Node.js",
  status: "Learning"
};

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
});

server.listen(4000, () => {
  console.log('JSON API running at http://localhost:4000');
});
