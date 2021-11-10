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

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // 1) check if email or password not given
    if (!email || !password)
      throw new Error("Please provide email or password");
    // const user = User.findOne(email);
  } catch (error) {
    // console.log(error);
    res.status(400).json({
      staus: "Failed",
      message: error.message,
    });
  }
};
