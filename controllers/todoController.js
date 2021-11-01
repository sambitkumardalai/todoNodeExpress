exports.getAllTodo = (req, res, next) => {
  res.status(200).json({
    status: "success",
    message: "got it",
  });
  next();
};
