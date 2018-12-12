const http = require('http');

const server = http.createServer(function (req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {
        'Content-type': 'text/plain'
    });
    res.end('Hello');
});

server.listen(3000);
console.log('App listening on PORT 3000');