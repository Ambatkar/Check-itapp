const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    description :{
        type : String,
        required: true
    },
    category :{
        type : String,
        required: true
    },
    dueDate :{
        type : String,
        required: true
    }
});
const TodoList = mongoose.model('todoList',todoSchema);
module.exports = TodoList;