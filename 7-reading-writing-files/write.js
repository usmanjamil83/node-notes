const fs = require('fs');

// Sync Method
fs.writeFileSync('text.txt', 'that');

// async method
fs.writeFile('text.txt', 'that', function(err) {});