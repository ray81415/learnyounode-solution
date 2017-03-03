var http = require('http');
let url = process.argv[2];

http.get(url, function(res){
	res.on('data', (chunk)=>{        
		console.log(chunk.toString());
	});
});
