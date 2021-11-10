const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const router = express.Router();

// router.route("/getAllUser",userController.getAllUser);

router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;
