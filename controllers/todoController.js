const Todo = require("../models/todoModel");
const catchAsync = require("../utils/catchAsync");
const appError = require("../utils/appError");

exports.getAllTodo = async (req, res, next) => {
  const allTodo = await Todo.find();
  const message = allTodo.length ? "Got all tours" : "Please create some";
  const totalTask = allTodo.length;
  res.status(200).json({
    status: "success",
    message,
    totalTask,
    allTodo,
  });
};
exports.getTodo = catchAsync(async (req, res, next) => {
  const doc = await Todo.findById(req.params.id);
  if (!doc) {
    return next(new appError("No task found with this id", 404));
  }
  res.status(200).json({
    status: "success",
    data: {
      doc,
    },
  });
});
exports.createTodo = catchAsync(async (req, res, next) => {
  const newTodo = await Todo.create(req.body);
  if (newTodo) {
    res.status(200).json({
      status: "success",
      message: "Todo created",
      newTodo,
    });
  }
});

exports.updateTodo = catchAsync(async (req, res, next) => {
  const doc = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!doc) {
    return next(new appError("No task found with this id", 404));
  }
  res.status(200).json({
    status: "Success",
    message: "Task updated",
    doc,
  });
});

exports.deleteTodo = catchAsync(async (req, res, next) => {
  const doc = await Todo.findByIdAndDelete(req.params.id);
  if (!doc) {
    return next(new appError("No task found with this id", 404));
  }
  res.status(200).json({
    status: "Success",
    message: "Task deleted",
  });
});
