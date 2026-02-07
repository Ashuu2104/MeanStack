// What is Middleware in ExpressJS?
// Middleware in ExpressJS is a function that has access to the request object (req), 
// the response object (res), and the next middleware function in the application’s request-response cycle. 
// Middleware functions can execute code, make changes to the request and response objects, 
// end the request-response cycle, or call the next middleware function in the stack.
// const express = require('express');
// const app = express();
// const port = 3000;
// // A simple middleware function that logs the request method and URL
// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next(); // Call the next middleware function in the stack
// });
// // A route handler for the root URL
// app.get('/', (req, res) => {
//     res.send('Hello, World!');
// });
// // Start the Express server
// app.listen(port, () => {
//     console.log(`Server is running at http://localhost:${port}`);
// });


const express = require('express');
const app = express();
const port = 3000;

// without middleware
app.get('/', (req, res) => {
    res.send('Home Page!');
});
// query parameter: http://localhost:3000/dashboard?user=admin
// what is query parameter: A query parameter is a key-value pair that is appended to the end of a URL after a question mark (?).
// It is used to pass additional information to the server as part of the request.
// app.get('/dashboard', (req, res) => {
//     if (req.query.user === 'admin') {
//         res.send('Welcome Admin!');
//     } else {
//         res.send('Access Denied!');
//     }
// });
// with middleware
const checkAut = (req, res, next) => {
    if (req.query.user === 'admin' && req.query.password === '1234') {
        next(); 
    } else {
        res.send('Unauthorized: Access is denied due to invalid credentials.');
    }
};
//to check query parameter with middleware
// query parameter: http://localhost:3000/admin?user=admin&password=1234

app.get('/admin', checkAut, (req, res) => {
    res.send('Welcome to the Admin Panel!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});