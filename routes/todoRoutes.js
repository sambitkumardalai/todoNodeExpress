const express = require("express");
const todoController = require("../controllers/todoController");
const router = express.Router();

router.route("/getAllTodo").get(todoController.getAllTodo);

module.exports = router;
