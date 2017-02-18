var url = require('url');
var http = require('http');
var port = process.argv[2] || 3000;

http.createServer((req, res)=>{
    let parsingUrl = url.parse(req.url);
    let d = new Date(parsingUrl.query.split('iso=').join(''));
    res.writeHead(200, {'Content-Type': 'application/json'});
    if (parsingUrl.pathname === '/api/parsetime'){
        res.write(JSON.stringify({
            hour: d.getHours(),
            minute: d.getMinutes(),
            second: d.getSeconds(),
        }));
        res.end();
    }else if (parsingUrl.pathname === '/api/unixtime'){
        res.write(JSON.stringify({
            unixtime: d.getTime(),
        }));
        res.end();
    }
}).listen(port);