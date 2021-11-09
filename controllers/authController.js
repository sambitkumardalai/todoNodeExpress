const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.signup = async (req, res) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES,
    });
    res.status(201).json({
      staus: "Success",
      token,
      data: {
        User: newUser,
      },
    });
  } catch (error) {
    res.status(404).json({
      staus: "Failed",
      error,
    });
  }
};
