var fs = require('fs');
var fileName = process.argv[2];

fs.readFile(fileName, 'utf8', (err, data)=>{
    console.log(data.split('\n').length - 1);
});