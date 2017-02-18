var fs = require('fs');
var fileName = process.argv[2];

let data = fs.readFileSync(fileName, 'utf8');
console.log(data.split('\n').length - 1);