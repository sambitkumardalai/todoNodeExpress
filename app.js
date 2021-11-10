const express = require("express");
const morgan = require("morgan");

const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");
const todoRouter = require("./routes/todoRoutes");
const userRouter = require("./routes/userRoutes");
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/users", userRouter);

// middleware to handle unhandled routes
app.all("*", (req, res, next) => {
  // step-1: using globla error handler
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

//step-3: global error handler
app.use(globalErrorHandler);
module.exports = app;
