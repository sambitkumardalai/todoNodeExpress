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
