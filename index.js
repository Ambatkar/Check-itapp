const http = require('https');
const express = require('express');
const db = require('./config/mongoose')

const app = express();
const port = 8000;
const Contact = require('./models/todoList.js');
// use express router
app.use('/',require('./routes'))
app.use(express.static('static'));

// using Ejs as Render Engine
app.set('view engine','ejs');
app.set('views','./views'); 
app.use(express.urlencoded({extended:false}));


app.listen(port,function(err){
    if(err){
        console.log(`Error in running the Server : ${err}`)
    }
    console.log(`Server is up and Running on ${port}`)
});