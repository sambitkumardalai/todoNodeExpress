const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: [true, "A task must have a name"],
    trim: true,
    unique: [true, "A task name must be unique"],
  },
  taskDate: {
    type: Date,
    required: [true, "A task must have a date"],
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
