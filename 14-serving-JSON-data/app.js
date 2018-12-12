const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {
        'content-Type': 'application.json'
    });
    const myObj = {
        name: 'john',
        job: 'developer',
        age: 29
    };
    res.end(JSON.stringify(myObj));
});

server.listen(3000);
console.log('APP LISTENING TO THE PORT');