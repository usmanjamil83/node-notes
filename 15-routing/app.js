const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    if (req.url === "/" || req.url === '/home') {
        res.writeHead(200, {
            'content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/index.html').pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, {
            'content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/contact.html').pipe(res);
    } else if (req.url === '/api') {
        const myObj = [{
            name: 'john',
            job: 'developer',
            age: 29
        }, {
            name: 'kodi',
            job: 'developer',
            age: 27
        }];
        res.writeHead(200, {
            'content-Type': 'application.json'
        });
        res.end(JSON.stringify(myObj));
    } else {
        res.writeHead(404, {
            'content-Type': 'text/html'
        });
        fs.createReadStream(__dirname + '/404.html').pipe(res);
    }
});

server.listen(3000);
console.log('APP LISTENING TO THE PORT');