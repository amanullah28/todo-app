    const express = require("express");
    const bodyParser  = require("body-parser");
    const methodOverride = require("method-override");
    const mongoose = require("mongoose");
    
    // Requiring model
    const Task = require("./models/task");
    
    // Require Route
    const indexRoute = require("./routes/index");
    
    // Init app
    const app = express();
        const dbUrl = process.env.DATABASEURL || "mongodb://localhost/todo-app";
    // connect db
    mongoose.connect(dbUrl, { useNewUrlParser: true });
    // console.log(process.env.DATABASEURL);
    app.use(bodyParser.urlencoded({extended: true}));
    app.set("view engine", "ejs");
    app.use(express.static(__dirname+"/public"));
    app.use(methodOverride("_method"));
    
    app.use(indexRoute);

    
    
   
    
    app.listen(process.env.PORT, process.env.IP, function(){
        console.log("server has started");
    });