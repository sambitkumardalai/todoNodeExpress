const Todo = require("../models/todoModel");
exports.getAllTodo = async (req, res) => {
  const allTodo = await Todo.find();
  if (allTodo) {
    res.status(200).json({
      status: "success",
      message: "got it",
      allTodo,
    });
  } else {
    res.status(200).json({
      status: "success",
      message: "Please create some todo",
    });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    if (newTodo) {
      res.status(200).json({
        status: "success",
        message: "Todo created",
        newTodo,
      });
    }
  } catch (error) {
    res.status(200).json({
      status: "failed",
      error,
    });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const doc = await Todo.findByIdAndUpdate(req.params.id, req.body);
    console.log(doc);
    if (!doc) {
      res.status(200).json({
        status: "Fail",
        message: "No task found with this id",
      });
    } else {
      res.status(200).json({
        status: "Success",
        message: "Task updated",
      });
    }
  } catch (error) {
    res.status(200).json({
      status: "Fail",
      error,
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    console.log(req.params);
    const doc = await Todo.findByIdAndDelete(req.params.id);

    if (!doc) {
      res.status(200).json({
        status: "Fail",
        message: "No task found with this id",
      });
    } else {
      res.status(200).json({
        status: "Success",
        message: "Task deleted",
      });
    }
  } catch (error) {
    res.status(200).json({
      status: "Fail",
      error,
    });
  }
};
