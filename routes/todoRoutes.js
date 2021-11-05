const express = require("express");
const todoController = require("../controllers/todoController");
const router = express.Router();

router.route("/getAllTodo").get(todoController.getAllTodo);
router.route("/createTodo").post(todoController.createTodo);
router.route("/updateTodo/:id").patch(todoController.updateTodo);
router.route("/deleteTodo/:id").delete(todoController.deleteTodo);
module.exports = router;
