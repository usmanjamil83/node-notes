const fs = require('fs');

// sync method
var read = fs.readFileSync('text.txt', 'utf8');
console.log(read);

// async method
fs.readFile('text.txt', 'utf8', function (err, data) {
    console.log(data);
});