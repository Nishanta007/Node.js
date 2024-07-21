const express = require('express');
const app  = express();
const port = 3000;
app.get('/',(req,res)=>{
    res.send('Hello, World!, This is Home Page');
});

app.get('/about',(req,res)=>{
    res.send('Welcome!, This is About Page');
});     

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
