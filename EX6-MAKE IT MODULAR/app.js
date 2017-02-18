var extSearch = require('./extSearch');

let pathFolder = process.argv[2];
let ext = process.argv[3];

extSearch(pathFolder, ext, function(err, files){
	if (err){
		console.log(err);
	}else{
		for (let i = 0; i < files.length; i++){
			console.log(files[i]);
		}		
	}
});