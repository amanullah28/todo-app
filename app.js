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

    // CONNECT DB
    const url = process.env.DATABASEURL || "mongodb://localhost/restaurant_app";
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("DB CONNECTED!!")
        }
    });      // connect db

    app.use(bodyParser.urlencoded({extended: true}));
    app.set("view engine", "ejs");
    app.use(express.static(__dirname+"/public"));
    app.use(methodOverride("_method"));
    
    app.use(indexRoute);

    app.listen(process.env.DEV_PORT,  function(err){
        if(err) {
            console.log(err);
        } else{
            console.log(`ToDo server has started at port - ${process.env.DEV_PORT}`);
        }
    });