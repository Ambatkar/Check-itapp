const TodoList = require('../models/todoList.js');



// Module to fetch Data from database 
module.exports.getList = function(req,res){
    TodoList.find({},function(err,list){
        return res.render('homelist',{
            todolist : list
        }); 
    });
  
};



// Module when buttons are pressed Insert or Delete
// If condition to check the pressed button 

module.exports.addList = function(req,res){
    console.log(req.body.submit);
    if(req.body.submit == "Insert"){
        day = req.body.todoDate.slice(0, 9);
        console.log(day)
    TodoList.create({
        description:req.body.todoDescription,
        category:req.body.selectCategory,
        dueDate:day
    },function(err, newList){
        if(err){
            console.log('error in inserting Data :'+err);
            return;
        }
        console.log('******************' + newList);
        return res.redirect('back');
    });
}else{
        console.log(req.body);
        // Check if its String or Not
        if(typeof(req.body.checklist)=="string"){
            req.body.checklist = [req.body.checklist]
            console.log(req.body.checklist);
        }
        for (let i of req.body.checklist){
        TodoList.findByIdAndDelete(i,function(err){
            if(err){
                console.log(err);
                return;
            }       
        }); 
        }
        return res.redirect('back'); 
    }    
};