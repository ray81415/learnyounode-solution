var http = require('http');
var url_1 = process.argv[2];
var url_2 = process.argv[3];
var url_3 = process.argv[4];

function getHttpRes(url){
	return new Promise((resolve, reject)=>{
		http.get(url, function(res){
			let data = '';
			res.on('data', (chunk)=>{        
				data = data + chunk.toString();
			});

			res.on('end', ()=>{
				resolve(()=>{
					console.log(data);
				});
			});
		});
	});
};

getHttpRes(url_1)
	.then((data)=>{
		data();
		return getHttpRes(url_2);
	})
	.then((data)=>{
		data();
		return getHttpRes(url_3);
	})
	.then((data)=>{
		data();
	});