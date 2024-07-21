const port = '4200';
const http = require('http');
const data = require('./data');
const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application\json'});
    res.write(JSON.stringify(data));
    res.end();
})
server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});