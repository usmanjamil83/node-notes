const http = require('http');
const fs = require('fs');

const myReadStream = fs.createReadStream(__dirname + '/readMe.txt');
// const myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
const myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.on('data', function (chunk) {
    console.log('new chunk received:');
    console.log(chunk);
    myWriteStream.write(chunk);
});