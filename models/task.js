const mongoose = require("mongoose");
let taskSchema = new mongoose.Schema({
    task: String,
    hasCompleted: {type: Boolean, default: false}
});

module.exports = mongoose.model("Task", taskSchema);