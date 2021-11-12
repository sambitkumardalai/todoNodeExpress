const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");
const router = express.Router();

// router.route("/getAllUser",userController.getAllUser);

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/getAllUser", authController.protect, userController.getAllUser);

module.exports = router;
