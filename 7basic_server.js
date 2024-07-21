const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write('Hello, World!\n');
    res.end('End Server!\n');
});

server.listen(port, () => {
    console.log(`Server running at localhost:${port}`);
});

// simple function
// function test(){
//     return 100;
// }

// Arrow function
// const test = () => 100\