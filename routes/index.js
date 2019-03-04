const express = require("express");
const router = express.Router();
const  Task = require("../models/task");

 // Routes
    router.get("/", (req, res)=>{
       
       res.redirect("/todo");
    });
    
    // get route
    router.get("/todo", (req, res)=>{
        Task.find(function(err, foundTodos){
           if(err){
               console.log(err);
           } else{
               
               res.render("home", {todos: foundTodos})
           }
        });
    });
    
    // Create New todo route
    router.post("/todo", (req, res)=>{
       let newTodo = {
           task: req.body.todoInput
       }
       
        Task.create(newTodo, (err, newlyCreated)=>{
           if(err){
               console.log(err);
           } else{
            //   console.log(newlyCreated);
              res.redirect("/todo");
           }
        });
    })
    
    // Delete todo Route
    router.delete("/todo/:id", function(req, res){
        Task.findByIdAndRemove(req.params.id, function(err){
           if(err){
               return res.redirect("/todo");
           } 
           res.redirect("back");
        });
    })
    
    //update
    router.put("/todo/:id", function(req, res){
        Task.findById(req.params.id, function(err, foundTodo){
            if(err){
                console.log(err);
            } else{
                if(foundTodo.hasCompleted){
                    foundTodo.hasCompleted=false;
                } else{
                    foundTodo.hasCompleted=true;
                }
                foundTodo.save();
                res.redirect("back");
            }
        });
    });
    
    // export router
    module.exports = router;
    