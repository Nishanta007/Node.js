const express = require('express');
const app  = express();
const port = 4000;
app.get('/',(req,res)=>{
    console.log("Data sent by browser : ",req.query.name);
    res.send('Hello, World!,'+req.query.name+'This is Home Page');
});

app.get('/about',(req,res)=>{
    res.send('Welcome!, This is About Page');
});     

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
