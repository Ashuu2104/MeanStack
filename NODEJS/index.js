// var http = require('http');
// http.createServer(
//     function (req, res) {
//         res.write('Hello Ashu!');
//         res.end();
//     }
// ).listen(3000, console.log('Server running at http://localhost:3000/'));

var fs = require('fs');
fs.unlink('ashu.txt', 'Hello Ashu!', function (err) {
    if (err) throw err;
    console.log('File created and data written successfully!');
});


// How Many Types of module in js ? 