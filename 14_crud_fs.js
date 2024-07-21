// CRUD Operation in File System
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const filePath = `${dirPath}/apple.txt`;

// Write in file
// fs.writeFileSync(filePath, 'This is a simple text file');


// Read in file
// fs.readFile(filePath,'utf8',(err,item)=>{
//     console.log(item);
// })


// Update in file
// fs.appendFile(filePath,' and file name is apple.txt',(err)=>{
//     if(!err) console.log("File is updated");
// })


// Rename File name
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("File name is updated");
// })


//Delete File
// fs.unlinkSync(`${dirPath}/fruit.txt`);



