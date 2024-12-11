const fs = require("fs");
const path = require("path");
const extensionHandler = require("./xtension");

fs.readdir('./asset', (err, file) => {
    if (err) {
        console.log("Error reading the folder");
    }
    fileProcess(file);
})

function fileProcess(fileList) {
    let extensionList = [];
    for (let i = 0; i < fileList.length; i++) {
        let file = fileList[i];
        let dotfound = file.lastIndexOf('.');
        if (dotfound !== -1) {
            extensionList.push(file.slice(dotfound+1));
        }
    }
    // sending the extension list to be organized on another file
    let extensions = [];
    for(let i = 0; i<extensionList.length; i++){
        if(!extensions.includes(extensionList[i])){
            extensions.push(extensionList[i]);
        }
    }
    
    extensionHandler(extensions,fileList);
}
