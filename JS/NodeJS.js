const http = require('http');

const server = http.createServer((req, res) => {
    // res.write('Hello, World!\n');
    // // res.write('This is a simple Node.js server.\n');
    // res.end('Goodbye, World!\n');
    if (req.method === 'GET' && req.url === '/') {
        res.write('Hello, World!\n');

    }
    else if (req.method === 'POST' && req.url === '/') {
        res.write('About Page\n');

    }
    else if (req.method === 'PUT' && req.url === '/') {
        res.write('Data received\n');

    }
    else if (req.method === 'DELETE' && req.url === '/') {
        res.write('Data received\n');

    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found\n');
    }
});
server.listen(3000, () => {
    console.log('Server is listening o  n port 3000');
});