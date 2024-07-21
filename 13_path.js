const path = require('path');
const fs = require('fs');
const dirPath = (path.join(__dirname, 'files'));
for(i = 0; i<5; i++){
    fs.writeFileSync(dirPath + `/hello${i}.txt`, `This is file ${i}`);
}
fs.readdir(dirPath, (err, files)=>{
    files.forEach((item)=>{
        console.log(item);
    })
})