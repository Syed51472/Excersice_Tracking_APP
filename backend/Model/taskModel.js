const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  activity: {
    type: String,
  },
  duration: {
    type: String,
  },
  date: {
    type: String,
  },
});

const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
