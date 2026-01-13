
const http = require('http');

const host = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/students' && req.method === 'POST') {
    res.end('This is the students page.\n');
  } else if (req.url === '/contact' && req.method === 'GET') {
    res.end('This is the contact page.\n');
  }
  else {
    res.end('Welcome to the homepage!\n');
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});


