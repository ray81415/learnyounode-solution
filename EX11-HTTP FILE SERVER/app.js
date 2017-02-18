var fs = require('fs');
var http = require('http');
var port = process.argv[2] || 3000;
var dataPath = process.argv[3] || __dirname + '/program.js';

http.createServer((req,res)=>{
    res.writeHead(200, { 'content-type': 'text/plain' })
    fs.createReadStream(dataPath).pipe(res);
}).listen(port);