var net = require('net');
var port = process.argv[2] || 3000;

function checkZero(month){
    month = Number(month) + 1;
    if (month < 10) return ('0' + String(month));
    return String(month);
}

var timeServer = net.createServer();
timeServer.listen(port);
timeServer.on('connection', (socket)=>{
    let d = new Date();
    let year = d.getFullYear();
    let month = checkZero(d.getMonth());
    let date = d.getDate();
    let hour = d.getHours();
    let min = d.getMinutes();
    socket.write(`${year}-${month}-${date} ${hour}:${min}`);
    socket.end('\n');
});