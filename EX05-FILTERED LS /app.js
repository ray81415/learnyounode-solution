var fs = require('fs');
var path = require('path');

let pathFolder = process.argv[2];
let ext = '.' + process.argv[3];    
fs.readdir(pathFolder,  function(err, files){
    if (err){
        console.log(err);
    }
    else{
        for (let i = 0; i < files.length; i++){       
            if (path.extname(files[i]) === ext){                
                console.log(files[i]);
            }
        }            
    }        
});    
