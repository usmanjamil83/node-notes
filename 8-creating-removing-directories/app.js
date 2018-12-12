const fs = require('fs');

// async method
// creating directories
// first run this to create directory and a file in that directory

fs.mkdir('new', function () {
    fs.readFile('text.txt', 'utf8', function (err, data) {
        fs.writeFile('./new/text.txt', data, function (err) {});
    });
});

// async method
// removing directories
// second run this to remove directory and a file in that directory

// fs.unlink('./new/text.txt', function() {
//     fs.rmdir('new', function(err) {});
// });