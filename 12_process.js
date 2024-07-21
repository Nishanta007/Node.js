console.log(process.argv);
const fs = require('fs');
const input = process.argv;
if(input[2] == 'add'){
    fs.writeFileSync(process.argv[3], process.argv[4]);
}else if(input[2] == 'delete'){
    fs.unlinkSync(process.argv[3]);
}else{
    console.log('Invalid Input');
}