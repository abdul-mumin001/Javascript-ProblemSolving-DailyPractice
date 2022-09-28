// fs :- file system. 
// fs.readFileSync :- 
// writeFileSync :- 
// copyFileSync :- copy a file.
// unlinkSync :- delete a file
// mkdirSync :- make a folder/ directory
// existSync :- this is use to check if a path exist or not
// rmdirSync :- delete a folder
// lstatSunc :- use to check it is a file or a folder.


// path :- manipulate the path
// path.join :- it is use to join two path
// path.extname :- use to get the extension of the file.

// process.cwd() :- cwd :- current working directory.
// process.argv :- it is use to take input

// let a = process.argv[2];
// console.log(process.argv);

let fs = require('fs');
let path = require('path');

let dirPath = process.argv[2];
let desPath;
if(dirPath == undefined){
    desPath = process.cwd();
} else {
    let existOrNot = fs.existsSync(dirPath);
    if(!existOrNot){
        console.log("Enter the correct Path.");
    } else {
        desPath = path.join(dirPath , "Organized folder");
        if (fs.existsSync(desPath) == false) {
            fs.mkdirSync(desPath);
        }
    }
}

let listOfFiles = fs.readdirSync(dirPath);
// console.log(listOfFiles);
for (let i = 0; i< listOfFiles.length; i++){
    let pathOfSpecificFile = path.join(dirPath, listOfFiles[i]);
    let itIsFileOrNot = fs.lstatSync(pathOfSpecificFile).isFile();
    if(itIsFileOrNot){
        let category  = giveCategory(listOfFiles[i]);
        copyTheFile(pathOfSpecificFile, desPath, category)
    }
}

function giveCategory(fileName){
    let typesOfCategory = {
        media : ["mp4", "mkv"],
        archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
        documents: ["docx", "doc", "pdf", " xlsx", "xls", "odt", "ods", "odp", "odg","txt","ppt","js"],
        app: ["exe","dmg","deb", "pkg"]
    }
    let ext = path.extname(fileName);
    ext = ext.slice(1);
    for (let type in typesOfCategory ){
        let currentType = typesOfCategory[type];
        for(let i = 0;i < currentType.length; i++){
            if(ext == currentType[i]){
                return type;
            }
        }
    }
    return "others";
}

function copyTheFile(sourceOfFile, desPath, category){
    let directoryOfSpecificFile = path.join(desPath, category);
    if(fs.existsSync(directoryOfSpecificFile) == false){
        fs.mkdirSync(directoryOfSpecificFile);
    }
    let fileName = path.basename(sourceOfFile);
    let destinationOfFile = path.join(directoryOfSpecificFile, fileName);
    fs.copyFileSync(sourceOfFile, destinationOfFile);
    fs.unlinkSync(sourceOfFile);
    console.log(fileName ,  "is copied to destination -->", category);
}
