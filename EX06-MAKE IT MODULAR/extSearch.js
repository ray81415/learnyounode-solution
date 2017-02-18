var fs = require('fs');
var path = require('path');

module.exports = function(folder, ext, callback){
    ext = '.' + ext;    
    fs.readdir(folder,  function(err, files){
        if (err){
            callback(err, null);
        }
        else{
            let outputFiles = [];
            for (let i = 0; i < files.length; i++){       
                if (path.extname(files[i]) === ext){                
                    outputFiles.push(files[i]);
                }
            }
            callback(err, outputFiles);
        }        
    });    
};