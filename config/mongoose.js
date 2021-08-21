// require the library
const mongoose = require('mongoose');

//connect to DataBase
mongoose.connect('mongodb://localhost/todo_list_db');
const db = mongoose.connection;

//Up on error

db.on('error', console.error.bind(console, 'error connecting to DB'));

// Up and Running then print the msg
db.once('open',function(){
          console.log('Successfully Connected to Database');
 });