const express = require("express");
const morgan = require("morgan");
const todoRouter = require("./routes/todoRoutes");
const userRouter = require("./routes/userRoutes");
const app = express();

// middlewares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/todos", todoRouter);
app.use("/api/v1/users", userRouter);

module.exports = app;
