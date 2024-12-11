const fs = require("fs");
const path = require("path");


function OrganizeExtension(extensions, fileList){
   //creating folders for respected file extensions.
    extensions.forEach(file => {
        fs.mkdir(`./new-asset/${file}`,{recursive : true}, (err)=>{
            if(err){
                console.log("Unable to create the folder");
            }
            else{
                // console.log("Folder created succesfully!!");
            }
        })
    });

    //moving file to respected folders.
    for(let i = 0; i<fileList.length; i++){
        // extracting the extension to organize to accoding files.
        let file = fileList[i];
        let dotfound = file.lastIndexOf('.');

        if(dotfound !== -1){
            let xten = file.slice(dotfound+1);
            // console.log(file);
            let srcPath = path.join(__dirname,'asset', file);
            let destPath =path.join(__dirname, 'new-asset',xten, file);
           
            fs.rename(srcPath, destPath, (err)=>{
               if(err){
                console.log(`Could-not move the file: ${file}`);
               } else{
                console.log(`file ${file} moved succesfully\n`);
               }
            })
        }
    }
// console.log(__dirname);
// D:\web dev\backend\projects-backend\clearTheClutter
}

module.exports = OrganizeExtension;