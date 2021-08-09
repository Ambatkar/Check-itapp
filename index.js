const http = require('https');
const express = require('express');
const app = express();
const port = 8000;

//app.set('view-engine','ejs');
//app.set('views','views');



app.get('/', function(req,res){
    res.end("Hello");
});


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the Server : ${err}`)
    }
    console.log(`Server is up and Running on ${port}`)
});