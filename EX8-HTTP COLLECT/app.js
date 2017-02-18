var http = require('http');
var url = process.argv[2];

http.get(url, function(res){
	let data = '';
	res.on('data', (chunk)=>{        
		data = data + chunk.toString();
	});

	res.on('end', ()=>{
		console.log(`${data.length}\n${data}`);
	});
});